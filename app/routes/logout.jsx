import { redirect } from "@remix-run/node";
import { authenticator } from "../utils/auth.server";

export const action = async ({ request }) => {
  return authenticator.logout(request, { redirectTo: "/" });
};

export const loader = async () => {
  return redirect("/");
};
