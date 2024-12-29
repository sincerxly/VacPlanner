import React, { useState } from "react";
import * as S from "./style";
import { useChangeState } from "../../../../store/plannerState";
import { useSetColor } from "../../../../store/setColor";
import { useSelectTable } from "../../../../store/useSelectTable";
import useAddForm from "../tableForm/addForm";

const SideBar = () => {
  const [isClose, setIsClose] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const { isConfirm } = useChangeState();
  const { bgColor, setBgColor } = useSetColor();
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [bgImg, setBgImg] = useState<string>("");
  const { selectTable } = useSelectTable();
  const addForm = useAddForm();

  const handleStopClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const handleEndTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const uploadFile = files?.[0];
    if (uploadFile) {
      setBgImg(uploadFile.name);
    }
  };

  const handleAddTable = () => {
    addForm(name, bgColor, bgImg, startTime, endTime);
  };

  return (
    <S.Container
      isClose={isClose}
      isConfirm={isConfirm}
      onClick={handleStopClick}
    >
      <S.Push
        src="/images/push.svg"
        onClick={() => setIsClose((prev) => !prev)}
        isClose={isClose}
      />
      {selectTable !== null ? (
        <S.FuncWrapper isClose={isClose}>
          {/* ... 기존 코드 ... */}
        </S.FuncWrapper>
      ) : (
        <S.NotSelectedContainer isClose={isClose}>
          <div style={{ cursor: "pointer" }} onClick={handleAddTable}>
            테이블 추가하기
          </div>
        </S.NotSelectedContainer>
      )}
    </S.Container>
  );
};

export default SideBar;
