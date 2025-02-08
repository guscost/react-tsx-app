import { JSX } from "react";

interface Props$1 {
  id: string;
  value: string;
}
declare function HiddenText({ id, value }: Props$1): JSX.Element;

interface Props {
  id: string;
  announcement: string;
  ariaLiveType?: "polite" | "assertive" | "off";
}
declare function LiveRegion({
  id,
  announcement,
  ariaLiveType,
}: Props): JSX.Element;

declare function useAnnouncement(): {
  readonly announce: (value: string | undefined) => void;
  readonly announcement: string;
};

export { HiddenText, LiveRegion, useAnnouncement };
