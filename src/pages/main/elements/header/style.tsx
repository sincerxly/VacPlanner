import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: Center;
`;

export const Header = styled(Box)`
  flex-direction: column;
  width: 367px;
  height: 75px;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const LogoText = styled.div`
  font-size: 20px;
  font-family: "WandohopeR";
  font-weight: bold;
`;
