import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled(Box)`
  flex-direction: column;
  gap: 2vh;
`;

export const Title = styled.div`
  font-family: "WandohopeR";
  font-size: 1.7rem;
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