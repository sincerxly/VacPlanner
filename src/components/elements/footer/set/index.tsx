import React from "react";
import * as S from "./style";
import { useRename } from "../../../../store/rename";
import html2canvas from "html2canvas";

interface SetFooterProps {
    mainTableRef: React.RefObject<HTMLDivElement>;
}

const SetFooter = ({mainTableRef} : SetFooterProps) => {
    const { name } = useRename();
    const download = () => {
        const element = mainTableRef.current;
        if (!element) return;

        html2canvas(element, {
            useCORS: true,
            backgroundColor: "#ffffff",
            scale: 2, 
        })
            .then((canvas) => {
                const link = document.createElement("a");
                link.download = `${name}.png`;
                link.href = canvas.toDataURL("image/png");
                link.click();
            })
            .catch((err) => {
                console.error("이미지 저장 실패:", err);
            });
    };

    return (
        <S.Container>
            <S.Title>{name}</S.Title>
            <S.Button onClick={download}>저장하기</S.Button>
        </S.Container>
    );
};

export default SetFooter;
