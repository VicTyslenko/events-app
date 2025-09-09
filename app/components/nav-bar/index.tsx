import { DefaultButton } from "@/app/shared/ui/default-button";
import { DefaultInput } from "@/app/shared/ui/default-input";
import { useNavBar } from "./hooks";
import { NewEvent } from "../new-event";
import { Modal } from "@/app/shared/ui/modal/modal";

import * as S from "./styles";

export default function NavBar() {
  const { openModal, handleModalClose, handleModalOpen } = useNavBar();

  return (
    <S.NavBarWrapp>
      <S.FlexWrapp>
        <S.ButtonGroup>
          <DefaultButton action={() => null}>All</DefaultButton>
          <DefaultButton action={() => null}>Upcoming</DefaultButton>
        </S.ButtonGroup>

        <DefaultInput withIcon />
      </S.FlexWrapp>

      <DefaultButton action={handleModalOpen}>Create event</DefaultButton>

      {openModal && (
        <Modal close={handleModalClose}>
          <NewEvent onClose={handleModalClose} />
        </Modal>
      )}
    </S.NavBarWrapp>
  );
}
