import { BiSearchAlt2 } from "react-icons/bi";
import type { InputProps } from "./models";

import * as S from "./styles";

export const DefaultInput = ({ withIcon, type = "text" }: InputProps) => {
  return (
    <S.InputWrapp>
      <input type={type} placeholder="search events" />
      {withIcon && <BiSearchAlt2 className="search-icon" />}
    </S.InputWrapp>
  );
};
