type AlignmentOptionType =
  | "start"
  | "center"
  | "end"
  | ((viewSize: number, snapSize: number, index: number) => number);

type NodeRectType = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
};

type AxisOptionType = "x" | "y";
type AxisDirectionOptionType = "ltr" | "rtl";
type AxisEdgeType = "top" | "right" | "bottom" | "left";
type AxisType = {
  scroll: AxisOptionType;
  cross: AxisOptionType;
  startEdge: AxisEdgeType;
  endEdge: AxisEdgeType;
  measureSize: (nodeRect: NodeRectType) => number;
  direction: (n: number) => number;
};

type SlidesToScrollOptionType = "auto" | number;
type SlidesToScrollType = {
  groupSlides: <Type>(array: Type[]) => Type[][];
};

type LimitType = {
  min: number;
  max: number;
  length: number;
  constrain: (n: number) => number;
  reachedAny: (n: number) => boolean;
  reachedMax: (n: number) => boolean;
  reachedMin: (n: number) => boolean;
  removeOffset: (n: number) => number;
};

type ScrollContainOptionType = false | "trimSnaps" | "keepSnaps";

type PointerEventType = TouchEvent | MouseEvent;

type WindowType = Window & typeof globalThis;

type AnimationsType = {
  init: () => void;
  destroy: () => void;
  start: () => void;
  stop: () => void;
  update: () => void;
  render: (alpha: number) => void;
};

type CounterType = {
  get: () => number;
  set: (n: number) => CounterType;
  add: (n: number) => CounterType;
  clone: () => CounterType;
};

type CallbackType = (emblaApi: EmblaCarouselType, evt: EmblaEventType) => void;
type EmblaEventType = EmblaEventListType[keyof EmblaEventListType];
interface EmblaEventListType {
  init: "init";
  pointerDown: "pointerDown";
  pointerUp: "pointerUp";
  slidesChanged: "slidesChanged";
  slidesInView: "slidesInView";
  scroll: "scroll";
  select: "select";
  settle: "settle";
  destroy: "destroy";
  reInit: "reInit";
  resize: "resize";
  slideFocusStart: "slideFocusStart";
  slideFocus: "slideFocus";
}
type EventHandlerType$1 = {
  init: (emblaApi: EmblaCarouselType) => void;
  emit: (evt: EmblaEventType) => EventHandlerType$1;
  on: (evt: EmblaEventType, cb: CallbackType) => EventHandlerType$1;
  off: (evt: EmblaEventType, cb: CallbackType) => EventHandlerType$1;
  clear: () => void;
};

type EventNameType = keyof DocumentEventMap | keyof WindowEventMap;
type EventHandlerType = (evt: any) => void;
type EventOptionsType = boolean | AddEventListenerOptions | undefined;
type EventStoreType = {
  add: (
    node: EventTarget,
    type: EventNameType,
    handler: EventHandlerType,
    options?: EventOptionsType,
  ) => EventStoreType;
  clear: () => void;
};

type PercentOfViewType = {
  measure: (n: number) => number;
};

type ResizeHandlerCallbackType = (
  emblaApi: EmblaCarouselType,
  entries: ResizeObserverEntry[],
) => boolean | void;
type ResizeHandlerOptionType = boolean | ResizeHandlerCallbackType;
type ResizeHandlerType = {
  init: (emblaApi: EmblaCarouselType) => void;
  destroy: () => void;
};

type Vector1DType = {
  get: () => number;
  set: (n: Vector1DType | number) => void;
  add: (n: Vector1DType | number) => void;
  subtract: (n: Vector1DType | number) => void;
};

type ScrollBodyType = {
  direction: () => number;
  duration: () => number;
  velocity: () => number;
  seek: () => ScrollBodyType;
  settled: () => boolean;
  useBaseFriction: () => ScrollBodyType;
  useBaseDuration: () => ScrollBodyType;
  useFriction: (n: number) => ScrollBodyType;
  useDuration: (n: number) => ScrollBodyType;
};

type ScrollBoundsType = {
  shouldConstrain: () => boolean;
  constrain: (pointerDown: boolean) => void;
  toggleActive: (active: boolean) => void;
};

type ScrollLooperType = {
  loop: (direction: number) => void;
};

type ScrollProgressType = {
  get: (n: number) => number;
};

type SlideRegistryType = {
  slideRegistry: number[][];
};

type TargetType = {
  distance: number;
  index: number;
};
type ScrollTargetType = {
  byIndex: (target: number, direction: number) => TargetType;
  byDistance: (force: number, snap: boolean) => TargetType;
  shortcut: (target: number, direction: number) => number;
};

type ScrollToType = {
  distance: (n: number, snap: boolean) => void;
  index: (n: number, direction: number) => void;
};

type FocusHandlerCallbackType = (
  emblaApi: EmblaCarouselType,
  evt: FocusEvent,
) => boolean | void;
type FocusHandlerOptionType = boolean | FocusHandlerCallbackType;
type SlideFocusType = {
  init: (emblaApi: EmblaCarouselType) => void;
};

type TranslateType = {
  clear: () => void;
  to: (target: number) => void;
  toggleActive: (active: boolean) => void;
};

type LoopPointType = {
  loopPoint: number;
  index: number;
  translate: TranslateType;
  slideLocation: Vector1DType;
  target: () => number;
};
type SlideLooperType = {
  canLoop: () => boolean;
  clear: () => void;
  loop: () => void;
  loopPoints: LoopPointType[];
};

type SlidesHandlerCallbackType = (
  emblaApi: EmblaCarouselType,
  mutations: MutationRecord[],
) => boolean | void;
type SlidesHandlerOptionType = boolean | SlidesHandlerCallbackType;
type SlidesHandlerType = {
  init: (emblaApi: EmblaCarouselType) => void;
  destroy: () => void;
};

