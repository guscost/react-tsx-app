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
define("ui/checkbox", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-checkbox", "lucide-react", "lib/utils"], function (require, exports, jsx_runtime_1, React, CheckboxPrimitive, lucide_react_1, utils_1) {
    /// <amd-module name="ui/checkbox"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Checkbox = void 0;
    React = __importStar(React);
    CheckboxPrimitive = __importStar(CheckboxPrimitive);
    var Checkbox = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(CheckboxPrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className) }, props, { children: (0, jsx_runtime_1.jsx)(CheckboxPrimitive.Indicator, { className: (0, utils_1.cn)("flex items-center justify-center text-current"), children: (0, jsx_runtime_1.jsx)(lucide_react_1.Check, { className: "h-4 w-4" }) }) })));
    });
    exports.Checkbox = Checkbox;
    Checkbox.displayName = CheckboxPrimitive.Root.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9jaGVja2JveC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxvQ0FBb0M7SUFDcEMsWUFBWSxDQUFDOzs7Ozs7SUFRYixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUcvQixVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsdUJBQUMsaUJBQWlCLENBQUMsSUFBSSxhQUNyQixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxvUUFBb1EsRUFDcFEsU0FBUyxDQUNWLElBQ0csS0FBSyxjQUVULHVCQUFDLGlCQUFpQixDQUFDLFNBQVMsSUFDMUIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLCtDQUErQyxDQUFDLFlBRTlELHVCQUFDLG9CQUFLLElBQUMsU0FBUyxFQUFDLFNBQVMsR0FBRyxHQUNELElBQ1AsQ0FDMUIsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQUdNLDRCQUFRO0lBRmpCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwidWkvY2hlY2tib3hcIi8+XG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBDaGVja2JveFByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWNoZWNrYm94XCI7XG5pbXBvcnQgeyBDaGVjayB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwic3JjL2xpYi91dGlsc1wiO1xuXG5jb25zdCBDaGVja2JveCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENoZWNrYm94UHJpbWl0aXZlLlJvb3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENoZWNrYm94UHJpbWl0aXZlLlJvb3Q+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDaGVja2JveFByaW1pdGl2ZS5Sb290XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicGVlciBoLTQgdy00IHNocmluay0wIHJvdW5kZWQtc20gYm9yZGVyIGJvcmRlci1wcmltYXJ5IHNoYWRvdyBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMSBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXRhLVtzdGF0ZT1jaGVja2VkXTpiZy1wcmltYXJ5IGRhdGEtW3N0YXRlPWNoZWNrZWRdOnRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8Q2hlY2tib3hQcmltaXRpdmUuSW5kaWNhdG9yXG4gICAgICBjbGFzc05hbWU9e2NuKFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jdXJyZW50XCIpfVxuICAgID5cbiAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICA8L0NoZWNrYm94UHJpbWl0aXZlLkluZGljYXRvcj5cbiAgPC9DaGVja2JveFByaW1pdGl2ZS5Sb290PlxuKSk7XG5DaGVja2JveC5kaXNwbGF5TmFtZSA9IENoZWNrYm94UHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWU7XG5cbmV4cG9ydCB7IENoZWNrYm94IH07XG4iXX0=