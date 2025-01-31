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
define(["require", "exports", "react/jsx-runtime", "lucide-react", "react-resizable-panels", "utils"], function (require, exports, jsx_runtime_1, lucide_react_1, ResizablePrimitive, utils_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvcmVzaXphYmxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLFlBQVksQ0FBQzs7Ozs7SUFPYixJQUFNLG1CQUFtQixHQUFHLFVBQUMsRUFHZ0M7UUFGM0QsSUFBQSxTQUFTLGVBQUEsRUFDTixLQUFLLGNBRm1CLGFBRzVCLENBRFM7UUFDd0QsT0FBQSxDQUNoRSx1QkFBQyxrQkFBa0IsQ0FBQyxVQUFVLGFBQzVCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxtRUFBbUUsRUFDbkUsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUM7SUEwQk8sa0RBQW1CO0lBeEI1QixJQUFNLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUF3QmxCLHdDQUFjO0lBdEI1QyxJQUFNLGVBQWUsR0FBRyxVQUFDLEVBTXhCO1FBTEMsSUFBQSxVQUFVLGdCQUFBLEVBQ1YsU0FBUyxlQUFBLEVBQ04sS0FBSyxjQUhlLDJCQUl4QixDQURTO1FBR0osT0FBQSxDQUNKLHVCQUFDLGtCQUFrQixDQUFDLGlCQUFpQixhQUNuQyxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gseW9CQUF5b0IsRUFDem9CLFNBQVMsQ0FDVixJQUNHLEtBQUssY0FFUixVQUFVLElBQUksQ0FDYixnQ0FBSyxTQUFTLEVBQUMsMkVBQTJFLFlBQ3hGLHVCQUFDLDJCQUFZLElBQUMsU0FBUyxFQUFDLGFBQWEsR0FBRyxHQUNwQyxDQUNQLElBQ29DLENBQ3hDLENBQUE7S0FBQSxDQUFDO0lBRTRDLDBDQUFlIn0=