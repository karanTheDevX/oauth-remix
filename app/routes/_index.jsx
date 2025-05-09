// app/routes/_index.jsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { isAuthenticated } from "../services/auth.server";

export const loader = async ({ request }) => {
  const user = await isAuthenticated(request);
  return json({
    isLoggedIn: !!user,
    user,
  });
};

export default function Index() {
  const { isLoggedIn, user } = useLoaderData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Application</h1>

      {isLoggedIn ? (
        <div>
          <p className="mb-4">You are logged in!</p>
          <p className="mb-2">User information:</p>
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(user, null, 2)}
          </pre>
          <p className="mt-4">
            <a href="/api/profile" className="text-blue-500 hover:underline">
              View Your Profile
            </a>
          </p>
          <form action="/logout" method="post">
            <button
              type="submit"
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </form>
        </div>
      ) : (
        <div>
          <p className="mb-4">You are not logged in.</p>
          <a
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </a>
        </div>
      )}
    </div>
  );
}
