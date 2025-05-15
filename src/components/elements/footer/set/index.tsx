import React from "react";
import * as S from "./style";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useRename } from "../../../../store/rename";
import { useMainContainer } from "../../../../store/useMainContainer";

interface FooterProps {
  footerValue: {};
}

const SetFooter = () => {
  const { name } = useRename();
  const { mainContainerRef } = useMainContainer();

  const saveAsImageHandler = () => {
    if (mainContainerRef.current) {
      domtoimage
        .toBlob(mainContainerRef.current)
        .then((blob) => {
          if (blob) {
            saveAs(blob, `${name}.png`);
          }
        })
        .catch((error) => {
          console.error("이미지 생성 중 오류 발생:", error);
        });
    }
  };

  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.SaveButton onClick={saveAsImageHandler}>저장하기</S.SaveButton>
    </S.Container>
  );
};

export default SetFooter;
