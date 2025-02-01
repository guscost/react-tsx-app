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
define("ui/switch", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-switch", "lib/utils"], function (require, exports, jsx_runtime_1, React, SwitchPrimitives, utils_1) {
    /// <amd-module name="ui/switch"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Switch = void 0;
    React = __importStar(React);
    SwitchPrimitives = __importStar(SwitchPrimitives);
    var Switch = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(SwitchPrimitives.Root, __assign({ className: (0, utils_1.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className) }, props, { ref: ref, children: (0, jsx_runtime_1.jsx)(SwitchPrimitives.Thumb, { className: (0, utils_1.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") }) })));
    });
    exports.Switch = Switch;
    Switch.displayName = SwitchPrimitives.Root.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc3dpdGNoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLGtDQUFrQztJQUNsQyxZQUFZLENBQUM7Ozs7OztJQU9iLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBRzdCLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxnQkFBZ0IsQ0FBQyxJQUFJLGFBQ3BCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCw2WEFBNlgsRUFDN1gsU0FBUyxDQUNWLElBQ0csS0FBSyxJQUNULEdBQUcsRUFBRSxHQUFHLFlBRVIsdUJBQUMsZ0JBQWdCLENBQUMsS0FBSyxJQUNyQixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsNEtBQTRLLENBQzdLLEdBQ0QsSUFDb0IsQ0FDekIsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQUdNLHdCQUFNO0lBRmYsTUFBTSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxhbWQtbW9kdWxlIG5hbWU9XCJ1aS9zd2l0Y2hcIi8+XG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBTd2l0Y2hQcmltaXRpdmVzIGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc3dpdGNoXCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcInNyYy9saWIvdXRpbHNcIjtcblxuY29uc3QgU3dpdGNoID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU3dpdGNoUHJpbWl0aXZlcy5Sb290PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTd2l0Y2hQcmltaXRpdmVzLlJvb3Q+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxTd2l0Y2hQcmltaXRpdmVzLlJvb3RcbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJwZWVyIGlubGluZS1mbGV4IGgtNSB3LTkgc2hyaW5rLTAgY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgc2hhZG93LXNtIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LWJhY2tncm91bmQgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTAgZGF0YS1bc3RhdGU9Y2hlY2tlZF06YmctcHJpbWFyeSBkYXRhLVtzdGF0ZT11bmNoZWNrZWRdOmJnLWlucHV0XCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gICAgcmVmPXtyZWZ9XG4gID5cbiAgICA8U3dpdGNoUHJpbWl0aXZlcy5UaHVtYlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJwb2ludGVyLWV2ZW50cy1ub25lIGJsb2NrIGgtNCB3LTQgcm91bmRlZC1mdWxsIGJnLWJhY2tncm91bmQgc2hhZG93LWxnIHJpbmctMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkYXRhLVtzdGF0ZT1jaGVja2VkXTp0cmFuc2xhdGUteC00IGRhdGEtW3N0YXRlPXVuY2hlY2tlZF06dHJhbnNsYXRlLXgtMFwiLFxuICAgICAgKX1cbiAgICAvPlxuICA8L1N3aXRjaFByaW1pdGl2ZXMuUm9vdD5cbikpO1xuU3dpdGNoLmRpc3BsYXlOYW1lID0gU3dpdGNoUHJpbWl0aXZlcy5Sb290LmRpc3BsYXlOYW1lO1xuXG5leHBvcnQgeyBTd2l0Y2ggfTtcbiJdfQ==