define(["require", "exports", "react/jsx-runtime", "date-fns", "@/components/ui/calendar-v9", "@/components/ui/card"], function (require, exports, jsx_runtime_1, date_fns_1, calendar_v9_1, card_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardsCalendar = CardsCalendar;
    const start = new Date(2023, 5, 5);
    function CardsCalendar() {
        return ((0, jsx_runtime_1.jsx)(card_1.Card, { className: "max-w-[260px]", children: (0, jsx_runtime_1.jsx)(card_1.CardContent, { className: "p-4", children: (0, jsx_runtime_1.jsx)(calendar_v9_1.Calendar, { numberOfMonths: 1, mode: "range", defaultMonth: start, selected: {
                        from: start,
                        to: (0, date_fns_1.addDays)(start, 8),
                    } }) }) }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWNhcmRzL2NhbGVuZGFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUFTYixzQ0FnQkM7SUFsQkQsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVuQyxTQUFnQixhQUFhO1FBQzNCLE9BQU8sQ0FDTCx1QkFBQyxXQUFJLElBQUMsU0FBUyxFQUFDLGVBQWUsWUFDN0IsdUJBQUMsa0JBQVcsSUFBQyxTQUFTLEVBQUMsS0FBSyxZQUMxQix1QkFBQyxzQkFBUSxJQUNQLGNBQWMsRUFBRSxDQUFDLEVBQ2pCLElBQUksRUFBQyxPQUFPLEVBQ1osWUFBWSxFQUFFLEtBQUssRUFDbkIsUUFBUSxFQUFFO3dCQUNSLElBQUksRUFBRSxLQUFLO3dCQUNYLEVBQUUsRUFBRSxJQUFBLGtCQUFPLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztxQkFDdEIsR0FDRCxHQUNVLEdBQ1QsQ0FDUixDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYWxlbmRhci12OVwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcblxuY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgyMDIzLCA1LCA1KTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRzQ2FsZW5kYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPVwibWF4LXctWzI2MHB4XVwiPlxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICBudW1iZXJPZk1vbnRocz17MX1cbiAgICAgICAgICBtb2RlPVwicmFuZ2VcIlxuICAgICAgICAgIGRlZmF1bHRNb250aD17c3RhcnR9XG4gICAgICAgICAgc2VsZWN0ZWQ9e3tcbiAgICAgICAgICAgIGZyb206IHN0YXJ0LFxuICAgICAgICAgICAgdG86IGFkZERheXMoc3RhcnQsIDgpLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiJdfQ==