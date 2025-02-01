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
define("ui/input", ["require", "exports", "react/jsx-runtime", "react", "lib/utils"], function (require, exports, jsx_runtime_1, React, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Input = void 0;
    React = __importStar(React);
    var Input = React.forwardRef(function (_a, ref) {
        var className = _a.className, type = _a.type, props = __rest(_a, ["className", "type"]);
        return ((0, jsx_runtime_1.jsx)("input", __assign({ type: type, className: (0, utils_1.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className), ref: ref }, props)));
    });
    exports.Input = Input;
    Input.displayName = "Input";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9pbnB1dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FDNUIsVUFBQyxFQUE2QixFQUFFLEdBQUc7UUFBaEMsSUFBQSxTQUFTLGVBQUEsRUFBRSxJQUFJLFVBQUEsRUFBSyxLQUFLLGNBQTNCLHFCQUE2QixDQUFGO1FBQzFCLE9BQU8sQ0FDTCwyQ0FDRSxJQUFJLEVBQUUsSUFBSSxFQUNWLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx5V0FBeVcsRUFDelcsU0FBUyxDQUNWLEVBQ0QsR0FBRyxFQUFFLEdBQUcsSUFDSixLQUFLLEVBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQyxDQUNGLENBQUM7SUFHTyxzQkFBSztJQUZkLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxhbWQtbW9kdWxlIG5hbWU9XCJ1aS9pbnB1dFwiLz5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzcmMvbGliL3V0aWxzXCI7XG5cbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MSW5wdXRFbGVtZW50LCBSZWFjdC5Db21wb25lbnRQcm9wczxcImlucHV0XCI+PihcbiAgKHsgY2xhc3NOYW1lLCB0eXBlLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJmbGV4IGgtOSB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWlucHV0IGJnLXRyYW5zcGFyZW50IHB4LTMgcHktMSB0ZXh0LWJhc2Ugc2hhZG93LXNtIHRyYW5zaXRpb24tY29sb3JzIGZpbGU6Ym9yZGVyLTAgZmlsZTpiZy10cmFuc3BhcmVudCBmaWxlOnRleHQtc20gZmlsZTpmb250LW1lZGl1bSBmaWxlOnRleHQtZm9yZWdyb3VuZCBwbGFjZWhvbGRlcjp0ZXh0LW11dGVkLWZvcmVncm91bmQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTEgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTAgbWQ6dGV4dC1zbVwiLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcbik7XG5JbnB1dC5kaXNwbGF5TmFtZSA9IFwiSW5wdXRcIjtcblxuZXhwb3J0IHsgSW5wdXQgfTtcbiJdfQ==