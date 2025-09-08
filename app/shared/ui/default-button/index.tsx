import type { DefaultButtonProps } from "./models";
import { Button } from "./styles";

export const DefaultButton = ({ children, active, action }: DefaultButtonProps) => {
  return (
    <Button onClick={action} className="default-button" $active={active}>
      {children}
    </Button>
  );
};
