import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  Form,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-ZEW3JRWZ.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// empty-module:~/services/auth.server
var require_auth = __commonJS({
  "empty-module:~/services/auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/dashboard.jsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Dashboard() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-6", children: "Dashboard" }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-md mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "User Profile" }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "Name:" }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 25,
            columnNumber: 13
          }, this),
          " ",
          user.name || "Not available"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "Email:" }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 29,
            columnNumber: 13
          }, this),
          " ",
          user.email || "Not available"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "ID:" }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 33,
            columnNumber: 13
          }, this),
          " ",
          user.id
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500",
        children: "Logout"
      },
      void 0,
      false,
      {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 39,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-7JSTD3YW.js.map
