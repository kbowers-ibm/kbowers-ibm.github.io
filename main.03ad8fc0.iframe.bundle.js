(self["webpackChunk_kie_tools_bpmn_editor"] = self["webpackChunk_kie_tools_bpmn_editor"] || []).push([["main"],{

/***/ "./.storybook/preview.tsx":
/*!********************************!*\
  !*** ./.storybook/preview.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");

const preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: ["Dev", "Misc", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]], "Use cases", ["Overview", "*", ["Overview", "*", ["Overview", "*"]]]]
      }
    }
  },
  decorators: [Story => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    style: {
      position: "absolute",
      width: "100vw",
      height: "100vh",
      top: "0px",
      left: "0px"
    },
    children: Story()
  })]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preview);

/***/ }),

/***/ "./storybook-config-entry.js":
/*!***********************************!*\
  !*** ./storybook-config-entry.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _storybook_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/global */ "@storybook/global");
/* harmony import */ var _storybook_global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/preview-api */ "@storybook/preview-api");
/* harmony import */ var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_channels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/channels */ "@storybook/channels");
/* harmony import */ var _storybook_channels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_channels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storybook_stories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storybook-stories.js */ "./storybook-stories.js");







const getProjectAnnotations = () =>
  (0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.composeConfigs)([__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+react@7.4.6_react-dom@17.0.2_react@17.0.2__react@17.0.2_typescript@5.5.3/node_modules/@storybook/react/preview.js */ "../../node_modules/.pnpm/@storybook+react@7.4.6_react-dom@17.0.2_react@17.0.2__react@17.0.2_typescript@5.5.3/node_modules/@storybook/react/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_encoding@0.1.13_reac_osluumftxctvhueztkvao5vug4/node_modules/@storybook/addon-docs/preview.js */ "../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_encoding@0.1.13_reac_osluumftxctvhueztkvao5vug4/node_modules/@storybook/addon-docs/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-highlight@7.4.6/node_modules/@storybook/addon-highlight/preview.js */ "../../node_modules/.pnpm/@storybook+addon-highlight@7.4.6/node_modules/@storybook/addon-highlight/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-links@7.4.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-links/preview.js */ "../../node_modules/.pnpm/@storybook+addon-links@7.4.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-links/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-measure@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-measure/preview.js */ "../../node_modules/.pnpm/@storybook+addon-measure@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-measure/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-outline@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-outline/preview.js */ "../../node_modules/.pnpm/@storybook+addon-outline@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-outline/preview.js"),__webpack_require__(/*! ./.storybook/preview.tsx */ "./.storybook/preview.tsx"),]);

const channel = (0,_storybook_channels__WEBPACK_IMPORTED_MODULE_2__.createBrowserChannel)({ page: 'preview' });
_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.setChannel(channel);

if (_storybook_global__WEBPACK_IMPORTED_MODULE_0__.global.CONFIG_TYPE === 'DEVELOPMENT'){
  window.__STORYBOOK_SERVER_CHANNEL__ = channel;
}

const preview = new _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.PreviewWeb();

window.__STORYBOOK_PREVIEW__ = preview;
window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
window.__STORYBOOK_CLIENT_API__ = new _storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.ClientApi({ storyStore: preview.storyStore });

preview.initialize({ importFn: _storybook_stories_js__WEBPACK_IMPORTED_MODULE_3__.importFn, getProjectAnnotations });

if (false) {}

/***/ }),

/***/ "./storybook-stories.js":
/*!******************************!*\
  !*** ./storybook-stories.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importFn: () => (/* binding */ importFn)
/* harmony export */ });
const pipeline = (x) => x();

const importers = [
  async (path) => {
    if (!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(10);
    return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./" + pathRemainder);
  }
  ,
  async (path) => {
    if (!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(10);
    return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./" + pathRemainder);
  }
  
];

async function importFn(path) {
  for (let i = 0; i < importers.length; i++) {
    const moduleExports = await pipeline(() => importers[i](path));
    if (moduleExports) {
      return moduleExports;
    }
  }
}

/***/ }),

