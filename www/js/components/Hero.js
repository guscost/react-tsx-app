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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-select", "lucide-react", "@/components/ui/button"], function (require, exports, jsx_runtime_1, react_1, Select, lucide_react_1, button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Hero;
    react_1 = __importStar(react_1);
    Select = __importStar(Select);
    var SelectItem = react_1.default.forwardRef(function (_a, forwardedRef) {
        var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
        return ((0, jsx_runtime_1.jsxs)(Select.Item, __assign({}, props, { ref: forwardedRef, className: "flex justify-between items-center hover:bg-gray-100", children: [(0, jsx_runtime_1.jsx)(Select.ItemText, { children: children }), (0, jsx_runtime_1.jsx)(Select.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckIcon, {}) })] })));
    });
    function Hero() {
        var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Hello world x", count] }), (0, jsx_runtime_1.jsx)(button_1.Button, { className: "mt-2", onClick: function () { return setCount(count + 1); }, children: "Again!" }), (0, jsx_runtime_1.jsxs)(Select.Root, { onValueChange: function (value) { return setCount(parseInt(value, 10)); }, children: [(0, jsx_runtime_1.jsxs)(Select.Trigger, { className: "border rounded mt-2 px-4 py-2 flex gap-2 justify-between items-center w-56", "aria-label": "Number", children: [(0, jsx_runtime_1.jsx)(Select.Value, { placeholder: "Select a number..." }), (0, jsx_runtime_1.jsx)(Select.Icon, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDownIcon, {}) })] }), (0, jsx_runtime_1.jsx)(Select.Portal, { children: (0, jsx_runtime_1.jsxs)(Select.Content, { className: "rounded border p-2 bg-white", children: [(0, jsx_runtime_1.jsx)(Select.ScrollUpButton, { className: "flex justify-center items-center", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronUpIcon, {}) }), (0, jsx_runtime_1.jsxs)(Select.Viewport, { children: [(0, jsx_runtime_1.jsxs)(Select.Group, { children: [(0, jsx_runtime_1.jsx)(Select.Label, { className: "text-xs", children: "Small" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "1", children: "1" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "2", children: "2" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "3", children: "3" })] }), (0, jsx_runtime_1.jsx)(Select.Separator, {}), (0, jsx_runtime_1.jsxs)(Select.Group, { className: "mt-2", children: [(0, jsx_runtime_1.jsx)(Select.Label, { className: "text-xs", children: "Medium" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "10", children: "10" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "11", children: "11" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "12", disabled: true, children: "12" })] }), (0, jsx_runtime_1.jsx)(Select.Separator, {}), (0, jsx_runtime_1.jsxs)(Select.Group, { className: "mt-2", children: [(0, jsx_runtime_1.jsx)(Select.Label, { className: "text-xs", children: "Large" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "100", children: "100" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "101", children: "101" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "102", children: "102" })] })] }), (0, jsx_runtime_1.jsx)(Select.ScrollDownButton, { className: "flex justify-center items-center", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDownIcon, {}) })] }) })] })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVyby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlcm8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5QkEsdUJBOERDOzs7SUFsRkQsSUFBTSxVQUFVLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FDakMsVUFDRSxFQUF5RCxFQUN6RCxZQUF1QztRQURyQyxJQUFBLFFBQVEsY0FBQSxFQUFFLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBL0IseUJBQWlDLENBQUY7UUFHL0IsT0FBTyxDQUNMLHdCQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQ04sS0FBSyxJQUNULEdBQUcsRUFBRSxZQUFZLEVBQ2pCLFNBQVMsRUFBQyxxREFBcUQsYUFFL0QsdUJBQUMsTUFBTSxDQUFDLFFBQVEsY0FBRSxRQUFRLEdBQW1CLEVBQzdDLHVCQUFDLE1BQU0sQ0FBQyxhQUFhLGNBQ25CLHVCQUFDLHdCQUFTLEtBQUcsR0FDUSxLQUNYLENBQ2YsQ0FBQztJQUNKLENBQUMsQ0FDRixDQUFDO0lBRUYsU0FBd0IsSUFBSTtRQUNwQixJQUFBLEtBQW9CLElBQUEsZ0JBQVEsRUFBQyxDQUFDLENBQUMsRUFBOUIsS0FBSyxRQUFBLEVBQUUsUUFBUSxRQUFlLENBQUM7UUFFdEMsT0FBTyxDQUNMLDRDQUNFLDREQUFrQixLQUFLLElBQU0sRUFFN0IsdUJBQUMsZUFBTSxJQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFuQixDQUFtQix1QkFFbEQsRUFFVCx3QkFBQyxNQUFNLENBQUMsSUFBSSxJQUFDLGFBQWEsRUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQTdCLENBQTZCLGFBQ2xFLHdCQUFDLE1BQU0sQ0FBQyxPQUFPLElBQ2IsU0FBUyxFQUFDLDRFQUE0RSxnQkFDM0UsUUFBUSxhQUVuQix1QkFBQyxNQUFNLENBQUMsS0FBSyxJQUFDLFdBQVcsRUFBQyxvQkFBb0IsR0FBRyxFQUNqRCx1QkFBQyxNQUFNLENBQUMsSUFBSSxjQUNWLHVCQUFDLDhCQUFlLEtBQUcsR0FDUCxJQUNDLEVBQ2pCLHVCQUFDLE1BQU0sQ0FBQyxNQUFNLGNBQ1osd0JBQUMsTUFBTSxDQUFDLE9BQU8sSUFBQyxTQUFTLEVBQUMsNkJBQTZCLGFBQ3JELHVCQUFDLE1BQU0sQ0FBQyxjQUFjLElBQUMsU0FBUyxFQUFDLGtDQUFrQyxZQUNqRSx1QkFBQyw0QkFBYSxLQUFHLEdBQ0ssRUFDeEIsd0JBQUMsTUFBTSxDQUFDLFFBQVEsZUFDZCx3QkFBQyxNQUFNLENBQUMsS0FBSyxlQUNYLHVCQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUMsU0FBUyxFQUFDLFNBQVMsc0JBQXFCLEVBQ3RELHVCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsR0FBRyxrQkFBZSxFQUNwQyx1QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLEdBQUcsa0JBQWUsRUFDcEMsdUJBQUMsVUFBVSxJQUFDLEtBQUssRUFBQyxHQUFHLGtCQUFlLElBQ3ZCLEVBRWYsdUJBQUMsTUFBTSxDQUFDLFNBQVMsS0FBRyxFQUVwQix3QkFBQyxNQUFNLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxNQUFNLGFBQzVCLHVCQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUMsU0FBUyxFQUFDLFNBQVMsdUJBQXNCLEVBQ3ZELHVCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsSUFBSSxtQkFBZ0IsRUFDdEMsdUJBQUMsVUFBVSxJQUFDLEtBQUssRUFBQyxJQUFJLG1CQUFnQixFQUN0Qyx1QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxRQUFRLHlCQUVsQixJQUNBLEVBRWYsdUJBQUMsTUFBTSxDQUFDLFNBQVMsS0FBRyxFQUVwQix3QkFBQyxNQUFNLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxNQUFNLGFBQzVCLHVCQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUMsU0FBUyxFQUFDLFNBQVMsc0JBQXFCLEVBQ3RELHVCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsS0FBSyxvQkFBaUIsRUFDeEMsdUJBQUMsVUFBVSxJQUFDLEtBQUssRUFBQyxLQUFLLG9CQUFpQixFQUN4Qyx1QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLEtBQUssb0JBQWlCLElBQzNCLElBQ0MsRUFDbEIsdUJBQUMsTUFBTSxDQUFDLGdCQUFnQixJQUFDLFNBQVMsRUFBQyxrQ0FBa0MsWUFDbkUsdUJBQUMsOEJBQWUsS0FBRyxHQUNLLElBQ1gsR0FDSCxJQUNKLElBQ1YsQ0FDUCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgU2VsZWN0IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgeyBDaGVja0ljb24sIENoZXZyb25Eb3duSWNvbiwgQ2hldnJvblVwSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5cbmNvbnN0IFNlbGVjdEl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBTZWxlY3QuU2VsZWN0SXRlbVByb3BzLFxuICAgIGZvcndhcmRlZFJlZjogUmVhY3QuUmVmPEhUTUxEaXZFbGVtZW50PixcbiAgKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3QuSXRlbVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHJlZj17Zm9yd2FyZGVkUmVmfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JheS0xMDBcIlxuICAgICAgPlxuICAgICAgICA8U2VsZWN0Lkl0ZW1UZXh0PntjaGlsZHJlbn08L1NlbGVjdC5JdGVtVGV4dD5cbiAgICAgICAgPFNlbGVjdC5JdGVtSW5kaWNhdG9yPlxuICAgICAgICAgIDxDaGVja0ljb24gLz5cbiAgICAgICAgPC9TZWxlY3QuSXRlbUluZGljYXRvcj5cbiAgICAgIDwvU2VsZWN0Lkl0ZW0+XG4gICAgKTtcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oKSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhlbGxvIHdvcmxkIHh7Y291bnR9PC9oMT5cblxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtdC0yXCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+XG4gICAgICAgIEFnYWluIVxuICAgICAgPC9CdXR0b24+XG5cbiAgICAgIDxTZWxlY3QuUm9vdCBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+IHNldENvdW50KHBhcnNlSW50KHZhbHVlLCAxMCkpfT5cbiAgICAgICAgPFNlbGVjdC5UcmlnZ2VyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgbXQtMiBweC00IHB5LTIgZmxleCBnYXAtMiBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctNTZcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJOdW1iZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPFNlbGVjdC5WYWx1ZSBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIG51bWJlci4uLlwiIC8+XG4gICAgICAgICAgPFNlbGVjdC5JY29uPlxuICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvbiAvPlxuICAgICAgICAgIDwvU2VsZWN0Lkljb24+XG4gICAgICAgIDwvU2VsZWN0LlRyaWdnZXI+XG4gICAgICAgIDxTZWxlY3QuUG9ydGFsPlxuICAgICAgICAgIDxTZWxlY3QuQ29udGVudCBjbGFzc05hbWU9XCJyb3VuZGVkIGJvcmRlciBwLTIgYmctd2hpdGVcIj5cbiAgICAgICAgICAgIDxTZWxlY3QuU2Nyb2xsVXBCdXR0b24gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENoZXZyb25VcEljb24gLz5cbiAgICAgICAgICAgIDwvU2VsZWN0LlNjcm9sbFVwQnV0dG9uPlxuICAgICAgICAgICAgPFNlbGVjdC5WaWV3cG9ydD5cbiAgICAgICAgICAgICAgPFNlbGVjdC5Hcm91cD5cbiAgICAgICAgICAgICAgICA8U2VsZWN0LkxhYmVsIGNsYXNzTmFtZT1cInRleHQteHNcIj5TbWFsbDwvU2VsZWN0LkxhYmVsPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwiMVwiPjE8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCIyXCI+MjwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cIjNcIj4zPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICA8L1NlbGVjdC5Hcm91cD5cblxuICAgICAgICAgICAgICA8U2VsZWN0LlNlcGFyYXRvciAvPlxuXG4gICAgICAgICAgICAgIDxTZWxlY3QuR3JvdXAgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QuTGFiZWwgY2xhc3NOYW1lPVwidGV4dC14c1wiPk1lZGl1bTwvU2VsZWN0LkxhYmVsPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwiMTBcIj4xMDwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cIjExXCI+MTE8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCIxMlwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgMTJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgIDwvU2VsZWN0Lkdyb3VwPlxuXG4gICAgICAgICAgICAgIDxTZWxlY3QuU2VwYXJhdG9yIC8+XG5cbiAgICAgICAgICAgICAgPFNlbGVjdC5Hcm91cCBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgICAgPFNlbGVjdC5MYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+TGFyZ2U8L1NlbGVjdC5MYWJlbD5cbiAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cIjEwMFwiPjEwMDwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cIjEwMVwiPjEwMTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cIjEwMlwiPjEwMjwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgPC9TZWxlY3QuR3JvdXA+XG4gICAgICAgICAgICA8L1NlbGVjdC5WaWV3cG9ydD5cbiAgICAgICAgICAgIDxTZWxlY3QuU2Nyb2xsRG93bkJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q2hldnJvbkRvd25JY29uIC8+XG4gICAgICAgICAgICA8L1NlbGVjdC5TY3JvbGxEb3duQnV0dG9uPlxuICAgICAgICAgIDwvU2VsZWN0LkNvbnRlbnQ+XG4gICAgICAgIDwvU2VsZWN0LlBvcnRhbD5cbiAgICAgIDwvU2VsZWN0LlJvb3Q+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=