import {
  require_auth
} from "/build/_shared/chunk-FLR2BSJS.js";
import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-ZEW3JRWZ.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/api.profile.jsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Profile() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-6", children: "User Profile" }, void 0, false, {
      fileName: "app/routes/api.profile.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-md rounded-lg p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Profile Information" }, void 0, false, {
        fileName: "app/routes/api.profile.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "block text-gray-700", children: "User ID:" }, void 0, false, {
          fileName: "app/routes/api.profile.jsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: user.id }, void 0, false, {
          fileName: "app/routes/api.profile.jsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/api.profile.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      user.email && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { className: "block text-gray-700", children: "Email:" }, void 0, false, {
          fileName: "app/routes/api.profile.jsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: user.email }, void 0, false, {
          fileName: "app/routes/api.profile.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/api.profile.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "text-blue-500 hover:underline", children: "Back to Home" }, void 0, false, {
        fileName: "app/routes/api.profile.jsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/api.profile.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/api.profile.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Raw User Data:" }, void 0, false, {
        fileName: "app/routes/api.profile.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "bg-gray-100 p-4 rounded overflow-auto max-h-96", children: JSON.stringify(user, null, 2) }, void 0, false, {
        fileName: "app/routes/api.profile.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/api.profile.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/api.profile.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
export {
  Profile as default
};
//# sourceMappingURL=/build/routes/api.profile-FHYBAXLZ.js.map
