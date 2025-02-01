define("lib/utils", ["require", "exports", "clsx", "tailwind-merge"], function (require, exports, clsx_1, tailwind_merge_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cn = cn;
    function cn() {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUlBLGdCQUVDO0lBRkQsU0FBZ0IsRUFBRTtRQUFDLGdCQUF1QjthQUF2QixVQUF1QixFQUF2QixxQkFBdUIsRUFBdkIsSUFBdUI7WUFBdkIsMkJBQXVCOztRQUN4QyxPQUFPLElBQUEsd0JBQU8sRUFBQyxJQUFBLFdBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPGFtZC1tb2R1bGUgbmFtZT1cImxpYi91dGlsc1wiLz5cbmltcG9ydCB7IGNsc3gsIHR5cGUgQ2xhc3NWYWx1ZSB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSBcInRhaWx3aW5kLW1lcmdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbiguLi5pbnB1dHM6IENsYXNzVmFsdWVbXSkge1xuICByZXR1cm4gdHdNZXJnZShjbHN4KGlucHV0cykpO1xufVxuIl19