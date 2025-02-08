import { useLayoutEffect, DependencyList, MutableRefObject } from "react";

declare function useCombinedRefs<T>(
  ...refs: ((node: T) => void)[]
): (node: T) => void;

declare function useEvent<T extends Function>(
  handler: T | undefined,
): (...args: any) => any;

/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */
declare const useIsomorphicLayoutEffect: typeof useLayoutEffect;

declare function useInterval(): readonly [
  (listener: Function, duration: number) => void,
  () => void,
];

declare function useLatestValue<T extends any>(
  value: T,
  dependencies?: DependencyList,
): MutableRefObject<T>;

declare function useLazyMemo<T>(
  callback: (prevValue: T | undefined) => T,
  dependencies: any[],
): T;

declare function useNodeRef(
  onChange?: (
    newElement: HTMLElement | null,
    previousElement: HTMLElement | null,
  ) => void,
): readonly [
  MutableRefObject<HTMLElement | null>,
  (element: HTMLElement | null) => void,
];

declare function usePrevious<T>(value: T): T | undefined;

declare function useUniqueId(prefix: string, value?: string): string;

declare const add: <T extends Record<U, number>, U extends string>(
  object: T,
  ...adjustments: Partial<T>[]
) => T;
declare const subtract: <T extends Record<U, number>, U extends string>(
  object: T,
  ...adjustments: Partial<T>[]
) => T;

declare type Coordinates = {
  x: number;
  y: number;
};

/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */
declare function getEventCoordinates(event: Event): Coordinates | null;

declare type Transform = {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
};
interface Transition {
  property: string;
  easing: string;
  duration: number;
}
declare const CSS: Readonly<{
  Translate: {
    toString(transform: Transform | null): string | undefined;
  };
  Scale: {
    toString(transform: Transform | null): string | undefined;
  };
  Transform: {
    toString(transform: Transform | null): string | undefined;
  };
  Transition: {
    toString({ property, duration, easing }: Transition): string;
  };
}>;

declare function hasViewportRelativeCoordinates(
  event: Event,
): event is Event & Pick<PointerEvent, "clientX" | "clientY">;

declare function isKeyboardEvent(
  event: Event | undefined | null,
): event is KeyboardEvent;

declare function isTouchEvent(
  event: Event | undefined | null,
): event is TouchEvent;

declare const canUseDOM: boolean;

declare function getOwnerDocument(target: Event["target"]): Document;

declare function getWindow(target: Event["target"]): typeof window;

declare function findFirstFocusableNode(
  element: HTMLElement,
): HTMLElement | null;

declare function isDocument(node: Node): node is Document;

declare function isHTMLElement(node: Node | Window): node is HTMLElement;

declare function isNode(node: Object): node is Node;

declare function isSVGElement(node: Node): node is SVGElement;

declare function isWindow(element: Object): element is typeof window;

declare type Arguments<T> = T extends (...args: infer U) => any ? U : never;
declare type DeepRequired<T> = {
  [K in keyof T]-?: Required<T[K]>;
};
declare type FirstArgument<T> = T extends (
  firstArg: infer U,
  ...args: Array<any>
) => any
  ? U
  : never;
declare type Without<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export {
  type Arguments,
  CSS,
  type Coordinates,
  type DeepRequired,
  type FirstArgument,
  type Transform,
  type Transition,
  type Without,
  add,
  canUseDOM,
  findFirstFocusableNode,
  getEventCoordinates,
  getOwnerDocument,
  getWindow,
  hasViewportRelativeCoordinates,
  isDocument,
  isHTMLElement,
  isKeyboardEvent,
  isNode,
  isSVGElement,
  isTouchEvent,
  isWindow,
  subtract,
  useCombinedRefs,
  useEvent,
  useInterval,
  useIsomorphicLayoutEffect,
  useLatestValue,
  useLazyMemo,
  useNodeRef,
  usePrevious,
  useUniqueId,
};
