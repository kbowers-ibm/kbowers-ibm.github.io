(self["webpackChunk_kie_tools_bpmn_editor"] = self["webpackChunk_kie_tools_bpmn_editor"] || []).push([["main"],{

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
  (0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.composeConfigs)([__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+react@7.6.13_encoding@0.1.13_react-dom@17.0.2_react@17.0.2__react@17.0.2_typescript@5.5.3/node_modules/@storybook/react/dist/entry-preview.mjs */ "../../node_modules/.pnpm/@storybook+react@7.6.13_encoding@0.1.13_react-dom@17.0.2_react@17.0.2__react@17.0.2_typescript@5.5.3/node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+react@7.6.13_encoding@0.1.13_react-dom@17.0.2_react@17.0.2__react@17.0.2_typescript@5.5.3/node_modules/@storybook/react/dist/entry-preview-docs.mjs */ "../../node_modules/.pnpm/@storybook+react@7.6.13_encoding@0.1.13_react-dom@17.0.2_react@17.0.2__react@17.0.2_typescript@5.5.3/node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_encoding@0.1.13_reac_osluumftxctvhueztkvao5vug4/node_modules/@storybook/addon-docs/preview.js */ "../../node_modules/.pnpm/@storybook+addon-docs@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_encoding@0.1.13_reac_osluumftxctvhueztkvao5vug4/node_modules/@storybook/addon-docs/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-highlight@7.4.6/node_modules/@storybook/addon-highlight/preview.js */ "../../node_modules/.pnpm/@storybook+addon-highlight@7.4.6/node_modules/@storybook/addon-highlight/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-links@7.4.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-links/preview.js */ "../../node_modules/.pnpm/@storybook+addon-links@7.4.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-links/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-measure@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-measure/preview.js */ "../../node_modules/.pnpm/@storybook+addon-measure@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-measure/preview.js"),__webpack_require__(/*! ../../node_modules/.pnpm/@storybook+addon-outline@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-outline/preview.js */ "../../node_modules/.pnpm/@storybook+addon-outline@7.4.6_@types+react-dom@17.0.8_@types+react@17.0.21_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/addon-outline/preview.js"),__webpack_require__(/*! ./.storybook/preview.tsx */ "./.storybook/preview.tsx"),]);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_storybook_react_7_6_13_encoding_0_1_13_react-dom_17_0_2_react_17_0_-205d71"], () => (__webpack_exec__("./storybook-config-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uL3N0b3J5Ym9vay1jb25maWctZW50cnkuanMiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uL3N0b3J5Ym9vay1zdG9yaWVzLmpzIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvLi8uc3Rvcnlib29rL3ByZXZpZXcudHN4Iiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvLi9zdG9yaWVzLyBsYXp5IF5cXC5cXC8uKiQgaW5jbHVkZTogKCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yLy4vc3Rvcmllcy8gbGF6eSBeXFwuXFwvLiokIGluY2x1ZGU6ICg/ZDc3ZCIsIndlYnBhY2s6Ly9Aa2llLXRvb2xzL2JwbW4tZWRpdG9yL2V4dGVybmFsIHZhciBcIl9fU1RPUllCT09LX01PRFVMRV9DSEFOTkVMU19fXCIiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfQ0xJRU5UX0xPR0dFUl9fXCIiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfQ09SRV9FVkVOVFNfX1wiIiwid2VicGFjazovL0BraWUtdG9vbHMvYnBtbi1lZGl0b3IvZXh0ZXJuYWwgdmFyIFwiX19TVE9SWUJPT0tfTU9EVUxFX0dMT0JBTF9fXCIiLCJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci9leHRlcm5hbCB2YXIgXCJfX1NUT1JZQk9PS19NT0RVTEVfUFJFVklFV19BUElfX1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdsb2JhbCB9IGZyb20gJ0BzdG9yeWJvb2svZ2xvYmFsJztcblxuaW1wb3J0IHsgQ2xpZW50QXBpLCBQcmV2aWV3V2ViLCBhZGRvbnMsIGNvbXBvc2VDb25maWdzIH0gZnJvbSAnQHN0b3J5Ym9vay9wcmV2aWV3LWFwaSc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyQ2hhbm5lbCB9IGZyb20gJ0BzdG9yeWJvb2svY2hhbm5lbHMnO1xuXG5pbXBvcnQgeyBpbXBvcnRGbiB9IGZyb20gJy4vc3Rvcnlib29rLXN0b3JpZXMuanMnO1xuXG5jb25zdCBnZXRQcm9qZWN0QW5ub3RhdGlvbnMgPSAoKSA9PlxuICBjb21wb3NlQ29uZmlncyhbcmVxdWlyZSgnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaytyZWFjdEA3LjYuMTNfZW5jb2RpbmdAMC4xLjEzX3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjJfdHlwZXNjcmlwdEA1LjUuMy9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9yZWFjdC9kaXN0L2VudHJ5LXByZXZpZXcubWpzJykscmVxdWlyZSgnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaytyZWFjdEA3LjYuMTNfZW5jb2RpbmdAMC4xLjEzX3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjJfdHlwZXNjcmlwdEA1LjUuMy9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9yZWFjdC9kaXN0L2VudHJ5LXByZXZpZXctZG9jcy5tanMnKSxyZXF1aXJlKCcvaG9tZS9ldXJva2VubmVkeS9wcm9qZWN0cy9pbmN1YmF0b3Ita2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWRvY3NANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfZW5jb2RpbmdAMC4xLjEzX3JlYWNfb3NsdXVtZnR4Y3R2aHVlenRrdmFvNXZ1ZzQvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tZG9jcy9wcmV2aWV3LmpzJykscmVxdWlyZSgnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1oaWdobGlnaHRANy40LjYvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24taGlnaGxpZ2h0L3ByZXZpZXcuanMnKSxyZXF1aXJlKCcvaG9tZS9ldXJva2VubmVkeS9wcm9qZWN0cy9pbmN1YmF0b3Ita2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLWxpbmtzQDcuNC42X3JlYWN0LWRvbUAxNy4wLjJfcmVhY3RAMTcuMC4yX19yZWFjdEAxNy4wLjIvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svYWRkb24tbGlua3MvcHJldmlldy5qcycpLHJlcXVpcmUoJy9ob21lL2V1cm9rZW5uZWR5L3Byb2plY3RzL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tbWVhc3VyZUA3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLW1lYXN1cmUvcHJldmlldy5qcycpLHJlcXVpcmUoJy9ob21lL2V1cm9rZW5uZWR5L3Byb2plY3RzL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24tb3V0bGluZUA3LjQuNl9AdHlwZXMrcmVhY3QtZG9tQDE3LjAuOF9AdHlwZXMrcmVhY3RAMTcuMC4yMV9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLW91dGxpbmUvcHJldmlldy5qcycpLHJlcXVpcmUoJy9ob21lL2V1cm9rZW5uZWR5L3Byb2plY3RzL2luY3ViYXRvci1raWUtdG9vbHMvcGFja2FnZXMvYnBtbi1lZGl0b3IvLnN0b3J5Ym9vay9wcmV2aWV3LnRzeCcpLF0pO1xuXG5jb25zdCBjaGFubmVsID0gY3JlYXRlQnJvd3NlckNoYW5uZWwoeyBwYWdlOiAncHJldmlldycgfSk7XG5hZGRvbnMuc2V0Q2hhbm5lbChjaGFubmVsKTtcblxuaWYgKGdsb2JhbC5DT05GSUdfVFlQRSA9PT0gJ0RFVkVMT1BNRU5UJyl7XG4gIHdpbmRvdy5fX1NUT1JZQk9PS19TRVJWRVJfQ0hBTk5FTF9fID0gY2hhbm5lbDtcbn1cblxuY29uc3QgcHJldmlldyA9IG5ldyBQcmV2aWV3V2ViKCk7XG5cbndpbmRvdy5fX1NUT1JZQk9PS19QUkVWSUVXX18gPSBwcmV2aWV3O1xud2luZG93Ll9fU1RPUllCT09LX1NUT1JZX1NUT1JFX18gPSBwcmV2aWV3LnN0b3J5U3RvcmU7XG53aW5kb3cuX19TVE9SWUJPT0tfQURET05TX0NIQU5ORUxfXyA9IGNoYW5uZWw7XG53aW5kb3cuX19TVE9SWUJPT0tfQ0xJRU5UX0FQSV9fID0gbmV3IENsaWVudEFwaSh7IHN0b3J5U3RvcmU6IHByZXZpZXcuc3RvcnlTdG9yZSB9KTtcblxucHJldmlldy5pbml0aWFsaXplKHsgaW1wb3J0Rm4sIGdldFByb2plY3RBbm5vdGF0aW9ucyB9KTtcblxuaWYgKGltcG9ydC5tZXRhLndlYnBhY2tIb3QpIHtcbiAgaW1wb3J0Lm1ldGEud2VicGFja0hvdC5hY2NlcHQoJy4vc3Rvcnlib29rLXN0b3JpZXMuanMnLCAoKSA9PiB7XG4gICAgLy8gaW1wb3J0Rm4gaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwYXRjaCB0aGUgbmV3IG9uZSBpblxuICAgIHByZXZpZXcub25TdG9yaWVzQ2hhbmdlZCh7IGltcG9ydEZuIH0pO1xuICB9KTtcblxuICBpbXBvcnQubWV0YS53ZWJwYWNrSG90LmFjY2VwdChbJy9ob21lL2V1cm9rZW5uZWR5L3Byb2plY3RzL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srcmVhY3RANy42LjEzX2VuY29kaW5nQDAuMS4xM19yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yX3R5cGVzY3JpcHRANS41LjMvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svcmVhY3QvZGlzdC9lbnRyeS1wcmV2aWV3Lm1qcycsJy9ob21lL2V1cm9rZW5uZWR5L3Byb2plY3RzL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srcmVhY3RANy42LjEzX2VuY29kaW5nQDAuMS4xM19yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yX3R5cGVzY3JpcHRANS41LjMvbm9kZV9tb2R1bGVzL0BzdG9yeWJvb2svcmVhY3QvZGlzdC9lbnRyeS1wcmV2aWV3LWRvY3MubWpzJywnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1kb2NzQDcuNC42X0B0eXBlcytyZWFjdC1kb21AMTcuMC44X0B0eXBlcytyZWFjdEAxNy4wLjIxX2VuY29kaW5nQDAuMS4xM19yZWFjX29zbHV1bWZ0eGN0dmh1ZXp0a3ZhbzV2dWc0L25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWRvY3MvcHJldmlldy5qcycsJy9ob21lL2V1cm9rZW5uZWR5L3Byb2plY3RzL2luY3ViYXRvci1raWUtdG9vbHMvbm9kZV9tb2R1bGVzLy5wbnBtL0BzdG9yeWJvb2srYWRkb24taGlnaGxpZ2h0QDcuNC42L25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWhpZ2hsaWdodC9wcmV2aWV3LmpzJywnL2hvbWUvZXVyb2tlbm5lZHkvcHJvamVjdHMvaW5jdWJhdG9yLWtpZS10b29scy9ub2RlX21vZHVsZXMvLnBucG0vQHN0b3J5Ym9vaythZGRvbi1saW5rc0A3LjQuNl9yZWFjdC1kb21AMTcuMC4yX3JlYWN0QDE3LjAuMl9fcmVhY3RAMTcuMC4yL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9uLWxpbmtzL3ByZXZpZXcuanMnLCcvaG9tZS9ldXJva2VubmVkeS9wcm9qZWN0cy9pbmN1YmF0b3Ita2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLW1lYXN1cmVANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1tZWFzdXJlL3ByZXZpZXcuanMnLCcvaG9tZS9ldXJva2VubmVkeS9wcm9qZWN0cy9pbmN1YmF0b3Ita2llLXRvb2xzL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3Rvcnlib29rK2FkZG9uLW91dGxpbmVANy40LjZfQHR5cGVzK3JlYWN0LWRvbUAxNy4wLjhfQHR5cGVzK3JlYWN0QDE3LjAuMjFfcmVhY3QtZG9tQDE3LjAuMl9yZWFjdEAxNy4wLjJfX3JlYWN0QDE3LjAuMi9ub2RlX21vZHVsZXMvQHN0b3J5Ym9vay9hZGRvbi1vdXRsaW5lL3ByZXZpZXcuanMnLCcvaG9tZS9ldXJva2VubmVkeS9wcm9qZWN0cy9pbmN1YmF0b3Ita2llLXRvb2xzL3BhY2thZ2VzL2JwbW4tZWRpdG9yLy5zdG9yeWJvb2svcHJldmlldy50c3gnLF0sICgpID0+IHtcbiAgICAvLyBnZXRQcm9qZWN0QW5ub3RhdGlvbnMgaGFzIGNoYW5nZWQgc28gd2UgbmVlZCB0byBwYXRjaCB0aGUgbmV3IG9uZSBpblxuICAgIHByZXZpZXcub25HZXRQcm9qZWN0QW5ub3RhdGlvbnNDaGFuZ2VkKHsgZ2V0UHJvamVjdEFubm90YXRpb25zIH0pO1xuICB9KTtcbn0iLCJjb25zdCBwaXBlbGluZSA9ICh4KSA9PiB4KCk7XG5cbmNvbnN0IGltcG9ydGVycyA9IFtcbiAgYXN5bmMgKHBhdGgpID0+IHtcbiAgICBpZiAoIS9eXFwuW1xcXFwvXSg/OnN0b3JpZXMoPzpcXC8oPyFcXC4pKD86KD86KD8hKD86XnxcXC8pXFwuKS4pKj8pXFwvfFxcL3wkKSg/IVxcLikoPz0uKVteL10qP1xcLm1keCkkLy5leGVjKHBhdGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zdCBwYXRoUmVtYWluZGVyID0gcGF0aC5zdWJzdHJpbmcoMTApO1xuICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIltyZXF1ZXN0XVwiICovXG4gICAgICAvKiB3ZWJwYWNrSW5jbHVkZTogLyg/OlxcL3N0b3JpZXMoPzpcXC8oPyFcXC4pKD86KD86KD8hKD86XnxcXC8pXFwuKS4pKj8pXFwvfFxcL3wkKSg/IVxcLikoPz0uKVteL10qP1xcLm1keCkkLyAqL1xuICAgICAgJy4vc3Rvcmllcy8nICsgcGF0aFJlbWFpbmRlclxuICAgICk7XG4gIH1cbiAgLFxuICBhc3luYyAocGF0aCkgPT4ge1xuICAgIGlmICghL15cXC5bXFxcXC9dKD86c3Rvcmllcyg/OlxcLyg/IVxcLikoPzooPzooPyEoPzpefFxcLylcXC4pLikqPylcXC98XFwvfCQpKD8hXFwuKSg/PS4pW14vXSo/XFwuc3Rvcmllc1xcLihqc3xqc3h8bWpzfHRzfHRzeCkpJC8uZXhlYyhwYXRoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc3QgcGF0aFJlbWFpbmRlciA9IHBhdGguc3Vic3RyaW5nKDEwKTtcbiAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJbcmVxdWVzdF1cIiAqL1xuICAgICAgLyogd2VicGFja0luY2x1ZGU6IC8oPzpcXC9zdG9yaWVzKD86XFwvKD8hXFwuKSg/Oig/Oig/ISg/Ol58XFwvKVxcLikuKSo/KVxcL3xcXC98JCkoPyFcXC4pKD89LilbXi9dKj9cXC5zdG9yaWVzXFwuKGpzfGpzeHxtanN8dHN8dHN4KSkkLyAqL1xuICAgICAgJy4vc3Rvcmllcy8nICsgcGF0aFJlbWFpbmRlclxuICAgICk7XG4gIH1cbiAgXG5dO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW1wb3J0Rm4ocGF0aCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGltcG9ydGVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1vZHVsZUV4cG9ydHMgPSBhd2FpdCBwaXBlbGluZSgoKSA9PiBpbXBvcnRlcnNbaV0ocGF0aCkpO1xuICAgIGlmIChtb2R1bGVFeHBvcnRzKSB7XG4gICAgICByZXR1cm4gbW9kdWxlRXhwb3J0cztcbiAgICB9XG4gIH1cbn0iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByZXZpZXcgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuXG5jb25zdCBwcmV2aWV3OiBQcmV2aWV3ID0ge1xuICBwYXJhbWV0ZXJzOiB7XG4gICAgYWN0aW9uczogeyBhcmdUeXBlc1JlZ2V4OiBcIl5vbltBLVpdLipcIiB9LFxuICAgIGNvbnRyb2xzOiB7XG4gICAgICBtYXRjaGVyczoge1xuICAgICAgICBjb2xvcjogLyhiYWNrZ3JvdW5kfGNvbG9yKSQvaSxcbiAgICAgICAgZGF0ZTogL0RhdGUkLyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBzdG9yeVNvcnQ6IHtcbiAgICAgICAgb3JkZXI6IFtcbiAgICAgICAgICBcIkRldlwiLFxuICAgICAgICAgIFwiTWlzY1wiLFxuICAgICAgICAgIFtcIk92ZXJ2aWV3XCIsIFwiKlwiLCBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCJdXV0sXG4gICAgICAgICAgXCJVc2UgY2FzZXNcIixcbiAgICAgICAgICBbXCJPdmVydmlld1wiLCBcIipcIiwgW1wiT3ZlcnZpZXdcIiwgXCIqXCIsIFtcIk92ZXJ2aWV3XCIsIFwiKlwiXV1dLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGRlY29yYXRvcnM6IFtcbiAgICAoU3RvcnkpID0+IChcbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwdndcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIHRvcDogXCIwcHhcIiwgbGVmdDogXCIwcHhcIiB9fT57U3RvcnkoKX08L2Rpdj5cbiAgICApLFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJldmlldztcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9taXNjL2VtcHR5L0VtcHR5Lm1keFwiOiBbXG5cdFx0XCIuL3N0b3JpZXMvbWlzYy9lbXB0eS9FbXB0eS5tZHhcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC05NzQ3OWFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2NvbXBvbmVudHNfN180XzZfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3Xy1iZDNlZWFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fc3Rvcnlib29rX2Jsb2Nrc183XzZfMTNfX3R5cGVzX3JlYWN0LWRvbV8xN18wXzhfX3R5cGVzX3JlYWN0XzE3XzBfMi1iZDkwNzZcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1tZHhcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3RvcmllcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJCBpbmNsdWRlOiAoPzpcXFxcL3N0b3JpZXMoPzpcXFxcLyg/JTIxXFxcXC4pKD86KD86KD8lMjEoPzpeJTdDXFxcXC8pXFxcXC4pLikqPylcXFxcLyU3Q1xcXFwvJTdDJCkoPyUyMVxcXFwuKSg/PS4pW14vXSo/XFxcXC5tZHgpJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsInZhciBtYXAgPSB7XG5cdFwiLi9kZXYvRGV2V2ViQXBwLnN0b3JpZXNcIjogW1xuXHRcdFwiLi9zdG9yaWVzL2Rldi9EZXZXZWJBcHAuc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC05NzQ3OWFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcGF0dGVybmZseV9yZWFjdC1jb3JlXzRfMjc2XzZfcmVhY3QtZG9tXzE3XzBfMl9yZWFjdF8xN18wXzJfX3JlYWN0Xy05NzdlOGFcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwiZGV2LURldldlYkFwcC1zdG9yaWVzXCJcblx0XSxcblx0XCIuL2Rldi9EZXZXZWJBcHAuc3Rvcmllcy50c3hcIjogW1xuXHRcdFwiLi9zdG9yaWVzL2Rldi9EZXZXZWJBcHAuc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC05NzQ3OWFcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcGF0dGVybmZseV9yZWFjdC1jb3JlXzRfMjc2XzZfcmVhY3QtZG9tXzE3XzBfMl9yZWFjdF8xN18wXzJfX3JlYWN0Xy05NzdlOGFcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiLFxuXHRcdFwiZGV2LURldldlYkFwcC1zdG9yaWVzXCJcblx0XSxcblx0XCIuL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllc1wiOiBbXG5cdFx0XCIuL3N0b3JpZXMvbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzLnRzeFwiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcG5wbV9yZWFjdGZsb3dfYmFja2dyb3VuZF8xMV8zXzZfX3R5cGVzX3JlYWN0XzE3XzBfMjFfaW1tZXJfMTBfMF8zX3BhdGNoLTk3NDc5YVwiLFxuXHRcdFwibWlzYy1lbXB0eS1FbXB0eS1zdG9yaWVzXCJcblx0XSxcblx0XCIuL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllcy50c3hcIjogW1xuXHRcdFwiLi9zdG9yaWVzL21pc2MvZW1wdHkvRW1wdHkuc3Rvcmllcy50c3hcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BucG1fcmVhY3RmbG93X2JhY2tncm91bmRfMTFfM182X190eXBlc19yZWFjdF8xN18wXzIxX2ltbWVyXzEwXzBfM19wYXRjaC05NzQ3OWFcIixcblx0XHRcIm1pc2MtZW1wdHktRW1wdHktc3Rvcmllc1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zdG9yaWVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokIGluY2x1ZGU6ICg/OlxcXFwvc3Rvcmllcyg/OlxcXFwvKD8lMjFcXFxcLikoPzooPzooPyUyMSg/Ol4lN0NcXFxcLylcXFxcLikuKSo/KVxcXFwvJTdDXFxcXC8lN0MkKSg/JTIxXFxcXC4pKD89LilbXi9dKj9cXFxcLnN0b3JpZXNcXFxcLihqcyU3Q2pzeCU3Q21qcyU3Q3RzJTdDdHN4KSkkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1NUT1JZQk9PS19NT0RVTEVfQ0hBTk5FTFNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9DTElFTlRfTE9HR0VSX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1NUT1JZQk9PS19NT0RVTEVfQ09SRV9FVkVOVFNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9HTE9CQUxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fU1RPUllCT09LX01PRFVMRV9QUkVWSUVXX0FQSV9fOyJdLCJuYW1lcyI6WyJwcmV2aWV3IiwicGFyYW1ldGVycyIsImFjdGlvbnMiLCJhcmdUeXBlc1JlZ2V4IiwiY29udHJvbHMiLCJtYXRjaGVycyIsImNvbG9yIiwiZGF0ZSIsIm9wdGlvbnMiLCJzdG9yeVNvcnQiLCJvcmRlciIsImRlY29yYXRvcnMiLCJTdG9yeSIsIl9qc3giLCJzdHlsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9