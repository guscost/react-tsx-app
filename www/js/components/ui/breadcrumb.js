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
define("ui/breadcrumb", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-slot", "lucide-react", "lib/utils"], function (require, exports, jsx_runtime_1, React, react_slot_1, lucide_react_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BreadcrumbEllipsis = exports.BreadcrumbSeparator = exports.BreadcrumbPage = exports.BreadcrumbLink = exports.BreadcrumbItem = exports.BreadcrumbList = exports.Breadcrumb = void 0;
    React = __importStar(React);
    var Breadcrumb = React.forwardRef(function (_a, ref) {
        var props = __rest(_a, []);
        return (0, jsx_runtime_1.jsx)("nav", __assign({ ref: ref, "aria-label": "breadcrumb" }, props));
    });
    exports.Breadcrumb = Breadcrumb;
    Breadcrumb.displayName = "Breadcrumb";
    var BreadcrumbList = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("ol", __assign({ ref: ref, className: (0, utils_1.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className) }, props)));
    });
    exports.BreadcrumbList = BreadcrumbList;
    BreadcrumbList.displayName = "BreadcrumbList";
    var BreadcrumbItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("li", __assign({ ref: ref, className: (0, utils_1.cn)("inline-flex items-center gap-1.5", className) }, props)));
    });
    exports.BreadcrumbItem = BreadcrumbItem;
    BreadcrumbItem.displayName = "BreadcrumbItem";
    var BreadcrumbLink = React.forwardRef(function (_a, ref) {
        var asChild = _a.asChild, className = _a.className, props = __rest(_a, ["asChild", "className"]);
        var Comp = asChild ? react_slot_1.Slot : "a";
        return ((0, jsx_runtime_1.jsx)(Comp, __assign({ ref: ref, className: (0, utils_1.cn)("transition-colors hover:text-foreground", className) }, props)));
    });
    exports.BreadcrumbLink = BreadcrumbLink;
    BreadcrumbLink.displayName = "BreadcrumbLink";
    var BreadcrumbPage = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("span", __assign({ ref: ref, role: "link", "aria-disabled": "true", "aria-current": "page", className: (0, utils_1.cn)("font-normal text-foreground", className) }, props)));
    });
    exports.BreadcrumbPage = BreadcrumbPage;
    BreadcrumbPage.displayName = "BreadcrumbPage";
    var BreadcrumbSeparator = function (_a) {
        var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
        return ((0, jsx_runtime_1.jsx)("li", __assign({ role: "presentation", "aria-hidden": "true", className: (0, utils_1.cn)("[&>svg]:w-3.5 [&>svg]:h-3.5", className) }, props, { children: children !== null && children !== void 0 ? children : (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, {}) })));
    };
    exports.BreadcrumbSeparator = BreadcrumbSeparator;
    BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
    var BreadcrumbEllipsis = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsxs)("span", __assign({ role: "presentation", "aria-hidden": "true", className: (0, utils_1.cn)("flex h-9 w-9 items-center justify-center", className) }, props, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MoreHorizontal, { className: "h-4 w-4" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "More" })] })));
    };
    exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
    BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2JyZWFkY3J1bWIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9BLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBS2pDLFVBQUMsRUFBWSxFQUFFLEdBQUc7WUFBWixLQUFLLGNBQVYsRUFBWSxDQUFGO1FBQVksT0FBQSx5Q0FBSyxHQUFHLEVBQUUsR0FBRyxnQkFBYSxZQUFZLElBQUssS0FBSyxFQUFJLENBQUE7S0FBQSxDQUFDLENBQUM7SUFnRzdFLGdDQUFVO0lBL0ZaLFVBQVUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO0lBRXRDLElBQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3JDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx3Q0FDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCwwRkFBMEYsRUFDMUYsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQWtGRCx3Q0FBYztJQWpGaEIsY0FBYyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztJQUU5QyxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdyQyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsd0NBQ0UsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsa0NBQWtDLEVBQUUsU0FBUyxDQUFDLElBQ3hELEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUF1RUQsd0NBQWM7SUF0RWhCLGNBQWMsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7SUFFOUMsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FLckMsVUFBQyxFQUFnQyxFQUFFLEdBQUc7UUFBbkMsSUFBQSxPQUFPLGFBQUEsRUFBRSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQTlCLHdCQUFnQyxDQUFGO1FBQy9CLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUJBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBRWxDLE9BQU8sQ0FDTCx1QkFBQyxJQUFJLGFBQ0gsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMseUNBQXlDLEVBQUUsU0FBUyxDQUFDLElBQy9ELEtBQUssRUFDVCxDQUNILENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQXNERCx3Q0FBYztJQXJEaEIsY0FBYyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztJQUU5QyxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdyQyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsMENBQ0UsR0FBRyxFQUFFLEdBQUcsRUFDUixJQUFJLEVBQUMsTUFBTSxtQkFDRyxNQUFNLGtCQUNQLE1BQU0sRUFDbkIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLDZCQUE2QixFQUFFLFNBQVMsQ0FBQyxJQUNuRCxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBd0NELHdDQUFjO0lBdkNoQixjQUFjLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDO0lBRTlDLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxFQUlBO1FBSDNCLElBQUEsUUFBUSxjQUFBLEVBQ1IsU0FBUyxlQUFBLEVBQ04sS0FBSyxjQUhtQix5QkFJNUIsQ0FEUztRQUN3QixPQUFBLENBQ2hDLHdDQUNFLElBQUksRUFBQyxjQUFjLGlCQUNQLE1BQU0sRUFDbEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLDZCQUE2QixFQUFFLFNBQVMsQ0FBQyxJQUNuRCxLQUFLLGNBRVIsUUFBUSxhQUFSLFFBQVEsY0FBUixRQUFRLEdBQUksdUJBQUMsMkJBQVksS0FBRyxJQUMxQixDQUNOLENBQUE7S0FBQSxDQUFDO0lBeUJBLGtEQUFtQjtJQXhCckIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDO0lBRXhELElBQU0sa0JBQWtCLEdBQUcsVUFBQyxFQUdHO1FBRjdCLElBQUEsU0FBUyxlQUFBLEVBQ04sS0FBSyxjQUZrQixhQUczQixDQURTO1FBQzBCLE9BQUEsQ0FDbEMsMkNBQ0UsSUFBSSxFQUFDLGNBQWMsaUJBQ1AsTUFBTSxFQUNsQixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsMENBQTBDLEVBQUUsU0FBUyxDQUFDLElBQ2hFLEtBQUssZUFFVCx1QkFBQyw2QkFBYyxJQUFDLFNBQVMsRUFBQyxTQUFTLEdBQUcsRUFDdEMsaUNBQU0sU0FBUyxFQUFDLFNBQVMscUJBQVksS0FDaEMsQ0FDUixDQUFBO0tBQUEsQ0FBQztJQVVBLGdEQUFrQjtJQVRwQixrQkFBa0IsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPGFtZC1tb2R1bGUgbmFtZT1cInVpL2JyZWFkY3J1bWJcIi8+XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNsb3QgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjtcbmltcG9ydCB7IENoZXZyb25SaWdodCwgTW9yZUhvcml6b250YWwgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcInNyYy9saWIvdXRpbHNcIjtcblxuY29uc3QgQnJlYWRjcnVtYiA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxFbGVtZW50LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJuYXZcIj4gJiB7XG4gICAgc2VwYXJhdG9yPzogUmVhY3QuUmVhY3ROb2RlO1xuICB9XG4+KCh7IC4uLnByb3BzIH0sIHJlZikgPT4gPG5hdiByZWY9e3JlZn0gYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIiB7Li4ucHJvcHN9IC8+KTtcbkJyZWFkY3J1bWIuZGlzcGxheU5hbWUgPSBcIkJyZWFkY3J1bWJcIjtcblxuY29uc3QgQnJlYWRjcnVtYkxpc3QgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MT0xpc3RFbGVtZW50LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJvbFwiPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8b2xcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBicmVhay13b3JkcyB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBzbTpnYXAtMi41XCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkJyZWFkY3J1bWJMaXN0LmRpc3BsYXlOYW1lID0gXCJCcmVhZGNydW1iTGlzdFwiO1xuXG5jb25zdCBCcmVhZGNydW1iSXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxMSUVsZW1lbnQsXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImxpXCI+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxsaVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuQnJlYWRjcnVtYkl0ZW0uZGlzcGxheU5hbWUgPSBcIkJyZWFkY3J1bWJJdGVtXCI7XG5cbmNvbnN0IEJyZWFkY3J1bWJMaW5rID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTEFuY2hvckVsZW1lbnQsXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImFcIj4gJiB7XG4gICAgYXNDaGlsZD86IGJvb2xlYW47XG4gIH1cbj4oKHsgYXNDaGlsZCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgY29uc3QgQ29tcCA9IGFzQ2hpbGQgPyBTbG90IDogXCJhXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2NuKFwidHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn0pO1xuQnJlYWRjcnVtYkxpbmsuZGlzcGxheU5hbWUgPSBcIkJyZWFkY3J1bWJMaW5rXCI7XG5cbmNvbnN0IEJyZWFkY3J1bWJQYWdlID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFNwYW5FbGVtZW50LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJzcGFuXCI+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxzcGFuXG4gICAgcmVmPXtyZWZ9XG4gICAgcm9sZT1cImxpbmtcIlxuICAgIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcbiAgICBjbGFzc05hbWU9e2NuKFwiZm9udC1ub3JtYWwgdGV4dC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5CcmVhZGNydW1iUGFnZS5kaXNwbGF5TmFtZSA9IFwiQnJlYWRjcnVtYlBhZ2VcIjtcblxuY29uc3QgQnJlYWRjcnVtYlNlcGFyYXRvciA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImxpXCI+KSA9PiAoXG4gIDxsaVxuICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgY2xhc3NOYW1lPXtjbihcIlsmPnN2Z106dy0zLjUgWyY+c3ZnXTpoLTMuNVwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbiA/PyA8Q2hldnJvblJpZ2h0IC8+fVxuICA8L2xpPlxuKTtcbkJyZWFkY3J1bWJTZXBhcmF0b3IuZGlzcGxheU5hbWUgPSBcIkJyZWFkY3J1bWJTZXBhcmF0b3JcIjtcblxuY29uc3QgQnJlYWRjcnVtYkVsbGlwc2lzID0gKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJzcGFuXCI+KSA9PiAoXG4gIDxzcGFuXG4gICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBjbGFzc05hbWU9e2NuKFwiZmxleCBoLTkgdy05IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxNb3JlSG9yaXpvbnRhbCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TW9yZTwvc3Bhbj5cbiAgPC9zcGFuPlxuKTtcbkJyZWFkY3J1bWJFbGxpcHNpcy5kaXNwbGF5TmFtZSA9IFwiQnJlYWRjcnVtYkVsaXBzc2lzXCI7XG5cbmV4cG9ydCB7XG4gIEJyZWFkY3J1bWIsXG4gIEJyZWFkY3J1bWJMaXN0LFxuICBCcmVhZGNydW1iSXRlbSxcbiAgQnJlYWRjcnVtYkxpbmssXG4gIEJyZWFkY3J1bWJQYWdlLFxuICBCcmVhZGNydW1iU2VwYXJhdG9yLFxuICBCcmVhZGNydW1iRWxsaXBzaXMsXG59O1xuIl19