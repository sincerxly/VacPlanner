import React, { useState } from "react";
import * as S from "./style";
import { useChangeState } from "../../../../store/plannerState";
import { useSetColor } from "../../../../store/setColor";
import { useSelectTable } from "../../../../store/useSelectTable";
import useAddForm from "../tableForm/addForm";
import { useData } from "../../../../store/useData";

const SideBar = () => {
  const [isClose, setIsClose] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const { isConfirm } = useChangeState();
  const { bgColor, setBgColor } = useSetColor();
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [bgImg, setBgImg] = useState<string>("");
  const { selectTable, setSelectTable } = useSelectTable();
  const { data } = useData();
  const addForm = useAddForm();

  const handleStopClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleTableClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSelectTable(e.currentTarget);
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
    addForm(`테이블 ${data.length + 1}`, bgColor, bgImg, startTime, endTime);
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
      {data.length < 2 ? ( // 데이터가 하나도 없을 때
        <S.NotSelectedContainer isClose={isClose}>
          <div style={{ cursor: "pointer" }} onClick={handleAddTable}>
            테이블 추가하기
          </div>
        </S.NotSelectedContainer>
      ) : selectTable === null ||
        (selectTable === undefined && data.length > 2) ? ( // 데이터는 있는데 지금 배경 누르고 있을 때 (테이블과 테이블 추가하기 띄워줌)
        <S.FuncWrapper isClose={isClose}>
          <S.Lists>
            {data.map((item) => (
              <S.List onClick={handleTableClick}>{item.name}</S.List>
            ))}
          </S.Lists>
          <S.AddButton>테이블 추가</S.AddButton>
        </S.FuncWrapper>
      ) : (
        // 지금 뭐 클릭하고 있을 때
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
                <S.TimeInput type="time" />-
                <S.TimeInput type="time" />
              </S.TimeWrapper>
            </S.TimeFunc>
            <S.Func>
              <S.Poster htmlFor="file">
                사진 :{" "}
                <S.ImageText>
                  {bgImg ? `${bgImg}` : "이미지 업로드"}
                </S.ImageText>
              </S.Poster>
              <S.PosterInput
                type="file"
                name="file"
                id="file"
                onChange={handleChangeFile}
                accept=".jpg, .png,"
              />
            </S.Func>
          </S.FuncContainer>
          <S.DeleteButton>테이블 삭제</S.DeleteButton>
        </S.FuncWrapper>
      )}
    </S.Container>
  );
};

export default SideBar;
