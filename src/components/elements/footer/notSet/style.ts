import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(Box)`
  width: 20rem;
  height: 3rem;
  justify-content: center;
  background-color: #84bbff;
  color: white;
  border-radius: 0.4rem;
  font-weight: 500;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  width: 40rem;
  height: 3rem;
`;

export const InputName = styled.input`
  border: 0.1rem solid #eeeeee;
  border-radius: 0.4rem;
  font-size: 1rem;
  width: 100%;
  height: inherit;
  padding-left: 1rem;
  &::placeholder {
    color: #bfbfbf;
  }
`;

export const Cancel = styled.img`
  width: 0.8rem;
  position: relative;
  left: 90%;
  bottom: 67%;
  cursor: pointer;
`;
