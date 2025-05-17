import React from "react";
import * as S from "./style";
import { useData } from "../../../store/useData";
import { useSelectTable } from "../../../store/useSelectTable";
import { useChangeState } from "../../../store/plannerState";
import { useTableHook } from "../../../hooks/useTableHook";

const SideBar = () => {
    const { isConfirm } = useChangeState();
    const {
        handleChangeBgImg,
        handleChangeBgColor,
        handleDeleteTable,
        handleChangeName,
        handleTableClick,
        handleStopClick,
        handleAddTable,
        handleClose,
        handleStartTime,
        handleEndTime,
        startTime,
        endTime,
        name,
        isClose,
        bgImg,
        bgColor,
    } = useTableHook();
    const { selectTable } = useSelectTable();
    const { data } = useData();

    return (
        <S.Container
            isClose={isClose}
            isConfirm={isConfirm}
            onClick={handleStopClick}
        >
            <S.Push
                src="/images/push.svg"
                onClick={handleClose}
                isClose={isClose}
            />
            {data.length < 1 ? ( // 데이터가 하나도 없을 때
                <S.NotSelectedContainer isClose={isClose}>
                    <div style={{ cursor: "pointer" }} onClick={handleAddTable}>
                        테이블 추가하기
                    </div>
                </S.NotSelectedContainer>
            ) : selectTable === null ||
              (selectTable === undefined && data.length > 1) ? ( // 데이터는 있는데 지금 배경 누르고 있을 때 (테이블과 테이블 추가하기 띄워줌)
                <S.FuncWrapper isClose={isClose}>
                    <S.Lists>
                        {data.map((item, index) => (
                            <S.List
                                bgColor={item.bgColor}
                                onClick={() => handleTableClick(index)}
                            >
                                {item.name === ""
                                    ? "이름 없는 테이블"
                                    : item.name}
                            </S.List>
                        ))}
                    </S.Lists>
                    <S.AddButton onClick={handleAddTable}>
                        테이블 추가
                    </S.AddButton>
                </S.FuncWrapper>
            ) : (
                // 지금 뭐 클릭하고 있을 때
                <S.FuncWrapper isClose={isClose}>
                    <S.Title>{data[selectTable]?.name}</S.Title>
                    <S.FuncContainer>
                        <S.Func>
                            배경색 :
                            <S.ChooseColor bgColor={bgColor}>
                                <S.ColorBox
                                    type="color"
                                    onChange={(e) =>
                                        handleChangeBgColor(e.target.value)
                                    }
                                    value={bgColor}
                                />
                                {bgColor}
                            </S.ChooseColor>
                        </S.Func>
                        <S.Func>
                            이름 :
                            <S.DetailInput
                                placeholder="이름을 입력해주세요."
                                value={name}
                                onChange={(e) =>
                                    handleChangeName(e.target.value)
                                }
                            />
                        </S.Func>
                        <S.TimeFunc>
                            시간 :
                            <S.TimeWrapper>
                                <S.TimeInput type="time" value={startTime} onChange={(e)=>handleStartTime(e)}/>-
                                <S.TimeInput type="time" value={endTime} onChange={(e)=>handleEndTime(e)}/>
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
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        handleChangeBgImg(file);
                                    }
                                }}
                                accept=".jpg, .png,"
                            />
                        </S.Func>
                    </S.FuncContainer>
                    <S.DeleteButton onClick={handleDeleteTable}>
                        테이블 삭제
                    </S.DeleteButton>
                </S.FuncWrapper>
            )}
        </S.Container>
    );
};

export default SideBar;
