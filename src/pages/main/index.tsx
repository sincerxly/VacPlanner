import React from "react";
import * as S from "./style.tsx";

const Home = () => {
  return (
    <S.Container>
      <S.Sign src="/images/sign.svg" />
      <S.MainContainer>
        <S.Header>
          <S.Logo src="/images/logo.svg" />
          <S.LogoText>칭구야 이번 방학엔는 계획 좀 세우며 살쟈ㅏ...</S.LogoText>
        </S.Header>
        <S.Content>
          <S.Table>테이블이 비었어요!</S.Table>
        </S.Content>
        <S.Button>새 테이블 생성</S.Button>
      </S.MainContainer>
    </S.Container>
  );
};

export default Home;
