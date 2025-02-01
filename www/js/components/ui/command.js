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
define("ui/command", ["require", "exports", "react/jsx-runtime", "react", "cmdk", "lucide-react", "lib/utils", "ui/dialog"], function (require, exports, jsx_runtime_1, React, cmdk_1, lucide_react_1, utils_1, dialog_1) {
    /// <amd-module name="ui/command"/>
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommandSeparator = exports.CommandShortcut = exports.CommandItem = exports.CommandGroup = exports.CommandEmpty = exports.CommandList = exports.CommandInput = exports.CommandDialog = exports.Command = void 0;
    React = __importStar(React);
    var Command = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(cmdk_1.Command, __assign({ ref: ref, className: (0, utils_1.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className) }, props)));
    });
    exports.Command = Command;
    Command.displayName = cmdk_1.Command.displayName;
    var CommandDialog = function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        return ((0, jsx_runtime_1.jsx)(dialog_1.Dialog, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(dialog_1.DialogContent, { className: "overflow-hidden p-0", children: (0, jsx_runtime_1.jsx)(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: children }) }) })));
    };
    exports.CommandDialog = CommandDialog;
    var CommandInput = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), (0, jsx_runtime_1.jsx)(cmdk_1.Command.Input, __assign({ ref: ref, className: (0, utils_1.cn)("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className) }, props))] }));
    });
    exports.CommandInput = CommandInput;
    CommandInput.displayName = cmdk_1.Command.Input.displayName;
    var CommandList = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(cmdk_1.Command.List, __assign({ ref: ref, className: (0, utils_1.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", className) }, props)));
    });
    exports.CommandList = CommandList;
    CommandList.displayName = cmdk_1.Command.List.displayName;
    var CommandEmpty = React.forwardRef(function (props, ref) { return ((0, jsx_runtime_1.jsx)(cmdk_1.Command.Empty, __assign({ ref: ref, className: "py-6 text-center text-sm" }, props))); });
    exports.CommandEmpty = CommandEmpty;
    CommandEmpty.displayName = cmdk_1.Command.Empty.displayName;
    var CommandGroup = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(cmdk_1.Command.Group, __assign({ ref: ref, className: (0, utils_1.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className) }, props)));
    });
    exports.CommandGroup = CommandGroup;
    CommandGroup.displayName = cmdk_1.Command.Group.displayName;
    var CommandSeparator = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(cmdk_1.Command.Separator, __assign({ ref: ref, className: (0, utils_1.cn)("-mx-1 h-px bg-border", className) }, props)));
    });
    exports.CommandSeparator = CommandSeparator;
    CommandSeparator.displayName = cmdk_1.Command.Separator.displayName;
    var CommandItem = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)(cmdk_1.Command.Item, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className) }, props)));
    });
    exports.CommandItem = CommandItem;
    CommandItem.displayName = cmdk_1.Command.Item.displayName;
    var CommandShortcut = function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("span", __assign({ className: (0, utils_1.cn)("ml-auto text-xs tracking-widest text-muted-foreground", className) }, props)));
    };
    exports.CommandShortcut = CommandShortcut;
    CommandShortcut.displayName = "CommandShortcut";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2NvbW1hbmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsbUNBQW1DO0lBQ25DLFlBQVksQ0FBQzs7Ozs7SUFVYixJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUc5QixVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsdUJBQUMsY0FBZ0IsYUFDZixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCwyRkFBMkYsRUFDM0YsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQXlIRCwwQkFBTztJQXhIVCxPQUFPLENBQUMsV0FBVyxHQUFHLGNBQWdCLENBQUMsV0FBVyxDQUFDO0lBRW5ELElBQU0sYUFBYSxHQUFHLFVBQUMsRUFBbUM7UUFBakMsSUFBQSxRQUFRLGNBQUEsRUFBSyxLQUFLLGNBQXBCLFlBQXNCLENBQUY7UUFDekMsT0FBTyxDQUNMLHVCQUFDLGVBQU0sZUFBSyxLQUFLLGNBQ2YsdUJBQUMsc0JBQWEsSUFBQyxTQUFTLEVBQUMscUJBQXFCLFlBQzVDLHVCQUFDLE9BQU8sSUFBQyxTQUFTLEVBQUMsNldBQTZXLFlBQzdYLFFBQVEsR0FDRCxHQUNJLElBQ1QsQ0FDVixDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBNkdBLHNDQUFhO0lBM0dmLElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR25DLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyxpQ0FBSyxTQUFTLEVBQUMsaUNBQWlDLHdCQUFvQixFQUFFLGFBQ3BFLHVCQUFDLHFCQUFNLElBQUMsU0FBUyxFQUFDLGtDQUFrQyxHQUFHLEVBQ3ZELHVCQUFDLGNBQWdCLENBQUMsS0FBSyxhQUNyQixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx3SkFBd0osRUFDeEosU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULElBQ0UsQ0FDUCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBNkZELG9DQUFZO0lBM0ZkLFlBQVksQ0FBQyxXQUFXLEdBQUcsY0FBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBRTlELElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2xDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxjQUFnQixDQUFDLElBQUksYUFDcEIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsaURBQWlELEVBQUUsU0FBUyxDQUFDLElBQ3ZFLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFpRkQsa0NBQVc7SUEvRWIsV0FBVyxDQUFDLFdBQVcsR0FBRyxjQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFNUQsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHbkMsVUFBQyxLQUFLLEVBQUUsR0FBRyxJQUFLLE9BQUEsQ0FDaEIsdUJBQUMsY0FBZ0IsQ0FBQyxLQUFLLGFBQ3JCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFDLDBCQUEwQixJQUNoQyxLQUFLLEVBQ1QsQ0FDSCxFQU5pQixDQU1qQixDQUFDLENBQUM7SUFxRUQsb0NBQVk7SUFuRWQsWUFBWSxDQUFDLFdBQVcsR0FBRyxjQUFnQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFFOUQsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHbkMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHVCQUFDLGNBQWdCLENBQUMsS0FBSyxhQUNyQixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx3TkFBd04sRUFDeE4sU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQXNERCxvQ0FBWTtJQXBEZCxZQUFZLENBQUMsV0FBVyxHQUFHLGNBQWdCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUU5RCxJQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3ZDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxjQUFnQixDQUFDLFNBQVMsYUFDekIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsc0JBQXNCLEVBQUUsU0FBUyxDQUFDLElBQzVDLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUE0Q0QsNENBQWdCO0lBM0NsQixnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsY0FBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBRXRFLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2xDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx1QkFBQyxjQUFnQixDQUFDLElBQUksYUFDcEIsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gseVRBQXlULEVBQ3pULFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUEyQkQsa0NBQVc7SUF6QmIsV0FBVyxDQUFDLFdBQVcsR0FBRyxjQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFNUQsSUFBTSxlQUFlLEdBQUcsVUFBQyxFQUdlO1FBRnRDLElBQUEsU0FBUyxlQUFBLEVBQ04sS0FBSyxjQUZlLGFBR3hCLENBRFM7UUFFUixPQUFPLENBQ0wsMENBQ0UsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLHVEQUF1RCxFQUN2RCxTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBV0EsMENBQWU7SUFWakIsZUFBZSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwidWkvY29tbWFuZFwiLz5cblwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHR5cGUgRGlhbG9nUHJvcHMgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiO1xuaW1wb3J0IHsgQ29tbWFuZCBhcyBDb21tYW5kUHJpbWl0aXZlIH0gZnJvbSBcImNtZGtcIjtcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwic3JjL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgRGlhbG9nLCBEaWFsb2dDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kaWFsb2dcIjtcblxuY29uc3QgQ29tbWFuZCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbW1hbmRQcmltaXRpdmU+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENvbW1hbmRQcmltaXRpdmU+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDb21tYW5kUHJpbWl0aXZlXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZmxleCBoLWZ1bGwgdy1mdWxsIGZsZXgtY29sIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJnLXBvcG92ZXIgdGV4dC1wb3BvdmVyLWZvcmVncm91bmRcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuQ29tbWFuZC5kaXNwbGF5TmFtZSA9IENvbW1hbmRQcmltaXRpdmUuZGlzcGxheU5hbWU7XG5cbmNvbnN0IENvbW1hbmREaWFsb2cgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogRGlhbG9nUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIHsuLi5wcm9wc30+XG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcC0wXCI+XG4gICAgICAgIDxDb21tYW5kIGNsYXNzTmFtZT1cIlsmX1tjbWRrLWdyb3VwLWhlYWRpbmddXTpweC0yIFsmX1tjbWRrLWdyb3VwLWhlYWRpbmddXTpmb250LW1lZGl1bSBbJl9bY21kay1ncm91cC1oZWFkaW5nXV06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIFsmX1tjbWRrLWdyb3VwXTpub3QoW2hpZGRlbl0pX35bY21kay1ncm91cF1dOnB0LTAgWyZfW2NtZGstZ3JvdXBdXTpweC0yIFsmX1tjbWRrLWlucHV0LXdyYXBwZXJdX3N2Z106aC01IFsmX1tjbWRrLWlucHV0LXdyYXBwZXJdX3N2Z106dy01IFsmX1tjbWRrLWlucHV0XV06aC0xMiBbJl9bY21kay1pdGVtXV06cHgtMiBbJl9bY21kay1pdGVtXV06cHktMyBbJl9bY21kay1pdGVtXV9zdmddOmgtNSBbJl9bY21kay1pdGVtXV9zdmddOnctNVwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db21tYW5kPlxuICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgIDwvRGlhbG9nPlxuICApO1xufTtcblxuY29uc3QgQ29tbWFuZElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQ29tbWFuZFByaW1pdGl2ZS5JbnB1dD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQ29tbWFuZFByaW1pdGl2ZS5JbnB1dD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYiBweC0zXCIgY21kay1pbnB1dC13cmFwcGVyPVwiXCI+XG4gICAgPFNlYXJjaCBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTQgc2hyaW5rLTAgb3BhY2l0eS01MFwiIC8+XG4gICAgPENvbW1hbmRQcmltaXRpdmUuSW5wdXRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmbGV4IGgtMTAgdy1mdWxsIHJvdW5kZWQtbWQgYmctdHJhbnNwYXJlbnQgcHktMyB0ZXh0LXNtIG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlcjp0ZXh0LW11dGVkLWZvcmVncm91bmQgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTBcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L2Rpdj5cbikpO1xuXG5Db21tYW5kSW5wdXQuZGlzcGxheU5hbWUgPSBDb21tYW5kUHJpbWl0aXZlLklucHV0LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb21tYW5kTGlzdCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbW1hbmRQcmltaXRpdmUuTGlzdD4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQ29tbWFuZFByaW1pdGl2ZS5MaXN0PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29tbWFuZFByaW1pdGl2ZS5MaXN0XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcIm1heC1oLVszMDBweF0gb3ZlcmZsb3cteS1hdXRvIG92ZXJmbG93LXgtaGlkZGVuXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbkNvbW1hbmRMaXN0LmRpc3BsYXlOYW1lID0gQ29tbWFuZFByaW1pdGl2ZS5MaXN0LmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb21tYW5kRW1wdHkgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDb21tYW5kUHJpbWl0aXZlLkVtcHR5PixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBDb21tYW5kUHJpbWl0aXZlLkVtcHR5PlxuPigocHJvcHMsIHJlZikgPT4gKFxuICA8Q29tbWFuZFByaW1pdGl2ZS5FbXB0eVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT1cInB5LTYgdGV4dC1jZW50ZXIgdGV4dC1zbVwiXG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbkNvbW1hbmRFbXB0eS5kaXNwbGF5TmFtZSA9IENvbW1hbmRQcmltaXRpdmUuRW1wdHkuZGlzcGxheU5hbWU7XG5cbmNvbnN0IENvbW1hbmRHcm91cCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbW1hbmRQcmltaXRpdmUuR3JvdXA+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIENvbW1hbmRQcmltaXRpdmUuR3JvdXA+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDb21tYW5kUHJpbWl0aXZlLkdyb3VwXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwib3ZlcmZsb3ctaGlkZGVuIHAtMSB0ZXh0LWZvcmVncm91bmQgWyZfW2NtZGstZ3JvdXAtaGVhZGluZ11dOnB4LTIgWyZfW2NtZGstZ3JvdXAtaGVhZGluZ11dOnB5LTEuNSBbJl9bY21kay1ncm91cC1oZWFkaW5nXV06dGV4dC14cyBbJl9bY21kay1ncm91cC1oZWFkaW5nXV06Zm9udC1tZWRpdW0gWyZfW2NtZGstZ3JvdXAtaGVhZGluZ11dOnRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbkNvbW1hbmRHcm91cC5kaXNwbGF5TmFtZSA9IENvbW1hbmRQcmltaXRpdmUuR3JvdXAuZGlzcGxheU5hbWU7XG5cbmNvbnN0IENvbW1hbmRTZXBhcmF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBDb21tYW5kUHJpbWl0aXZlLlNlcGFyYXRvcj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQ29tbWFuZFByaW1pdGl2ZS5TZXBhcmF0b3I+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxDb21tYW5kUHJpbWl0aXZlLlNlcGFyYXRvclxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCItbXgtMSBoLXB4IGJnLWJvcmRlclwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuQ29tbWFuZFNlcGFyYXRvci5kaXNwbGF5TmFtZSA9IENvbW1hbmRQcmltaXRpdmUuU2VwYXJhdG9yLmRpc3BsYXlOYW1lO1xuXG5jb25zdCBDb21tYW5kSXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIENvbW1hbmRQcmltaXRpdmUuSXRlbT4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQ29tbWFuZFByaW1pdGl2ZS5JdGVtPlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Q29tbWFuZFByaW1pdGl2ZS5JdGVtXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwicmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBnYXAtMiBzZWxlY3Qtbm9uZSBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweC0yIHB5LTEuNSB0ZXh0LXNtIG91dGxpbmUtbm9uZSBkYXRhLVtkaXNhYmxlZD10cnVlXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW3NlbGVjdGVkPXRydWVdOmJnLWFjY2VudCBkYXRhLVtzZWxlY3RlZD10cnVlXTp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW2Rpc2FibGVkPXRydWVdOm9wYWNpdHktNTAgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106c2l6ZS00IFsmX3N2Z106c2hyaW5rLTBcIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuXG5Db21tYW5kSXRlbS5kaXNwbGF5TmFtZSA9IENvbW1hbmRQcmltaXRpdmUuSXRlbS5kaXNwbGF5TmFtZTtcblxuY29uc3QgQ29tbWFuZFNob3J0Y3V0ID0gKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFNwYW5FbGVtZW50PikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcIm1sLWF1dG8gdGV4dC14cyB0cmFja2luZy13aWRlc3QgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5Db21tYW5kU2hvcnRjdXQuZGlzcGxheU5hbWUgPSBcIkNvbW1hbmRTaG9ydGN1dFwiO1xuXG5leHBvcnQge1xuICBDb21tYW5kLFxuICBDb21tYW5kRGlhbG9nLFxuICBDb21tYW5kSW5wdXQsXG4gIENvbW1hbmRMaXN0LFxuICBDb21tYW5kRW1wdHksXG4gIENvbW1hbmRHcm91cCxcbiAgQ29tbWFuZEl0ZW0sXG4gIENvbW1hbmRTaG9ydGN1dCxcbiAgQ29tbWFuZFNlcGFyYXRvcixcbn07XG4iXX0=