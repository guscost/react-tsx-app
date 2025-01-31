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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUlBLGdCQUVDO0lBRkQsU0FBZ0IsRUFBRTtRQUFDLGdCQUF1QjthQUF2QixVQUF1QixFQUF2QixxQkFBdUIsRUFBdkIsSUFBdUI7WUFBdkIsMkJBQXVCOztRQUN4QyxPQUFPLElBQUEsd0JBQU8sRUFBQyxJQUFBLFdBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMifQ==