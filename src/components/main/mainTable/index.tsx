import React from "react";
import * as S from "./style";
import { MainTableType } from "../../../types/mainTableType";

const MainTable = ({
    isConfirm,
    data,
    mainContainerRef,
    handleTableClick,
}: MainTableType) => {
    return (
        <S.Container>
            <S.Table bgColor="  #92c5ff">
                {" "}
                {isConfirm ? null : "테이블이 비었어요!"}
            </S.Table>
            {data.map((item: any, index: number) => (
                <S.Table
                    key={index}
                    id={String(index)}
                    bgColor={item.bgColor}
                    ref={mainContainerRef as React.RefObject<HTMLDivElement>}
                    onClick={() => handleTableClick(index)}
                    style={{ zIndex: `${data.length}` }}
                >
                    {isConfirm ? null : "테이블이 비었어요!"}
                </S.Table>
            ))}
        </S.Container>
    );
};

export default MainTable;
