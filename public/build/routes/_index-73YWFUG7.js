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

// app/routes/_index.jsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Index() {
  const { isLoggedIn, user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold mb-6", children: "Welcome to the Application" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    isLoggedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "You are logged in!" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2", children: "User information:" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "bg-gray-100 p-4 rounded", children: JSON.stringify(user, null, 2) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/api/profile", className: "text-blue-500 hover:underline", children: "View Your Profile" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",
          children: "Logout"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 34,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 33,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "You are not logged in." }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "a",
        {
          href: "/login",
          className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
          children: "Login"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 45,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-73YWFUG7.js.map
