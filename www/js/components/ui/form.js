define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-slot", "react-hook-form", "@/lib/utils", "@/components/ui/label"], function (require, exports, jsx_runtime_1, React, react_slot_1, react_hook_form_1, utils_1, label_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormField = exports.Form = exports.useFormField = void 0;
    exports.FormItem = FormItem;
    exports.FormLabel = FormLabel;
    exports.FormControl = FormControl;
    exports.FormDescription = FormDescription;
    exports.FormMessage = FormMessage;
    const Form = react_hook_form_1.FormProvider;
    exports.Form = Form;
    const FormFieldContext = React.createContext({});
    const FormField = ({ ...props }) => {
        return ((0, jsx_runtime_1.jsx)(FormFieldContext.Provider, { value: { name: props.name }, children: (0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { ...props }) }));
    };
    exports.FormField = FormField;
    const useFormField = () => {
        const fieldContext = React.useContext(FormFieldContext);
        const itemContext = React.useContext(FormItemContext);
        const { getFieldState } = (0, react_hook_form_1.useFormContext)();
        const formState = (0, react_hook_form_1.useFormState)({ name: fieldContext.name });
        const fieldState = getFieldState(fieldContext.name, formState);
        if (!fieldContext) {
            throw new Error("useFormField should be used within <FormField>");
        }
        const { id } = itemContext;
        return {
            id,
            name: fieldContext.name,
            formItemId: `${id}-form-item`,
            formDescriptionId: `${id}-form-item-description`,
            formMessageId: `${id}-form-item-message`,
            ...fieldState,
        };
    };
    exports.useFormField = useFormField;
    const FormItemContext = React.createContext({});
    function FormItem({ className, ...props }) {
        const id = React.useId();
        return ((0, jsx_runtime_1.jsx)(FormItemContext.Provider, { value: { id }, children: (0, jsx_runtime_1.jsx)("div", { "data-slot": "form-item", className: (0, utils_1.cn)("grid gap-2", className), ...props }) }));
    }
    function FormLabel({ className, ...props }) {
        const { error, formItemId } = useFormField();
        return ((0, jsx_runtime_1.jsx)(label_1.Label, { "data-slot": "form-label", "data-error": !!error, className: (0, utils_1.cn)("data-[error=true]:text-destructive-foreground", className), htmlFor: formItemId, ...props }));
    }
    function FormControl({ ...props }) {
        const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
        return ((0, jsx_runtime_1.jsx)(react_slot_1.Slot, { "data-slot": "form-control", id: formItemId, "aria-describedby": !error
                ? `${formDescriptionId}`
                : `${formDescriptionId} ${formMessageId}`, "aria-invalid": !!error, ...props }));
    }
    function FormDescription({ className, ...props }) {
        const { formDescriptionId } = useFormField();
        return ((0, jsx_runtime_1.jsx)("p", { "data-slot": "form-description", id: formDescriptionId, className: (0, utils_1.cn)("text-muted-foreground text-sm", className), ...props }));
    }
    function FormMessage({ className, ...props }) {
        const { error, formMessageId } = useFormField();
        const body = error ? String(error === null || error === void 0 ? void 0 : error.message) : props.children;
        if (!body) {
            return null;
        }
        return ((0, jsx_runtime_1.jsx)("p", { "data-slot": "form-message", id: formMessageId, className: (0, utils_1.cn)("text-destructive-foreground text-sm", className), ...props, children: body }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2Zvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFBQSxZQUFZLENBQUM7Ozs7SUFpS1gsNEJBQVE7SUFDUiw4QkFBUztJQUNULGtDQUFXO0lBQ1gsMENBQWU7SUFDZixrQ0FBVztJQW5KYixNQUFNLElBQUksR0FBRyw4QkFBWSxDQUFDO0lBOEl4QixvQkFBSTtJQXJJTixNQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxhQUFhLENBQzFDLEVBQTJCLENBQzVCLENBQUM7SUFFRixNQUFNLFNBQVMsR0FBRyxDQUdoQixFQUNBLEdBQUcsS0FBSyxFQUM2QixFQUFFLEVBQUU7UUFDekMsT0FBTyxDQUNMLHVCQUFDLGdCQUFnQixDQUFDLFFBQVEsSUFBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUNwRCx1QkFBQyw0QkFBVSxPQUFLLEtBQUssR0FBSSxHQUNDLENBQzdCLENBQUM7SUFDSixDQUFDLENBQUM7SUE0SEEsOEJBQVM7SUExSFgsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFBLGdDQUFjLEdBQUUsQ0FBQztRQUMzQyxNQUFNLFNBQVMsR0FBRyxJQUFBLDhCQUFZLEVBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUQsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFD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RUFDeEIsRUFBRSxFQUFFLGFBQWEsRUFDakIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLHFDQUFxQyxFQUFFLFNBQVMsQ0FBQyxLQUMzRCxLQUFLLFlBRVIsSUFBSSxHQUNILENBQ0wsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBMYWJlbFByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWxhYmVsXCI7XG5pbXBvcnQgeyBTbG90IH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zbG90XCI7XG5pbXBvcnQge1xuICBDb250cm9sbGVyLFxuICBDb250cm9sbGVyUHJvcHMsXG4gIEZpZWxkUGF0aCxcbiAgRmllbGRWYWx1ZXMsXG4gIEZvcm1Qcm92aWRlcixcbiAgdXNlRm9ybUNvbnRleHQsXG4gIHVzZUZvcm1TdGF0ZSxcbn0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XG5cbmNvbnN0IEZvcm0gPSBGb3JtUHJvdmlkZXI7XG5cbnR5cGUgRm9ybUZpZWxkQ29udGV4dFZhbHVlPFxuICBURmllbGRWYWx1ZXMgZXh0ZW5kcyBGaWVsZFZhbHVlcyA9IEZpZWxkVmFsdWVzLFxuICBUTmFtZSBleHRlbmRzIEZpZWxkUGF0aDxURmllbGRWYWx1ZXM+ID0gRmllbGRQYXRoPFRGaWVsZFZhbHVlcz4sXG4+ID0ge1xuICBuYW1lOiBUTmFtZTtcbn07XG5cbmNvbnN0IEZvcm1GaWVsZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PEZvcm1GaWVsZENvbnRleHRWYWx1ZT4oXG4gIHt9IGFzIEZvcm1GaWVsZENvbnRleHRWYWx1ZSxcbik7XG5cbmNvbnN0IEZvcm1GaWVsZCA9IDxcbiAgVEZpZWxkVmFsdWVzIGV4dGVuZHMgRmllbGRWYWx1ZXMgPSBGaWVsZFZhbHVlcyxcbiAgVE5hbWUgZXh0ZW5kcyBGaWVsZFBhdGg8VEZpZWxkVmFsdWVzPiA9IEZpZWxkUGF0aDxURmllbGRWYWx1ZXM+LFxuPih7XG4gIC4uLnByb3BzXG59OiBDb250cm9sbGVyUHJvcHM8VEZpZWxkVmFsdWVzLCBUTmFtZT4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUZpZWxkQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBuYW1lOiBwcm9wcy5uYW1lIH19PlxuICAgICAgPENvbnRyb2xsZXIgey4uLnByb3BzfSAvPlxuICAgIDwvRm9ybUZpZWxkQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IHVzZUZvcm1GaWVsZCA9ICgpID0+IHtcbiAgY29uc3QgZmllbGRDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChGb3JtRmllbGRDb250ZXh0KTtcbiAgY29uc3QgaXRlbUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEZvcm1JdGVtQ29udGV4dCk7XG4gIGNvbnN0IHsgZ2V0RmllbGRTdGF0ZSB9ID0gdXNlRm9ybUNvbnRleHQoKTtcbiAgY29uc3QgZm9ybVN0YXRlID0gdXNlRm9ybVN0YXRlKHsgbmFtZTogZmllbGRDb250ZXh0Lm5hbWUgfSk7XG4gIGNvbnN0IGZpZWxkU3RhdGUgPSBnZXRGaWVsZFN0YXRlKGZpZWxkQ29udGV4dC5uYW1lLCBmb3JtU3RhdGUpO1xuXG4gIGlmICghZmllbGRDb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlRm9ybUZpZWxkIHNob3VsZCBiZSB1c2VkIHdpdGhpbiA8Rm9ybUZpZWxkPlwiKTtcbiAgfVxuXG4gIGNvbnN0IHsgaWQgfSA9IGl0ZW1Db250ZXh0O1xuXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgbmFtZTogZmllbGRDb250ZXh0Lm5hbWUsXG4gICAgZm9ybUl0ZW1JZDogYCR7aWR9LWZvcm0taXRlbWAsXG4gICAgZm9ybURlc2NyaXB0aW9uSWQ6IGAke2lkfS1mb3JtLWl0ZW0tZGVzY3JpcHRpb25gLFxuICAgIGZvcm1NZXNzYWdlSWQ6IGAke2lkfS1mb3JtLWl0ZW0tbWVzc2FnZWAsXG4gICAgLi4uZmllbGRTdGF0ZSxcbiAgfTtcbn07XG5cbnR5cGUgRm9ybUl0ZW1Db250ZXh0VmFsdWUgPSB7XG4gIGlkOiBzdHJpbmc7XG59O1xuXG5jb25zdCBGb3JtSXRlbUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PEZvcm1JdGVtQ29udGV4dFZhbHVlPihcbiAge30gYXMgRm9ybUl0ZW1Db250ZXh0VmFsdWUsXG4pO1xuXG5mdW5jdGlvbiBGb3JtSXRlbSh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgY29uc3QgaWQgPSBSZWFjdC51c2VJZCgpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1JdGVtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpZCB9fT5cbiAgICAgIDxkaXZcbiAgICAgICAgZGF0YS1zbG90PVwiZm9ybS1pdGVtXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcImdyaWQgZ2FwLTJcIiwgY2xhc3NOYW1lKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICA8L0Zvcm1JdGVtQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRm9ybUxhYmVsKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIExhYmVsUHJpbWl0aXZlLlJvb3Q+KSB7XG4gIGNvbnN0IHsgZXJyb3IsIGZvcm1JdGVtSWQgfSA9IHVzZUZvcm1GaWVsZCgpO1xuXG4gIHJldHVybiAoXG4gICAgPExhYmVsXG4gICAgICBkYXRhLXNsb3Q9XCJmb3JtLWxhYmVsXCJcbiAgICAgIGRhdGEtZXJyb3I9eyEhZXJyb3J9XG4gICAgICBjbGFzc05hbWU9e2NuKFwiZGF0YS1bZXJyb3I9dHJ1ZV06dGV4dC1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSl9XG4gICAgICBodG1sRm9yPXtmb3JtSXRlbUlkfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZvcm1Db250cm9sKHsgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNsb3Q+KSB7XG4gIGNvbnN0IHsgZXJyb3IsIGZvcm1JdGVtSWQsIGZvcm1EZXNjcmlwdGlvbklkLCBmb3JtTWVzc2FnZUlkIH0gPVxuICAgIHVzZUZvcm1GaWVsZCgpO1xuXG4gIHJldHVybiAoXG4gICAgPFNsb3RcbiAgICAgIGRhdGEtc2xvdD1cImZvcm0tY29udHJvbFwiXG4gICAgICBpZD17Zm9ybUl0ZW1JZH1cbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAhZXJyb3JcbiAgICAgICAgICA/IGAke2Zvcm1EZXNjcmlwdGlvbklkfWBcbiAgICAgICAgICA6IGAke2Zvcm1EZXNjcmlwdGlvbklkfSAke2Zvcm1NZXNzYWdlSWR9YFxuICAgICAgfVxuICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9yfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZvcm1EZXNjcmlwdGlvbih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJwXCI+KSB7XG4gIGNvbnN0IHsgZm9ybURlc2NyaXB0aW9uSWQgfSA9IHVzZUZvcm1GaWVsZCgpO1xuXG4gIHJldHVybiAoXG4gICAgPHBcbiAgICAgIGRhdGEtc2xvdD1cImZvcm0tZGVzY3JpcHRpb25cIlxuICAgICAgaWQ9e2Zvcm1EZXNjcmlwdGlvbklkfVxuICAgICAgY2xhc3NOYW1lPXtjbihcInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRm9ybU1lc3NhZ2UoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwicFwiPikge1xuICBjb25zdCB7IGVycm9yLCBmb3JtTWVzc2FnZUlkIH0gPSB1c2VGb3JtRmllbGQoKTtcbiAgY29uc3QgYm9keSA9IGVycm9yID8gU3RyaW5nKGVycm9yPy5tZXNzYWdlKSA6IHByb3BzLmNoaWxkcmVuO1xuXG4gIGlmICghYm9keSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8cFxuICAgICAgZGF0YS1zbG90PVwiZm9ybS1tZXNzYWdlXCJcbiAgICAgIGlkPXtmb3JtTWVzc2FnZUlkfVxuICAgICAgY2xhc3NOYW1lPXtjbihcInRleHQtZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZCB0ZXh0LXNtXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2JvZHl9XG4gICAgPC9wPlxuICApO1xufVxuXG5leHBvcnQge1xuICB1c2VGb3JtRmllbGQsXG4gIEZvcm0sXG4gIEZvcm1JdGVtLFxuICBGb3JtTGFiZWwsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtRGVzY3JpcHRpb24sXG4gIEZvcm1NZXNzYWdlLFxuICBGb3JtRmllbGQsXG59O1xuIl19