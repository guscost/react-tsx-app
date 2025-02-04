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
define(["require", "exports", "react/jsx-runtime", "lucide-react", "react-resizable-panels", "@/lib/utils"], function (require, exports, jsx_runtime_1, lucide_react_1, ResizablePrimitive, utils_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvcmVzaXphYmxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLFlBQVksQ0FBQzs7Ozs7SUFPYixJQUFNLG1CQUFtQixHQUFHLFVBQUMsRUFHZ0M7UUFGM0QsSUFBQSxTQUFTLGVBQUEsRUFDTixLQUFLLGNBRm1CLGFBRzVCLENBRFM7UUFDd0QsT0FBQSxDQUNoRSx1QkFBQyxrQkFBa0IsQ0FBQyxVQUFVLGFBQzVCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxtRUFBbUUsRUFDbkUsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUM7SUEwQk8sa0RBQW1CO0lBeEI1QixJQUFNLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUF3QmxCLHdDQUFjO0lBdEI1QyxJQUFNLGVBQWUsR0FBRyxVQUFDLEVBTXhCO1FBTEMsSUFBQSxVQUFVLGdCQUFBLEVBQ1YsU0FBUyxlQUFBLEVBQ04sS0FBSyxjQUhlLDJCQUl4QixDQURTO1FBR0osT0FBQSxDQUNKLHVCQUFDLGtCQUFrQixDQUFDLGlCQUFpQixhQUNuQyxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gseW9CQUF5b0IsRUFDem9CLFNBQVMsQ0FDVixJQUNHLEtBQUssY0FFUixVQUFVLElBQUksQ0FDYixnQ0FBSyxTQUFTLEVBQUMsMkVBQTJFLFlBQ3hGLHVCQUFDLDJCQUFZLElBQUMsU0FBUyxFQUFDLGFBQWEsR0FBRyxHQUNwQyxDQUNQLElBQ29DLENBQ3hDLENBQUE7S0FBQSxDQUFDO0lBRTRDLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEdyaXBWZXJ0aWNhbCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlc2l6YWJsZVByaW1pdGl2ZSBmcm9tIFwicmVhY3QtcmVzaXphYmxlLXBhbmVsc1wiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBSZXNpemFibGVQYW5lbEdyb3VwID0gKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFJlc2l6YWJsZVByaW1pdGl2ZS5QYW5lbEdyb3VwPikgPT4gKFxuICA8UmVzaXphYmxlUHJpbWl0aXZlLlBhbmVsR3JvdXBcbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGgtZnVsbCB3LWZ1bGwgZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTpmbGV4LWNvbFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuY29uc3QgUmVzaXphYmxlUGFuZWwgPSBSZXNpemFibGVQcmltaXRpdmUuUGFuZWw7XG5cbmNvbnN0IFJlc2l6YWJsZUhhbmRsZSA9ICh7XG4gIHdpdGhIYW5kbGUsXG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBSZXNpemFibGVQcmltaXRpdmUuUGFuZWxSZXNpemVIYW5kbGU+ICYge1xuICB3aXRoSGFuZGxlPzogYm9vbGVhbjtcbn0pID0+IChcbiAgPFJlc2l6YWJsZVByaW1pdGl2ZS5QYW5lbFJlc2l6ZUhhbmRsZVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIGZsZXggdy1weCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYm9yZGVyIGFmdGVyOmFic29sdXRlIGFmdGVyOmluc2V0LXktMCBhZnRlcjpsZWZ0LTEvMiBhZnRlcjp3LTEgYWZ0ZXI6LXRyYW5zbGF0ZS14LTEvMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMSBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTEgZGF0YS1bcGFuZWwtZ3JvdXAtZGlyZWN0aW9uPXZlcnRpY2FsXTpoLXB4IGRhdGEtW3BhbmVsLWdyb3VwLWRpcmVjdGlvbj12ZXJ0aWNhbF06dy1mdWxsIGRhdGEtW3BhbmVsLWdyb3VwLWRpcmVjdGlvbj12ZXJ0aWNhbF06YWZ0ZXI6bGVmdC0wIGRhdGEtW3BhbmVsLWdyb3VwLWRpcmVjdGlvbj12ZXJ0aWNhbF06YWZ0ZXI6aC0xIGRhdGEtW3BhbmVsLWdyb3VwLWRpcmVjdGlvbj12ZXJ0aWNhbF06YWZ0ZXI6dy1mdWxsIGRhdGEtW3BhbmVsLWdyb3VwLWRpcmVjdGlvbj12ZXJ0aWNhbF06YWZ0ZXI6LXRyYW5zbGF0ZS15LTEvMiBkYXRhLVtwYW5lbC1ncm91cC1kaXJlY3Rpb249dmVydGljYWxdOmFmdGVyOnRyYW5zbGF0ZS14LTAgWyZbZGF0YS1wYW5lbC1ncm91cC1kaXJlY3Rpb249dmVydGljYWxdPmRpdl06cm90YXRlLTkwXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7d2l0aEhhbmRsZSAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgZmxleCBoLTQgdy0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtIGJvcmRlciBiZy1ib3JkZXJcIj5cbiAgICAgICAgPEdyaXBWZXJ0aWNhbCBjbGFzc05hbWU9XCJoLTIuNSB3LTIuNVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICA8L1Jlc2l6YWJsZVByaW1pdGl2ZS5QYW5lbFJlc2l6ZUhhbmRsZT5cbik7XG5cbmV4cG9ydCB7IFJlc2l6YWJsZVBhbmVsR3JvdXAsIFJlc2l6YWJsZVBhbmVsLCBSZXNpemFibGVIYW5kbGUgfTtcbiJdfQ==