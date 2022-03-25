import { useNavigate } from "react-router-dom";
import {
  ReadContainer,
  ProfileContainer,
  InfoContainer,
  PostComment,
  PostUser,
} from "../PostStyle";
import LikesDisplay from "./LikesPost";
import {
  PostBanner,
  LinkImage,
  LinkInfo,
  LinkTitle,
  LinkDesc,
  LinkUrl,
} from "./SnippetStyle";

export default function PostsLists({ posts }) {
  const navigation = useNavigate();

  function handleClick(link) {
    window.open(link);
  }

  function handleChange(e, post) {
    e.preventDefault();
    navigation(`/user/${post.userId}`);
    window.location.reload();
  }

  return (
    <>
      {posts.map((post) => (
        <ReadContainer key={post.id}>
          <ProfileContainer>
            <img src={post.userPic} alt="profile pic" />
            <LikesDisplay />
          </ProfileContainer>
          <InfoContainer>
            <PostUser onClick={(e) => handleChange(e, post)}>
              {post.username}
            </PostUser>
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
