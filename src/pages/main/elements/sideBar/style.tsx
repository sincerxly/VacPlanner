import styled from "styled-components";

interface PushProps {
  isClose: boolean;
}

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: Center;
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
`;

export const Push = styled.img<PushProps>`
  position: absolute;
  top: 50%;
  right: 0%;
  cursor: pointer;
  transform: ${(props) => (props.isClose ? "rotate(180deg)" : "rotate(0deg)")};
  transition: 0.5s;
`;

export const FuncWrapper = styled(Box)`
  flex-direction: column;
  width: 167px;
  height: 179px;
`;

export const FuncContainer = styled(Box)`
  width: 167px;
  height: 16px;
`;
