import { PropsWithChildren } from "react";

export function Item({ children }: PropsWithChildren) {
  return (
    <div className="bg-cold-blue flex-1 w-[85vw] lg:w-auto">{children}</div>
  );
}
