import { PropsWithChildren } from "react";

export function Highlight({ children }: PropsWithChildren) {
  return (
    <div className="mx-[10px] lg:mx-auto lg:w-3/6 mt-[100px] mb-[40px] lg:mb-[100px]">
      {children}
    </div>
  );
}
