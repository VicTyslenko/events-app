import * as S from "./styles";
import type { EventProps } from "@/app/components/event-list/models";
import { DateDisplay } from "./extensions/date-display";

export const Event = ({ title, description, location, date }: EventProps) => {
  return (
    <S.EventWrapp>
      <S.FlexWrapp>
        <DateDisplay date={date} />
        <S.ContentWrapp>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.ContentWrapp>
      </S.FlexWrapp>
    </S.EventWrapp>
  );
};
