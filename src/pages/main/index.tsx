import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";
import { useChangeState } from "../../store/plannerState";
import { useSelectTable } from "../../store/useSelectTable";
import { useData } from "../../store/useData";
import Header from "../../components/elements/header";
import SideBar from "../../components/elements/sideBar";
import SetFooter from "../../components/elements/footer/set";
import NotSetFooter from "../../components/elements/footer/notSet";
import MainTable from "../../components/main/mainTable";
import { useTableHook } from "../../hooks/useTableHook";

const Home = () => {
    const [isButton, setIsButton] = useState<boolean>(true);
    const { isConfirm } = useChangeState();
    const { selectTable, setSelectTable } = useSelectTable();
    const { data } = useData();
    const { setName, setBgImg, setBgColor } = useTableHook();
    const mainTableRef = useRef<HTMLDivElement>(null);

    const footervalue = {
        isButton,
        setIsButton,
    };

    useEffect(() => {
        console.log(selectTable);
    }, [selectTable]);

    const handleTableClick = (id: number) => {
        // 안에 클릭할 떄
        setSelectTable(id);
        setBgColor(data[id].bgColor);
        setName(data[id].name);
        setBgImg(data[id].bgImg);
    };

    const handleContainerClick = () => {
        // 밖에 클릭할 때
        setSelectTable(null);
    };

    return (
        <S.Container onClick={handleContainerClick}>
            <SideBar />
            <S.MainContainer>
                <Header />
                <MainTable
                    isConfirm={isConfirm}
                    data={data}
                    mainTableRef={mainTableRef}
                    handleTableClick={handleTableClick}
                />
                {isConfirm ? (
                    <SetFooter mainTableRef={mainTableRef}/>
                ) : (
                    <NotSetFooter footerValue={footervalue} />
                )}
            </S.MainContainer>
        </S.Container>
    );
};

export default Home;
