import type React from "react";
import { CSSProperties } from "react";

export type DefaultButtonProps = {
  active?: boolean;
  children: React.ReactNode;
  action: () => void;
  // styles: CSSProperties;
};
