import styled from "styled-components";

const RepostContainer = styled.div`
  font-size: 12px;
  line-height: 13.5px;
  position: relative;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;

const Repost = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1877f2;

  width: 134px;
  height: 37px;

  border: none;
  border-radius: 5px;

  font-size: 18px;
  font-weight: bold;

  color: #ffffff;

  cursor: pointer;
`;
export { RepostContainer, Icon, Repost };