/***/ "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./stories/ lazy ^\.\/.*$ include: (?:\/stories(?:\/(?%21\.)(?:(?:(?%21(?:^%7C\/)\.).)*?)\/%7C\/%7C$)(?%21\.)(?=.)[^/]*?\.mdx)$ chunkName: [request] namespace object ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./misc/empty/Empty.mdx": [
		"./stories/misc/empty/Empty.mdx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-97479a",
		"vendors-node_modules_pnpm_storybook_components_7_4_6__types_react-dom_17_0_8__types_react_17_-bd3eea",
		"vendors-node_modules_pnpm_storybook_blocks_7_6_13__types_react-dom_17_0_8__types_react_17_0_2-bd9076",
		"misc-empty-Empty-stories",
		"misc-empty-Empty-mdx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./stories/ lazy ^\.\/.*$ include: (?:\/stories(?:\/(?%21\.)(?:(?:(?%21(?:^%7C\/)\.).)*?)\/%7C\/%7C$)(?%21\.)(?=.)[^/]*?\.stories\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$ chunkName: [request] namespace object ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dev/DevWebApp.stories": [
		"./stories/dev/DevWebApp.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-97479a",
		"vendors-node_modules_pnpm_patternfly_react-core_4_276_6_react-dom_17_0_2_react_17_0_2__react_-977e8a",
		"misc-empty-Empty-stories",
		"dev-DevWebApp-stories"
	],
	"./dev/DevWebApp.stories.tsx": [
		"./stories/dev/DevWebApp.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-97479a",
		"vendors-node_modules_pnpm_patternfly_react-core_4_276_6_react-dom_17_0_2_react_17_0_2__react_-977e8a",
		"misc-empty-Empty-stories",
		"dev-DevWebApp-stories"
	],
	"./misc/empty/Empty.stories": [
		"./stories/misc/empty/Empty.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-97479a",
		"misc-empty-Empty-stories"
	],
	"./misc/empty/Empty.stories.tsx": [
		"./stories/misc/empty/Empty.stories.tsx",
		"vendors-node_modules_pnpm_reactflow_background_11_3_6__types_react_17_0_21_immer_10_0_3_patch-97479a",
		"misc-empty-Empty-stories"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "@storybook/channels":
/*!************************************************!*\
  !*** external "__STORYBOOK_MODULE_CHANNELS__" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CHANNELS__;

/***/ }),

/***/ "@storybook/client-logger":
/*!*****************************************************!*\
  !*** external "__STORYBOOK_MODULE_CLIENT_LOGGER__" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;

/***/ }),

/***/ "@storybook/core-events":
/*!***************************************************!*\
  !*** external "__STORYBOOK_MODULE_CORE_EVENTS__" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;

/***/ }),

/***/ "@storybook/global":
/*!**********************************************!*\
  !*** external "__STORYBOOK_MODULE_GLOBAL__" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_GLOBAL__;

/***/ }),

