///<amd-module name='Hero'/>
import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const SelectItem = React.forwardRef(
  (
    { children, className, ...props }: Select.SelectItemProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <Select.Item
        {...props}
        ref={forwardedRef}
        className="flex justify-between items-center hover:bg-gray-100"
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

export default function Hero() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello world x{count}</h1>

      <Button onClick={() => setCount(count + 1)}>Again!</Button>

      <Select.Root onValueChange={(value) => setCount(parseInt(value, 10))}>
        <Select.Trigger
          className="border rounded mt-2 px-4 py-2 flex gap-2 justify-between items-center w-56"
          aria-label="Number"
        >
          <Select.Value placeholder="Select a number..." />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="rounded bg-white border-1">
            <Select.ScrollUpButton className="flex justify-center items-center">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-2">
              <Select.Group>
                <Select.Label className="text-xs">Small</Select.Label>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </Select.Group>

              <Select.Separator />

              <Select.Group className="mt-2">
                <Select.Label className="text-xs">Medium</Select.Label>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="11">11</SelectItem>
                <SelectItem value="12" disabled>
                  12
                </SelectItem>
              </Select.Group>

              <Select.Separator />

              <Select.Group className="mt-2">
                <Select.Label className="text-xs">Large</Select.Label>
                <SelectItem value="100">100</SelectItem>
                <SelectItem value="101">101</SelectItem>
                <SelectItem value="102">102</SelectItem>
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex justify-center items-center">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
