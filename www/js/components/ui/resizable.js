var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define("ui/resizable", ["require", "exports", "react/jsx-runtime", "lucide-react", "react-resizable-panels", "lib/utils"], function (require, exports, jsx_runtime_1, lucide_react_1, ResizablePrimitive, utils_1) {
    /// <amd-module name="ui/resizable"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ResizableHandle = exports.ResizablePanel = exports.ResizablePanelGroup = void 0;
    ResizablePrimitive = __importStar(ResizablePrimitive);
    var ResizablePanelGroup = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(ResizablePrimitive.PanelGroup, __assign({ className: (0, utils_1.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className) }, props)));
    };
    exports.ResizablePanelGroup = ResizablePanelGroup;
    var ResizablePanel = ResizablePrimitive.Panel;
    exports.ResizablePanel = ResizablePanel;
    var ResizableHandle = function (_a) {
        var withHandle = _a.withHandle, className = _a.className, props = __rest(_a, ["withHandle", "className"]);
        return ((0, jsx_runtime_1.jsx)(ResizablePrimitive.PanelResizeHandle, __assign({ className: (0, utils_1.cn)("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90", className) }, props, { children: withHandle && ((0, jsx_runtime_1.jsx)("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: (0, jsx_runtime_1.jsx)(lucide_react_1.GripVertical, { className: "h-2.5 w-2.5" }) })) })));
    };
    exports.ResizableHandle = ResizableHandle;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvcmVzaXphYmxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLHFDQUFxQztJQUNyQyxZQUFZLENBQUM7Ozs7O0lBT2IsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLEVBR2dDO1FBRjNELElBQUEsU0FBUyxlQUFBLEVBQ04sS0FBSyxjQUZtQixhQUc1QixDQURTO1FBQ3dELE9BQUEsQ0FDaEUsdUJBQUMsa0JBQWtCLENBQUMsVUFBVSxhQUM1QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsbUVBQW1FLEVBQ25FLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDO0lBMEJPLGtEQUFtQjtJQXhCNUIsSUFBTSxjQUFjLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDO0lBd0JsQix3Q0FBYztJQXRCNUMsSUFBTSxlQUFlLEdBQUcsVUFBQyxFQU14QjtRQUxDLElBQUEsVUFBVSxnQkFBQSxFQUNWLFNBQVMsZUFBQSxFQUNOLEtBQUssY0FIZSwyQkFJeEIsQ0FEUztRQUdKLE9BQUEsQ0FDSix1QkFBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsYUFDbkMsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLHlvQkFBeW9CLEVBQ3pvQixTQUFTLENBQ1YsSUFDRyxLQUFLLGNBRVIsVUFBVSxJQUFJLENBQ2IsZ0NBQUssU0FBUyxFQUFDLDJFQUEyRSxZQUN4Rix1QkFBQywyQkFBWSxJQUFDLFNBQVMsRUFBQyxhQUFhLEdBQUcsR0FDcEMsQ0FDUCxJQUNvQyxDQUN4QyxDQUFBO0tBQUEsQ0FBQztJQUU0QywwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwidWkvcmVzaXphYmxlXCIvPlxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEdyaXBWZXJ0aWNhbCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlc2l6YWJsZVByaW1pdGl2ZSBmcm9tIFwicmVhY3QtcmVzaXphYmxlLXBhbmVsc1wiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzcmMvbGliL3V0aWxzXCI7XG5cbmNvbnN0IFJlc2l6YWJsZVBhbmVsR3JvdXAgPSAoe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgUmVzaXphYmxlUHJpbWl0aXZlLlBhbmVsR3JvdXA+KSA9PiAoXG4gIDxSZXNpemFibGVQcmltaXRpdmUuUGFuZWxHcm91cFxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggaC1mdWxsIHctZnVsbCBkYXRhLVtwYW5lbC1ncm91cC1kaXJlY3Rpb249dmVydGljYWxdOmZsZXgtY29sXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG5jb25zdCBSZXNpemFibGVQYW5lbCA9IFJlc2l6YWJsZVByaW1pdGl2ZS5QYW5lbDtcblxuY29uc3QgUmVzaXphYmxlSGFuZGxlID0gKHtcbiAgd2l0aEhhbmRsZSxcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFJlc2l6YWJsZVByaW1pdGl2ZS5QYW5lbFJlc2l6ZUhhbmRsZT4gJiB7XG4gIHdpdGhIYW5kbGU/OiBib29sZWFuO1xufSkgPT4gKFxuICA8UmVzaXphYmxlUHJpbWl0aXZlLlBhbmVsUmVzaXplSGFuZGxlXG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicmVsYXRpdmUgZmxleCB3LXB4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ib3JkZXIgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6aW5zZXQteS0wIGFmdGVyOmxlZnQtMS8yIGFmdGVyOnctMSBhZnRlcjotdHJhbnNsYXRlLXgtMS8yIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0xIGZvY3VzLXZpc2libGU6cmluZy1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMSBkYXRhLVtwYW5lbC1ncm91cC1kaXJlY3Rpb249dmVydGljYWxdOmgtcHggZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTp3LWZ1bGwgZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTphZnRlcjpsZWZ0LTAgZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTphZnRlcjpoLTEgZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTphZnRlcjp3LWZ1bGwgZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTphZnRlcjotdHJhbnNsYXRlLXktMS8yIGRhdGEtW3BhbmVsLWdyb3VwLWRpcmVjdGlvbj12ZXJ0aWNhbF06YWZ0ZXI6dHJhbnNsYXRlLXgtMCBbJltkYXRhLXBhbmVsLWdyb3VwLWRpcmVjdGlvbj12ZXJ0aWNhbF0+ZGl2XTpyb3RhdGUtOTBcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHt3aXRoSGFuZGxlICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBmbGV4IGgtNCB3LTMgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gYm9yZGVyIGJnLWJvcmRlclwiPlxuICAgICAgICA8R3JpcFZlcnRpY2FsIGNsYXNzTmFtZT1cImgtMi41IHctMi41XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gIDwvUmVzaXphYmxlUHJpbWl0aXZlLlBhbmVsUmVzaXplSGFuZGxlPlxuKTtcblxuZXhwb3J0IHsgUmVzaXphYmxlUGFuZWxHcm91cCwgUmVzaXphYmxlUGFuZWwsIFJlc2l6YWJsZUhhbmRsZSB9O1xuIl19