import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* width: 100vw; */
  justify-content: center;
  height: 100%;
  margin-bottom: 50px;
`;
const HeaderComponent = styled.div`
  position: fixed;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  height: 70px;
  width: 100vw;
  padding: 0 20px;
  background-color: #151515;
  @media (max-width: 430px) {
    position: absolute;
    width: 100vw;
  }
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
  font-family: "Passion One";

  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 50px;
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

const PublishCardContainer = styled.div`
  width: 611px;
  background-color: white;
  top: 200px;
  display: flex;
  color: #707070;
  font-size: 30px;
  font-family: "Passion One";
  padding: 10px;
  padding-left: 20px;
  border-radius: 15px;
  @media only screen and (max-width: 430px) {
    width: 100%;
    border-radius: 0;
  }
`;

const PublishForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
  .desc_input {
    height: 70px;
  }
`;

const FormInput = styled.input`
  border: none;
  background-color: #efefef;
  margin: 5px 0;
  height: 30px;
  border-radius: 8px;
`;

const FormTextInput = styled.textarea`
  border: none;
  background-color: #efefef;
  margin: 5px 0;
  height: 30px;
  border-radius: 8px;
  resize: none;
`;

const FormSubmit = styled.input`
  border: none;
  background-color: #1877f2;
  height: 30px;
  width: 120px;
  border-radius: 10px;
  color: white;
  align-self: flex-end;

  cursor: pointer;
`;

const TimelineTitle = styled.span`
  font-size: 43px;
  font-weight: bold;
  font-family: "Oswald";
`;

const SearchContainer = styled.div`
  width: 40%;
  height: 60%;
  background-color: white;
  border: none;
  border-radius: 8px;
  color: black;
  align-items: center;
  * {
    box-shadow: none !important;
    border: none !important;
  }
  svg {
    margin: 10px;
  }
  div {
    margin: 0;
    padding: 0;
  }

  div:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 430px) {
    position: absolute;
    top: 70px;
    left: 0;
    margin: 5px;
    width: calc(100vw - 10px);
    border-radius: 10px;
  }
`;

const DebounceContainer = styled(DebounceInput)`
  width: 95%;
  height: 100%;
  border-top-left-radius: 10px;
  :focus {
    outline: none;
  }

  @media (max-width: 430px) {
    border-bottom-left-radius: 10px;

    :focus {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

const Users = styled.ul`
  display: flex;
  align-items: center;
  font-size: 22px;
  background-color: #e7e7e7;
  box-shadow: none;
  width: 100%;
  padding: 10px !important;

  :hover {
    filter: brightness(90%);
  }
  span {
    margin-left: 10px;
  }
  :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px !important;
  }
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  color: #c6c6c6;
`;

const SearchIcon = styled.div`
  width: calc(5% - 1px);
  min-width: 35px;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin: 0;
    font-size: 20px;
    opacity: 50%;
  }
`;

const TimelineContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  @media (max-width: 430px) {
    width: 100vw;
  }
`;

const LoadMorePosts = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background-color: #1877f2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  svg {
    margin-left: 10px;
    font-weight: bold;
  }
`;

export {
  Container,
  HeaderComponent,
  Title,
  ProfileImg,
  ProfileComponent,
  LogoutButton,
  PublishCardContainer,
  PublishForm,
  FormInput,
  FormSubmit,
  FormTextInput,
  TimelineTitle,
  SearchContainer,
  Users,
  DebounceContainer,
  SearchIcon,
  SearchBar,
  TimelineContainer,
  LoadMorePosts,
};
