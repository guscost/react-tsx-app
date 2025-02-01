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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
define("hooks/use-toast", ["require", "exports", "react"], function (require, exports, React) {
    /// <amd-module name="hooks/use-toast"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reducer = void 0;
    exports.useToast = useToast;
    exports.toast = toast;
    React = __importStar(React);
    var TOAST_LIMIT = 1;
    var TOAST_REMOVE_DELAY = 1000000;
    var actionTypes = {
        ADD_TOAST: "ADD_TOAST",
        UPDATE_TOAST: "UPDATE_TOAST",
        DISMISS_TOAST: "DISMISS_TOAST",
        REMOVE_TOAST: "REMOVE_TOAST",
    };
    var count = 0;
    function genId() {
        count = (count + 1) % Number.MAX_SAFE_INTEGER;
        return count.toString();
    }
    var toastTimeouts = new Map();
    var addToRemoveQueue = function (toastId) {
        if (toastTimeouts.has(toastId)) {
            return;
        }
        var timeout = setTimeout(function () {
            toastTimeouts.delete(toastId);
            dispatch({
                type: "REMOVE_TOAST",
                toastId: toastId,
            });
        }, TOAST_REMOVE_DELAY);
        toastTimeouts.set(toastId, timeout);
    };
    var reducer = function (state, action) {
        switch (action.type) {
            case "ADD_TOAST":
                return __assign(__assign({}, state), { toasts: __spreadArray([action.toast], state.toasts, true).slice(0, TOAST_LIMIT) });
            case "UPDATE_TOAST":
                return __assign(__assign({}, state), { toasts: state.toasts.map(function (t) {
                        return t.id === action.toast.id ? __assign(__assign({}, t), action.toast) : t;
                    }) });
            case "DISMISS_TOAST": {
                var toastId_1 = action.toastId;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId_1) {
                    addToRemoveQueue(toastId_1);
                }
                else {
                    state.toasts.forEach(function (toast) {
                        addToRemoveQueue(toast.id);
                    });
                }
                return __assign(__assign({}, state), { toasts: state.toasts.map(function (t) {
                        return t.id === toastId_1 || toastId_1 === undefined
                            ? __assign(__assign({}, t), { open: false }) : t;
                    }) });
            }
            case "REMOVE_TOAST":
                if (action.toastId === undefined) {
                    return __assign(__assign({}, state), { toasts: [] });
                }
                return __assign(__assign({}, state), { toasts: state.toasts.filter(function (t) { return t.id !== action.toastId; }) });
        }
    };
    exports.reducer = reducer;
    var listeners = [];
    var memoryState = { toasts: [] };
    function dispatch(action) {
        memoryState = (0, exports.reducer)(memoryState, action);
        listeners.forEach(function (listener) {
            listener(memoryState);
        });
    }
    function toast(_a) {
        var props = __rest(_a, []);
        var id = genId();
        var update = function (props) {
            return dispatch({
                type: "UPDATE_TOAST",
                toast: __assign(__assign({}, props), { id: id }),
            });
        };
        var dismiss = function () { return dispatch({ type: "DISMISS_TOAST", toastId: id }); };
        dispatch({
            type: "ADD_TOAST",
            toast: __assign(__assign({}, props), { id: id, open: true, onOpenChange: function (open) {
                    if (!open)
                        dismiss();
                } }),
        });
        return {
            id: id,
            dismiss: dismiss,
            update: update,
        };
    }
    function useToast() {
        var _a = React.useState(memoryState), state = _a[0], setState = _a[1];
        React.useEffect(function () {
            listeners.push(setState);
            return function () {
                var index = listeners.indexOf(setState);
                if (index > -1) {
                    listeners.splice(index, 1);
                }
            };
        }, [state]);
        return __assign(__assign({}, state), { toast: toast, dismiss: function (toastId) { return dispatch({ type: "DISMISS_TOAST", toastId: toastId }); } });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXRvYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hvb2tzL3VzZS10b2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLHdDQUF3QztJQUN4QyxZQUFZLENBQUM7Ozs7SUE4TEosNEJBQVE7SUFBRSxzQkFBSzs7SUF2THhCLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN0QixJQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztJQVNuQyxJQUFNLFdBQVcsR0FBRztRQUNsQixTQUFTLEVBQUUsV0FBVztRQUN0QixZQUFZLEVBQUUsY0FBYztRQUM1QixhQUFhLEVBQUUsZUFBZTtRQUM5QixZQUFZLEVBQUUsY0FBYztLQUNwQixDQUFDO0lBRVgsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWQsU0FBUyxLQUFLO1FBQ1osS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUM5QyxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBMEJELElBQU0sYUFBYSxHQUFHLElBQUksR0FBRyxFQUF5QyxDQUFDO0lBRXZFLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxPQUFlO1FBQ3ZDLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQy9CLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsUUFBUSxDQUFDO2dCQUNQLElBQUksRUFBRSxjQUFjO2dCQUNwQixPQUFPLEVBQUUsT0FBTzthQUNqQixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsa0JBQWtCLENBQUMs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QUFPLFNBQUEsRUFBRSxDQUFDLEVBQTVDLENBQTRDLElBQzNFO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwiaG9va3MvdXNlLXRvYXN0XCIvPlxuXCJ1c2UgY2xpZW50XCI7XG5cbi8vIEluc3BpcmVkIGJ5IHJlYWN0LWhvdC10b2FzdCBsaWJyYXJ5XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHR5cGUgeyBUb2FzdEFjdGlvbkVsZW1lbnQsIFRvYXN0UHJvcHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvYXN0XCI7XG5cbmNvbnN0IFRPQVNUX0xJTUlUID0gMTtcbmNvbnN0IFRPQVNUX1JFTU9WRV9ERUxBWSA9IDEwMDAwMDA7XG5cbnR5cGUgVG9hc3RlclRvYXN0ID0gVG9hc3RQcm9wcyAmIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGRlc2NyaXB0aW9uPzogUmVhY3QuUmVhY3ROb2RlO1xuICBhY3Rpb24/OiBUb2FzdEFjdGlvbkVsZW1lbnQ7XG59O1xuXG5jb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgQUREX1RPQVNUOiBcIkFERF9UT0FTVFwiLFxuICBVUERBVEVfVE9BU1Q6IFwiVVBEQVRFX1RPQVNUXCIsXG4gIERJU01JU1NfVE9BU1Q6IFwiRElTTUlTU19UT0FTVFwiLFxuICBSRU1PVkVfVE9BU1Q6IFwiUkVNT1ZFX1RPQVNUXCIsXG59IGFzIGNvbnN0O1xuXG5sZXQgY291bnQgPSAwO1xuXG5mdW5jdGlvbiBnZW5JZCgpIHtcbiAgY291bnQgPSAoY291bnQgKyAxKSAlIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICByZXR1cm4gY291bnQudG9TdHJpbmcoKTtcbn1cblxudHlwZSBBY3Rpb25UeXBlID0gdHlwZW9mIGFjdGlvblR5cGVzO1xuXG50eXBlIEFjdGlvbiA9XG4gIHwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZVtcIkFERF9UT0FTVFwiXTtcbiAgICAgIHRvYXN0OiBUb2FzdGVyVG9hc3Q7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVbXCJVUERBVEVfVE9BU1RcIl07XG4gICAgICB0b2FzdDogUGFydGlhbDxUb2FzdGVyVG9hc3Q+O1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlW1wiRElTTUlTU19UT0FTVFwiXTtcbiAgICAgIHRvYXN0SWQ/OiBUb2FzdGVyVG9hc3RbXCJpZFwiXTtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZVtcIlJFTU9WRV9UT0FTVFwiXTtcbiAgICAgIHRvYXN0SWQ/OiBUb2FzdGVyVG9hc3RbXCJpZFwiXTtcbiAgICB9O1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICB0b2FzdHM6IFRvYXN0ZXJUb2FzdFtdO1xufVxuXG5jb25zdCB0b2FzdFRpbWVvdXRzID0gbmV3IE1hcDxzdHJpbmcsIFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+PigpO1xuXG5jb25zdCBhZGRUb1JlbW92ZVF1ZXVlID0gKHRvYXN0SWQ6IHN0cmluZykgPT4ge1xuICBpZiAodG9hc3RUaW1lb3V0cy5oYXModG9hc3RJZCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdG9hc3RUaW1lb3V0cy5kZWxldGUodG9hc3RJZCk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJSRU1PVkVfVE9BU1RcIixcbiAgICAgIHRvYXN0SWQ6IHRvYXN0SWQsXG4gICAgfSk7XG4gIH0sIFRPQVNUX1JFTU9WRV9ERUxBWSk7XG5cbiAgdG9hc3RUaW1lb3V0cy5zZXQodG9hc3RJZCwgdGltZW91dCk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogU3RhdGUgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkFERF9UT0FTVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvYXN0czogW2FjdGlvbi50b2FzdCwgLi4uc3RhdGUudG9hc3RzXS5zbGljZSgwLCBUT0FTVF9MSU1JVCksXG4gICAgICB9O1xuXG4gICAgY2FzZSBcIlVQREFURV9UT0FTVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvYXN0czogc3RhdGUudG9hc3RzLm1hcCgodCkgPT5cbiAgICAgICAgICB0LmlkID09PSBhY3Rpb24udG9hc3QuaWQgPyB7IC4uLnQsIC4uLmFjdGlvbi50b2FzdCB9IDogdCxcbiAgICAgICAgKSxcbiAgICAgIH07XG5cbiAgICBjYXNlIFwiRElTTUlTU19UT0FTVFwiOiB7XG4gICAgICBjb25zdCB7IHRvYXN0SWQgfSA9IGFjdGlvbjtcblxuICAgICAgLy8gISBTaWRlIGVmZmVjdHMgISAtIFRoaXMgY291bGQgYmUgZXh0cmFjdGVkIGludG8gYSBkaXNtaXNzVG9hc3QoKSBhY3Rpb24sXG4gICAgICAvLyBidXQgSSdsbCBrZWVwIGl0IGhlcmUgZm9yIHNpbXBsaWNpdHlcbiAgICAgIGlmICh0b2FzdElkKSB7XG4gICAgICAgIGFkZFRvUmVtb3ZlUXVldWUodG9hc3RJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS50b2FzdHMuZm9yRWFjaCgodG9hc3QpID0+IHtcbiAgICAgICAgICBhZGRUb1JlbW92ZVF1ZXVlKHRvYXN0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2FzdHM6IHN0YXRlLnRvYXN0cy5tYXAoKHQpID0+XG4gICAgICAgICAgdC5pZCA9PT0gdG9hc3RJZCB8fCB0b2FzdElkID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIC4uLnQsXG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogdCxcbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgXCJSRU1PVkVfVE9BU1RcIjpcbiAgICAgIGlmIChhY3Rpb24udG9hc3RJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdG9hc3RzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2FzdHM6IHN0YXRlLnRvYXN0cy5maWx0ZXIoKHQpID0+IHQuaWQgIT09IGFjdGlvbi50b2FzdElkKSxcbiAgICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IGxpc3RlbmVyczogQXJyYXk8KHN0YXRlOiBTdGF0ZSkgPT4gdm9pZD4gPSBbXTtcblxubGV0IG1lbW9yeVN0YXRlOiBTdGF0ZSA9IHsgdG9hc3RzOiBbXSB9O1xuXG5mdW5jdGlvbiBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICBtZW1vcnlTdGF0ZSA9IHJlZHVjZXIobWVtb3J5U3RhdGUsIGFjdGlvbik7XG4gIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVyKG1lbW9yeVN0YXRlKTtcbiAgfSk7XG59XG5cbnR5cGUgVG9hc3QgPSBPbWl0PFRvYXN0ZXJUb2FzdCwgXCJpZFwiPjtcblxuZnVuY3Rpb24gdG9hc3QoeyAuLi5wcm9wcyB9OiBUb2FzdCkge1xuICBjb25zdCBpZCA9IGdlbklkKCk7XG5cbiAgY29uc3QgdXBkYXRlID0gKHByb3BzOiBUb2FzdGVyVG9hc3QpID0+XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJVUERBVEVfVE9BU1RcIixcbiAgICAgIHRvYXN0OiB7IC4uLnByb3BzLCBpZCB9LFxuICAgIH0pO1xuICBjb25zdCBkaXNtaXNzID0gKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkRJU01JU1NfVE9BU1RcIiwgdG9hc3RJZDogaWQgfSk7XG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IFwiQUREX1RPQVNUXCIsXG4gICAgdG9hc3Q6IHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgaWQsXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgb25PcGVuQ2hhbmdlOiAob3BlbikgPT4ge1xuICAgICAgICBpZiAoIW9wZW4pIGRpc21pc3MoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpZDogaWQsXG4gICAgZGlzbWlzcyxcbiAgICB1cGRhdGUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVRvYXN0KCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPFN0YXRlPihtZW1vcnlTdGF0ZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChzZXRTdGF0ZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2Yoc2V0U3RhdGUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3N0YXRlXSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICB0b2FzdCxcbiAgICBkaXNtaXNzOiAodG9hc3RJZD86IHN0cmluZykgPT4gZGlzcGF0Y2goeyB0eXBlOiBcIkRJU01JU1NfVE9BU1RcIiwgdG9hc3RJZCB9KSxcbiAgfTtcbn1cblxuZXhwb3J0IHsgdXNlVG9hc3QsIHRvYXN0IH07XG4iXX0=