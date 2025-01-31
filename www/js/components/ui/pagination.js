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
define("ui/pagination", ["require", "exports", "react/jsx-runtime", "react", "lucide-react", "lib/utils", "ui/button"], function (require, exports, jsx_runtime_1, React, lucide_react_1, utils_1, button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaginationEllipsis = exports.PaginationNext = exports.PaginationPrevious = exports.PaginationItem = exports.PaginationLink = exports.PaginationContent = exports.Pagination = void 0;
    React = __importStar(React);
    var Pagination = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("nav", __assign({ role: "navigation", "aria-label": "pagination", className: (0, utils_1.cn)("mx-auto flex w-full justify-center", className) }, props)));
    };
    exports.Pagination = Pagination;
    Pagination.displayName = "Pagination";
    var PaginationContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("ul", __assign({ ref: ref, className: (0, utils_1.cn)("flex flex-row items-center gap-1", className) }, props)));
    });
    exports.PaginationContent = PaginationContent;
    PaginationContent.displayName = "PaginationContent";
    var PaginationItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("li", __assign({ ref: ref, className: (0, utils_1.cn)("", className) }, props)));
    });
    exports.PaginationItem = PaginationItem;
    PaginationItem.displayName = "PaginationItem";
    var PaginationLink = function (_a) {
        var className = _a.className, isActive = _a.isActive, _b = _a.size, size = _b === void 0 ? "icon" : _b, props = __rest(_a, ["className", "isActive", "size"]);
        return ((0, jsx_runtime_1.jsx)("a", __assign({ "aria-current": isActive ? "page" : undefined, className: (0, utils_1.cn)((0, button_1.buttonVariants)({
                variant: isActive ? "outline" : "ghost",
                size: size,
            }), className) }, props)));
    };
    exports.PaginationLink = PaginationLink;
    PaginationLink.displayName = "PaginationLink";
    var PaginationPrevious = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsxs)(PaginationLink, __assign({ "aria-label": "Go to previous page", size: "default", className: (0, utils_1.cn)("gap-1 pl-2.5", className) }, props, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ChevronLeft, { className: "h-4 w-4" }), (0, jsx_runtime_1.jsx)("span", { children: "Previous" })] })));
    };
    exports.PaginationPrevious = PaginationPrevious;
    PaginationPrevious.displayName = "PaginationPrevious";
    var PaginationNext = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsxs)(PaginationLink, __assign({ "aria-label": "Go to next page", size: "default", className: (0, utils_1.cn)("gap-1 pr-2.5", className) }, props, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Next" }), (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { className: "h-4 w-4" })] })));
    };
    exports.PaginationNext = PaginationNext;
    PaginationNext.displayName = "PaginationNext";
    var PaginationEllipsis = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsxs)("span", __assign({ "aria-hidden": true, className: (0, utils_1.cn)("flex h-9 w-9 items-center justify-center", className) }, props, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MoreHorizontal, { className: "h-4 w-4" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "More pages" })] })));
    };
    exports.PaginationEllipsis = PaginationEllipsis;
    PaginationEllipsis.displayName = "PaginationEllipsis";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL3BhZ2luYXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9BLElBQU0sVUFBVSxHQUFHLFVBQUMsRUFBb0Q7UUFBbEQsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBb0MsT0FBQSxDQUMzRSx5Q0FDRSxJQUFJLEVBQUMsWUFBWSxnQkFDTixZQUFZLEVBQ3ZCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxvQ0FBb0MsRUFBRSxTQUFTLENBQUMsSUFDMUQsS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUM7SUFnR0EsZ0NBQVU7SUEvRlosVUFBVSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7SUFFdEMsSUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUd4QyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsd0NBQ0UsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsa0NBQWtDLEVBQUUsU0FBUyxDQUFDLElBQ3hELEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFxRkQsOENBQWlCO0lBcEZuQixpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUM7SUFFcEQsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHckMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHdDQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsSUFBTSxLQUFLLEVBQUksQ0FDMUQsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQStFRCx3Q0FBYztJQTlFaEIsY0FBYyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztJQU85QyxJQUFNLGNBQWMsR0FBRyxVQUFDLEVBS0Y7UUFKcEIsSUFBQSxTQUFTLGVBQUEsRUFDVCxRQUFRLGNBQUEsRUFDUixZQUFhLEVBQWIsSUFBSSxtQkFBRyxNQUFNLEtBQUEsRUFDVixLQUFLLGNBSmMsaUNBS3ZCLENBRFM7UUFDaUIsT0FBQSxDQUN6Qix1REFDZ0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDM0MsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLElBQUEsdUJBQWMsRUFBQztnQkFDYixPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU87Z0JBQ3ZDLElBQUksTUFBQTthQUNMLENBQUMsRUFDRixTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQztJQXFEQSx3Q0FBYztJQXBEaEIsY0FBYyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztJQUU5QyxJQUFNLGtCQUFrQixHQUFHLFVBQUMsRUFHa0I7UUFGNUMsSUFBQSxTQUFTLGVBQUEsRUFDTixLQUFLLGNBRmtCLGFBRzNCLENBRFM7UUFDeUMsT0FBQSxDQUNqRCx3QkFBQyxjQUFjLDJCQUNGLHFCQUFxQixFQUNoQyxJQUFJLEVBQUMsU0FBUyxFQUNkLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLElBQ3BDLEtBQUssZUFFVCx1QkFBQywwQkFBVyxJQUFDLFNBQVMsRUFBQyxTQUFTLEdBQUcsRUFDbkMsd0RBQXFCLEtBQ04sQ0FDbEIsQ0FBQTtLQUFBLENBQUM7SUF1Q0EsZ0RBQWtCO0lBdENwQixrQkFBa0IsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUM7SUFFdEQsSUFBTSxjQUFjLEdBQUcsVUFBQyxFQUdzQjtRQUY1QyxJQUFBLFNBQVMsZUFBQSxFQUNOLEtBQUssY0FGYyxhQUd2QixDQURTO1FBQ3lDLE9BQUEsQ0FDakQsd0JBQUMsY0FBYywyQkFDRixpQkFBaUIsRUFDNUIsSUFBSSxFQUFDLFNBQVMsRUFDZCxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxJQUNwQyxLQUFLLGVBRVQsb0RBQWlCLEVBQ2pCLHVCQUFDLDJCQUFZLElBQUMsU0FBUyxFQUFDLFNBQVMsR0FBRyxLQUNyQixDQUNsQixDQUFBO0tBQUEsQ0FBQztJQXdCQSx3Q0FBYztJQXZCaEIsY0FBYyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztJQUU5QyxJQUFNLGtCQUFrQixHQUFHLFVBQUMsRUFHRztRQUY3QixJQUFBLFNBQVMsZUFBQSxFQUNOLEtBQUssY0FGa0IsYUFHM0IsQ0FEUztRQUMwQixPQUFBLENBQ2xDLGdFQUVFLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQywwQ0FBMEMsRUFBRSxTQUFTLENBQUMsSUFDaEUsS0FBSyxlQUVULHVCQUFDLDZCQUFjLElBQUMsU0FBUyxFQUFDLFNBQVMsR0FBRyxFQUN0QyxpQ0FBTSxTQUFTLEVBQUMsU0FBUywyQkFBa0IsS0FDdEMsQ0FDUixDQUFBO0tBQUEsQ0FBQztJQVVBLGdEQUFrQjtJQVRwQixrQkFBa0IsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMifQ==