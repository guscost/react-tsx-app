import { MutableRefObject } from "react";

declare type Transform = {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
};

declare type UniqueIdentifier = string | number;

interface ClientRect {
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

declare type AnyData = Record<string, any>;
declare type Data<T = AnyData> = T & AnyData;
declare type DataRef<T = AnyData> = MutableRefObject<Data<T> | undefined>;
interface Active {
  id: UniqueIdentifier;
  data: DataRef;
  rect: MutableRefObject<{
    initial: ClientRect | null;
    translated: ClientRect | null;
  }>;
}
interface Over {
  id: UniqueIdentifier;
  rect: ClientRect;
  disabled: boolean;
  data: DataRef;
}

declare type Modifier = (args: {
  activatorEvent: Event | null;
  active: Active | null;
  activeNodeRect: ClientRect | null;
  draggingNodeRect: ClientRect | null;
  containerNodeRect: ClientRect | null;
  over: Over | null;
  overlayNodeRect: ClientRect | null;
  scrollableAncestors: Element[];
  scrollableAncestorRects: ClientRect[];
  transform: Transform;
  windowRect: ClientRect | null;
}) => Transform;

declare function createSnapModifier(gridSize: number): Modifier;

declare const restrictToHorizontalAxis: Modifier;

declare const restrictToParentElement: Modifier;

declare const restrictToFirstScrollableAncestor: Modifier;

declare const restrictToVerticalAxis: Modifier;

declare const restrictToWindowEdges: Modifier;

declare const snapCenterToCursor: Modifier;

export {
  createSnapModifier,
  restrictToFirstScrollableAncestor,
  restrictToHorizontalAxis,
  restrictToParentElement,
  restrictToVerticalAxis,
  restrictToWindowEdges,
  snapCenterToCursor,
};
