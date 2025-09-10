import { DefaultButton } from "@/app/shared/ui/default-button";
import { DefaultInput } from "@/app/shared/ui/default-input";
import { useRouter } from "next/navigation";

import * as S from "./styles";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function NavBar({ onChange }: Props) {
  const router = useRouter();

  return (
    <S.NavBarWrapp>
      <S.FlexWrapp>
        <S.ButtonGroup>
          <DefaultButton action={() => null}>All</DefaultButton>
          <DefaultButton action={() => null}>Upcoming</DefaultButton>
        </S.ButtonGroup>

        <DefaultInput onChange={onChange} withIcon />
      </S.FlexWrapp>

      <DefaultButton action={() => router.push("/create")}>Create event</DefaultButton>

      {/* {openModal && (
        <Modal close={handleModalClose}>
          <NewEvent onClose={handleModalClose} />
        </Modal>
      )} */}
    </S.NavBarWrapp>
  );
}
