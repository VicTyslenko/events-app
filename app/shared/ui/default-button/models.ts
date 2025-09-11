import { HTMLAttributes, ReactNode } from "react";

export interface DefaultButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: HTMLButtonElement["type"];
  action: () => void;
  active?: boolean;
  className?: string;

}
