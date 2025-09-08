import { DefaultButton } from "@/app/shared/ui/default-button";
import { DefaultInput } from "@/app/shared/ui/default-input";
import * as S from "./styles";

export default function NavBar() {
  return (
    <S.NavBarWrapp>
      <S.FlexWrapp>
        <S.ButtonGroup>
          <DefaultButton>All</DefaultButton>
          <DefaultButton>Upcoming</DefaultButton>
        </S.ButtonGroup>

        <DefaultInput withIcon />
      </S.FlexWrapp>

      <DefaultButton>Create event</DefaultButton>
    </S.NavBarWrapp>
  );
}