/***/ "@storybook/preview-api":
/*!***************************************************!*\
  !*** external "__STORYBOOK_MODULE_PREVIEW_API__" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_PREVIEW_API__;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_storybook_addon-docs_7_4_6__types_react-dom_17_0_8__types_react_17_-851c07"], () => (__webpack_exec__("./storybook-config-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvLi8uc3Rvcnlib29rL3ByZXZpZXcudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvLi9zdG9yeWJvb2stY29uZmlnLWVudHJ5LmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvLi9zdG9yeWJvb2stc3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vc3Rvcmllcy8gbGF6eSBeXFwuXFwvLiokIGluY2x1ZGU6ICgiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uL3N0b3JpZXMvIGxhenkgXlxcLlxcLy4qJCBpbmNsdWRlOiAoP2Q3N2QiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfQ0hBTk5FTFNfX1wiIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvZXh0ZXJuYWwgdmFyIFwiX19TVE9SWUJPT0tfTU9EVUxFX0NMSUVOVF9MT0dHRVJfX1wiIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvZXh0ZXJuYWwgdmFyIFwiX19TVE9SWUJPT0tfTU9EVUxFX0NPUkVfRVZFTlRTX19cIiIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yL2V4dGVybmFsIHZhciBcIl9fU1RPUllCT09LX01PRFVMRV9HTE9CQUxfX1wiIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvZXh0ZXJuYWwgdmFyIFwiX19TVE9SWUJPT0tfTU9EVUxFX1BSRVZJRVdfQVBJX19cIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByZXZpZXcgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuXG5jb25zdCBwcmV2aWV3OiBQcmV2aWV3ID0ge1xuICBwYXJhbWV0ZXJzOiB7XG4gICAgYWN0aW9uczogeyBhcmdUeXBlc1JlZ2V4OiBcIl5vbltBLVpdLipcIiB9LFxuICAgIGNvbnRyb2xzOiB7XG4gICAgICBtYXRjaGVyczoge1xuICAgICAgICBjb2xvcjogLyhiYWNrZ3JvdW5kfGNvbG9yKSQvaSxcbiAgICAgICAgZGF0ZTogL0RhdGUkLyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBzdG9yeVNvcnQ6IHtcbiAgICAgICAgb3JkZXI6IFtcbiAgICAgICAgICBcIkRldlwiLFxuICAgICAgICAgIFwiTWlzY1wiLFxuICAgICAgICAgIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCJdXV0sXG4gICAgICAgICAgXCJVc2UgY2FzZXNcIixcbiAgICAgICAgICBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCIsIFtcIk92ZXJ2aWV3XCIsIFwiKlwiXV1dLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGRlY29yYXRvcnM6IFtcbiAgICAoU3RvcnkpID0+IChcbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwdndcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIHRvcDogXCIwcHhcIiwgbGVmdDogXCIwcHhcIiB9fT57U3RvcnkoKX08L2Rpdj5cbiAgICApLFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJldmlldztcbiIsImltcG9ydCB7IGdsb2JhbCB9IGZyb20gJ0BzdG9yeWJvb2svZ2xvYmFsJztcblxuaW1wb3J0IHsgQ2xpZW50QXBpLCBQcmV2aWV3V2ViLCBhZGRvbnMsIGNvbXBvc2VDb25maWdzIH0gZnJvbSAnQHN0b3J5Ym9vay9wcmV2aWV3LWFwaSc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyQ2hhbm5lbCB9IGZyb20gJ0BzdG9yeWJvb2svY2hhbm5lbHMnO1xuXG5pbXBvcnQgeyBpbXBvcnRGbiB9IGZyb20gJy4vc3Rvcnlib29rLXN0b3JpZXMuanMnO1xuXG5jb25zdCBnZXRQcm9qZWN0QW5ub3RhdGlvbnMgPSAoKSA9PlxuICBjb21wb3NlQ29uZmlncyhbcmVxdWlyZSgnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaytyZWFjdEA3LjQuNl9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yX3R5cGVzY3JpcHRANS41LjMvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svcmVhY3QvcHJldmlldy5qcycpLHJlcXVpcmUoJy9ob21lL2V1cm9rZW5uZWR5L3Byb2plY3RzL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tZG9jc0A3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9lbmNvZGluZ0AwLjEuMTNfcmVhY19vc2x1dW1mdHhjdHZodWV6dGt2YW81dnVnNC9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1kb2NzL3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvaG9tZS9ldXJva2VubmVkeS9wcm9qZWN0cy9pbmN1YmF0b3Ita2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWhpZ2hsaWdodEA3LjQuNi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1oaWdobGlnaHQvcHJldmlldy5qcycpLHJlcXVpcmUoJy9ob21lL2V1cm9rZW5uZWR5L3Byb2plY3RzL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tbGlua3NANy40LjZfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1saW5rcy9wcmV2aWV3LmpzJykscmVxdWlyZSgnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1tZWFzdXJlQDcuNC42X0B0eXBlcytyZWFjdC1kb21AMTcuMC44X0B0eXBlcytyZWFjdEAxNy4wLjIxX3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjIvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tbWVhc3VyZS9wcmV2aWV3LmpzJykscmVxdWlyZSgnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1vdXRsaW5lQDcuNC42X0B0eXBlcytyZWFjdC1kb21AMTcuMC44X0B0eXBlcytyZWFjdEAxNy4wLjIxX3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjIvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tb3V0bGluZS9wcmV2aWV3LmpzJykscmVxdWlyZSgnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9wYWNrYWdlcy9icG1uLWVkaXRvci8uc3Rvcnlib29rL3ByZXZpZXcudHN4JyksXSk7XG5cbmNvbnN0IGNoYW5uZWwgPSBjcmVhdGVCcm93c2VyQ2hhbm5lbCh7IHBhZ2U6ICdwcmV2aWV3JyB9KTtcbmFkZG9ucy5zZXRDaGFubmVsKGNoYW5uZWwpO1xuXG5pZiAoZ2xvYmFsLkNPTkZJR19UWVBFID09PSAnREVWRUxPUE1FTlQnKXtcbiAgd2luZG93Ll9fU1RPUllCT09LX1NFUlZFUl9DSEFOTkVMX18gPSBjaGFubmVsO1xufVxuXG5jb25zdCBwcmV2aWV3ID0gbmV3IFByZXZpZXdXZWIoKTtcblxud2luZG93Ll9fU1RPUllCT09LX1BSRVZJRVdfXyA9IHByZXZpZXc7XG53aW5kb3cuX19TVE9SWUJPT0tfU1RPUllfU1RPUkVfXyA9IHByZXZpZXcuc3RvcnlTdG9yZTtcbndpbmRvdy5fX1NUT1JZQk9PS19BRERPTlNfQ0hBTk5FTF9fID0gY2hhbm5lbDtcbndpbmRvdy5fX1NUT1JZQk9PS19DTElFTlRfQVBJX18gPSBuZXcgQ2xpZW50QXBpKHsgc3RvcnlTdG9yZTogcHJldmlldy5zdG9yeVN0b3JlIH0pO1xuXG5wcmV2aWV3LmluaXRpYWxpemUoeyBpbXBvcnRGbiwgZ2V0UHJvamVjdEFubm90YXRpb25zIH0pO1xuXG5pZiAoaW1wb3J0Lm1ldGEud2VicGFja0hvdCkge1xuICBpbXBvcnQubWV0YS53ZWJwYWNrSG90LmFjY2VwdCgnLi9zdG9yeWJvb2stc3Rvcmllcy5qcycsICgpID0+IHtcbiAgICAvLyBpbXBvcnRGbiBoYXMgY2hhbmdlZCBzbyB3ZSBuZWVkIHRvIHBhdGNoIHRoZSBuZXcgb25lIGluXG4gICAgcHJldmlldy5vblN0b3JpZXNDaGFuZ2VkKHsgaW1wb3J0Rm4gfSk7XG4gIH0pO1xuXG4gIGltcG9ydC5tZXRhLndlYnBhY2tIb3QuYWNjZXB0KFsnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaytyZWFjdEA3LjQuNl9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yX3R5cGVzY3JpcHRANS41LjMvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svcmVhY3QvcHJldmlldy5qcycsJy9ob21lL2V1cm9rZW5uZWR5L3Byb2plY3RzL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tZG9jc0A3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9lbmNvZGluZ0AwLjEuMTNfcmVhY19vc2x1dW1mdHhjdHZodWV6dGt2YW81dnVnNC9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1kb2NzL3ByZXZpZXcuanMnLCcvaG9tZS9ldXJva2VubmVkeS9wcm9qZWN0cy9pbmN1YmF0b3Ita2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWhpZ2hsaWdodEA3LjQuNi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1oaWdobGlnaHQvcHJldmlldy5qcycsJy9ob21lL2V1cm9rZW5uZWR5L3Byb2plY3RzL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tbGlua3NANy40LjZfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1saW5rcy9wcmV2aWV3LmpzJywnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1tZWFzdXJlQDcuNC42X0B0eXBlcytyZWFjdC1kb21AMTcuMC44X0B0eXBlcytyZWFjdEAxNy4wLjIxX3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjIvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tbWVhc3VyZS9wcmV2aWV3LmpzJywnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1vdXRsaW5lQDcuNC42X0B0eXBlcytyZWFjdC1kb21AMTcuMC44X0B0eXBlcytyZWFjdEAxNy4wLjIxX3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjIvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tb3V0bGluZS9wcmV2aWV3LmpzJywnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9wYWNrYWdlcy9icG1uLWVkaXRvci8uc3Rvcnlib29rL3ByZXZpZXcudHN4JyxdLCAoKSA9PiB7XG4gICAgLy8gZ2V0UHJvamVjdEFubm90YXRpb25zIGhhcyBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcGF0Y2ggdGhlIG5ldyBvbmUgaW5cbiAgICBwcmV2aWV3Lm9uR2V0UHJvamVjdEFubm90YXRpb25zQ2hhbmdlZCh7IGdldFByb2plY3RBbm5vdGF0aW9ucyB9KTtcbiAgfSk7XG59IiwiY29uc3QgcGlwZWxpbmUgPSAoeCkgPT4geCgpO1xuXG5jb25zdCBpbXBvcnRlcnMgPSBbXG4gIGFzeW5jIChwYXRoKSA9PiB7XG4gICAgaWYgKCEvXlxcLltcXFxcL10oPzpzdG9yaWVzKD86XFwvKD8hXFwuKSg/Oig/Oig/ISg/Ol58XFwvKVxcLikuKSo/KVxcL3xcXC98JCkoPyFcXC4pKD89LilbXi9dKj9cXC5tZHgpJC8uZXhlYyhwYXRoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc3QgcGF0aFJlbWFpbmRlciA9IHBhdGguc3Vic3RyaW5nKDEwKTtcbiAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJbcmVxdWVzdF1cIiAqL1xuICAgICAgLyogd2VicGFja0luY2x1ZGU6IC8oPzpcXC9zdG9yaWVzKD86XFwvKD8hXFwuKSg/Oig/Oig/ISg/Ol58XFwvKVxcLikuKSo/KVxcL3xcXC98JCkoPyFcXC4pKD89LilbXi9dKj9cXC5tZHgpJC8gKi9cbiAgICAgICcuL3N0b3JpZXMvJyArIHBhdGhSZW1haW5kZXJcbiAgICApO1xuICB9XG4gICxcbiAgYXN5bmMgKHBhdGgpID0+IHtcbiAgICBpZiAoIS9eXFwuW1xcXFwvXSg/OnN0b3JpZXMoPzpcXC8oPyFcXC4pKD86KD86KD8hKD86XnxcXC8pXFwuKS4pKj8pXFwvfFxcL3wkKSg/IVxcLikoPz0uKVteL10qP1xcLnN0b3JpZXNcXC4oanN8anN4fG1qc3x0c3x0c3gpKSQvLmV4ZWMocGF0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHBhdGhSZW1haW5kZXIgPSBwYXRoLnN1YnN0cmluZygxMCk7XG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiW3JlcXVlc3RdXCIgKi9cbiAgICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvKD86XFwvc3Rvcmllcyg/OlxcLyg/IVxcLikoPzooPzooPyEoPzpefFxcLylcXC4pLikqPylcXC98XFwvfCQpKD8hXFwuKSg/PS4pW14vXSo/XFwuc3Rvcmllc1xcLihqc3xqc3h8bWpzfHRzfHRzeCkpJC8gKi9cbiAgICAgICcuL3N0b3JpZXMvJyArIHBhdGhSZW1haW5kZXJcbiAgICApO1xuICB9XG4gIFxuXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGltcG9ydEZuKHBhdGgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbXBvcnRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtb2R1bGVFeHBvcnRzID0gYXdhaXQgcGlwZWxpbmUoKCkgPT4gaW1wb3J0ZXJzW2ldKHBhdGgpKTtcbiAgICBpZiAobW9kdWxlRXhwb3J0cykge1xuICAgICAgcmV0dXJuIG1vZHVsZUV4cG9ydHM7XG4gICAgfVxuICB9XG59IiwidmFyIG1hcCA9IHtcblx0XCIuL21pc2MvZW1wdHkvRW1wdHkubWR4XCI6IFtcblx0XHRcIi4vc3Rvcmllcy9taXNjL2VtcHR5L0VtcHR5Lm1keFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTk3NDc5YVwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfY29tcG9uZW50c183XzRfNl9fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfLWJkM2VlYVwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9zdG9yeWJvb2tfYmxvY2tzXzdfNl8xM19fdHlwZXNfcmVhY3QtZG9tXzE3XzBfOF9fdHlwZXNfcmVhY3RfMTdfMF8yLWJkOTA3NlwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LW1keFwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zdG9yaWVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokIGluY2x1ZGU6ICg/OlxcXFwvc3Rvcmllcyg/OlxcXFwvKD8lMjFcXFxcLikoPzooPzooPyUyMSg/Ol4lN0NcXFxcLylcXFxcLikuKSo/KVxcXFwvJTdDXFxcXC8lN0MkKSg/JTIxXFxcXC4pKD89LilbXi9dKj9cXFxcLm1keCkkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwidmFyIG1hcCA9IHtcblx0XCIuL2Rldi9EZXZXZWJBcHAuc3Rvcmllc1wiOiBbXG5cdFx0XCIuL3N0b3JpZXMvZGV2L0RldldlYkFwcC5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTk3NDc5YVwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9wYXR0ZXJuZmx5X3JlYWN0LWNvcmVfNF8yNzZfNl9yZWFjdC1kb21fMTdfMF8yX3JlYWN0XzE3XzBfMl9fcmVhY3RfLTk3N2U4YVwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCIsXG5cdFx0XCJkZXYtRGV2V2ViQXBwLXN0b3JpZXNcIlxuXHRdLFxuXHRcIi4vZGV2L0RldldlYkFwcC5zdG9yaWVzLnRzeFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvZGV2L0RldldlYkFwcC5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTk3NDc5YVwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9wYXR0ZXJuZmx5X3JlYWN0LWNvcmVfNF8yNzZfNl9yZWFjdC1kb21fMTdfMF8yX3JlYWN0XzE3XzBfMl9fcmVhY3RfLTk3N2U4YVwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCIsXG5cdFx0XCJkZXYtRGV2V2ViQXBwLXN0b3JpZXNcIlxuXHRdLFxuXHRcIi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI6IFtcblx0XHRcIi4vc3Rvcmllcy9taXNjL2VtcHR5L0VtcHR5LnN0b3JpZXMudHN4XCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wbnBtX3JlYWN0Zmxvd19iYWNrZ3JvdW5kXzExXzNfNl9fdHlwZXNfcmVhY3RfMTdfMF8yMV9pbW1lcl8xMF8wXzNfcGF0Y2gtOTc0NzlhXCIsXG5cdFx0XCJtaXNjLWVtcHR5LUVtcHR5LXN0b3JpZXNcIlxuXHRdLFxuXHRcIi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzLnRzeFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTk3NDc5YVwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3N0b3JpZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiQgaW5jbHVkZTogKD86XFxcXC9zdG9yaWVzKD86XFxcXC8oPyUyMVxcXFwuKSg/Oig/Oig/JTIxKD86XiU3Q1xcXFwvKVxcXFwuKS4pKj8pXFxcXC8lN0NcXFxcLyU3QyQpKD8lMjFcXFxcLikoPz0uKVteL10qP1xcXFwuc3Rvcmllc1xcXFwuKGpzJTdDanN4JTdDbWpzJTdDdHMlN0N0c3gpKSRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9DSEFOTkVMU19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19TVE9SWUJPT0tfTU9EVUxFX0NMSUVOVF9MT0dHRVJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9DT1JFX0VWRU5UU19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19TVE9SWUJPT0tfTU9EVUxFX0dMT0JBTF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19TVE9SWUJPT0tfTU9EVUxFX1BSRVZJRVdfQVBJX187Il0sIm5hbWVzIjpbInByZXZpZXciLCJwYXJhbWV0ZXJzIiwiYWN0aW9ucyIsImFyZ1R5cGVzUmVnZXgiLCJjb250cm9scyIsIm1hdGNoZXJzIiwiY29sb3IiLCJkYXRlIiwib3B0aW9ucyIsInN0b3J5U29ydCIsIm9yZGVyIiwiZGVjb3JhdG9ycyIsIlN0b3J5IiwiX2pzeCIsInN0eWxlIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=