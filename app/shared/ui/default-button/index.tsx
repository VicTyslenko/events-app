import type { DefaultButtonProps } from "./models";
import { Button } from "./styles";

export const DefaultButton = ({ children, active, action, type = "button", className }: DefaultButtonProps) => {
  return (
    <Button onClick={action} type={type} className={`default-button ${className || ""}`} $active={active}>
      {children}
    </Button>
  );
};
