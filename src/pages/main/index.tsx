import React, { useState, useEffect } from "react";
import * as S from "./style";
import Header from "./elements/header";
import SetFooter from "./elements/footer/set";
import NotSetFooter from "./elements/footer/notSet";
import SideBar from "./elements/sideBar";
import { useChangeState } from "../../store/plannerState";
import { useSetColor } from "../../store/setColor";
import { useMainContainer } from "../../store/useMainContainer";
import { useSelectTable } from "../../store/useSelectTable";
import { TableForm } from "./elements/tableForm";

const Home = () => {
  const [isButton, setIsButton] = useState<boolean>(true);
  const { isConfirm } = useChangeState();
  const { bgColor } = useSetColor();
  const { selectTable, setSelectTable } = useSelectTable();
  const { mainContainerRef } = useMainContainer();

  const footervalue = {
    isButton,
    setIsButton,
  };

  const handleTableClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSelectTable(e.currentTarget);
  };

  const handleContainerClick = () => {
    setSelectTable(null);
  };

  return (
    <S.Container onClick={handleContainerClick}>
      <TableForm />
      <S.Sign src="/images/sign.svg" />
      <SideBar />
      <S.MainContainer>
        <Header />
        <S.Content>
          <S.Table
            bgColor={bgColor}
            ref={mainContainerRef as React.RefObject<HTMLDivElement>}
            onClick={handleTableClick}
          >
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
