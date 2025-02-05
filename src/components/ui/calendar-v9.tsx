"use client";

import * as React from "react";
import {
  PreviousMonthButton,
  PreviousMonthButtonProps,
  NextMonthButton,
  NextMonthButtonProps,
  DateRange as InnerDateRange,
  DayPicker,
  DropdownProps,
} from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";
import { ScrollArea } from "./scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export type DateRange = InnerDateRange;
export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export const NO_BORDER =
  "ring-0 focus:ring-0 focus-visible:ring-0 shadow-none focus:shadow-none focus-visible:shadow-none outline-none focus:outline-none focus-visible:outline-none border-none focus:border-none focus-visible:border-none";

const CUSTOM_COMPONENTS = {
  PreviousMonthButton: ({
    tabIndex,
    className,
    ...props
  }: PreviousMonthButtonProps) => {
    return (
      <PreviousMonthButton
        tabIndex={0}
        className={cn(className, "focus:underline focus:underline-offset-2")}
        {...props}
      />
    );
  },
  NextMonthButton: ({
    tabIndex,
    className,
    ...props
  }: NextMonthButtonProps) => {
    return (
      <NextMonthButton
        tabIndex={0}
        className={cn(className, "focus:underline focus:underline-offset-2")}
        {...props}
      />
    );
  },
  Dropdown: ({ value, options, onChange, ...props }: DropdownProps) => {
    const selected = options?.find((option) => option.value === value);
    const handleChange = (value: string) => {
      const changeEvent = {
        target: { value },
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange?.(changeEvent);
    };
    return (
      <Select
        value={value?.toString()}
        onValueChange={(value) => {
          handleChange(value);
        }}
      >
        <SelectTrigger
          tabIndex={0}
          className={cn(
            NO_BORDER,
            "focus:underline focus:underline-offset-2 pr-0 -mr-3 sm:-mr-2.5 h-7 [&>svg]:opacity-25 [&>svg]:-ml-0.5",
          )}
        >
          <SelectValue>{selected?.label}</SelectValue>
        </SelectTrigger>
        <SelectContent position="popper">
          <ScrollArea className="h-80">
            {options?.map((option, id: number) => (
              <SelectItem
                key={`${option.value}-${id}`}
                value={option.value?.toString() ?? ""}
              >
                {option.label}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
    );
  },
};

// shadcn calendar is updated for react-day-picker v9 and mobile sizing
function Calendar({
  numberOfMonths = 1,
  showOutsideDays = true,
  captionLayout = "dropdown",
  className = "w-fit",
  classNames,
  components,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      mode={props.mode || "single"}
      captionLayout={captionLayout}
      numberOfMonths={numberOfMonths}
      showOutsideDays={showOutsideDays}
      className={className}
      classNames={{
        months: "flex gap-4 relative",
        month_caption:
          "flex -mx-3 mb-2 relative items-center text-sm font-medium",
        dropdowns: "flex",
        years_dropdown: "after:none",
        nav: "absolute right-0 z-50 -mr-1 sm:mr-0 flex items-center h-7",
        button_previous: cn(NO_BORDER, "group h-5 w-5 sm:h-6 sm:w-6"),
        button_next: cn(NO_BORDER, "group h-5 w-5 sm:h-6 sm:w-6"),
        chevron:
          "border-b border-transparent group-focus:border-current h-5 w-5 sm:h-6 sm:w-6",
        weeks: "w-full border-collapse space-y-1",
        week: "flex w-full mt-2",
        weekdays: "flex",
        weekday:
          "text-muted-foreground rounded-md w-6 sm:w-7 text-xs sm:text-sm font-normal text-[0.8rem]",
        day: cn(
          "relative p-0 focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].outside)]:bg-accent/50",
          props.mode === "range"
            ? "[&.range-end]:rounded-r-md [&.range-start]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "rounded-md",
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "[&:hover]:bg-transparent [&:hover]:text-inherit", // Disable the ghost button hover
          "h-6 w-6 sm:h-7 sm:w-7 p-0 text-xs sm:text-sm text-center font-normal",
        ),
        range_start: "range-start",
        range_end: "range-end",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside:
          "outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={
        components
          ? {
              ...CUSTOM_COMPONENTS,
              ...components,
            }
          : CUSTOM_COMPONENTS
      }
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
