// app/routes/api.profile.jsx
import { json } from "@remix-run/node";
import { requireAuth } from "../services/auth.server";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }) => {
  const user = await requireAuth(request);
  return json({ user });
};

export default function Profile() {
  const { user } = useLoaderData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

        <div className="mb-4">
          <strong className="block text-gray-700">User ID:</strong>
          <span>{user.id}</span>
        </div>

        {user.email && (
          <div className="mb-4">
            <strong className="block text-gray-700">Email:</strong>
            <span>{user.email}</span>
          </div>
        )}

        <div className="mt-6">
          <a href="/" className="text-blue-500 hover:underline">
            Back to Home
          </a>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Raw User Data:</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}
