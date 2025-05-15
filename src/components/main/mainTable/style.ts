import styled from "styled-components";

interface BgColor {
    bgColor: string;
}

export const Container = styled.div`
    width: 30rem;
    height: 30rem;
    display: flex;
`;

export const Table = styled.div<BgColor>`
    display:flex;
    align-items: center;
    justify-content: center;
    font-family: "WandohopeR";
    width: 30rem;
    height: 30rem;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
    justify-content: center;
    font-size: 2rem;
    color: #fdfdfd;
    cursor: pointer;
    position: absolute;
    /* clip-path: polygon(50% 50%, 0% 100%, 100% 100%); 반원에서 일부 제거 */
`;
