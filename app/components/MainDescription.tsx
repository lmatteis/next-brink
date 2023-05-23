import { PropsWithChildren } from "react";

export function MainDescription({ children }: PropsWithChildren) {
  return <div className="flex-1 text-[21px] leading-[33px]">{children}</div>;
}
