import * as S from "../styles";

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${params.id}`, {
    cache: "no-store",
  });
  const event = await res.json();

  return (
    <>
      <S.Wrapper>
        <S.EventWrapp>
          <h1>{event.title}</h1>
          <h2>{event.description}</h2>
          <p>{event.location}</p>
        </S.EventWrapp>
      </S.Wrapper>
    </>
  );
}
