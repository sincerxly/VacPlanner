import React from "react";
import * as S from "./style";
import { useRename } from "../../../../../store/rename";

interface FooterProps {
  footerValue: {};
}

const saveImage = () => {};

const SetFooter: React.FC<FooterProps> = ({ footerValue }) => {
  const { name } = useRename();

  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.SaveButton>저장하기</S.SaveButton>
    </S.Container>
  );
};

export default SetFooter;
