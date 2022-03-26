import styled from "styled-components";

const Icon = styled.div`
  font-size: 20px;
  color: ${(props) => (props.liked ? "#AC0000" : "#FFFFFF")};
  cursor: pointer;
`;

const LikesInfo = styled.div`
  font-size: 11px;
  line-height: 13.5px;
`;
export { Icon, LikesInfo };
