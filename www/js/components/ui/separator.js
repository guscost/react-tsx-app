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
define("ui/separator", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-separator", "lib/utils"], function (require, exports, jsx_runtime_1, React, SeparatorPrimitive, utils_1) {
    /// <amd-module name="ui/separator"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Separator = void 0;
    React = __importStar(React);
    SeparatorPrimitive = __importStar(SeparatorPrimitive);
    var Separator = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.orientation, orientation = _b === void 0 ? "horizontal" : _b, _c = _a.decorative, decorative = _c === void 0 ? true : _c, props = __rest(_a, ["className", "orientation", "decorative"]);
        return ((0, jsx_runtime_1.jsx)(SeparatorPrimitive.Root, __assign({ ref: ref, decorative: decorative, orientation: orientation, className: (0, utils_1.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className) }, props)));
    });
    exports.Separator = Separator;
    Separator.displayName = SeparatorPrimitive.Root.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VwYXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc2VwYXJhdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLHFDQUFxQztJQUNyQyxZQUFZLENBQUM7Ozs7OztJQU9iLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBSWhDLFVBQ0UsRUFBc0UsRUFDdEUsR0FBRztRQURELElBQUEsU0FBUyxlQUFBLEVBQUUsbUJBQTBCLEVBQTFCLFdBQVcsbUJBQUcsWUFBWSxLQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLEVBQUssS0FBSyxjQUFwRSwwQ0FBc0UsQ0FBRjtRQUVqRSxPQUFBLENBQ0gsdUJBQUMsa0JBQWtCLENBQUMsSUFBSSxhQUN0QixHQUFHLEVBQUUsR0FBRyxFQUNSLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLFdBQVcsRUFBRSxXQUFXLEVBQ3hCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxvQkFBb0IsRUFDcEIsV0FBVyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUNsRSxTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FDRixDQUFDO0lBR08sOEJBQVM7SUFGbEIsU0FBUyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxhbWQtbW9kdWxlIG5hbWU9XCJ1aS9zZXBhcmF0b3JcIi8+XG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBTZXBhcmF0b3JQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zZXBhcmF0b3JcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwic3JjL2xpYi91dGlsc1wiO1xuXG5jb25zdCBTZXBhcmF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTZXBhcmF0b3JQcmltaXRpdmUuUm9vdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2VwYXJhdG9yUHJpbWl0aXZlLlJvb3Q+XG4+KFxuICAoXG4gICAgeyBjbGFzc05hbWUsIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCIsIGRlY29yYXRpdmUgPSB0cnVlLCAuLi5wcm9wcyB9LFxuICAgIHJlZixcbiAgKSA9PiAoXG4gICAgPFNlcGFyYXRvclByaW1pdGl2ZS5Sb290XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGRlY29yYXRpdmU9e2RlY29yYXRpdmV9XG4gICAgICBvcmllbnRhdGlvbj17b3JpZW50YXRpb259XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInNocmluay0wIGJnLWJvcmRlclwiLFxuICAgICAgICBvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImgtWzFweF0gdy1mdWxsXCIgOiBcImgtZnVsbCB3LVsxcHhdXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSxcbik7XG5TZXBhcmF0b3IuZGlzcGxheU5hbWUgPSBTZXBhcmF0b3JQcmltaXRpdmUuUm9vdC5kaXNwbGF5TmFtZTtcblxuZXhwb3J0IHsgU2VwYXJhdG9yIH07XG4iXX0=