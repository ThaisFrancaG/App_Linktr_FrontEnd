import styled from "styled-components";

const Icon = styled.div`
  font-size: 20px;
  color: ${(props) => (props.liked ? "#AC0000" : "#FFFFFF")};
`;

export { Icon };
