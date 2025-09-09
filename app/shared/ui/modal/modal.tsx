import * as S from "./styles";
import type { ModalProps } from "./models";

export const Modal = ({ children, close }: ModalProps) => {
  return (
    <>
      <S.ModalOverlay onClick={close}></S.ModalOverlay>
      <S.ModalInner>{children}</S.ModalInner>
    </>
  );
};
