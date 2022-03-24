function PostList(props){

    if(typeof posts[0] === "string")
return(
<ReadContainer>
  <ProfileContainer>
    <img src={post.userPic} alt="profile pic" />
  </ProfileContainer>
  <InfoContainer>
    <PostUser>{post.username}</PostUser>
    <PostComment>{post.description}</PostComment>
    <PostBanner>{post.link}</PostBanner>
  </InfoContainer>
</ReadContainer>;)
}