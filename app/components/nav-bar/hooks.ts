import { useState } from "react";

export const useNavBar = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  return {
    openModal,
    handleModalClose,
    handleModalOpen,
  };
};
