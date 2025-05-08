import { createRequestHandler } from "@remix-run/express";
import { installGlobals } from "@remix-run/node";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

installGlobals();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = path.join(__dirname, "build");

const app = express();

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

// Remix fingerprints its assets so we can cache forever.
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static("public", { maxAge: "1h" }));

app.all(
  "*",
  process.env.NODE_ENV === "development"
    ? async (req, res, next) => {
        purgeRequireCache();

        // Use dynamic import instead of require
        const build = await import(`${BUILD_DIR}/index.js`);
        return createRequestHandler({
          build,
          mode: process.env.NODE_ENV,
        })(req, res, next);
      }
    : async (req, res, next) => {
        // Use dynamic import instead of require
        const build = await import(`${BUILD_DIR}/index.js`);
        return createRequestHandler({
          build,
          mode: process.env.NODE_ENV,
        })(req, res, next);
      }
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

function purgeRequireCache() {
  // Note: In ESM, we don't have a direct way to purge the module cache
  // like we do with require.cache in CommonJS.
  // When using dynamic imports with ESM, the modules are cached by the
  // browser/runtime, but we don't have direct control over this cache.
  // In development mode with proper HMR setup, this should be less of an issue
  console.log(
    "Cache purge requested - Note: ESM modules use a different caching mechanism"
  );
}
