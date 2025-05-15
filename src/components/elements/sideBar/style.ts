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

export const Container = styled.div<PushProps>`
  right: 1vw;
  position: absolute;
  width: ${(props) => (props.isClose ? "20px" : "247px")};
  height: 516px;
  background-color: #e4effd;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 0px rgb(0, 0, 0, 25%);
  transition: width 0.5s;
  transition-timing-function: ease-in-out;
  display: ${(props) => (props.isConfirm === false ? "none" : "flex")};
  justify-content: center;
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
  transform: ${(props) => (props.isClose ? "rotate(180deg)" : "rotate(0deg)")};
  transition: 0.5s;
`;

export const FuncWrapper = styled(Box)<PushProps>`
  flex-direction: column;
  width: 167px;
  height: 100%;
  display: ${(props) => (props.isClose ? "none" : {})};
  animation: ${(props) => (props.isClose ? fadeOut : fadeIn)} 2.5s;
`;

export const List = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Lists = styled(Box)`
  margin-top: 40px;
  gap: 10px;
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
  margin-top: 40px;
  width: 167px;
  gap: 27px;
`;

export const Func = styled(Box)`
  width: 100%;
  height: 24px;
  justify-content: space-around;
`;

export const DetailInput = styled.input`
  width: 125px;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 3%;
  font-size: 12px;
  border-radius: 3px;
  &::placeholder {
    color: #bfbfbf;
    font-size: 0.4rem;
  }
`;

export const ChooseColor = styled(Box)<ColorProps>`
  gap: 5px;
  color: ${(props) => props.bgColor};
  width: 125px;
  justify-content: flex-end;
`;

export const ColorBox = styled.input`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 25px;
  border-radius: 100px;
  &::selection {
    border-radius: 5px;
  }
`;

export const TimeFunc = styled(Func)`
  height: 66px;
  width: 100%;
`;

export const TimeWrapper = styled(Box)`
  width: 125px;
  flex-direction: column;
`;

export const TimeInput = styled.input`
  width: 125px;
  height: 24px;
  border: none;
  outline: none;
  padding-left: 3%;
  border-radius: 3px;
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
  width: 125px;
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
