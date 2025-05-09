// app/routes/logout.jsx
import { authenticator } from "../services/auth.server";

export const action = async ({ request }) => {
  return await authenticator.logout(request, {
    redirectTo: "/",
  });
};

// No default export needed since this is just an action route
