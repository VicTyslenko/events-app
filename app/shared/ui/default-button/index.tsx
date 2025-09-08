import type { DefaultButtonProps } from "./models";
import { Button } from "./styles";

export const DefaultButton = ({ children, active }: DefaultButtonProps) => {
  return (
    <Button className="default-button" $active={active}>
      {children}
    </Button>
  );
};