type SlidesInViewOptionsType = IntersectionObserverInit["threshold"];
type SlidesInViewType = {
  init: () => void;
  destroy: () => void;
  get: (inView?: boolean) => number[];
};

type EngineType = {
  ownerDocument: Document;
  ownerWindow: WindowType;
  eventHandler: EventHandlerType$1;
  axis: AxisType;
  animation: AnimationsType;
  scrollBounds: ScrollBoundsType;
  scrollLooper: ScrollLooperType;
  scrollProgress: ScrollProgressType;
  index: CounterType;
  indexPrevious: CounterType;
  limit: LimitType;
  location: Vector1DType;
  offsetLocation: Vector1DType;
  previousLocation: Vector1DType;
  options: OptionsType;
  percentOfView: PercentOfViewType;
  scrollBody: ScrollBodyType;
  dragHandler: DragHandlerType;
  eventStore: EventStoreType;
  slideLooper: SlideLooperType;
  slidesInView: SlidesInViewType;
  slidesToScroll: SlidesToScrollType;
  target: Vector1DType;
  translate: TranslateType;
  resizeHandler: ResizeHandlerType;
  slidesHandler: SlidesHandlerType;
  scrollTo: ScrollToType;
  scrollTarget: ScrollTargetType;
  scrollSnapList: number[];
  scrollSnaps: number[];
  slideIndexes: number[];
  slideFocus: SlideFocusType;
  slideRegistry: SlideRegistryType["slideRegistry"];
  containerRect: NodeRectType;
  slideRects: NodeRectType[];
};

type OptionsType$1 = Partial<CreateOptionsType<LooseOptionsType>>;
type OptionsHandlerType = {
  mergeOptions: <TypeA extends OptionsType$1, TypeB extends OptionsType$1>(
    optionsA: TypeA,
    optionsB?: TypeB,
  ) => TypeA;
  optionsAtMedia: <Type extends OptionsType$1>(options: Type) => Type;
  optionsMediaQueries: (optionsList: OptionsType$1[]) => MediaQueryList[];
};

type LoosePluginType = {
  [key: string]: unknown;
};
type CreatePluginType<
  TypeA extends LoosePluginType,
  TypeB extends LooseOptionsType,
> = TypeA & {
  name: string;
  options: Partial<CreateOptionsType<TypeB>>;
  init: (embla: EmblaCarouselType, OptionsHandler: OptionsHandlerType) => void;
  destroy: () => void;
};
interface EmblaPluginsType {
  [key: string]: CreatePluginType<LoosePluginType, {}>;
}
type EmblaPluginType = EmblaPluginsType[keyof EmblaPluginsType];

type EmblaCarouselType = {
  canScrollNext: () => boolean;
  canScrollPrev: () => boolean;
  containerNode: () => HTMLElement;
  internalEngine: () => EngineType;
  destroy: () => void;
  off: EventHandlerType$1["off"];
  on: EventHandlerType$1["on"];
  emit: EventHandlerType$1["emit"];
  plugins: () => EmblaPluginsType;
  previousScrollSnap: () => number;
  reInit: (options?: EmblaOptionsType, plugins?: EmblaPluginType[]) => void;
  rootNode: () => HTMLElement;
  scrollNext: (jump?: boolean) => void;
  scrollPrev: (jump?: boolean) => void;
  scrollProgress: () => number;
  scrollSnapList: () => number[];
  scrollTo: (index: number, jump?: boolean) => void;
  selectedScrollSnap: () => number;
  slideNodes: () => HTMLElement[];
  slidesInView: () => number[];
  slidesNotInView: () => number[];
};

type DragHandlerCallbackType = (
  emblaApi: EmblaCarouselType,
  evt: PointerEventType,
) => boolean | void;
type DragHandlerOptionType = boolean | DragHandlerCallbackType;
type DragHandlerType = {
  init: (emblaApi: EmblaCarouselType) => void;
  destroy: () => void;
  pointerDown: () => boolean;
};

type LooseOptionsType = {
  [key: string]: unknown;
};
type CreateOptionsType<Type extends LooseOptionsType> = Type & {
  active: boolean;
  breakpoints: {
    [key: string]: Omit<Partial<CreateOptionsType<Type>>, "breakpoints">;
  };
};
type OptionsType = CreateOptionsType<{
  align: AlignmentOptionType;
  axis: AxisOptionType;
  container: string | HTMLElement | null;
  slides: string | HTMLElement[] | NodeListOf<HTMLElement> | null;
  containScroll: ScrollContainOptionType;
  direction: AxisDirectionOptionType;
  slidesToScroll: SlidesToScrollOptionType;
  dragFree: boolean;
  dragThreshold: number;
  inViewThreshold: SlidesInViewOptionsType;
  loop: boolean;
  skipSnaps: boolean;
  duration: number;
  startIndex: number;
  watchDrag: DragHandlerOptionType;
  watchResize: ResizeHandlerOptionType;
  watchSlides: SlidesHandlerOptionType;
  watchFocus: FocusHandlerOptionType;
}>;
type EmblaOptionsType = Partial<OptionsType>;

type EmblaViewportRefType = <ViewportElement extends HTMLElement>(
  instance: ViewportElement | null,
) => void;
type UseEmblaCarouselType = [
  EmblaViewportRefType,
  EmblaCarouselType | undefined,
];
declare function useEmblaCarousel(
  options?: EmblaOptionsType,
  plugins?: EmblaPluginType[],
): UseEmblaCarouselType;
declare namespace useEmblaCarousel {
  let globalOptions: EmblaOptionsType | undefined;
}

export {
  type EmblaViewportRefType,
  type UseEmblaCarouselType,
  useEmblaCarousel as default,
};
