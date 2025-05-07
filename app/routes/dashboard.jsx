import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { requireAuth } from "../utils/auth.server";

export const loader = async ({ request }) => {
  // This route is protected - require authentication
  const user = await requireAuth(request, "/dashboard");
  return json({ user });
};

export default function Dashboard() {
  const { user } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">
          Welcome, {user.name || "User"}!
        </h3>
        <p className="mb-4">
          This is a protected dashboard page. Only authenticated users can
          access this page.
        </p>

        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h4 className="font-semibold mb-2">Your Profile Info:</h4>
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong> {user.email || "Not available"}
            </li>
            <li>
              <strong>ID:</strong> {user.id || "Not available"}
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link
            to="/"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>

          <form action="/logout" method="post">
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
