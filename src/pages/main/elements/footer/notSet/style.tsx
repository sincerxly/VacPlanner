import styled from "styled-components";

export const Box = styled.div`
  display: Flex;
  justify-content: space-between;
  align-items: center;
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
