import { PropsWithChildren } from "react";

export function Info({ children }: PropsWithChildren) {
  return (
    <div className="flex gap-10 overflow-auto flex-col pt-[100px]">
      {children}
    </div>
  );
}
