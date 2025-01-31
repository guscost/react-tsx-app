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
define("Hero", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-select", "@radix-ui/react-icons"], function (require, exports, jsx_runtime_1, react_1, Select, react_icons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Hero;
    react_1 = __importStar(react_1);
    Select = __importStar(Select);
    var SelectItem = react_1.default.forwardRef(function (_a, forwardedRef) {
        var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
        return ((0, jsx_runtime_1.jsxs)(Select.Item, __assign({}, props, { ref: forwardedRef, children: [(0, jsx_runtime_1.jsx)(Select.ItemText, { children: children }), (0, jsx_runtime_1.jsx)(Select.ItemIndicator, { className: "SelectItemIndicator", children: (0, jsx_runtime_1.jsx)(react_icons_1.CheckIcon, {}) })] })));
    });
    function Hero() {
        var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Hello world x", count] }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return setCount(count + 1); }, children: "Again!" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)(Select.Root, { onValueChange: function (value) { return setCount(parseInt(value, 10)); }, children: [(0, jsx_runtime_1.jsxs)(Select.Trigger, { className: "SelectTrigger", "aria-label": "Number", children: [(0, jsx_runtime_1.jsx)(Select.Value, { placeholder: "Select a number..." }), (0, jsx_runtime_1.jsx)(Select.Icon, { className: "SelectIcon", children: (0, jsx_runtime_1.jsx)(react_icons_1.ChevronDownIcon, {}) })] }), (0, jsx_runtime_1.jsx)(Select.Portal, { children: (0, jsx_runtime_1.jsxs)(Select.Content, { className: "SelectContent", children: [(0, jsx_runtime_1.jsx)(Select.ScrollUpButton, { className: "SelectScrollButton", children: (0, jsx_runtime_1.jsx)(react_icons_1.ChevronUpIcon, {}) }), (0, jsx_runtime_1.jsxs)(Select.Viewport, { className: "SelectViewport", children: [(0, jsx_runtime_1.jsxs)(Select.Group, { children: [(0, jsx_runtime_1.jsx)(Select.Label, { className: "SelectLabel", children: "Small" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "1", children: "1" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "2", children: "2" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "3", children: "3" })] }), (0, jsx_runtime_1.jsx)(Select.Separator, { className: "SelectSeparator" }), (0, jsx_runtime_1.jsxs)(Select.Group, { children: [(0, jsx_runtime_1.jsx)(Select.Label, { className: "SelectLabel", children: "Medium" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "10", children: "10" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "11", children: "11" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "12", disabled: true, children: "12" })] }), (0, jsx_runtime_1.jsx)(Select.Separator, { className: "SelectSeparator" }), (0, jsx_runtime_1.jsxs)(Select.Group, { children: [(0, jsx_runtime_1.jsx)(Select.Label, { className: "SelectLabel", children: "Large" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "100", children: "100" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "101", children: "101" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "102", children: "102" })] })] }), (0, jsx_runtime_1.jsx)(Select.ScrollDownButton, { className: "SelectScrollButton", children: (0, jsx_runtime_1.jsx)(react_icons_1.ChevronDownIcon, {}) })] }) })] })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVyby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZXJvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JBLHVCQXdEQzs7O0lBekVELElBQU0sVUFBVSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBQ2xDLFVBQUMsRUFBeUQsRUFBRSxZQUF1QztRQUFoRyxJQUFBLFFBQVEsY0FBQSxFQUFFLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBL0IseUJBQWlDLENBQUY7UUFDL0IsT0FBTyxDQUNOLHdCQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQ1AsS0FBSyxJQUNULEdBQUcsRUFBRSxZQUFZLGFBRWpCLHVCQUFDLE1BQU0sQ0FBQyxRQUFRLGNBQUUsUUFBUSxHQUFtQixFQUM3Qyx1QkFBQyxNQUFNLENBQUMsYUFBYSxJQUFDLFNBQVMsRUFBQyxxQkFBcUIsWUFDcEQsdUJBQUMsdUJBQVMsS0FBRyxHQUNTLEtBQ1YsQ0FDZCxDQUFDO0lBQ0gsQ0FBQyxDQUNELENBQUM7SUFHRixTQUF3QixJQUFJO1FBQ3JCLElBQUEsS0FBb0IsSUFBQSxnQkFBUSxFQUFDLENBQUMsQ0FBQyxFQUE5QixLQUFLLFFBQUEsRUFBRSxRQUFRLFFBQWUsQ0FBQztRQUV0QyxPQUFPLENBQ04sNENBQ0MsNERBQWtCLEtBQUssSUFBTSxFQUM3QixtQ0FBUSxPQUFPLEVBQUUsY0FBTSxPQUFBLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLHVCQUFpQixFQUMzRCxnQ0FBSyxFQUNMLGdDQUFLLEVBRUwsd0JBQUMsTUFBTSxDQUFDLElBQUksSUFBQyxhQUFhLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUE3QixDQUE2QixhQUNqRSx3QkFBQyxNQUFNLENBQUMsT0FBTyxJQUFDLFNBQVMsRUFBQyxlQUFlLGdCQUFZLFFBQVEsYUFDNUQsdUJBQUMsTUFBTSxDQUFDLEtBQUssSUFBQyxXQUFXLEVBQUMsb0JBQW9CLEdBQUcsRUFDakQsdUJBQUMsTUFBTSxDQUFDLElBQUksSUFBQyxTQUFTLEVBQUMsWUFBWSxZQUNsQyx1QkFBQyw2QkFBZSxLQUFHLEdBQ04sSUFDRSxFQUNqQix1QkFBQyxNQUFNLENBQUMsTUFBTSxjQUNiLHdCQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUMsU0FBUyxFQUFDLGVBQWUsYUFDeEMsdUJBQUMsTUFBTSxDQUFDLGNBQWMsSUFBQyxTQUFTLEVBQUMsb0JBQW9CLFlBQ3BELHVCQUFDLDJCQUFhLEtBQUcsR0FDTSxFQUN4Qix3QkFBQyxNQUFNLENBQUMsUUFBUSxJQUFDLFNBQVMsRUFBQyxnQkFBZ0IsYUFDMUMsd0JBQUMsTUFBTSxDQUFDLEtBQUssZUFDWix1QkFBQyxNQUFNLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxhQUFhLHNCQUFxQixFQUMxRCx1QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLEdBQUcsa0JBQWUsRUFDcEMsdUJBQUMsVUFBVSxJQUFDLEtBQUssRUFBQyxHQUFHLGtCQUFlLEVBQ3BDLHVCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsR0FBRyxrQkFBZSxJQUN0QixFQUVmLHVCQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUMsU0FBUyxFQUFDLGlCQUFpQixHQUFHLEVBRWhELHdCQUFDLE1BQU0sQ0FBQyxLQUFLLGVBQ1osdUJBQUMsTUFBTSxDQUFDLEtBQUssSUFBQyxTQUFTLEVBQUMsYUFBYSx1QkFBc0IsRUFDM0QsdUJBQUMsVUFBVSxJQUFDLEtBQUssRUFBQyxJQUFJLG1CQUFnQixFQUN0Qyx1QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLElBQUksbUJBQWdCLEVBQ3RDLHVCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLFFBQVEseUJBQWdCLElBQ2pDLEVBRWYsdUJBQUMsTUFBTSxDQUFDLFNBQVMsSUFBQyxTQUFTLEVBQUMsaUJBQWlCLEdBQUcsRUFFaEQsd0JBQUMsTUFBTSxDQUFDLEtBQUssZUFDWix1QkFBQyxNQUFNLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxhQUFhLHNCQUFxQixFQUMxRCx1QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLEtBQUssb0JBQWlCLEVBQ3hDLHVCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsS0FBSyxvQkFBaUIsRUFDeEMsdUJBQUMsVUFBVSxJQUFDLEtBQUssRUFBQyxLQUFLLG9CQUFpQixJQUMxQixJQUNFLEVBQ2xCLHVCQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBQyxTQUFTLEVBQUMsb0JBQW9CLFlBQ3RELHVCQUFDLDZCQUFlLEtBQUcsR0FDTSxJQUNWLEdBQ0YsSUFDSCxJQUNULENBQ04sQ0FBQztJQUNILENBQUMifQ==