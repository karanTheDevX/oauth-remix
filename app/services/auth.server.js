import { redirect } from "@remix-run/node";
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import { sessionStorage } from "~/services/session.server";

// Create an instance of the authenticator
export const authenticator = new Authenticator(sessionStorage);

// Define the OAuth2 strategy configuration
const authActionStrategy = new OAuth2Strategy(
  {
    clientID: process.env.AUTHACTION_CLIENT_ID,
    clientSecret: process.env.AUTHACTION_CLIENT_SECRET,
    callbackURL: process.env.AUTHACTION_REDIRECT_URI,
    authorizationURL: process.env.AUTHACTION_AUTHORIZATION_URL,
    tokenURL: process.env.AUTHACTION_TOKEN_URL,
    scope: "openid profile email",
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    try {
      const userInfoEndpoint = `${process.env.AUTHACTION_ISSUER}/userinfo`;

      const profileResponse = await fetch(userInfoEndpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      });

      if (!profileResponse.ok) {
        throw new Error(
          `Failed to fetch user profile: ${profileResponse.status}`
        );
      }

      const profileData = await profileResponse.json();

      return {
        id: profileData.sub || profileData.id,
        email: profileData.email,
        name: profileData.name || profileData.preferred_username,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      console.error("Error in OAuth callback:", error);
      throw error;
    }
  }
);

// Register the strategy
authenticator.use(authActionStrategy, "authaction");

// ✅ ADD THESE FUNCTIONS
export async function isAuthenticated(request) {
  try {
    const user = await authenticator.isAuthenticated(request);
    return user !== null;
  } catch (err) {
    return false;
  }
}

export async function requireAuth(request) {
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    throw redirect("/login");
  }
  return user;
}
