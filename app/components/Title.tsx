import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return (
    <div className="text-[36px] lg:text-[84px] leading-[39px] lg:leading-[92px] w-4/5">
      {children}
    </div>
  );
}
