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
            <S.Table
                bgColor={bgColor}
                ref={mainContainerRef as React.RefObject<HTMLDivElement>}
            >
                {isConfirm ? null : "테이블이 비었어요!"}
            </S.Table>
            {data.map((item: any, index: number) => {
                const clipPath =
                    item.startTime && item.endTime
                        ? generateClipPath(item.startTime, item.endTime)
                        : "none";

                const startHour = parseInt(item.startTime?.slice(0, 2) || "0");
                const endHour = parseInt(item.endTime?.slice(0, 2) || "0");
                const startMin = parseInt(item.startTime?.slice(3, 5) || "0");
                const endMin = parseInt(item.endTime?.slice(3, 5) || "0");

                const startDeg = (startHour + startMin / 60) * 15;
                const endDeg = (endHour + endMin / 60) * 15;

                let centerAngle =
                    (startDeg + (endDeg >= startDeg ? endDeg : endDeg + 360)) /
                    2;
                if (centerAngle >= 360) centerAngle -= 360;

                const radius = 35;
                const rad = (centerAngle - 90) * (Math.PI / 180);
                const offsetX = radius * Math.cos(rad);
                const offsetY = radius * Math.sin(rad);

                const style = {
                    position: "absolute" as const,
                    left: `calc(50% + ${offsetX}%)`,
                    top: `calc(50% + ${offsetY}%)`,
                    whiteSpace: "nowrap" as const,
                    pointerEvents: "none" as const,
                    transform: "translate(-50%, -50%)",
                    textAlign: "center" as const,
                };

                return (
                    <S.Table
                        key={index}
                        id={String(index)}
                        bgColor={item.bgColor}
                        bgImg={item.bgImg}
                        startTime={item.startTime}
                        endTime={item.endTime}
                        onClick={() => handleTableClick(index)}
                        style={{
                            zIndex: `${data.length}`,
                            clipPath,
                        }}
                    >
                        <div style={style}>
                            {item.name}
                            {isConfirm ? null : "테이블이 비었어요!"}
                            <br />({item.startTime} ~ {item.endTime})
                        </div>
                    </S.Table>
                );
            })}
        </S.Container>
    );
};

export default MainTable;
