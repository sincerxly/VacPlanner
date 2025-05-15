import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useChangeState } from "../../store/plannerState";
import { useMainContainer } from "../../store/useMainContainer";
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
    const { mainContainerRef } = useMainContainer();
    const { data, setData } = useData();
    const { name, setName, setBgColor } = useTableHook();

    useEffect(() => {
        console.log(selectTable);
    }, [selectTable]);

    const footervalue = {
        isButton,
        setIsButton,
    };

    useEffect(() => {
        console.log(selectTable);
    }, [selectTable]);

    const handleTableClick = (id: number) => {
        setSelectTable(id);
        setName("");
    };

    const handleContainerClick = () => {
        setSelectTable(null);
        setName("");
    };

    return (
        <S.Container onClick={handleContainerClick}>
            <S.Sign src="/images/sign.svg" />
            <SideBar />
            <S.MainContainer>
                <Header />
                <MainTable
                    isConfirm={isConfirm}
                    data={data}
                    mainContainerRef={mainContainerRef}
                    handleTableClick={handleTableClick}
                />
                {isConfirm ? (
                    <SetFooter />
                ) : (
                    <NotSetFooter footerValue={footervalue} />
                )}
            </S.MainContainer>
        </S.Container>
    );
};

export default Home;
