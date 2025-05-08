import { authenticator } from "../services/auth.server";

// This route handles the callback from AuthAction OAuth
export const loader = async ({ request }) => {
  // Make sure you have the correct path configuration in .env
  // AUTHACTION_REDIRECT_URI should match this route
  return authenticator.authenticate("authaction", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};
