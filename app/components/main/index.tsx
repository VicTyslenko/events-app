"use client";

import { useMain } from "./hooks";
import NavBar from "@/app/components/nav-bar";
import { EventList } from "@/app/components/event-list";

import * as S from "./styles";

export default function Main() {
  const { events, handleSearch, handleSearchDate } = useMain();

  return (
    <S.MainContainer>
      <S.InnerContent>
        <NavBar handleSearchDate={handleSearchDate} onChange={handleSearch} />
        {events && events.length > 0 ? <EventList events={events} /> : <S.EmptyMessage>Event list is empty</S.EmptyMessage>}
      </S.InnerContent>
    </S.MainContainer>
  );
}
