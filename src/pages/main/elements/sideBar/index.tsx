import React, { useState } from "react";
import * as S from "./style";

const SideBar = () => {
  const [isClose, setIsClose] = useState<boolean>(false);

  return (
    <S.Container isClose={isClose}>
      <S.Push
        src="/images/push.svg"
        onClick={() => setIsClose((prev) => !prev)}
        isClose={isClose}
      />
      <S.FuncWrapper>
        <S.FuncContainer></S.FuncContainer>
      </S.FuncWrapper>
    </S.Container>
  );
};

export default SideBar;
