import { PropsWithChildren } from "react";

export function InfoHeader({ children }: PropsWithChildren) {
  return (
    <div className="text-[32px] lg:text-[42px] leading-[35px] lg:leading-[46px] flex-1">
      <div className="mr-[200px]">{children}</div>
    </div>
  );
}
