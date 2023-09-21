import { ReactNode } from "react";

export interface IDefaultBtn {
    text?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean
    children?: ReactNode
  }