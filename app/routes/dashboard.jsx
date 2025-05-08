import { json, redirect } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export async function loader({ request }) {
  // Get the user from the authenticator
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return json({ user });
}

export default function Dashboard() {
  const { user } = useLoaderData();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">User Profile</h2>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Name:</span>{" "}
            {user.name || "Not available"}
          </p>
          <p>
            <span className="font-medium">Email:</span>{" "}
            {user.email || "Not available"}
          </p>
          <p>
            <span className="font-medium">ID:</span> {user.id}
          </p>
        </div>
      </div>

      <Form action="/logout" method="post">
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Logout
        </button>
      </Form>
    </div>
  );
}
