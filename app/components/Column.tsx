import { PropsWithChildren } from "react";

export function Column({ children }: PropsWithChildren) {
  return (
    <div className="flex gap-5 lg:gap-10 flex-row lg:flex-col flex-1">
      {children}
    </div>
  );
}
