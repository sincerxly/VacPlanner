import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Sign = styled.img`
  width: 64px;
  height: 40px;
  position: absolute;
  top: 5%;
  right: 10%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainContainer = styled(Box)`
  width: 400px;
  height: 608px;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 400px;
  height: 400px;
`;

export const Table = styled(Box)`
  font-family: "WandohopeR";
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 50%;
  border: 1px solid #eeeeee;
  font-size: 24px;
  justify-content: center;
  /* clip-path: polygon(50% 50%, 0% 100%, 100% 100%); 반원에서 일부 제거 */
`;

export const Button = styled(Box)`
  width: 175px;
  height: 35px;
  justify-content: center;
  background-color: #84bbff;
  color: white;
  border-radius: 5px;
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
