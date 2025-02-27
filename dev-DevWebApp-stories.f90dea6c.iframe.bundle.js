"use strict";
(self["webpackChunk_kie_tools_bpmn_editor"] = self["webpackChunk_kie_tools_bpmn_editor"] || []).push([["dev-DevWebApp-stories"],{

/***/ "./stories/dev/DevWebApp.stories.tsx":
/*!*******************************************!*\
  !*** ./stories/dev/DevWebApp.stories.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebApp: () => (/* binding */ WebApp),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _patternfly_react_core_dist_styles_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/styles/base.css */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/styles/base.css");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/layouts/Flex/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Page */ "../../node_modules/.pnpm/@patternfly+react-core@4.276.6_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@patternfly/react-core/dist/js/components/Page/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kie-tools/bpmn-marshaller */ "../bpmn-marshaller/dist/index.js");
/* harmony import */ var _kie_tools_bpmn_editor_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kie-tools/bpmn-editor/dist/normalization/normalize */ "./dist/normalization/normalize.js");
/* harmony import */ var _misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../misc/empty/Empty.stories */ "./stories/misc/empty/Empty.stories.tsx");
/* harmony import */ var _bpmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bpmnEditorStoriesWrapper */ "./stories/bpmnEditorStoriesWrapper.tsx");
var _a, _b, _c;









