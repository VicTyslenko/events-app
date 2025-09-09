import * as S from "./styles";
import type { EventProps } from "./models";
import { Event } from "../event";

export const EventList = ({ events }: { events: EventProps[] }) => {

  
  return (
    <S.EventListWrapp>
      {events.map((event) => (
        <Event key={event.id} title={event.title} description={event.description} id={event.id} location={event.location} date={event.date} />
      ))}
    </S.EventListWrapp>
  );
};
