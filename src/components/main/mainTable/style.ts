import styled from "styled-components";

interface TableProps {
    bgColor: string;
    bgImg?: string;
    startTime?: string;
    endTime?: string;
}

export const Container = styled.div`
    width: 30rem;
    height: 30rem;
    display: flex;
`;

export const Table = styled.div<TableProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "WandohopeR";
    width: 30rem;
    height: 30rem;
    font-size: 1rem;
    background-color: ${(props) => (!props.bgImg ? props.bgColor : "white")};
    background-image: url(${(props) => (props.bgImg ? props.bgImg : "")});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    justify-content: center;
    color: white;
    cursor: pointer;
    position: absolute;
    -webkit-text-stroke-width: 0.03rem;
    -webkit-text-stroke-color: black;
    /* clip-path: polygon(50% 50%, 0% 100%, 100% 100%); 반원에서 일부 제거 */
`;
