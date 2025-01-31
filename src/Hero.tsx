///<amd-module name='Hero'/>
import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

const SelectItem = React.forwardRef(
	({ children, className, ...props }: Select.SelectItemProps, forwardedRef: React.Ref<HTMLDivElement>) => {
		return (
			<Select.Item
				{...props}
				ref={forwardedRef}
			>
				<Select.ItemText>{children}</Select.ItemText>
				<Select.ItemIndicator className="SelectItemIndicator">
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
			<button onClick={() => setCount(count + 1)}>Again!</button>
			<br/>
			<br/>
			
			<Select.Root onValueChange={value => setCount(parseInt(value, 10))}>
				<Select.Trigger className="SelectTrigger" aria-label="Number">
					<Select.Value placeholder="Select a number..." />
					<Select.Icon className="SelectIcon">
						<ChevronDownIcon />
					</Select.Icon>
				</Select.Trigger>
				<Select.Portal>
					<Select.Content className="SelectContent">
						<Select.ScrollUpButton className="SelectScrollButton">
							<ChevronUpIcon />
						</Select.ScrollUpButton>
						<Select.Viewport className="SelectViewport">
							<Select.Group>
								<Select.Label className="SelectLabel">Small</Select.Label>
								<SelectItem value="1">1</SelectItem>
								<SelectItem value="2">2</SelectItem>
								<SelectItem value="3">3</SelectItem>
							</Select.Group>

							<Select.Separator className="SelectSeparator" />

							<Select.Group>
								<Select.Label className="SelectLabel">Medium</Select.Label>
								<SelectItem value="10">10</SelectItem>
								<SelectItem value="11">11</SelectItem>
								<SelectItem value="12" disabled>12</SelectItem>
							</Select.Group>

							<Select.Separator className="SelectSeparator" />

							<Select.Group>
								<Select.Label className="SelectLabel">Large</Select.Label>
								<SelectItem value="100">100</SelectItem>
								<SelectItem value="101">101</SelectItem>
								<SelectItem value="102">102</SelectItem>
							</Select.Group>
						</Select.Viewport>
						<Select.ScrollDownButton className="SelectScrollButton">
							<ChevronDownIcon />
						</Select.ScrollDownButton>
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</div>
	);
}
