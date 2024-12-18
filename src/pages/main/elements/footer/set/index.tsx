import React from "react";
import * as S from "./style";

interface FooterProps {
  footerValue: {
    name: string;
  };
}

const SetFooter: React.FC<FooterProps> = ({ footerValue }) => {
  const { name } = footerValue;
  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.SaveButton>저장하기</S.SaveButton>
    </S.Container>
  );
};

export default SetFooter;
