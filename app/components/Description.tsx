import { PropsWithChildren } from "react";

export function Description({ children }: PropsWithChildren) {
  return (
    <div className="text-[21px] leading-[33px] text-left flex flex-col gap-8">
      {children}
    </div>
  );
}
