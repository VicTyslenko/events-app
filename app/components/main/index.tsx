"use client";
import { useMain } from "./hooks";
import NavBar from "@/app/components/nav-bar";
import { EventList } from "@/app/components/event-list";

import * as S from "./styles";

export default function Main() {
  const { events, handleSearch } = useMain();
  return (
    <S.MainContainer>
      <S.InnerContent>
        <NavBar onChange={handleSearch} />
        <EventList events={events} />
      </S.InnerContent>
    </S.MainContainer>
  );
}
