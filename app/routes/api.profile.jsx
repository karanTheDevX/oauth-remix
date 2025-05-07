import { json } from "@remix-run/node";
import { requireAuth } from "../utils/auth.server";

export const loader = async ({ request }) => {
  try {
    // This API route is protected - require authentication
    const user = await requireAuth(request);

    // Only return necessary profile data
    return json({
      id: user.id,
      email: user.email,
      name: user.name,
      // Add any other necessary user fields
    });
  } catch (error) {
    // Return 401 if not authenticated
    return json({ error: "Unauthorized" }, { status: 401 });
  }
};
