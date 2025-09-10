import * as S from "./styles";
import type { EventProps } from "@/app/components/event-list/models";
import { DateDisplay } from "./extensions/date-display";
import { useRouter } from "next/navigation";

export const Event = ({ title, location, date, id }: EventProps) => {
  const router = useRouter();

  const handleClick = () => {
    console.log(id);
    router.push(`/event/${id}`);
  };

  return (
    <S.EventWrapp onClick={handleClick}>
      <S.FlexWrapp>
        <DateDisplay date={date} />
        <S.ContentWrapp>
          <S.Title>{title}</S.Title>
          <S.Location>{location}</S.Location>
        </S.ContentWrapp>
      </S.FlexWrapp>
    </S.EventWrapp>
  );
};
