import { DefaultButton } from "@/app/shared/ui/default-button";
import { DefaultInput } from "@/app/shared/ui/default-input";
import { useRouter } from "next/navigation";
import ReactDatePicker from "react-datepicker";
import { SetStateAction, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

import * as S from "./styles";

const CalendarSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function NavBar({ onChange }: Props) {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <S.NavBarWrapp>
      <S.FlexWrapp>
        <S.ButtonGroup>
          <DefaultButton action={() => null}>All</DefaultButton>
          <DefaultButton action={() => null}>Upcoming</DefaultButton>
        </S.ButtonGroup>
        {/* <DefaultButton action={() => null} className="date-button"> */}
        {/* <FaRegCalendarAlt />  */}
        <ReactDatePicker className="date-picker" placeholderText=" Event date" selected={startDate} onChange={(date) => setStartDate(date as Date)} showIcon icon={<FaRegCalendarAlt/>} />
       
        {/* </DefaultButton> */}
        <DefaultInput onChange={onChange} withIcon />
      </S.FlexWrapp>

      <DefaultButton action={() => router.push("/create")}>Create event</DefaultButton>
    </S.NavBarWrapp>
  );
}
