import React, { useState } from "react";
import * as S from "./style";
import { useChangeState } from "../../../../store/plannerState";
import { useSetColor } from "../../../../store/setColor";

const SideBar = () => {
  const [isClose, setIsClose] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const { isConfirm } = useChangeState();
  const { bgColor, setBgColor } = useSetColor();

  return (
    <S.Container isClose={isClose} isConfirm={isConfirm}>
      <S.Push
        src="/images/push.svg"
        onClick={() => setIsClose((prev) => !prev)}
        isClose={isClose}
      />
      <S.FuncWrapper isClose={isClose}>
        <S.FuncContainer>
          <S.Func>
            배경색 :
            <S.ChooseColor bgColor={bgColor}>
              <S.ColorBox
                type="color"
                onChange={(e) => setBgColor(e.target.value)}
                value={bgColor}
              />
              {bgColor}
            </S.ChooseColor>
          </S.Func>
          <S.Func>
            내용 :
            <S.DetailInput
              placeholder="이름을 입력해주세요."
              onChange={(e) => setName(e.target.value)}
            />
          </S.Func>
          <S.TimeFunc>
            시간 :
            <S.TimeWrapper>
              <S.TimeInput type="time"></S.TimeInput>-
              <S.TimeInput type="time"></S.TimeInput>
            </S.TimeWrapper>
          </S.TimeFunc>
          <S.Func>
            사진 :<S.ImageText>이미지 업로드</S.ImageText>
          </S.Func>
        </S.FuncContainer>
        <S.DeleteButton>테이블 삭제</S.DeleteButton>
      </S.FuncWrapper>
    </S.Container>
  );
};

export default SideBar;
