import type { DefaultButtonProps } from "./models";
import { Button } from "./styles";

export const DefaultButton = ({ children, active, action, type = "button" }: DefaultButtonProps) => {
  return (
    <Button onClick={action} type={type} className="default-button" $active={active}>
      {children}
    </Button>
  );
};
