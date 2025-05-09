// app/services/auth.server.js
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import { sessionStorage } from "./session.server";
import { redirect } from "@remix-run/node";
import crypto from "crypto";

// Helper function to generate PKCE code verifier and challenge
function generatePKCE() {
  // Generate a random string for the code verifier (between 43-128 characters)
  const codeVerifier = crypto.randomBytes(64).toString("base64url");

  // Generate code challenge using S256 method (SHA-256 + base64url encoding)
  const codeChallenge = crypto
    .createHash("sha256")
    .update(codeVerifier)
    .digest("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  return { codeVerifier, codeChallenge };
}

// Verify all required environment variables
const requiredEnvVars = [
  "AUTHACTION_ISSUER",
  "AUTHACTION_CLIENT_ID",
  "AUTHACTION_REDIRECT_URI",
  "SESSION_SECRET",
];

requiredEnvVars.forEach((env) => {
  if (!process.env[env]) {
    throw new Error(`Missing required environment variable: ${env}`);
  }
});

// Construct endpoints safely
function getAuthEndpoints() {
  const baseUrl = process.env.AUTHACTION_ISSUER;
  if (!baseUrl) throw new Error("AUTHACTION_ISSUER is not defined");

  // Make sure the baseUrl is properly formatted
  const formattedBaseUrl = baseUrl.endsWith("/")
    ? baseUrl.slice(0, -1)
    : baseUrl;

  return {
    authorization: `${formattedBaseUrl}/oauth2/authorize`,
    token: `${formattedBaseUrl}/oauth2/token`,
  };
}

const endpoints = getAuthEndpoints();

export const authenticator = new Authenticator(sessionStorage, {
  throwOnError: true,
});

class PKCEOAuth2Strategy extends OAuth2Strategy {
  constructor(options, verify) {
    super(options, verify);
    this.name = "pkce-oauth2";
  }

  // Override to include PKCE parameters
  async authorize(request, sessionStorage, options) {
    // Generate PKCE code verifier and challenge
    const { codeVerifier, codeChallenge } = generatePKCE();

    // Store the code verifier in the session to use it later when exchanging the code
    const session = await sessionStorage.getSession(
      request.headers.get("Cookie")
    );

    session.set("code_verifier", codeVerifier);

    // Add PKCE parameters to the authorization URL
    options.extraParams = {
      ...options.extraParams,
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
    };

    // Call the parent authorize method with the updated options
    return super.authorize(request, sessionStorage, options);
  }

  // Override to include the code_verifier in the token request
  async fetchAccessToken(code, request, sessionStorage, options) {
    const session = await sessionStorage.getSession(
      request.headers.get("Cookie")
    );

    const codeVerifier = session.get("code_verifier");
    if (!codeVerifier) {
      throw new Error("Missing code_verifier in session");
    }

    // Add the code_verifier to the token request
    options.extraParams = {
      ...options.extraParams,
      code_verifier: codeVerifier,
    };

    // Remove the code verifier from the session
    session.unset("code_verifier");

    return super.fetchAccessToken(code, request, sessionStorage, options);
  }
}

authenticator.use(
  new PKCEOAuth2Strategy(
    {
      clientID: process.env.AUTHACTION_CLIENT_ID,
      // No client secret needed with PKCE
      authorizationURL: endpoints.authorization,
      tokenURL: endpoints.token,
      callbackURL: process.env.AUTHACTION_REDIRECT_URI,
      scope: "openid profile email",
    },
    async ({ accessToken, refreshToken, extraParams, profile }) => {
      // You might need to fetch the profile if your provider doesn't return it automatically
      return {
        id: profile?.id || "user-id",
        email: profile?.email || "user@example.com",
        accessToken,
        refreshToken,
      };
    }
  ),
  "authaction"
);

// Helper functions used in your routes - ADD THESE AT THE END OF THE FILE
export async function isAuthenticated(request) {
  return await authenticator.isAuthenticated(request);
}

export async function requireAuth(request, redirectTo = "/login") {
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    throw redirect(redirectTo);
  }
  return user;
}
