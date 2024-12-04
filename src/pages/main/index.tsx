import React, { useState } from "react";
import * as S from "./style";
import Header from "./elements/header";

const Home = () => {
  const [isButton, setIsButton] = useState<boolean>(true);
  const [name, setName] = useState<string>("");

  return (
    <S.Container>
      <S.Sign src="/images/sign.svg" />
      <S.MainContainer>
        <Header />
        <S.Content>
          <S.Table>테이블이 비었어요!</S.Table>
        </S.Content>
        {isButton && name === "" ? (
          <S.Button onClick={() => setIsButton((prev) => !prev)}>
            새 테이블 생성
          </S.Button>
        ) : (
          <S.InputContainer>
            <S.InputName
              placeholder="테이블 이름을 적어주세요. (입력 후 엔터)"
              maxLength={10}
              onChange={(e) => setName(e.target.value)}
              value={name}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setIsButton(true);
                  setName("");
                }
              }}
            />
            {name && (
              <S.Cancel
                src="/images/Cancel.svg"
                onClick={() => {
                  setName("");
                  setIsButton(true);
                }}
              />
            )}
          </S.InputContainer>
        )}
      </S.MainContainer>
    </S.Container>
  );
};

export default Home;
