import styled from "styled-components";

const Button = styled.button`
  display: ${(props) => (props.display ? "flex" : "none")};

  width: 112px;
  height: 31px;

  background-color: ${(props) =>
    props.disabled ? "#FFFFFF" : props.following ? "#ffffff" : "#1877f2"};

  color: ${(props) =>
    props.disabled ? "#1877f2" : props.following ? "#1877f2" : "#ffffff"};

  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 5px;
`;

export { Button };
