import React from "react";
import * as S from "./style";
import { saveAs } from "file-saver";
import { useRename } from "../../../../store/rename";
import { useMainContainer } from "../../../../store/useMainContainer";
import { toBlob } from "html-to-image";

const SetFooter = () => {
  const { name } = useRename();
  const { mainContainerRef } = useMainContainer();


const saveAsImageHandler = () => {
  if (mainContainerRef.current) {
    toBlob(mainContainerRef.current)
      .then((blob) => {
        if (blob) saveAs(blob, `${name}.png`);
      })
      .catch(console.error);
  }
};


  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.Button onClick={saveAsImageHandler}>저장하기</S.Button>
    </S.Container>
  );
};

export default SetFooter;
