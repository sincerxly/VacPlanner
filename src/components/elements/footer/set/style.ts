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

export const SaveButton = styled(Box)`
  width: 175px;
  height: 35px;
  font-size: 1rem;
  justify-content: center;
  background-color: #84bbff;
  color: white;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
`;
