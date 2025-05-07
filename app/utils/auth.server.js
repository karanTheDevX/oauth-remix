import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import { jwtVerify } from "jose";

// Session storage setup using cookies
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "auth_session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.COOKIE_SECRET || "s3cr3t"],
    secure: process.env.NODE_ENV === "production",
  },
});

// Create an authenticator instance
export const authenticator = new Authenticator(sessionStorage);

// Custom AuthAction OAuth2 strategy
const authActionStrategy = new OAuth2Strategy(
  {
    authorizationURL: process.env.AUTHACTION_AUTHORIZATION_URL,
    tokenURL: process.env.AUTHACTION_TOKEN_URL,
    clientID: process.env.AUTHACTION_CLIENT_ID,
    clientSecret: process.env.AUTHACTION_CLIENT_SECRET,
    callbackURL: process.env.AUTHACTION_REDIRECT_URI,
    scope: "openid profile email", // Standard OIDC scopes
  },
  async ({ accessToken, refreshToken, extraParams }) => {
    // Extract and verify the ID token from extraParams
    const idToken = extraParams.id_token;

    if (!idToken) {
      throw new Error("No ID token received from AuthAction");
    }

    try {
      // Decode and verify the ID token
      // Note: In production, you would properly validate the JWT signature
      // using the JWKS from your OIDC provider
      const { payload } = await jwtVerify(
        idToken,
        new TextEncoder().encode(process.env.AUTHACTION_CLIENT_SECRET || ""),
        {
          issuer: process.env.AUTHACTION_ISSUER,
          audience: process.env.AUTHACTION_CLIENT_ID,
        }
      );

      // Return user data from the ID token
      return {
        id: payload.sub,
        email: payload.email,
        name: payload.name,
        idToken,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      console.error("Error verifying ID token:", error);
      throw new Error("Invalid ID token");
    }
  }
);

// Register the AuthAction strategy with the authenticator
authenticator.use(authActionStrategy, "authaction");

// Helper to get the user session
export async function getSession(request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}

// Helper to check if user is authenticated
export async function isAuthenticated(request) {
  return await authenticator.isAuthenticated(request);
}

// Helper to require authentication
export async function requireAuth(request, redirectTo = "/login") {
  const user = await isAuthenticated(request);
  if (!user) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return user;
}

// Helper to logout the user
export async function logout(request) {
  const session = await getSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
