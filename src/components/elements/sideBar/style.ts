import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

interface PushProps {
    isClose: boolean;
    isConfirm?: boolean;
}

interface ColorProps {
    bgColor: string;
}

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.div`
    font-size: 1.4rem;
    font-weight: 700;
`

export const Container = styled.div<PushProps>`
    min-height: 40rem;
    height: 40rem;
    right: 1vw;
    position: absolute;
    width: ${(props) => (props.isClose ? "1.4rem" : "24rem")};
    padding: 3rem;
    background-color: #e4effd;
    border-radius: 0.4rem;
    box-shadow: 0px 0px 2px 0px rgb(0, 0, 0, 25%);
    transition: width 0.5s;
    transition-timing-function: ease-in-out;
    display: ${(props) => (props.isConfirm === false ? "none" : "flex")};
    justify-content: center;
    align-items: center;
`;

export const NotSelectedContainer = styled(Box)<PushProps>`
    width: 100%;
    height: 100%;
    justify-content: center;
    font-size: 1.4rem;
    color: #92c5ff;
    display: ${(props) => (props.isClose ? "none" : {})};
    animation: ${(props) => (props.isClose ? fadeOut : fadeIn)} 2.5s;
`;

export const Push = styled.img<PushProps>`
    position: absolute;
    top: 49%;
    right: 0%;
    cursor: pointer;
    transform: ${(props) =>
        props.isClose ? "rotate(180deg)" : "rotate(0deg)"};
    transition: 0.5s;
`;

export const FuncWrapper = styled(Box)<PushProps>`
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    display: ${(props) => (props.isClose ? "none" : {})};
    animation: ${(props) => (props.isClose ? fadeOut : fadeIn)} 2.5s;
`;

export const List = styled(Box)<ColorProps>`
    width: 100%;
    background-color: white;
    padding: 0.4rem;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    color: ${(props)=> props.bgColor ? props.bgColor : "black"};
`;

export const Lists = styled(Box)`
    gap: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    cursor: pointer;
    width: 100%;
    font-size: 1.4rem;
`;

export const FuncContainer = styled(Box)`
    flex-direction: column;
    width: 80%;
    gap: 3.5rem;
`;

export const Func = styled(Box)`
    width: 100%;
    height: 2rem;
    justify-content: space-between;
`;

export const DetailInput = styled.input`
    width: 11rem;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 0.3rem;
    font-size: 0.8rem;
    border-radius: 3px;
    &::placeholder {
        color: #bfbfbf;
        font-size: 0.8rem;
    }
`;

export const ChooseColor = styled(Box)<ColorProps>`
    color: ${(props) => props.bgColor};
    display: flex;
    gap:1rem;
`;

export const ColorBox = styled.input`
    cursor: pointer;
    background-color: transparent;
    border: none;
    width: 2rem;
    border-radius: 50%;
    &::selection {
        border-radius: 0.4rem;
    }
`;

export const TimeFunc = styled(Func)`
    width: 100%;
`;

export const TimeWrapper = styled(Box)`
    width: 11rem;
    flex-direction: column;
`;

export const TimeInput = styled.input`
    width: 11rem;
    height:2rem;
    border: none;
    outline: none;
    padding-left: 0.3rem;
    border-radius: 0.4rem;
    cursor: pointer;
`;

export const Poster = styled.label`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PosterInput = styled.input`
    display: none;
`;

export const ImageText = styled.div`
    width: 11rem;
    cursor: pointer;
    color: #00589c;
`;

export const DeleteButton = styled(Box)`
    width: 151px;
    height: 30px;
    border-radius: 8px;
    color: #e84545;
    background-color: white;
    margin-bottom: 40px;
    justify-content: center;
    cursor: pointer;
`;

export const AddButton = styled(DeleteButton)`
    color: #92c5ff;
    background-color: white;
`;
