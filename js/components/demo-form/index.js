define(["require", "exports", "react/jsx-runtime", "sonner", "@hookform/resolvers/zod", "react-hook-form", "zod", "@/components/ui/button", "@/components/ui/card", "@/components/ui/form", "@/components/ui/input"], function (require, exports, jsx_runtime_1, sonner_1, zod_1, react_hook_form_1, zod_2, button_1, card_1, form_1, input_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormDemo = FormDemo;
    const formSchema = zod_2.z.object({
        email: zod_2.z.string().email("Must be a valid email."),
        password: zod_2.z.string().min(8, {
            message: "Password must be at least 8 characters.",
        }),
    });
    function FormDemo() {
        // 1. Define your form.
        const form = (0, react_hook_form_1.useForm)({
            resolver: (0, zod_1.zodResolver)(formSchema),
            defaultValues: {
                email: "",
                password: "",
            },
        });
        // 2. Define a submit handler.
        function onSubmit(values) {
            (0, sonner_1.toast)("Submitted:", {
                description: JSON.stringify(values, null, 2),
            });
        }
        return ((0, jsx_runtime_1.jsxs)(card_1.Card, { className: "w-72", children: [(0, jsx_runtime_1.jsx)(card_1.CardHeader, { children: "Form Demo" }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { children: (0, jsx_runtime_1.jsx)(form_1.Form, { ...form, children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [(0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: "email", render: ({ field }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsx)(form_1.FormLabel, { children: "Email" }), (0, jsx_runtime_1.jsx)(form_1.FormControl, { children: (0, jsx_runtime_1.jsx)(input_1.Input, { placeholder: "test@example.com", ...field }) }), (0, jsx_runtime_1.jsx)(form_1.FormDescription, { children: "This email will not be shared with anyone." }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, {})] })) }), (0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: "password", render: ({ field }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsx)(form_1.FormLabel, { children: "Password" }), (0, jsx_runtime_1.jsx)(form_1.FormControl, { children: (0, jsx_runtime_1.jsx)(input_1.Input, { placeholder: "", ...field }) }), (0, jsx_runtime_1.jsx)(form_1.FormDescription, { children: "Choose a strong password." }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, {})] })) }), (0, jsx_runtime_1.jsx)(button_1.Button, { type: "submit", children: "Submit" })] }) }) })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWZvcm0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFBQSxZQUFZLENBQUM7OztJQTJCYiw0QkEyREM7SUFsRUQsTUFBTSxVQUFVLEdBQUcsT0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMxQixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztRQUNqRCxRQUFRLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxFQUFFLHlDQUF5QztTQUNuRCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0lBRUgsU0FBZ0IsUUFBUTtRQUN0Qix1QkFBdUI7UUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBQSx5QkFBTyxFQUE2QjtZQUMvQyxRQUFRLEVBQUUsSUFBQSxpQkFBVyxFQUFDLFVBQVUsQ0FBQztZQUNqQyxhQUFhLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7YUFDYjtTQUNGLENBQUMsQ0FBQztRQUVILDhCQUE4QjtRQUM5QixTQUFTLFFBQVEsQ0FBQyxNQUFrQztZQUNsRCxJQUFBLGNBQUssRUFBQyxZQUFZLEVBQUU7Z0JBQ2xCLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQzdDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLENBQ0wsd0JBQUMsV0FBSSxJQUFDLFNBQVMsRUFBQyxNQUFNLGFBQ3BCLHVCQUFDLGlCQUFVLDRCQUF1QixFQUNsQyx1QkFBQyxrQkFBVyxjQUNWLHVCQUFDLFdBQUksT0FBSyxJQUFJLFlBQ1osa0NBQU0sUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFDLFdBQVcsYUFDaEUsdUJBQUMsZ0JBQVMsSUFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFDckIsSUFBSSxFQUFDLE9BQU8sRUFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUNyQix3QkFBQyxlQUFRLGVBQ1AsdUJBQUMsZ0JBQVMsd0JBQWtCLEVBQzVCLHVCQUFDLGtCQUFXLGNBQ1YsdUJBQUMsYUFBSyxJQUFDLFdBQVcsRUFBQyxrQkFBa0IsS0FBSyxLQUFLLEdBQUksR0FDdkMsRUFDZCx1QkFBQyxzQkFBZSw2REFFRSxFQUNsQix1QkFBQyxrQkFBVyxLQUFHLElBQ04sQ0FDWixHQUNELEVBQ0YsdUJBQUMsZ0JBQVMsSUFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFDckIsSUFBSSxFQUFDLFVBQVUsRUFDZixNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUNyQix3QkFBQyxlQUFRLGVBQ1AsdUJBQUMsZ0JBQVMsMkJBQXFCLEVBQy9CLHVCQUFDLGtCQUFXLGNBQ1YsdUJBQUMsYUFBSyxJQUFDLFdBQVcsRUFBQyxFQUFFLEtBQUssS0FBSyxHQUFJLEdBQ3ZCLEVBQ2QsdUJBQUMsc0JBQWUsNENBQTRDLEVBQzVELHVCQUFDLGtCQUFXLEtBQUcsSUFDTixDQUNaLEdBQ0QsRUFDRix1QkFBQyxlQUFNLElBQUMsSUFBSSxFQUFDLFFBQVEsdUJBQWdCLElBQ2hDLEdBQ0YsR0FDSyxJQUNULENBQ1IsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwic29ubmVyXCI7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHtcbiAgRm9ybSxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1EZXNjcmlwdGlvbixcbiAgRm9ybUZpZWxkLFxuICBGb3JtSXRlbSxcbiAgRm9ybUxhYmVsLFxuICBGb3JtTWVzc2FnZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9mb3JtXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcblxuY29uc3QgZm9ybVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoXCJNdXN0IGJlIGEgdmFsaWQgZW1haWwuXCIpLFxuICBwYXNzd29yZDogei5zdHJpbmcoKS5taW4oOCwge1xuICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMuXCIsXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtRGVtbygpIHtcbiAgLy8gMS4gRGVmaW5lIHlvdXIgZm9ybS5cbiAgY29uc3QgZm9ybSA9IHVzZUZvcm08ei5pbmZlcjx0eXBlb2YgZm9ybVNjaGVtYT4+KHtcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoZm9ybVNjaGVtYSksXG4gICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9LFxuICB9KTtcblxuICAvLyAyLiBEZWZpbmUgYSBzdWJtaXQgaGFuZGxlci5cbiAgZnVuY3Rpb24gb25TdWJtaXQodmFsdWVzOiB6LmluZmVyPHR5cGVvZiBmb3JtU2NoZW1hPikge1xuICAgIHRvYXN0KFwiU3VibWl0dGVkOlwiLCB7XG4gICAgICBkZXNjcmlwdGlvbjogSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPVwidy03MlwiPlxuICAgICAgPENhcmRIZWFkZXI+Rm9ybSBEZW1vPC9DYXJkSGVhZGVyPlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8Rm9ybSB7Li4uZm9ybX0+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm0uaGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwic3BhY2UteS04XCI+XG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJ0ZXN0QGV4YW1wbGUuY29tXCIgey4uLmZpZWxkfSAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIFRoaXMgZW1haWwgd2lsbCBub3QgYmUgc2hhcmVkIHdpdGggYW55b25lLlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICA8Rm9ybU1lc3NhZ2UgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIHsuLi5maWVsZH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICA8Rm9ybURlc2NyaXB0aW9uPkNob29zZSBhIHN0cm9uZyBwYXNzd29yZC48L0Zvcm1EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiJdfQ==