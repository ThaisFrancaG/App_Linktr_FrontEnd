import styled from "styled-components";

const Button = styled.button`
  display: ${(props) => (props.display ? "flex" : "none")};

  width: 112px;
  height: 31px;

  background-color: #1877f2;
  color: #ffffff;

  border: none;
  border-radius: 5px;
`;

export { Button };
