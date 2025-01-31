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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-toggle-group", "src/lib/utils", "@/components/ui/toggle"], function (require, exports, jsx_runtime_1, React, ToggleGroupPrimitive, utils_1, toggle_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToggleGroupItem = exports.ToggleGroup = void 0;
    React = __importStar(React);
    ToggleGroupPrimitive = __importStar(ToggleGroupPrimitive);
    var ToggleGroupContext = React.createContext({
        size: "default",
        variant: "default",
    });
    var ToggleGroup = React.forwardRef(function (_a, ref) {
        var className = _a.className, variant = _a.variant, size = _a.size, children = _a.children, props = __rest(_a, ["className", "variant", "size", "children"]);
        return ((0, jsx_runtime_1.jsx)(ToggleGroupPrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)("flex items-center justify-center gap-1", className) }, props, { children: (0, jsx_runtime_1.jsx)(ToggleGroupContext.Provider, { value: { variant: variant, size: size }, children: children }) })));
    });
    exports.ToggleGroup = ToggleGroup;
    ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
    var ToggleGroupItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, children = _a.children, variant = _a.variant, size = _a.size, props = __rest(_a, ["className", "children", "variant", "size"]);
        var context = React.useContext(ToggleGroupContext);
        return ((0, jsx_runtime_1.jsx)(ToggleGroupPrimitive.Item, __assign({ ref: ref, className: (0, utils_1.cn)((0, toggle_1.toggleVariants)({
                variant: context.variant || variant,
                size: context.size || size,
            }), className) }, props, { children: children })));
    });
    exports.ToggleGroupItem = ToggleGroupItem;
    ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvdG9nZ2xlLWdyb3VwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLFlBQVksQ0FBQzs7Ozs7O0lBU2IsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUU1QztRQUNBLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLFNBQVM7S0FDbkIsQ0FBQyxDQUFDO0lBRUgsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FJbEMsVUFBQyxFQUFnRCxFQUFFLEdBQUc7UUFBbkQsSUFBQSxTQUFTLGVBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLGNBQTlDLDRDQUFnRCxDQUFGO1FBQVksT0FBQSxDQUMzRCx1QkFBQyxvQkFBb0IsQ0FBQyxJQUFJLGFBQ3hCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLHdDQUF3QyxFQUFFLFNBQVMsQ0FBQyxJQUM5RCxLQUFLLGNBRVQsdUJBQUMsa0JBQWtCLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLFlBQ2xELFFBQVEsR0FDbUIsSUFDSixDQUM3QixDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBOEJNLGtDQUFXO0lBNUJwQixXQUFXLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFaEUsSUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FJdEMsVUFBQyxFQUFnRCxFQUFFLEdBQUc7UUFBbkQsSUFBQSxTQUFTLGVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxJQUFJLFVBQUEsRUFBSyxLQUFLLGNBQTlDLDRDQUFnRCxDQUFGO1FBQy9DLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUVyRCxPQUFPLENBQ0wsdUJBQUMsb0JBQW9CLENBQUMsSUFBSSxhQUN4QixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxJQUFBLHVCQUFjLEVBQUM7Z0JBQ2IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTztnQkFDbkMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSTthQUMzQixDQUFDLEVBQ0YsU0FBUyxDQUNWLElBQ0csS0FBSyxjQUVSLFFBQVEsSUFDaUIsQ0FDN0IsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBSW1CLDBDQUFlO0lBRnJDLGVBQWUsQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyJ9