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
define("ui/avatar", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-avatar", "lib/utils"], function (require, exports, jsx_runtime_1, React, AvatarPrimitive, utils_1) {
    /// <amd-module name="ui/avatar"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AvatarFallback = exports.AvatarImage = exports.Avatar = void 0;
    React = __importStar(React);
    AvatarPrimitive = __importStar(AvatarPrimitive);
    var Avatar = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(AvatarPrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className) }, props)));
    });
    exports.Avatar = Avatar;
    Avatar.displayName = AvatarPrimitive.Root.displayName;
    var AvatarImage = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(AvatarPrimitive.Image, __assign({ ref: ref, className: (0, utils_1.cn)("aspect-square h-full w-full", className) }, props)));
    });
    exports.AvatarImage = AvatarImage;
    AvatarImage.displayName = AvatarPrimitive.Image.displayName;
    var AvatarFallback = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(AvatarPrimitive.Fallback, __assign({ ref: ref, className: (0, utils_1.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", className) }, props)));
    });
    exports.AvatarFallback = AvatarFallback;
    AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvYXZhdGFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLGtDQUFrQztJQUNsQyxZQUFZLENBQUM7Ozs7OztJQU9iLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBRzdCLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxlQUFlLENBQUMsSUFBSSxhQUNuQixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCwrREFBK0QsRUFDL0QsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQThCTSx3QkFBTTtJQTdCZixNQUFNLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRXRELElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2xDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxlQUFlLENBQUMsS0FBSyxhQUNwQixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyw2QkFBNkIsRUFBRSxTQUFTLENBQUMsSUFDbkQsS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQWtCYyxrQ0FBVztJQWpCNUIsV0FBVyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUU1RCxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdyQyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsdUJBQUMsZUFBZSxDQUFDLFFBQVEsYUFDdkIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsc0VBQXNFLEVBQ3RFLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFHMkIsd0NBQWM7SUFGNUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwidWkvYXZhdGFyXCIvPlxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgQXZhdGFyUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtYXZhdGFyXCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcInNyYy9saWIvdXRpbHNcIjtcblxuY29uc3QgQXZhdGFyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQXZhdGFyUHJpbWl0aXZlLlJvb3Q+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIEF2YXRhclByaW1pdGl2ZS5Sb290PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8QXZhdGFyUHJpbWl0aXZlLlJvb3RcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBmbGV4IGgtMTAgdy0xMCBzaHJpbmstMCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbkF2YXRhci5kaXNwbGF5TmFtZSA9IEF2YXRhclByaW1pdGl2ZS5Sb290LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBBdmF0YXJJbWFnZSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIEF2YXRhclByaW1pdGl2ZS5JbWFnZT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQXZhdGFyUHJpbWl0aXZlLkltYWdlPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8QXZhdGFyUHJpbWl0aXZlLkltYWdlXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcImFzcGVjdC1zcXVhcmUgaC1mdWxsIHctZnVsbFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuQXZhdGFySW1hZ2UuZGlzcGxheU5hbWUgPSBBdmF0YXJQcmltaXRpdmUuSW1hZ2UuZGlzcGxheU5hbWU7XG5cbmNvbnN0IEF2YXRhckZhbGxiYWNrID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQXZhdGFyUHJpbWl0aXZlLkZhbGxiYWNrPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBBdmF0YXJQcmltaXRpdmUuRmFsbGJhY2s+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxBdmF0YXJQcmltaXRpdmUuRmFsbGJhY2tcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGgtZnVsbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1tdXRlZFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5BdmF0YXJGYWxsYmFjay5kaXNwbGF5TmFtZSA9IEF2YXRhclByaW1pdGl2ZS5GYWxsYmFjay5kaXNwbGF5TmFtZTtcblxuZXhwb3J0IHsgQXZhdGFyLCBBdmF0YXJJbWFnZSwgQXZhdGFyRmFsbGJhY2sgfTtcbiJdfQ==