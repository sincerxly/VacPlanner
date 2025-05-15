import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Sign = styled.img`
    width: 4rem;
    position: absolute;
    top: 5%;
    right: 10%;
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MainContainer = styled.div`
    width: 100vw;
    gap:3rem;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled(Box)`
    width: 30rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    justify-content: center;
    background-color: #84bbff;
    color: white;
    border-radius: 0.4rem;
    font-weight: 500;
    cursor: pointer;
`;

export const InputContainer = styled.div`
    width: 300px;
    height: 35px;
`;

export const InputName = styled.input`
    border: 1px solid #eeeeee;
    border-radius: 5px;
    font-size: 12px;
    width: 100%;
    height: inherit;
    padding-left: 10px;
    &::placeholder {
        color: #bfbfbf;
    }
`;

export const Cancel = styled.img`
    width: 10px;
    height: 10px;
    position: relative;
    left: 90%;
    bottom: 67%;
    cursor: pointer;
`;
