import { json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { authenticator, isAuthenticated } from "../services/auth.server";

// Export a function called loader that takes in a request object
export const loader = async ({ request }) => {
  // If the user is already authenticated, redirect to the homepage
  const user = await isAuthenticated(request);
  if (user) {
    return redirect("/");
  }

  // Get the return URL from the search parameters
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get("redirectTo") || "/";

  // Return a JSON object with the redirectTo URL
  return json({ redirectTo });
};

export const action = async ({ request }) => {
  // Get the return URL from the form data
  const formData = await request.formData();
  const redirectTo = formData.get("redirectTo") || "/";

  // Authenticate with AuthAction
  return authenticator.authenticate("authaction", request, {
    successRedirect: redirectTo,
    failureRedirect: "/login",
  });
};

export default function Login() {
  const { redirectTo } = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <Form method="post" className="space-y-6">
          <input type="hidden" name="redirectTo" value={redirectTo} />

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Login with AuthAction
            </button>
          </div>
        </Form>

        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
