import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Icon, LikesInfo, LikedBy, Container } from "./LikesStyle";
import useAuth from "../../../hooks/userAuth";
import api from "../../../services/api";

export default function LikesDisplay({
  likes,
  postId,
  likesNumber,
  likedByUser,
  user,
}) {
  const [liked, setLiked] = useState(likedByUser);
  const [numberLikes, setNumberLikes] = useState(likesNumber);
  const { auth } = useAuth();
  async function handleLike() {
    if (!auth) {
      return;
    }
    try {
      await api.toggleLike(auth, postId);
      liked ? setLiked(false) : setLiked(true);
      liked ? setNumberLikes(Number(numberLikes) - 1) : setNumberLikes(Number(numberLikes) + 1);
    } catch (error) {
      console.error(error);
    }
  }

  function whoLiked(postId) {
    let likedBy = [];
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].postId === postId && likes[i].username !== user.username) {
        likedBy.push(`${likes[i].username},`);
      }
      if (likedBy.length >= 3) {
        return likedBy.slice(0, likedBy.length - 1);
      }
    }

    return likedBy.slice(0, likedBy.length - 1);
  }

  return (
    <Container>
      <Icon liked={liked} onClick={() => handleLike()}>
        {liked ? <FaHeart /> : <FaRegHeart />}
      </Icon>
      <LikesInfo>{Number(numberLikes)} Likes</LikesInfo>
      <LikedBy>
        {numberLikes == 0
          ? !liked
            ? `seja o primeiro a curtir!`
            : `Você`
          : liked === true
          ? Number(numberLikes) - 1 - whoLiked(postId).length === 0
            ? `Você`
            : `Você,${whoLiked(postId)} e outras ${
              Number(numberLikes) - 1 - whoLiked(postId).length
              } pessoas`
          : Number(numberLikes) > 1 
          ? `${whoLiked(postId)} e outras ${
            Number(numberLikes) - whoLiked(postId).length
            } pessoas` : `${whoLiked(postId)} curtiu`}
      </LikedBy>
    </Container>
  );
}
