import * as S from "./styles";

import type { EventProps } from "@/app/components/event-list/models";

type DateProps = Pick<EventProps, "date">;

export const DateDisplay = ({ date }: DateProps) => {
  const parseDate = new Date(date);
  const day = parseDate.getDate();

  const month = parseDate.toLocaleString("en-US", { month: "short" });

  return (
    <S.DateWrapp>
      <S.DateText>{day}</S.DateText>
      <S.DateNumber>{month}</S.DateNumber>
    </S.DateWrapp>
  );
};
