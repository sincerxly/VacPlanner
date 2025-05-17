import React from "react";
import * as S from "./style";
import { MainTableType } from "../../../types/mainTableType";
import { useSetColor } from "../../../store/setColor";
import { useCutTable } from "../../../hooks/useCutTable";

const MainTable = ({
    isConfirm,
    data,
    mainContainerRef,
    handleTableClick,
}: MainTableType) => {
    const { bgColor } = useSetColor();
    const { generateClipPath } = useCutTable();

    return (
        <S.Container>
            <S.Table bgColor={bgColor}>
                {isConfirm ? null : "테이블이 비었어요!"}
            </S.Table>
            {data.map((item: any, index: number) => {
                const clipPath =
                    item.startTime && item.endTime
                        ? generateClipPath(item.startTime, item.endTime)
                        : "none";

                return (
                    <S.Table
                        key={index}
                        id={String(index)}
                        bgColor={item.bgColor}
                        bgImg={item.bgImg}
                        startTime={item.startTime}
                        endTime={item.endTime}
                        ref={mainContainerRef as React.RefObject<HTMLDivElement>}
                        onClick={() => handleTableClick(index)}
                        style={{
                            zIndex: `${data.length}`,
                            clipPath,
                        }}
                    >
                        {item.name}
                        {isConfirm ? null : "테이블이 비었어요!"}
                        <br />
                        ({item.startTime} ~ {item.endTime})
                    </S.Table>
                );
            })}
        </S.Container>
    );
};

export default MainTable;
