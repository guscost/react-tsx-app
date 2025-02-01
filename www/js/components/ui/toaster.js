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
define("ui/toaster", ["require", "exports", "react/jsx-runtime", "hooks/use-toast", "ui/toast"], function (require, exports, jsx_runtime_1, use_toast_1, toast_1) {
    /// <amd-module name="ui/toaster"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Toaster = Toaster;
    function Toaster() {
        var toasts = (0, use_toast_1.useToast)().toasts;
        return ((0, jsx_runtime_1.jsxs)(toast_1.ToastProvider, { children: [toasts.map(function (_a) {
                    var id = _a.id, title = _a.title, description = _a.description, action = _a.action, props = __rest(_a, ["id", "title", "description", "action"]);
                    return ((0, jsx_runtime_1.jsxs)(toast_1.Toast, __assign({}, props, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid gap-1", children: [title && (0, jsx_runtime_1.jsx)(toast_1.ToastTitle, { children: title }), description && ((0, jsx_runtime_1.jsx)(toast_1.ToastDescription, { children: description }))] }), action, (0, jsx_runtime_1.jsx)(toast_1.ToastClose, {})] }), id));
                }), (0, jsx_runtime_1.jsx)(toast_1.ToastViewport, {})] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL3RvYXN0ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsbUNBQW1DO0lBQ25DLFlBQVksQ0FBQzs7O0lBWWIsMEJBc0JDO0lBdEJELFNBQWdCLE9BQU87UUFDYixJQUFBLE1BQU0sR0FBSyxJQUFBLG9CQUFRLEdBQUUsT0FBZixDQUFnQjtRQUU5QixPQUFPLENBQ0wsd0JBQUMscUJBQWEsZUFDWCxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBNEM7b0JBQTFDLElBQUEsRUFBRSxRQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsV0FBVyxpQkFBQSxFQUFFLE1BQU0sWUFBQSxFQUFLLEtBQUssY0FBMUMsd0NBQTRDLENBQUY7b0JBQzlELE9BQU8sQ0FDTCx3QkFBQyxhQUFLLGVBQWMsS0FBSyxlQUN2QixpQ0FBSyxTQUFTLEVBQUMsWUFBWSxhQUN4QixLQUFLLElBQUksdUJBQUMsa0JBQVUsY0FBRSxLQUFLLEdBQWMsRUFDekMsV0FBVyxJQUFJLENBQ2QsdUJBQUMsd0JBQWdCLGNBQUUsV0FBVyxHQUFvQixDQUNuRCxJQUNHLEVBQ0wsTUFBTSxFQUNQLHVCQUFDLGtCQUFVLEtBQUcsTUFSSixFQUFFLENBU04sQ0FDVCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxFQUNGLHVCQUFDLHFCQUFhLEtBQUcsSUFDSCxDQUNqQixDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwidWkvdG9hc3RlclwiLz5cblwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJzcmMvaG9va3MvdXNlLXRvYXN0XCI7XG5pbXBvcnQge1xuICBUb2FzdCxcbiAgVG9hc3RDbG9zZSxcbiAgVG9hc3REZXNjcmlwdGlvbixcbiAgVG9hc3RQcm92aWRlcixcbiAgVG9hc3RUaXRsZSxcbiAgVG9hc3RWaWV3cG9ydCxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2FzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVG9hc3RlcigpIHtcbiAgY29uc3QgeyB0b2FzdHMgfSA9IHVzZVRvYXN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9hc3RQcm92aWRlcj5cbiAgICAgIHt0b2FzdHMubWFwKGZ1bmN0aW9uICh7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGFjdGlvbiwgLi4ucHJvcHMgfSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUb2FzdCBrZXk9e2lkfSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xXCI+XG4gICAgICAgICAgICAgIHt0aXRsZSAmJiA8VG9hc3RUaXRsZT57dGl0bGV9PC9Ub2FzdFRpdGxlPn1cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8VG9hc3REZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9Ub2FzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7YWN0aW9ufVxuICAgICAgICAgICAgPFRvYXN0Q2xvc2UgLz5cbiAgICAgICAgICA8L1RvYXN0PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8VG9hc3RWaWV3cG9ydCAvPlxuICAgIDwvVG9hc3RQcm92aWRlcj5cbiAgKTtcbn1cbiJdfQ==