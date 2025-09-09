"use client";
import { useMain } from "./hooks";
import NavBar from "@/app/components/nav-bar";
import { EventList } from "@/app/components/event-list";

import * as S from "./styles";

export default function Main() {
  const { allEvents } = useMain();
  console.log("all events", allEvents);
  return (
    <S.MainContainer>
      <S.InnerContent>
        <NavBar />
        <EventList events={allEvents} />
      </S.InnerContent>
    </S.MainContainer>
  );
}
