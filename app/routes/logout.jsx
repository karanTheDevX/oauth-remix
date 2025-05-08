import { authenticator } from "../services/auth.server";

export async function action({ request }) {
  return authenticator.logout(request, {
    redirectTo: "/login",
  });
}

export async function loader() {
  return redirect("/login");
}
