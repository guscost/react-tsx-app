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
define("ui/table", ["require", "exports", "react/jsx-runtime", "react", "lib/utils"], function (require, exports, jsx_runtime_1, React, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TableCaption = exports.TableCell = exports.TableRow = exports.TableHead = exports.TableFooter = exports.TableBody = exports.TableHeader = exports.Table = void 0;
    React = __importStar(React);
    var Table = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("div", { className: "relative w-full overflow-auto", children: (0, jsx_runtime_1.jsx)("table", __assign({ ref: ref, className: (0, utils_1.cn)("w-full caption-bottom text-sm", className) }, props)) }));
    });
    exports.Table = Table;
    Table.displayName = "Table";
    var TableHeader = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("thead", __assign({ ref: ref, className: (0, utils_1.cn)("[&_tr]:border-b", className) }, props)));
    });
    exports.TableHeader = TableHeader;
    TableHeader.displayName = "TableHeader";
    var TableBody = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("tbody", __assign({ ref: ref, className: (0, utils_1.cn)("[&_tr:last-child]:border-0", className) }, props)));
    });
    exports.TableBody = TableBody;
    TableBody.displayName = "TableBody";
    var TableFooter = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("tfoot", __assign({ ref: ref, className: (0, utils_1.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className) }, props)));
    });
    exports.TableFooter = TableFooter;
    TableFooter.displayName = "TableFooter";
    var TableRow = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("tr", __assign({ ref: ref, className: (0, utils_1.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className) }, props)));
    });
    exports.TableRow = TableRow;
    TableRow.displayName = "TableRow";
    var TableHead = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("th", __assign({ ref: ref, className: (0, utils_1.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className) }, props)));
    });
    exports.TableHead = TableHead;
    TableHead.displayName = "TableHead";
    var TableCell = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("td", __assign({ ref: ref, className: (0, utils_1.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className) }, props)));
    });
    exports.TableCell = TableCell;
    TableCell.displayName = "TableCell";
    var TableCaption = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ((0, jsx_runtime_1.jsx)("caption", __assign({ ref: ref, className: (0, utils_1.cn)("mt-4 text-sm text-muted-foreground", className) }, props)));
    });
    exports.TableCaption = TableCaption;
    TableCaption.displayName = "TableCaption";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS90YWJsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHNUIsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLGdDQUFLLFNBQVMsRUFBQywrQkFBK0IsWUFDNUMsMkNBQ0UsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDLElBQ3JELEtBQUssRUFDVCxHQUNFLENBQ1AsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQWdHRCxzQkFBSztJQS9GUCxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztJQUU1QixJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUdsQyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsMkNBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLElBQU0sS0FBSyxFQUFJLENBQzVFLENBQUE7S0FBQSxDQUFDLENBQUM7SUF5RkQsa0NBQVc7SUF4RmIsV0FBVyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7SUFFeEMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHaEMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLDJDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxJQUNsRCxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBOEVELDhCQUFTO0lBN0VYLFNBQVMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBRXBDLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2xDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQywyQ0FDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx5REFBeUQsRUFDekQsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQWdFRCxrQ0FBVztJQS9EYixXQUFXLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztJQUV4QyxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUcvQixVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsd0NBQ0UsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsNkVBQTZFLEVBQzdFLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFtREQsNEJBQVE7SUFsRFYsUUFBUSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFFbEMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FHaEMsVUFBQyxFQUF1QixFQUFFLEdBQUc7UUFBMUIsSUFBQSxTQUFTLGVBQUEsRUFBSyxLQUFLLGNBQXJCLGFBQXVCLENBQUY7UUFBWSxPQUFBLENBQ2xDLHdDQUNFLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLHdJQUF3SSxFQUN4SSxTQUFTLENBQ1YsSUFDRyxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBbUNELDhCQUFTO0lBbENYLFNBQVMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBRXBDLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR2hDLFVBQUMsRUFBdUIsRUFBRSxHQUFHO1FBQTFCLElBQUEsU0FBUyxlQUFBLEVBQUssS0FBSyxjQUFyQixhQUF1QixDQUFGO1FBQVksT0FBQSxDQUNsQyx3Q0FDRSxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxzRkFBc0YsRUFDdEYsU0FBUyxDQUNWLElBQ0csS0FBSyxFQUNULENBQ0gsQ0FBQTtLQUFBLENBQUMsQ0FBQztJQXNCRCw4QkFBUztJQXJCWCxTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUVwQyxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUduQyxVQUFDLEVBQXVCLEVBQUUsR0FBRztRQUExQixJQUFBLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBckIsYUFBdUIsQ0FBRjtRQUFZLE9BQUEsQ0FDbEMsNkNBQ0UsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsb0NBQW9DLEVBQUUsU0FBUyxDQUFDLElBQzFELEtBQUssRUFDVCxDQUNILENBQUE7S0FBQSxDQUFDLENBQUM7SUFXRCxvQ0FBWTtJQVZkLFlBQVksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxhbWQtbW9kdWxlIG5hbWU9XCJ1aS90YWJsZVwiLz5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzcmMvbGliL3V0aWxzXCI7XG5cbmNvbnN0IFRhYmxlID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlRWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlRWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgb3ZlcmZsb3ctYXV0b1wiPlxuICAgIDx0YWJsZVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2NuKFwidy1mdWxsIGNhcHRpb24tYm90dG9tIHRleHQtc21cIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICA8L2Rpdj5cbikpO1xuVGFibGUuZGlzcGxheU5hbWUgPSBcIlRhYmxlXCI7XG5cbmNvbnN0IFRhYmxlSGVhZGVyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGhlYWQgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oXCJbJl90cl06Ym9yZGVyLWJcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPlxuKSk7XG5UYWJsZUhlYWRlci5kaXNwbGF5TmFtZSA9IFwiVGFibGVIZWFkZXJcIjtcblxuY29uc3QgVGFibGVCb2R5ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGJvZHlcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFwiWyZfdHI6bGFzdC1jaGlsZF06Ym9yZGVyLTBcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcblRhYmxlQm9keS5kaXNwbGF5TmFtZSA9IFwiVGFibGVCb2R5XCI7XG5cbmNvbnN0IFRhYmxlRm9vdGVyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGZvb3RcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJib3JkZXItdCBiZy1tdXRlZC81MCBmb250LW1lZGl1bSBbJj50cl06bGFzdDpib3JkZXItYi0wXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcblRhYmxlRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJUYWJsZUZvb3RlclwiO1xuXG5jb25zdCBUYWJsZVJvdyA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxUYWJsZVJvd0VsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZVJvd0VsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0clxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImJvcmRlci1iIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLW11dGVkLzUwIGRhdGEtW3N0YXRlPXNlbGVjdGVkXTpiZy1tdXRlZFwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5UYWJsZVJvdy5kaXNwbGF5TmFtZSA9IFwiVGFibGVSb3dcIjtcblxuY29uc3QgVGFibGVIZWFkID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlQ2VsbEVsZW1lbnQsXG4gIFJlYWN0LlRoSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0aFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImgtMTAgcHgtMiB0ZXh0LWxlZnQgYWxpZ24tbWlkZGxlIGZvbnQtbWVkaXVtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBbJjpoYXMoW3JvbGU9Y2hlY2tib3hdKV06cHItMCBbJj5bcm9sZT1jaGVja2JveF1dOnRyYW5zbGF0ZS15LVsycHhdXCIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcblRhYmxlSGVhZC5kaXNwbGF5TmFtZSA9IFwiVGFibGVIZWFkXCI7XG5cbmNvbnN0IFRhYmxlQ2VsbCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxUYWJsZUNlbGxFbGVtZW50LFxuICBSZWFjdC5UZEhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZUNlbGxFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGRcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJwLTIgYWxpZ24tbWlkZGxlIFsmOmhhcyhbcm9sZT1jaGVja2JveF0pXTpwci0wIFsmPltyb2xlPWNoZWNrYm94XV06dHJhbnNsYXRlLXktWzJweF1cIixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuVGFibGVDZWxsLmRpc3BsYXlOYW1lID0gXCJUYWJsZUNlbGxcIjtcblxuY29uc3QgVGFibGVDYXB0aW9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlQ2FwdGlvbkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZUNhcHRpb25FbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8Y2FwdGlvblxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXCJtdC00IHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5UYWJsZUNhcHRpb24uZGlzcGxheU5hbWUgPSBcIlRhYmxlQ2FwdGlvblwiO1xuXG5leHBvcnQge1xuICBUYWJsZSxcbiAgVGFibGVIZWFkZXIsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVGb290ZXIsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVSb3csXG4gIFRhYmxlQ2VsbCxcbiAgVGFibGVDYXB0aW9uLFxufTtcbiJdfQ==