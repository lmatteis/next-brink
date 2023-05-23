import { PropsWithChildren } from "react";

export function Heading({ children }: PropsWithChildren) {
  return (
    <div className="text-[32px] lg:text-[42px] leading-[35px] lg:leading-[46px] text-center mb-[40px]">
      {children}
    </div>
  );
}
