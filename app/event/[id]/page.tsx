import * as S from "../styles";
import { FaMapMarkerAlt } from "react-icons/fa";

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${params.id}`, { cache: "no-store" });
  const event = await res.json();

  return (
    <>
      <S.Wrapper>
        <S.EventContainer>
          <S.EventHeader>
            <h1>{event.title}</h1>
          </S.EventHeader>
          <S.EventBody>
            <S.EventDescription>{event.description}</S.EventDescription>
            <S.EventLocation>
              <FaMapMarkerAlt color="red" /> {event.location}
            </S.EventLocation>
          </S.EventBody>
        </S.EventContainer>
      </S.Wrapper>
    </>
  );
}
