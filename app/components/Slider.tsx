import { PropsWithChildren } from "react";

export function Slider({ children }: PropsWithChildren) {
  return (
    <div className="flex overflow-auto gap-5 lg:gap-10 h-[776px]">
      {children}
    </div>
  );
}
