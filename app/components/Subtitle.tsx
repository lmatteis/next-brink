import { PropsWithChildren } from "react";

export function Subtitle({ children }: PropsWithChildren) {
  return <div className="text-[21px] mb-3 lg:mb-5">{children}</div>;
}
