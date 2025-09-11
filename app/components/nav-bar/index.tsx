import { DefaultButton } from "@/app/shared/ui/default-button";
import { DefaultInput } from "@/app/shared/ui/default-input";
import { useRouter } from "next/navigation";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

import * as S from "./styles";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchDate: (value: Date | null) => void;
};

export default function NavBar({ onChange, handleSearchDate }: Props) {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <S.NavBarWrapp>
      <S.FlexWrapp>
        <S.ButtonGroup>
          <DefaultButton action={() => null}>All</DefaultButton>
          <DefaultButton action={() => null}>Upcoming</DefaultButton>
        </S.ButtonGroup>

        <ReactDatePicker
          className="date-picker"
          placeholderText="Event date"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date as Date);
            handleSearchDate(date);
          }}
          showIcon
          icon={<FaRegCalendarAlt />}
        />

        <DefaultInput onChange={onChange} withIcon />
      </S.FlexWrapp>

      <DefaultButton action={() => router.push("/create")}>Create event</DefaultButton>
    </S.NavBarWrapp>
  );
}
