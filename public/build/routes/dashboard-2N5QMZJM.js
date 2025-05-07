import {
  require_auth,
  require_node
} from "/build/_shared/chunk-OLFG4TLV.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-ZEW3JRWZ.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/dashboard.jsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Dashboard() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold mb-6", children: "Dashboard" }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-md mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: [
        "Welcome, ",
        user.name || "User",
        "!"
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "This is a protected dashboard page. Only authenticated users can access this page." }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 p-4 rounded-md mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold mb-2", children: "Your Profile Info:" }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Email:" }, void 0, false, {
              fileName: "app/routes/dashboard.jsx",
              lineNumber: 30,
              columnNumber: 15
            }, this),
            " ",
            user.email || "Not available"
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 29,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "ID:" }, void 0, false, {
              fileName: "app/routes/dashboard.jsx",
              lineNumber: 33,
              columnNumber: 15
            }, this),
            " ",
            user.id || "Not available"
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 32,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/",
            className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
            children: "Back to Home"
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 39,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition",
            children: "Logout"
          },
          void 0,
          false,
          {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 47,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-2N5QMZJM.js.map
