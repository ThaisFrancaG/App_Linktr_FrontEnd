import styled from "styled-components";

const PostBanner = styled.article`
  height: 155px;
  width: 500px;
  border: 1px solid #4d4d4d;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;

  font-family: "Lato";
  color: #cecece;
`;

const LinkInfo = styled.div`
  width: 346px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LinkTitle = styled.span`
  font-size: 16px;
  line-height: 20px;
`;
const LinkDesc = styled.span`
  font-size: 11px;
  line-height: 13.5px;
  color: #9b9595;
  margin-top: 5px;
`;
const LinkUrl = styled.span`
  font-size: 11px;
  line-height: 13.5px;
  margin-top: 13px;
`;

const LinkImage = styled.figure`
  width: 154px;
  height: 100%;
  display: flex;

  .img {
    width: auto;
    height: 100%;
    object-fit: scale-down;
  }
`;

export { PostBanner, LinkImage, LinkInfo, LinkTitle, LinkDesc, LinkUrl };
