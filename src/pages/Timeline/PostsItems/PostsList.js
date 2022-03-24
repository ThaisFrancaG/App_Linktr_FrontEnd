import {
  PostContainer,
  WriteContainer,
  ReadContainer,
  ProfileContainer,
  InfoContainer,
  PostComment,
  PostUser,
  FormContainer,
  FormTitle,
  Input,
  Button,
} from "../PostStyle";

import {
  PostBanner,
  LinkImage,
  LinkInfo,
  LinkTitle,
  LinkDesc,
  LinkUrl,
} from "./SnippetStyle";
export default function PostsLists({ posts }) {
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <ReadContainer>
          <ProfileContainer>
            <img src={post.userPic} alt="profile pic" />
          </ProfileContainer>
          <InfoContainer>
            <PostUser>{post.username}</PostUser>
            <PostComment>{post.description}</PostComment>
            <PostBanner>
              <LinkInfo>
                <LinkTitle>{post.linkName}</LinkTitle>
                <LinkDesc>{post.linkDesc}</LinkDesc>
                <LinkUrl>{post.link}</LinkUrl>
              </LinkInfo>

              <LinkImage>
                <img src={post.linkBanner} alt="profile pic" />
              </LinkImage>
            </PostBanner>
          </InfoContainer>
        </ReadContainer>
      ))}
    </>
  );
}
