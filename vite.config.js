const remix = require("@remix-run/dev/vite");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
  ],
  server: {
    hmr: {
      overlay: false, // Disable error overlay
    },
  },
  optimizeDeps: {
    exclude: ["jose", "remix-auth-oauth2"], // Add problematic packages here
  },
});
