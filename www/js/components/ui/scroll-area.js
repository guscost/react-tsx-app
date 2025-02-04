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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-scroll-area", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, ScrollAreaPrimitive, utils_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWFyZWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9zY3JvbGwtYXJlYS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxZQUFZLENBQUM7Ozs7OztJQU9iLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2pDLFVBQUMsRUFBaUMsRUFBRSxHQUFHO1FBQXBDLElBQUEsU0FBUyxlQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUssS0FBSyxjQUEvQix5QkFBaUMsQ0FBRjtRQUFZLE9BQUEsQ0FDNUMsd0JBQUMsbUJBQW1CLENBQUMsSUFBSSxhQUN2QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQywwQkFBMEIsRUFBRSxTQUFTLENBQUMsSUFDaEQsS0FBSyxlQUVULHVCQUFDLG1CQUFtQixDQUFDLFFBQVEsSUFBQyxTQUFTLEVBQUMsaUNBQWlDLFlBQ3RFLFFBQVEsR0FDb0IsRUFDL0IsdUJBQUMsU0FBUyxLQUFHLEVBQ2IsdUJBQUMsbUJBQW1CLENBQUMsTUFBTSxLQUFHLEtBQ0wsQ0FDNUIsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQXlCTSxnQ0FBVTtJQXhCbkIsVUFBVSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRTlELElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2hDLFVBQUMsRUFBaUQsRUFBRSxHQUFHO1FBQXBELElBQUEsU0FBUyxlQUFBLEVBQUUsbUJBQXdCLEVBQXhCLFdBQVcsbUJBQUcsVUFBVSxLQUFBLEVBQUssS0FBSyxjQUEvQyw0QkFBaUQsQ0FBRjtRQUFZLE9BQUEsQ0FDNUQsdUJBQUMsbUJBQW1CLENBQUMsbUJBQW1CLGFBQ3RDLEdBQUcsRUFBRSxHQUFHLEVBQ1IsV0FBVyxFQUFFLFdBQVcsRUFDeEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLCtDQUErQyxFQUMvQyxXQUFXLEtBQUssVUFBVTtnQkFDeEIsb0RBQW9ELEVBQ3RELFdBQVcsS0FBSyxZQUFZO2dCQUMxQixzREFBc0QsRUFDeEQsU0FBUyxDQUNWLElBQ0csS0FBSyxjQUVULHVCQUFDLG1CQUFtQixDQUFDLGVBQWUsSUFBQyxTQUFTLEVBQUMsd0NBQXdDLEdBQUcsSUFDbEQsQ0FDM0MsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQUdrQiw4QkFBUztJQUY5QixTQUFTLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFNjcm9sbEFyZWFQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zY3JvbGwtYXJlYVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBTY3JvbGxBcmVhID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2Nyb2xsQXJlYVByaW1pdGl2ZS5Sb290PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTY3JvbGxBcmVhUHJpbWl0aXZlLlJvb3Q+XG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5Sb290XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxTY3JvbGxBcmVhUHJpbWl0aXZlLlZpZXdwb3J0IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgcm91bmRlZC1baW5oZXJpdF1cIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1Njcm9sbEFyZWFQcmltaXRpdmUuVmlld3BvcnQ+XG4gICAgPFNjcm9sbEJhciAvPlxuICAgIDxTY3JvbGxBcmVhUHJpbWl0aXZlLkNvcm5lciAvPlxuICA8L1Njcm9sbEFyZWFQcmltaXRpdmUuUm9vdD5cbikpO1xuU2Nyb2xsQXJlYS5kaXNwbGF5TmFtZSA9IFNjcm9sbEFyZWFQcmltaXRpdmUuUm9vdC5kaXNwbGF5TmFtZTtcblxuY29uc3QgU2Nyb2xsQmFyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2Nyb2xsQXJlYVByaW1pdGl2ZS5TY3JvbGxBcmVhU2Nyb2xsYmFyPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTY3JvbGxBcmVhUHJpbWl0aXZlLlNjcm9sbEFyZWFTY3JvbGxiYXI+XG4+KCh7IGNsYXNzTmFtZSwgb3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCIsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5TY3JvbGxBcmVhU2Nyb2xsYmFyXG4gICAgcmVmPXtyZWZ9XG4gICAgb3JpZW50YXRpb249e29yaWVudGF0aW9ufVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggdG91Y2gtbm9uZSBzZWxlY3Qtbm9uZSB0cmFuc2l0aW9uLWNvbG9yc1wiLFxuICAgICAgb3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiAmJlxuICAgICAgICBcImgtZnVsbCB3LTIuNSBib3JkZXItbCBib3JkZXItbC10cmFuc3BhcmVudCBwLVsxcHhdXCIsXG4gICAgICBvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiZcbiAgICAgICAgXCJoLTIuNSBmbGV4LWNvbCBib3JkZXItdCBib3JkZXItdC10cmFuc3BhcmVudCBwLVsxcHhdXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8U2Nyb2xsQXJlYVByaW1pdGl2ZS5TY3JvbGxBcmVhVGh1bWIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xIHJvdW5kZWQtZnVsbCBiZy1ib3JkZXJcIiAvPlxuICA8L1Njcm9sbEFyZWFQcmltaXRpdmUuU2Nyb2xsQXJlYVNjcm9sbGJhcj5cbikpO1xuU2Nyb2xsQmFyLmRpc3BsYXlOYW1lID0gU2Nyb2xsQXJlYVByaW1pdGl2ZS5TY3JvbGxBcmVhU2Nyb2xsYmFyLmRpc3BsYXlOYW1lO1xuXG5leHBvcnQgeyBTY3JvbGxBcmVhLCBTY3JvbGxCYXIgfTtcbiJdfQ==