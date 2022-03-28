import styled from "styled-components";

const LikesInfo = styled.div`
  font-size: 11px;
  line-height: 13.5px;
  position: relative;
`;
const LikedBy = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50px;
  right: -60px;
  z-index: 50;

  width: 170px;
  height: 24px;

  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 3px;

  color: #505050;
  font-size: 11px;
  line-height: 13px;
`;

const Container = styled.div`
  position: relative;
`;
const Icon = styled.div`
  font-size: 20px;
  color: ${(props) => (props.liked ? "#AC0000" : "#FFFFFF")};
  cursor: pointer;
  :hover ~ ${LikedBy} {
    display: flex;
  }
`;
export { Icon, LikesInfo, LikedBy, Container };
