import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Icon, LikesInfo } from "./LikesStyle";
import useAuth from "../../../hooks/userAuth";
import api from "../../../services/api";

export default function LikesDisplay({ postId, likesNumber, likedByUser }) {
  const [liked, setLiked] = useState(likedByUser);
  const [numberLikes, setNumberLikes] = useState(parseInt(likesNumber));
  const { auth } = useAuth();

  useEffect(() => {
    updateLike();
  }, [liked]);

  async function updateLike() {
    try {
      const { data } = await api.getLikes(auth);
    } catch (error) {
      console.log(error);
    }
  }
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

  return (
    <>
      <Icon liked={liked} onClick={() => handleLike()}>
        {liked ? <FaHeart /> : <FaRegHeart />}
      </Icon>
      <LikesInfo>{numberLikes} Likes</LikesInfo>
    </>
  );
}