const initialModel = (0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_5__.generateEmptyBpmn20)();
function DevWebApp(args) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
    const initialBpmnMarshaller = (0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    });
    return {
      marshaller: initialBpmnMarshaller,
      stack: [(0,_kie_tools_bpmn_editor_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(initialBpmnMarshaller.parser.parse())],
      pointer: 0
    };
  });
  const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    console.log("BPMN Editor :: Dev webapp :: File(s) dropped! Opening it.");
    e.preventDefault();
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const reader = new FileReader();
          reader.addEventListener("load", _ref => {
            let {
              target
            } = _ref;
            const marshaller = (0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(target === null || target === void 0 ? void 0 : target.result, {
              upgradeTo: "latest"
            });
            setState({
              marshaller,
              stack: [(0,_kie_tools_bpmn_editor_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(marshaller.parser.parse())],
              pointer: 0
            });
          });
          reader.readAsText(item.getAsFile());
        }
      });
    }
  }, []);
  const onDragOver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    e.preventDefault();
  }, []);
  const reset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const marshaller = (0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)((0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_5__.generateEmptyBpmn20)(), {
      upgradeTo: "latest"
    });
    setState({
      marshaller,
      stack: [(0,_kie_tools_bpmn_editor_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)(marshaller.parser.parse())],
      pointer: 0
    });
  }, []);
  const currentModel = state.stack[state.pointer];
  const downloadRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const downloadAsXml = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (downloadRef.current) {
      const fileBlob = new Blob([state.marshaller.builder.build(currentModel)], {
        type: "text/xml"
      });
      downloadRef.current.download = `bpmn-${createId(10)}.bpmn`;
      downloadRef.current.href = URL.createObjectURL(fileBlob);
      downloadRef.current.click();
    }
  }, [currentModel, state.marshaller.builder]);
  const copyAsXml = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    navigator.clipboard.writeText(state.marshaller.builder.build(currentModel));
  }, [currentModel, state.marshaller.builder]);
  const undo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setState(prev => ({
      ...prev,
      pointer: Math.max(0, prev.pointer - 1)
    }));
  }, []);
  const redo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setState(prev => ({
      ...prev,
      pointer: Math.min(prev.stack.length - 1, prev.pointer + 1)
    }));
  }, []);
  const onModelChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(model => {
    setState(prev => {
      const newStack = prev.stack.slice(0, prev.pointer + 1);
      return {
        ...prev,
        stack: [...newStack, model],
        pointer: newStack.length
      };
    });
  }, []);
  const onSelectModel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newModel => {
    onModelChange((0,_kie_tools_bpmn_editor_dist_normalization_normalize__WEBPACK_IMPORTED_MODULE_4__.normalize)((0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(newModel, {
      upgradeTo: "latest"
    }).parser.parse()));
  }, [onModelChange]);
  const onRequestToJumpToPath = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(path => {
    alert("Jumping to file " + path);
  }, []);
  const isUndoEnabled = state.pointer > 0;
  const isRedoEnabled = state.pointer !== state.stack.length - 1;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: currentModel && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      style: {
        width: "100vw",
        height: "100vh"
      },
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7__.Page, {
        onDragOver: onDragOver,
        onDrop: onDrop,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7__.PageSection, {
          variant: "light",
          isFilled: false,
          padding: {
            default: "padding"
          },
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.Flex, {
            justifyContent: {
              default: "justifyContentSpaceBetween"
            },
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
              shrink: {
                default: "shrink"
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                children: "BPMN Editor :: Dev webapp "
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
                children: "(Drag & drop a file anywhere to open it)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_8__.FlexItem, {
              shrink: {
                default: "shrink"
              },
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: () => onSelectModel((0,_misc_empty_Empty_stories__WEBPACK_IMPORTED_MODULE_5__.generateEmptyBpmn20)()),
                children: "Empty"
              }), "\u00A0 \u00A0 | \u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                disabled: !isUndoEnabled,
                style: {
                  opacity: isUndoEnabled ? 1 : 0.5
                },
                onClick: undo,
                children: `Undo (${state.pointer})`
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                disabled: !isRedoEnabled,
                style: {
                  opacity: isRedoEnabled ? 1 : 0.5
                },
                onClick: redo,
                children: `Redo (${state.stack.length - 1 - state.pointer})`
              }), "\u00A0 \u00A0 | \u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: reset,
                children: "Reset"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: copyAsXml,
                children: "Copy as XML"
              }), "\u00A0 \u00A0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: downloadAsXml,
                children: "Download as XML"
              })]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            ref: downloadRef
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_patternfly_react_core_dist_js_components_Page__WEBPACK_IMPORTED_MODULE_7__.PageSection, {
          variant: "light",
          isFilled: true,
          hasOverflowScroll: true,
          "aria-label": "editor",
          padding: {
            default: "noPadding"
          },
          children: (0,_bpmnEditorStoriesWrapper__WEBPACK_IMPORTED_MODULE_6__.BpmnEditorWrapper)({
            model: currentModel,
            originalVersion: args.originalVersion,
            onModelChange,
            externalContextName: args.externalContextName,
            externalContextDescription: args.externalContextDescription,
            issueTrackerHref: args.issueTrackerHref,
            onRequestToJumpToPath
          })
        })]
      })
    })
  });
}
function createId(length) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
const meta = {
  title: "Dev/Web App",
  component: DevWebApp
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const WebApp = {
  render: args => DevWebApp(args),
  args: {
    model: (0,_kie_tools_bpmn_marshaller__WEBPACK_IMPORTED_MODULE_3__.getMarshaller)(initialModel, {
      upgradeTo: "latest"
    }).parser.parse(),
    originalVersion: "2.0",
    externalContextDescription: "You're using the BPMN Dev webapp, so there's only two simple external models that can be included.",
    externalContextName: "Dev webapp",
    issueTrackerHref: "https://github.com/apache/incubator-kie-issues/issues/new"
  }
};
WebApp.parameters = {
  ...WebApp.parameters,
  docs: {
    ...((_a = WebApp.parameters) === null || _a === void 0 ? void 0 : _a.docs),
    source: {
      originalSource: "{\n  render: args => DevWebApp(args),\n  args: {\n    model: getMarshaller(initialModel, {\n      upgradeTo: \"latest\"\n    }).parser.parse(),\n    originalVersion: \"2.0\",\n    externalContextDescription: \"You're using the BPMN Dev webapp, so there's only two simple external models that can be included.\",\n    externalContextName: \"Dev webapp\",\n    issueTrackerHref: \"https://github.com/apache/incubator-kie-issues/issues/new\"\n  }\n}",
      ...((_c = (_b = WebApp.parameters) === null || _b === void 0 ? void 0 : _b.docs) === null || _c === void 0 ? void 0 : _c.source)
    }
  }
};
const __namedExportsOrder = ["WebApp"];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LURldldlYkFwcC1zdG9yaWVzLmY5MGRlYTZjLmlmcmFtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCK0Q7QUFDVjtBQUN3QjtBQUNNO0FBQ1M7QUFDQTtBQUMxQjtBQUNGO0FBRWhFLE1BQU1XLFlBQVksR0FBR0YsOEVBQW1CLEVBQUU7QUFDMUMsU0FBU0csU0FBU0EsQ0FBQ0MsSUFBcUI7RUFDdEMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHYiwrQ0FBUSxDQUkvQixNQUFLO0lBQ04sTUFBTWMscUJBQXFCLEdBQUdULHlFQUFhLENBQUNJLFlBQVksRUFBRTtNQUN4RE0sU0FBUyxFQUFFO0tBQ1osQ0FBQztJQUNGLE9BQU87TUFDTEMsVUFBVSxFQUFFRixxQkFBcUI7TUFDakNHLEtBQUssRUFBRSxDQUFDWCw4RkFBUyxDQUFDUSxxQkFBcUIsQ0FBQ0ksTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ3hEQyxPQUFPLEVBQUU7S0FDVjtFQUNILENBQUMsQ0FBQztFQUNGLE1BQU1DLE1BQU0sR0FBR3ZCLGtEQUFXLENBQUV3QixDQUFrQixJQUFJO0lBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQztJQUN4RUYsQ0FBQyxDQUFDRyxjQUFjLEVBQUU7SUFFbEIsSUFBSUgsQ0FBQyxDQUFDSSxZQUFZLENBQUNDLEtBQUssRUFBRTtNQUV4QixDQUFDLEdBQUdMLENBQUMsQ0FBQ0ksWUFBWSxDQUFDQyxLQUFLLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLElBQUksRUFBRUMsQ0FBQyxLQUFJO1FBQzVDLElBQUlELElBQUksQ0FBQ0UsSUFBSSxLQUFLLE1BQU0sRUFBRTtVQUN4QixNQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxFQUFFO1VBQy9CRCxNQUFNLENBQUNFLGdCQUFnQixDQUFDLE1BQU0sRUFBRUMsSUFBQSxJQUUzQjtZQUFBLElBRjRCO2NB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TUFBTSxDQUFDRSxVQUFVLEdBQUc7RUFDbEIsR0FBR0YsTUFBTSxDQUFDRSxVQUFVO0VBQ3BCQyxJQUFJLEVBQUU7SUFDSixJQUFHLENBQUFDLEVBQUEsR0FBQUosTUFBTSxDQUFDRSxVQUFVLGNBQUFFLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUQsSUFBSTtJQUMxQkUsTUFBTSxFQUFFO01BQ05DLGNBQWMsRUFBRSxnY0FBZ2M7TUFDaGQsSUFBRyxDQUFBQyxFQUFBLElBQUFDLEVBQUEsR0FBQVIsTUFBTSxDQUFDRSxVQUFVLGNBQUFNLEVBQUEsdUJBQUFBLEVBQUEsQ0FBRUwsSUFBSSxjQUFBSSxFQUFBLHVCQUFBQSxFQUFBLENBQUVGLE1BQU07OztDQUd2QztBQUFDLE1BQUFJLG1CQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtpZS10b29scy9icG1uLWVkaXRvci8uL3N0b3JpZXMvZGV2L0RldldlYkFwcC5zdG9yaWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9zdHlsZXMvYmFzZS5jc3NcIjtcbmltcG9ydCB7IEZsZXgsIEZsZXhJdGVtIH0gZnJvbSBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9qcy9sYXlvdXRzL0ZsZXhcIjtcbmltcG9ydCB7IFBhZ2UsIFBhZ2VTZWN0aW9uIH0gZnJvbSBcIkBwYXR0ZXJuZmx5L3JlYWN0LWNvcmUvZGlzdC9qcy9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCB7IEJwbW5MYXRlc3RNb2RlbCwgZ2V0TWFyc2hhbGxlciwgQnBtbk1hcnNoYWxsZXIgfSBmcm9tIFwiQGtpZS10b29scy9icG1uLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IE5vcm1hbGl6ZWQsIG5vcm1hbGl6ZSB9IGZyb20gXCJAa2llLXRvb2xzL2JwbW4tZWRpdG9yL2Rpc3Qvbm9ybWFsaXphdGlvbi9ub3JtYWxpemVcIjtcbmltcG9ydCB7IGdlbmVyYXRlRW1wdHlCcG1uMjAgfSBmcm9tIFwiLi4vbWlzYy9lbXB0eS9FbXB0eS5zdG9yaWVzXCI7XG5pbXBvcnQgeyBCcG1uRWRpdG9yV3JhcHBlciB9IGZyb20gXCIuLi9icG1uRWRpdG9yU3Rvcmllc1dyYXBwZXJcIjtcbmltcG9ydCB7IEJwbW5FZGl0b3JQcm9wcywgT25CcG1uTW9kZWxDaGFuZ2UsIE9uUmVxdWVzdFRvSnVtcFRvUGF0aCB9IGZyb20gXCIuLi8uLi9zcmMvQnBtbkVkaXRvclwiO1xuY29uc3QgaW5pdGlhbE1vZGVsID0gZ2VuZXJhdGVFbXB0eUJwbW4yMCgpO1xuZnVuY3Rpb24gRGV2V2ViQXBwKGFyZ3M6IEJwbW5FZGl0b3JQcm9wcykge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPHtcbiAgICBtYXJzaGFsbGVyOiBCcG1uTWFyc2hhbGxlcjtcbiAgICBzdGFjazogTm9ybWFsaXplZDxCcG1uTGF0ZXN0TW9kZWw+W107XG4gICAgcG9pbnRlcjogbnVtYmVyO1xuICB9PigoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbEJwbW5NYXJzaGFsbGVyID0gZ2V0TWFyc2hhbGxlcihpbml0aWFsTW9kZWwsIHtcbiAgICAgIHVwZ3JhZGVUbzogXCJsYXRlc3RcIlxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBtYXJzaGFsbGVyOiBpbml0aWFsQnBtbk1hcnNoYWxsZXIsXG4gICAgICBzdGFjazogW25vcm1hbGl6ZShpbml0aWFsQnBtbk1hcnNoYWxsZXIucGFyc2VyLnBhcnNlKCkpXSxcbiAgICAgIHBvaW50ZXI6IDBcbiAgICB9O1xuICB9KTtcbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQlBNTiBFZGl0b3IgOjogRGV2IHdlYmFwcCA6OiBGaWxlKHMpIGRyb3BwZWQhIE9wZW5pbmcgaXQuXCIpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gTmVjZXNzYXJ5IHRvIGRpc2FibGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0ICdvbkRyb3AnIGhhbmRsaW5nLlxuXG4gICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XG4gICAgICAvLyBVc2UgRGF0YVRyYW5zZmVySXRlbUxpc3QgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxuICAgICAgWy4uLmUuZGF0YVRyYW5zZmVyLml0ZW1zXS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmtpbmQgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKHtcbiAgICAgICAgICAgIHRhcmdldFxuICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcnNoYWxsZXIgPSBnZXRNYXJzaGFsbGVyKHRhcmdldD8ucmVzdWx0IGFzIHN0cmluZywge1xuICAgICAgICAgICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBtYXJzaGFsbGVyLFxuICAgICAgICAgICAgICBzdGFjazogW25vcm1hbGl6ZShtYXJzaGFsbGVyLnBhcnNlci5wYXJzZSgpKV0sXG4gICAgICAgICAgICAgIHBvaW50ZXI6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGl0ZW0uZ2V0QXNGaWxlKCkgYXMgYW55KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIGNvbnN0IG9uRHJhZ092ZXIgPSB1c2VDYWxsYmFjaygoZTogUmVhY3QuRHJhZ0V2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBOZWNlc3NhcnkgdG8gZGlzYWJsZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgJ29uRHJvcCcgaGFuZGxpbmcuXG4gIH0sIFtdKTtcbiAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgbWFyc2hhbGxlciA9IGdldE1hcnNoYWxsZXIoZ2VuZXJhdGVFbXB0eUJwbW4yMCgpLCB7XG4gICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICB9KTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBtYXJzaGFsbGVyLFxuICAgICAgc3RhY2s6IFtub3JtYWxpemUobWFyc2hhbGxlci5wYXJzZXIucGFyc2UoKSldLFxuICAgICAgcG9pbnRlcjogMFxuICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnN0IGN1cnJlbnRNb2RlbCA9IHN0YXRlLnN0YWNrW3N0YXRlLnBvaW50ZXJdO1xuICBjb25zdCBkb3dubG9hZFJlZiA9IHVzZVJlZjxIVE1MQW5jaG9yRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGRvd25sb2FkQXNYbWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGRvd25sb2FkUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGVCbG9iID0gbmV3IEJsb2IoW3N0YXRlLm1hcnNoYWxsZXIuYnVpbGRlci5idWlsZChjdXJyZW50TW9kZWwpXSwge1xuICAgICAgICB0eXBlOiBcInRleHQveG1sXCJcbiAgICAgIH0pO1xuICAgICAgZG93bmxvYWRSZWYuY3VycmVudC5kb3dubG9hZCA9IGBicG1uLSR7Y3JlYXRlSWQoMTApfS5icG1uYDtcbiAgICAgIGRvd25sb2FkUmVmLmN1cnJlbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZUJsb2IpO1xuICAgICAgZG93bmxvYWRSZWYuY3VycmVudC5jbGljaygpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRNb2RlbCwgc3RhdGUubWFyc2hhbGxlci5idWlsZGVyXSk7XG4gIGNvbnN0IGNvcHlBc1htbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzdGF0ZS5tYXJzaGFsbGVyLmJ1aWxkZXIuYnVpbGQoY3VycmVudE1vZGVsKSk7XG4gIH0sIFtjdXJyZW50TW9kZWwsIHN0YXRlLm1hcnNoYWxsZXIuYnVpbGRlcl0pO1xuICBjb25zdCB1bmRvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBwb2ludGVyOiBNYXRoLm1heCgwLCBwcmV2LnBvaW50ZXIgLSAxKVxuICAgIH0pKTtcbiAgfSwgW10pO1xuICBjb25zdCByZWRvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBwb2ludGVyOiBNYXRoLm1pbihwcmV2LnN0YWNrLmxlbmd0aCAtIDEsIHByZXYucG9pbnRlciArIDEpXG4gICAgfSkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uTW9kZWxDaGFuZ2UgPSB1c2VDYWxsYmFjazxPbkJwbW5Nb2RlbENoYW5nZT4obW9kZWwgPT4ge1xuICAgIHNldFN0YXRlKHByZXYgPT4ge1xuICAgICAgY29uc3QgbmV3U3RhY2sgPSBwcmV2LnN0YWNrLnNsaWNlKDAsIHByZXYucG9pbnRlciArIDEpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgc3RhY2s6IFsuLi5uZXdTdGFjaywgbW9kZWxdLFxuICAgICAgICBwb2ludGVyOiBuZXdTdGFjay5sZW5ndGhcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25TZWxlY3RNb2RlbCA9IHVzZUNhbGxiYWNrKG5ld01vZGVsID0+IHtcbiAgICBvbk1vZGVsQ2hhbmdlKG5vcm1hbGl6ZShnZXRNYXJzaGFsbGVyKG5ld01vZGVsLCB7XG4gICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICB9KS5wYXJzZXIucGFyc2UoKSkpO1xuICB9LCBbb25Nb2RlbENoYW5nZV0pO1xuICBjb25zdCBvblJlcXVlc3RUb0p1bXBUb1BhdGggPSB1c2VDYWxsYmFjazxPblJlcXVlc3RUb0p1bXBUb1BhdGg+KHBhdGggPT4ge1xuICAgIGFsZXJ0KFwiSnVtcGluZyB0byBmaWxlIFwiICsgcGF0aCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaXNVbmRvRW5hYmxlZCA9IHN0YXRlLnBvaW50ZXIgPiAwO1xuICBjb25zdCBpc1JlZG9FbmFibGVkID0gc3RhdGUucG9pbnRlciAhPT0gc3RhdGUuc3RhY2subGVuZ3RoIC0gMTtcbiAgcmV0dXJuIDw+XG4gICAgICB7Y3VycmVudE1vZGVsICYmIDxkaXYgc3R5bGU9e3tcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwdmhcIlxuICAgIH19PlxuICAgICAgICAgIDxQYWdlIG9uRHJhZ092ZXI9e29uRHJhZ092ZXJ9IG9uRHJvcD17b25Ecm9wfT5cbiAgICAgICAgICAgIDxQYWdlU2VjdGlvbiB2YXJpYW50PXtcImxpZ2h0XCJ9IGlzRmlsbGVkPXtmYWxzZX0gcGFkZGluZz17e1xuICAgICAgICAgIGRlZmF1bHQ6IFwicGFkZGluZ1wiXG4gICAgICAgIH19PlxuICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD17e1xuICAgICAgICAgICAgZGVmYXVsdDogXCJqdXN0aWZ5Q29udGVudFNwYWNlQmV0d2VlblwiXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEZsZXhJdGVtIHNocmluaz17e1xuICAgICAgICAgICAgICBkZWZhdWx0OiBcInNocmlua1wiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIDxoMz5CUE1OIEVkaXRvciA6OiBEZXYgd2ViYXBwIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9GbGV4SXRlbT5cbiAgICAgICAgICAgICAgICA8RmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8aDU+KERyYWcgJiBkcm9wIGEgZmlsZSBhbnl3aGVyZSB0byBvcGVuIGl0KTwvaDU+XG4gICAgICAgICAgICAgICAgPC9GbGV4SXRlbT5cbiAgICAgICAgICAgICAgICA8RmxleEl0ZW0gc2hyaW5rPXt7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFwic2hyaW5rXCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdE1vZGVsKGdlbmVyYXRlRW1wdHlCcG1uMjAoKSl9PkVtcHR5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7IHwgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWlzVW5kb0VuYWJsZWR9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNVbmRvRW5hYmxlZCA/IDEgOiAwLjVcbiAgICAgICAgICAgICAgfX0gb25DbGljaz17dW5kb30+XG4gICAgICAgICAgICAgICAgICAgIHtgVW5kbyAoJHtzdGF0ZS5wb2ludGVyfSlgfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshaXNSZWRvRW5hYmxlZH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc1JlZG9FbmFibGVkID8gMSA6IDAuNVxuICAgICAgICAgICAgICB9fSBvbkNsaWNrPXtyZWRvfT5cbiAgICAgICAgICAgICAgICAgICAge2BSZWRvICgke3N0YXRlLnN0YWNrLmxlbmd0aCAtIDEgLSBzdGF0ZS5wb2ludGVyfSlgfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7IHwgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldH0+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29weUFzWG1sfT5Db3B5IGFzIFhNTDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkb3dubG9hZEFzWG1sfT5Eb3dubG9hZCBhcyBYTUw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDxhIHJlZj17ZG93bmxvYWRSZWZ9IC8+XG4gICAgICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8UGFnZVNlY3Rpb24gdmFyaWFudD17XCJsaWdodFwifSBpc0ZpbGxlZD17dHJ1ZX0gaGFzT3ZlcmZsb3dTY3JvbGw9e3RydWV9IGFyaWEtbGFiZWw9e1wiZWRpdG9yXCJ9IHBhZGRpbmc9e3tcbiAgICAgICAgICBkZWZhdWx0OiBcIm5vUGFkZGluZ1wiXG4gICAgICAgIH19PlxuICAgICAgICAgICAgICB7QnBtbkVkaXRvcldyYXBwZXIoe1xuICAgICAgICAgICAgbW9kZWw6IGN1cnJlbnRNb2RlbCxcbiAgICAgICAgICAgIG9yaWdpbmFsVmVyc2lvbjogYXJncy5vcmlnaW5hbFZlcnNpb24sXG4gICAgICAgICAgICBvbk1vZGVsQ2hhbmdlLFxuICAgICAgICAgICAgZXh0ZXJuYWxDb250ZXh0TmFtZTogYXJncy5leHRlcm5hbENvbnRleHROYW1lLFxuICAgICAgICAgICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IGFyZ3MuZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpc3N1ZVRyYWNrZXJIcmVmOiBhcmdzLmlzc3VlVHJhY2tlckhyZWYsXG4gICAgICAgICAgICBvblJlcXVlc3RUb0p1bXBUb1BhdGhcbiAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUGFnZVNlY3Rpb24+XG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICA8L2Rpdj59XG4gICAgPC8+O1xufVxuZnVuY3Rpb24gY3JlYXRlSWQobGVuZ3RoOiBudW1iZXIpIHtcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgd2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBNb3JlIG9uIGhvdyB0byBzZXQgdXAgc3RvcmllcyBhdDogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3Mvd3JpdGluZy1zdG9yaWVzI2RlZmF1bHQtZXhwb3J0XG5jb25zdCBtZXRhOiBNZXRhPHR5cGVvZiBEZXZXZWJBcHA+ID0ge1xuICB0aXRsZTogXCJEZXYvV2ViIEFwcFwiLFxuICBjb21wb25lbnQ6IERldldlYkFwcFxufTtcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XG50eXBlIFN0b3J5ID0gU3RvcnlPYmo8dHlwZW9mIERldldlYkFwcD47XG5cbi8vIE1vcmUgb24gd3JpdGluZyBzdG9yaWVzIHdpdGggYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3Mvd3JpdGluZy1zdG9yaWVzL2FyZ3NcbmV4cG9ydCBjb25zdCBXZWJBcHA6IFN0b3J5ID0ge1xuICByZW5kZXI6IGFyZ3MgPT4gRGV2V2ViQXBwKGFyZ3MpLFxuICBhcmdzOiB7XG4gICAgbW9kZWw6IGdldE1hcnNoYWxsZXIoaW5pdGlhbE1vZGVsLCB7XG4gICAgICB1cGdyYWRlVG86IFwibGF0ZXN0XCJcbiAgICB9KS5wYXJzZXIucGFyc2UoKSxcbiAgICBvcmlnaW5hbFZlcnNpb246IFwiMi4wXCIsXG4gICAgZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb246IFwiWW91J3JlIHVzaW5nIHRoZSBCUE1OIERldiB3ZWJhcHAsIHNvIHRoZXJlJ3Mgb25seSB0d28gc2ltcGxlIGV4dGVybmFsIG1vZGVscyB0aGF0IGNhbiBiZSBpbmNsdWRlZC5cIixcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcIkRldiB3ZWJhcHBcIixcbiAgICBpc3N1ZVRyYWNrZXJIcmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvaW5jdWJhdG9yLWtpZS1pc3N1ZXMvaXNzdWVzL25ld1wiXG4gIH1cbn07XG5XZWJBcHAucGFyYW1ldGVycyA9IHtcbiAgLi4uV2ViQXBwLnBhcmFtZXRlcnMsXG4gIGRvY3M6IHtcbiAgICAuLi5XZWJBcHAucGFyYW1ldGVycz8uZG9jcyxcbiAgICBzb3VyY2U6IHtcbiAgICAgIG9yaWdpbmFsU291cmNlOiBcIntcXG4gIHJlbmRlcjogYXJncyA9PiBEZXZXZWJBcHAoYXJncyksXFxuICBhcmdzOiB7XFxuICAgIG1vZGVsOiBnZXRNYXJzaGFsbGVyKGluaXRpYWxNb2RlbCwge1xcbiAgICAgIHVwZ3JhZGVUbzogXFxcImxhdGVzdFxcXCJcXG4gICAgfSkucGFyc2VyLnBhcnNlKCksXFxuICAgIG9yaWdpbmFsVmVyc2lvbjogXFxcIjIuMFxcXCIsXFxuICAgIGV4dGVybmFsQ29udGV4dERlc2NyaXB0aW9uOiBcXFwiWW91J3JlIHVzaW5nIHRoZSBCUE1OIERldiB3ZWJhcHAsIHNvIHRoZXJlJ3Mgb25seSB0d28gc2ltcGxlIGV4dGVybmFsIG1vZGVscyB0aGF0IGNhbiBiZSBpbmNsdWRlZC5cXFwiLFxcbiAgICBleHRlcm5hbENvbnRleHROYW1lOiBcXFwiRGV2IHdlYmFwcFxcXCIsXFxuICAgIGlzc3VlVHJhY2tlckhyZWY6IFxcXCJodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2luY3ViYXRvci1raWUtaXNzdWVzL2lzc3Vlcy9uZXdcXFwiXFxuICB9XFxufVwiLFxuICAgICAgLi4uV2ViQXBwLnBhcmFtZXRlcnM/LmRvY3M/LnNvdXJjZVxuICAgIH1cbiAgfVxufTsiXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZsZXgiLCJGbGV4SXRlbSIsIlBhZ2UiLCJQYWdlU2VjdGlvbiIsImdldE1hcnNoYWxsZXIiLCJub3JtYWxpemUiLCJnZW5lcmF0ZUVtcHR5QnBtbjIwIiwiQnBtbkVkaXRvcldyYXBwZXIiLCJpbml0aWFsTW9kZWwiLCJEZXZXZWJBcHAiLCJhcmdzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxCcG1uTWFyc2hhbGxlciIsInVwZ3JhZGVUbyIsIm1hcnNoYWxsZXIiLCJzdGFjayIsInBhcnNlciIsInBhcnNlIiwicG9pbnRlciIsIm9uRHJvcCIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJkYXRhVHJhbnNmZXIiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwiaSIsImtpbmQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNUZXh0IiwiZ2V0QXNGaWxlIiwib25EcmFnT3ZlciIsInJlc2V0IiwiY3VycmVudE1vZGVsIiwiZG93bmxvYWRSZWYiLCJkb3dubG9hZEFzWG1sIiwiY3VycmVudCIsImZpbGVCbG9iIiwiQmxvYiIsImJ1aWxkZXIiLCJidWlsZCIsInR5cGUiLCJkb3dubG9hZCIsImNyZWF0ZUlkIiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNsaWNrIiwiY29weUFzWG1sIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidW5kbyIsInByZXYiLCJNYXRoIiwibWF4IiwicmVkbyIsIm1pbiIsImxlbmd0aCIsIm9uTW9kZWxDaGFuZ2UiLCJtb2RlbCIsIm5ld1N0YWNrIiwic2xpY2UiLCJvblNlbGVjdE1vZGVsIiwibmV3TW9kZWwiLCJvblJlcXVlc3RUb0p1bXBUb1BhdGgiLCJwYXRoIiwiYWxlcnQiLCJpc1VuZG9FbmFibGVkIiwiaXNSZWRvRW5hYmxlZCIsIl9qc3giLCJfRnJhZ21lbnQiLCJjaGlsZHJlbiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJfanN4cyIsInZhcmlhbnQiLCJpc0ZpbGxlZCIsInBhZGRpbmciLCJkZWZhdWx0IiwianVzdGlmeUNvbnRlbnQiLCJzaHJpbmsiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJvcGFjaXR5IiwicmVmIiwiaGFzT3ZlcmZsb3dTY3JvbGwiLCJvcmlnaW5hbFZlcnNpb24iLCJleHRlcm5hbENvbnRleHROYW1lIiwiZXh0ZXJuYWxDb250ZXh0RGVzY3JpcHRpb24iLCJpc3N1ZVRyYWNrZXJIcmVmIiwiY2hhcmFjdGVycyIsImNoYXJhY3RlcnNMZW5ndGgiLCJjb3VudGVyIiwiY2hhckF0IiwiZmxvb3IiLCJyYW5kb20iLCJtZXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJXZWJBcHAiLCJyZW5kZXIiLCJwYXJhbWV0ZXJzIiwiZG9jcyIsIl9hIiwic291cmNlIiwib3JpZ2luYWxTb3VyY2UiLCJfYyIsIl9iIiwiX19uYW1lZEV4cG9ydHNPcmRlciJdLCJzb3VyY2VSb290IjoiIn0=