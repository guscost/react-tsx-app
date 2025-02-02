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
define("ui/scroll-area", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-scroll-area", "lib/utils"], function (require, exports, jsx_runtime_1, React, ScrollAreaPrimitive, utils_1) {
    /// <amd-module name="ui/scroll-area"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScrollBar = exports.ScrollArea = void 0;
    React = __importStar(React);
    ScrollAreaPrimitive = __importStar(ScrollAreaPrimitive);
    var ScrollArea = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
        return ((0, jsx_runtime_1.jsxs)(ScrollAreaPrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)("relative overflow-hidden", className) }, props, { children: [(0, jsx_runtime_1.jsx)(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children: children }), (0, jsx_runtime_1.jsx)(ScrollBar, {}), (0, jsx_runtime_1.jsx)(ScrollAreaPrimitive.Corner, {})] })));
    });
    exports.ScrollArea = ScrollArea;
    ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
    var ScrollBar = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.orientation, orientation = _b === void 0 ? "vertical" : _b, props = __rest(_a, ["className", "orientation"]);
        return ((0, jsx_runtime_1.jsx)(ScrollAreaPrimitive.ScrollAreaScrollbar, __assign({ ref: ref, orientation: orientation, className: (0, utils_1.cn)("flex touch-none select-none transition-colors", orientation === "vertical" &&
                "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" &&
                "h-2.5 flex-col border-t border-t-transparent p-[1px]", className) }, props, { children: (0, jsx_runtime_1.jsx)(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }) })));
    });
    exports.ScrollBar = ScrollBar;
    ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWFyZWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9zY3JvbGwtYXJlYS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSx1Q0FBdUM7SUFDdkMsWUFBWSxDQUFDOzs7Ozs7SUFPYixJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdqQyxVQUFDLEVBQWlDLEVBQUUsR0FBRztRQUFwQyxJQUFBLFNBQVMsZUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFLLEtBQUssY0FBL0IseUJBQWlDLENBQUY7UUFBWSxPQUFBLENBQzVDLHdCQUFDLG1CQUFtQixDQUFDLElBQUksYUFDdkIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLElBQ2hELEtBQUssZUFFVCx1QkFBQyxtQkFBbUIsQ0FBQyxRQUFRLElBQUMsU0FBUyxFQUFDLGlDQUFpQyxZQUN0RSxRQUFRLEdBQ29CLEVBQy9CLHVCQUFDLFNBQVMsS0FBRyxFQUNiLHVCQUFDLG1CQUFtQixDQUFDLE1BQU0sS0FBRyxLQUNMLENBQzVCLENBQUE7S0FBQSxDQUFDLENBQUM7SUF5Qk0sZ0NBQVU7SUF4Qm5CLFVBQVUsQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUU5RCxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdoQyxVQUFDLEVBQWlELEVBQUUsR0FBRztRQUFwRCxJQUFBLFNBQVMsZUFBQSxFQUFFLG1CQUF3QixFQUF4QixXQUFXLG1CQUFHLFVBQVUsS0FBQSxFQUFLLEtBQUssY0FBL0MsNEJBQWlELENBQUY7UUFBWSxPQUFBLENBQzVELHVCQUFDLG1CQUFtQixDQUFDLG1CQUFtQixhQUN0QyxHQUFHLEVBQUUsR0FBRyxFQUNSLFdBQVcsRUFBRSxXQUFXLEVBQ3hCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCwrQ0FBK0MsRUFDL0MsV0FBVyxLQUFLLFVBQVU7Z0JBQ3hCLG9EQUFvRCxFQUN0RCxXQUFXLEtBQUssWUFBWTtnQkFDMUIsc0RBQXNELEVBQ3hELFNBQVMsQ0FDVixJQUNHLEtBQUssY0FFVCx1QkFBQyxtQkFBbUIsQ0FBQyxlQUFlLElBQUMsU0FBUyxFQUFDLHdDQUF3QyxHQUFHLElBQ2xELENBQzNDLENBQUE7S0FBQSxDQUFDLENBQUM7SUFHa0IsOEJBQVM7SUFGOUIsU0FBUyxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPGFtZC1tb2R1bGUgbmFtZT1cInVpL3Njcm9sbC1hcmVhXCIvPlxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgU2Nyb2xsQXJlYVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNjcm9sbC1hcmVhXCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcInNyYy9saWIvdXRpbHNcIjtcblxuY29uc3QgU2Nyb2xsQXJlYSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNjcm9sbEFyZWFQcmltaXRpdmUuUm9vdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2Nyb2xsQXJlYVByaW1pdGl2ZS5Sb290PlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFNjcm9sbEFyZWFQcmltaXRpdmUuUm9vdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5WaWV3cG9ydCBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtW2luaGVyaXRdXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TY3JvbGxBcmVhUHJpbWl0aXZlLlZpZXdwb3J0PlxuICAgIDxTY3JvbGxCYXIgLz5cbiAgICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5Db3JuZXIgLz5cbiAgPC9TY3JvbGxBcmVhUHJpbWl0aXZlLlJvb3Q+XG4pKTtcblNjcm9sbEFyZWEuZGlzcGxheU5hbWUgPSBTY3JvbGxBcmVhUHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWU7XG5cbmNvbnN0IFNjcm9sbEJhciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNjcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVNjcm9sbGJhcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2Nyb2xsQXJlYVByaW1pdGl2ZS5TY3JvbGxBcmVhU2Nyb2xsYmFyPlxuPigoeyBjbGFzc05hbWUsIG9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFNjcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVNjcm9sbGJhclxuICAgIHJlZj17cmVmfVxuICAgIG9yaWVudGF0aW9uPXtvcmllbnRhdGlvbn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IHRvdWNoLW5vbmUgc2VsZWN0LW5vbmUgdHJhbnNpdGlvbi1jb2xvcnNcIixcbiAgICAgIG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgJiZcbiAgICAgICAgXCJoLWZ1bGwgdy0yLjUgYm9yZGVyLWwgYm9yZGVyLWwtdHJhbnNwYXJlbnQgcC1bMXB4XVwiLFxuICAgICAgb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICYmXG4gICAgICAgIFwiaC0yLjUgZmxleC1jb2wgYm9yZGVyLXQgYm9yZGVyLXQtdHJhbnNwYXJlbnQgcC1bMXB4XVwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPFNjcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVRodW1iIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSByb3VuZGVkLWZ1bGwgYmctYm9yZGVyXCIgLz5cbiAgPC9TY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFTY3JvbGxiYXI+XG4pKTtcblNjcm9sbEJhci5kaXNwbGF5TmFtZSA9IFNjcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVNjcm9sbGJhci5kaXNwbGF5TmFtZTtcblxuZXhwb3J0IHsgU2Nyb2xsQXJlYSwgU2Nyb2xsQmFyIH07XG4iXX0=