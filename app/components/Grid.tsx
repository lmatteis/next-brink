import { PropsWithChildren } from "react";

export function Grid({ children }: PropsWithChildren) {
  return (
    <div className="flex gap-5 lg:gap-10 h-[620px] overflow-auto mx-0 lg:mx-[20px] mb-[100px]">
      {children}
    </div>
  );
}
