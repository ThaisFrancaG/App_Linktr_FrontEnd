import {
  ReadContainer,
  ProfileContainer,
  InfoContainer,
  PostComment,
  PostUser,
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
  function handleClick(link) {
    window.open(link);
  }
  return (
    <>
      {posts.map((post) => (
        <ReadContainer key={post.id}>
          <ProfileContainer>
            <img src={post.userPic} alt="profile pic" />
          </ProfileContainer>
          <InfoContainer>
            <PostUser>{post.username}</PostUser>
            <PostComment>{post.description}</PostComment>
            <PostBanner onClick={() => handleClick(post.link)}>
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
