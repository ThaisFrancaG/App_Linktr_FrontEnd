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
  const [numberLikes, setNumberLikes] = useState(parseInt(likesNumber));
  const { auth } = useAuth();

  async function handleLike() {
    if (!auth) {
      return;
    }
    try {
      await api.toggleLike(auth, postId, liked);
      liked ? setLiked(false) : setLiked(true);
      liked ? setNumberLikes(numberLikes - 1) : setNumberLikes(numberLikes + 1);
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
      <LikesInfo>{numberLikes} Likes</LikesInfo>
      <LikedBy>
        {numberLikes === 0
          ? liked === false
            ? `seja o primeiro a curtir!`
            : `Você`
          : liked === true
          ? numberLikes - 1 - whoLiked(postId).length === 0
            ? `Você`
            : `Você,${whoLiked(postId)} e outras ${
                numberLikes - 1 - whoLiked(postId).length
              } pessoas`
          : `${whoLiked(postId)} e outras ${
              numberLikes - whoLiked(postId).length
            } pessoas`}
      </LikedBy>
    </Container>
  );
}
