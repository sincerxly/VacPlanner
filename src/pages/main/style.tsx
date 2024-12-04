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
  display: Flex;
  flex-direction: column;
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
