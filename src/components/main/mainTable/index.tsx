import React from "react";
import * as S from "./style";
import { MainTableType } from "../../../types/mainTableType";
import { useSetColor } from "../../../store/setColor";

const MainTable = ({
    isConfirm,
    data,
    mainContainerRef,
    handleTableClick,
}: MainTableType) => {
    const { bgColor } = useSetColor();
    return (
        <S.Container>
            <S.Table bgColor={bgColor}>
                {isConfirm ? null : "테이블이 비었어요!"}
            </S.Table>
            {data.map((item: any, index: number) => (
                <S.Table
                    key={index}
                    id={String(index)}
                    bgColor={item.bgColor}
                    bgImg={item.bgImg}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    ref={mainContainerRef as React.RefObject<HTMLDivElement>}
                    onClick={() => handleTableClick(index)}
                    style={{ zIndex: `${data.length}` }}
                >
                    {item.name}
                    {isConfirm ? null : "테이블이 비었어요!"}
                </S.Table>
            ))}
        </S.Container>
    );
};

export default MainTable;
