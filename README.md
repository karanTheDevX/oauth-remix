# Remix Auth Demo

This project demonstrates a basic authentication flow using AuthAction with Remix and OAuth2.

## Features

- OAuth2 authentication flow using AuthAction
- Protected routes
- User profile display
- Session management with cookies
- API route for profile data

## Setup Instructions

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/remix-auth-demo.git
   cd remix-auth-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   AUTHACTION_ISSUER=https://karan.in.authaction.com
   AUTHACTION_CLIENT_ID=3SfVZD6Q3Mhra9u6kcOEr0NJGMbRCiQW
   AUTHACTION_CLIENT_SECRET=tTiTZQ41jvAFM8ueuaZjN5rpRO6XUaRiEVRRd3tpJwbQ8zzhxYgsjjyycKZ61c8Z
   AUTHACTION_REDIRECT_URI=http://localhost:5173/auth/authaction/
   SESSION_SECRET=5a9486231c376bf4118095c31d331abfa483dab55fc63bf5117be1a117d7ee81
   COOKIE_SECRET=75a54ff04a1aea72129671d6aa437e9aab8a2e07371d4cf59457df5293b38afa
   AUTHACTION_AUTHORIZATION_URL=https://karan.in.authaction.com/oauth2/authorize
   AUTHACTION_TOKEN_URL=https://karan.in.authaction.com/oauth2/token
   NODE_ENV=development
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Visit `http://localhost:5173` in your browser to see the application running.

### Deployment to Vercel

1. Push your code to a GitHub repository.

2. Log in to [Vercel](https://vercel.com) and create a new project by importing your GitHub repository.

3. In the project settings, add all the environment variables from your `.env` file, making sure to update the `AUTHACTION_REDIRECT_URI` to match your Vercel deployment URL (e.g., `https://your-app.vercel.app/auth/authaction/`).

4. Deploy the project.

## Project Structure

- `app/routes/_index.jsx` - Home page that displays user profile info if logged in
- `app/routes/login.jsx` - Login page with AuthAction OAuth button
- `app/routes/dashboard.jsx` - Protected dashboard route
- `app/routes/auth.authaction.callback.jsx` - OAuth callback handler
- `app/routes/logout.jsx` - Logout route
- `app/routes/api.profile.jsx` - Protected API route for profile data
- `app/utils/auth.server.js` - Authentication utility functions
- `app/styles/global.css` - Global CSS styles

## Technologies Used

- Remix
- remix-auth
- remix-auth-oauth2
- jose (for JWT verification)
- Tailwind CSS
- Vercel (for deployment)
