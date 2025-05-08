import {
  require_auth
} from "/build/_shared/chunk-FLR2BSJS.js";
import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  Link,
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
var meta = () => {
  return [
    { title: "Remix Auth Demo" },
    { name: "description", content: "Welcome to the Remix Auth Demo!" }
  ];
};
function Index() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-6", children: "Welcome to Remix Auth Demo" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-md w-full max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: "User Profile" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Name:" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          " ",
          user.name || "Not available"
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Email:" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 34,
            columnNumber: 15
          }, this),
          " ",
          user.email || "Not available"
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "ID:" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          " ",
          user.id || "Not available"
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/dashboard",
            className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
            children: "Go to Dashboard"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_index.jsx",
            lineNumber: 42,
            columnNumber: 13
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
            fileName: "app/routes/_index.jsx",
            lineNumber: 50,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: "Please log in to see your profile information." }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: "/login",
          className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
          children: "Log In"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 62,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-LNWW5B6X.js.map
