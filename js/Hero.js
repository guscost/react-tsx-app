define("Hero", ["require", "exports", "react/jsx-runtime", "react"], function (require, exports, jsx_runtime_1, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Hero;
    function Hero() {
        var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Hello world x", count] }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return setCount(count + 1); }, children: "Again!" })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVyby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlcm8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUdBLHVCQVNDO0lBVEQsU0FBd0IsSUFBSTtRQUNwQixJQUFBLEtBQW9CLElBQUEsZ0JBQVEsRUFBQyxDQUFDLENBQUMsRUFBOUIsS0FBSyxRQUFBLEVBQUUsUUFBUSxRQUFlLENBQUM7UUFFdEMsT0FBTyxDQUNMLDRDQUNFLDREQUFrQixLQUFLLElBQU0sRUFDN0IsbUNBQVEsT0FBTyxFQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFuQixDQUFtQix1QkFBaUIsSUFDdkQsQ0FDUCxDQUFDO0lBQ0osQ0FBQyJ9