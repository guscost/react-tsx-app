define("Hero", ["require", "exports", "react/jsx-runtime", "react"], function (require, exports, jsx_runtime_1, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Hero;
    function Hero() {
        var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Hello world x", count] }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return setCount(count + 1); }, children: "Again!" })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVyby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZXJvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQSx1QkFTQztJQVRELFNBQXdCLElBQUk7UUFDcEIsSUFBQSxLQUFvQixJQUFBLGdCQUFRLEVBQUMsQ0FBQyxDQUFDLEVBQTlCLEtBQUssUUFBQSxFQUFFLFFBQVEsUUFBZSxDQUFDO1FBRXRDLE9BQU8sQ0FDTCw0Q0FDRSw0REFBa0IsS0FBSyxJQUFNLEVBQzdCLG1DQUFRLE9BQU8sRUFBRSxjQUFNLE9BQUEsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsdUJBQWlCLElBQ3ZELENBQ1AsQ0FBQztJQUNKLENBQUMifQ==