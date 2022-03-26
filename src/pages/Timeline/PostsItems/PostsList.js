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
  console.log(posts);
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
      {posts[0].id? posts.map((post) => (
        <ReadContainer key={post.id}>
          <ProfileContainer>
            <img src={post.userPic} alt="profile pic" />
            <LikesDisplay
              postId={post.id}
              likesNumber={post.likes_count}
              likedByUser={post.likedByUser}
            />
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
      )) : <></>}
    </>
  );
}
