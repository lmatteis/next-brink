import { PropsWithChildren } from "react";

export function Content({ children }: PropsWithChildren) {
  return <div className="bg-black text-white lg:px-[20px]">{children}</div>;
}
