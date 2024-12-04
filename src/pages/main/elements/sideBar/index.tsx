import React, { useState } from "react";
import * as S from "./style";

const SideBar = () => {
  const [isClose, setIsClose] = useState<boolean>(false);

  return (
    <S.Container style={isClose ? { width: "20px" } : { width: "247px" }}>
      <S.Push
        src="/images/push.svg"
        onClick={() => setIsClose((prev) => !prev)}
        style={
          isClose
            ? { transform: "rotate(180deg)" }
            : { transform: "rotate(0deg)" }
        }
      />
    </S.Container>
  );
};

export default SideBar;
