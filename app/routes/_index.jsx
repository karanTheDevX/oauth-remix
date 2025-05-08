import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { isAuthenticated } from "../services/auth.server";

export const meta = () => {
  return [
    { title: "Remix Auth Demo" },
    { name: "description", content: "Welcome to the Remix Auth Demo!" },
  ];
};

export const loader = async ({ request }) => {
  const user = await isAuthenticated(request);
  return json({ user });
};

export default function Index() {
  const { user } = useLoaderData();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">
        Welcome to Remix Auth Demo
      </h2>

      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4">User Profile</h3>
          <div className="mb-4">
            <div className="mb-2">
              <strong>Name:</strong> {user.name || "Not available"}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {user.email || "Not available"}
            </div>
            <div className="mb-2">
              <strong>ID:</strong> {user.id || "Not available"}
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Link
              to="/dashboard"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Go to Dashboard
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
      ) : (
        <div className="text-center">
          <p className="mb-6">Please log in to see your profile information.</p>
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Log In
          </Link>
        </div>
      )}
    </div>
  );
}
