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
define(["require", "exports", "react/jsx-runtime", "react", "utils"], function (require, exports, jsx_runtime_1, React, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardContent = exports.CardDescription = exports.CardTitle = exports.CardFooter = exports.CardHeader = exports.Card = void 0;
    React = __importStar(React);
    var Card = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, className: (0, utils_1.cn)("rounded-xl border bg-card text-card-foreground shadow", className) }, props)));
    });
    exports.Card = Card;
    Card.displayName = "Card";
    var CardHeader = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, className: (0, utils_1.cn)("flex flex-col space-y-1.5 p-6", className) }, props)));
    });
    exports.CardHeader = CardHeader;
    CardHeader.displayName = "CardHeader";
    var CardTitle = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, className: (0, utils_1.cn)("font-semibold leading-none tracking-tight", className) }, props)));
    });
    exports.CardTitle = CardTitle;
    CardTitle.displayName = "CardTitle";
    var CardDescription = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, className: (0, utils_1.cn)("text-sm text-muted-foreground", className) }, props)));
    });
    exports.CardDescription = CardDescription;
    CardDescription.displayName = "CardDescription";
    var CardContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, className: (0, utils_1.cn)("p-6 pt-0", className) }, props)));
    });
    exports.CardContent = CardContent;
    CardContent.displayName = "CardContent";
    var CardFooter = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, className: (0, utils_1.cn)("flex items-center p-6 pt-0", className) }, props)));
    });
    exports.CardFooter = CardFooter;
    CardFooter.displayName = "CardFooter";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2NhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlBLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBRzNCLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx5Q0FDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx1REFBdUQsRUFDdkQsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQTRERCxvQkFBSTtJQTNETixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUUxQixJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdqQyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMseUNBQ0UsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDLElBQ3JELEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFpREQsZ0NBQVU7SUFoRFosVUFBVSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7SUFFdEMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHaEMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHlDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLDJDQUEyQyxFQUFFLFNBQVMsQ0FBQyxJQUNqRSxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBdUNELDhCQUFTO0lBdENYLFNBQVMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBRXBDLElBQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3RDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx5Q0FDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQywrQkFBK0IsRUFBRSxTQUFTLENBQUMsSUFDckQsS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQTRCRCwwQ0FBZTtJQTNCakIsZUFBZSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQztJQUVoRCxJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdsQyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMseUNBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxJQUFNLEtBQUssRUFBSSxDQUNuRSxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBcUJELGtDQUFXO0lBcEJiLFdBQVcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO0lBRXhDLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2pDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx5Q0FDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUMsSUFDbEQsS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQU1ELGdDQUFVO0lBTFosVUFBVSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMifQ==