import { useState } from "react";
import { useRoute } from "wouter";

// Infer route parameters from route pattern
type ExtractParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof ExtractParams<`/${Rest}`>]: string }
    : T extends `${string}:${infer Param}`
      ? { [K in Param]: string }
      : // eslint-disable-next-line @typescript-eslint/ban-types
        {};

type ToIntersection<U> = (
  U extends Record<string, string> ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

type OptionalParams<R extends readonly string[]> = Partial<
  ToIntersection<ExtractParams<R[number]>>
>;

export function useRoutes<T extends string, R extends readonly T[]>(
  routes: readonly [...R],
) {
  const [initialRoutes] = useState(routes);
  const [matched, setMatched] = useState<[R[number] | null, OptionalParams<R>]>(
    [null, {}],
  );

  if (routes.some((route, index) => route !== initialRoutes[index])) {
    throw new Error("Route table cannot be changed after initialization.");
  }

  let found = false;

  // The same number of hooks should be called on each render, don't exit early
  for (const route of routes) {
    const [match, params] = useRoute<ExtractParams<R[number]>>(route);
    if (match && !found) {
      found = true;
      if (
        matched[0] !== route ||
        Object.keys(params).length !== Object.keys(matched[1]).length ||
        // @ts-expect-error Object.keys() does not infer key types
        Object.keys(params).some((k) => params[k] !== matched[1][k])
      ) {
        setMatched([route, params as OptionalParams<R>]);
      }
    }
  }

  // If no route matched, reset the matched route
  if (!found && matched[0]) {
    setMatched([null, {}]);
  }

  return matched;
}
