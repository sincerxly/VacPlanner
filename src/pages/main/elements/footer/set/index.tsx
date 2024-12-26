import React from "react";
import * as S from "./style";
import { useRename } from "../../../../../store/rename";
import html2canvas from "html2canvas";
import { useMainContainer } from "../../../../../store/useMainContainer";

interface FooterProps {
  footerValue: {};
}

const saveAsImageHandler = () => {
  const { mainContainerRef } = useMainContainer();
  if (!mainContainerRef || !mainContainerRef.current) {
    return alert("결과 저장에 실패했습니다.");
  }

  html2canvas(mainContainerRef.current)
    .then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "maincontainer.png";
      link.click();
    })
    .catch((error) => {
      console.error("이미지 저장 실패:", error);
      alert("이미지 저장 중 오류가 발생했습니다.");
    });
};

const SetFooter: React.FC<FooterProps> = ({ footerValue }) => {
  const { name } = useRename();

  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.SaveButton onClick={saveAsImageHandler}>저장하기</S.SaveButton>
    </S.Container>
  );
};

export default SetFooter;
