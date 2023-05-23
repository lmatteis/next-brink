import { PropsWithChildren } from "react";

export function InfoTop({ children }: PropsWithChildren) {
  return (
    <div className="flex gap-[35px] lg:gap-0 flex-col lg:flex-row mx-[10px] lg:mx-0">
      {children}
    </div>
  );
}
