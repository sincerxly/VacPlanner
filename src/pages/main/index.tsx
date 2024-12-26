import React, { useState, useRef } from "react";
import * as S from "./style";
import Header from "./elements/header";
import SetFooter from "./elements/footer/set";
import NotSetFooter from "./elements/footer/notSet";
import SideBar from "./elements/sideBar";
import { useChangeState } from "../../store/plannerState";
import { useSetColor } from "../../store/setColor";
import { useMainContainer } from "../../store/useMainContainer";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver"; // 추가

const Home = () => {
  const [isButton, setIsButton] = useState<boolean>(true);
  const { isConfirm } = useChangeState();
  const { bgColor } = useSetColor();
  const footervalue = {
    isButton,
    setIsButton,
  };

  const personInfo = useRef<HTMLDivElement>(null); // null 초기값 지정

  const onClick = () => {
    if (personInfo.current) {
      domtoimage
        .toBlob(personInfo.current) // 이미지 Blob 생성
        .then((blob) => {
          if (blob) {
            saveAs(blob, "user-card.png"); // Blob 저장
          }
        })
        .catch((error) => {
          console.error("이미지 생성 중 오류 발생:", error);
        });
    }
  };

  return (
    <S.Container>
      <S.Sign src="/images/sign.svg" onClick={onClick} />
      <SideBar />
      <S.MainContainer ref={personInfo}>
        <Header />
        <S.Content>
          <S.Table bgColor={bgColor}>
            {isConfirm ? null : "테이블이 비었어요!"}
          </S.Table>
        </S.Content>
        {isConfirm ? (
          <SetFooter footerValue={footervalue} />
        ) : (
          <NotSetFooter footerValue={footervalue} />
        )}
      </S.MainContainer>
    </S.Container>
  );
};

export default Home;
