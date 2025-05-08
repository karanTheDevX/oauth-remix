import { createCookieSessionStorage } from "@remix-run/node";

// Create a session storage using cookies
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "remix_auth_session",
    // domain: "localhost", // Usually not needed for local development
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET], // Using environment variable
    secure: process.env.NODE_ENV === "production",
  },
});

// Get the user session
export async function getSession(request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

// Get the user from the session
export async function getUserFromSession(request) {
  const session = await getSession(request);
  const userId = session.get("userId");

  if (!userId) return null;

  // Here you would typically fetch user data from your database
  // For now, just return the userId
  return {
    id: userId,
  };
}

// Require user to be logged in
export async function requireUser(request, redirectTo = "/login") {
  const user = await getUserFromSession(request);

  if (!user) {
    const url = new URL(redirectTo, request.url);
    url.searchParams.set("redirectTo", new URL(request.url).pathname);
    throw redirect(url.toString());
  }

  return user;
}

// Log out the user
export async function logout(request, redirectTo = "/login") {
  const session = await getSession(request);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
