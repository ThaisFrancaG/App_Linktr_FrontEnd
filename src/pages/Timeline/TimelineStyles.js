import styled from "styled-components";

const HeaderComponent = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  height: 70px;
  width: 100vw;
  padding: 0 20px;
  background-color: #151515;
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
  font-family: "Passion One";
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  height: 50px;
`;

const ProfileComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const LogoutButton = styled.button`
  position: fixed;
  top: 70px;
  right: 0;
  width: 120px;
  height: 40px;
  background-color: inherit;
  color: inherit;
  border: 0;
  border-bottom-left-radius: 10px;
  font-family: "Lato";
  font-size: 18px;
  cursor: pointer;
`;

export { HeaderComponent, Title, ProfileImg, ProfileComponent, LogoutButton };
