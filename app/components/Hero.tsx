import { PropsWithChildren } from "react";

export function Hero({ children }: PropsWithChildren) {
  return (
    <div className="mt-[230px] lg:mt-[270px] px-[10px] lg:px-[20px] mb-[40px]">
      {children}
    </div>
  );
}
