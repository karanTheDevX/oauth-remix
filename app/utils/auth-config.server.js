// app/utils/auth-config.server.js
export async function getAuthConfig() {
  const response = await fetch(
    `${process.env.AUTHACTION_ISSUER}/.well-known/openid-configuration`
  );
  if (!response.ok) throw new Error("Failed to fetch OAuth config");
  return response.json();
}

// Then use in auth.server.js:
const { authorization_endpoint, token_endpoint } = await getAuthConfig();
