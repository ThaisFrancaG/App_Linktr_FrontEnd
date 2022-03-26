import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Icon } from "./LikesStyle";
import useAuth from "../../../hooks/userAuth";
import api from "../../../services/api";
//tem que conferir se p usuário está logao. Se nao estiver, não pode curtir
export default function LikesDisplay({ postId, likesNumber, likedByUser }) {
  const [liked, setLiked] = useState(false);
  const { auth } = useAuth();
  console.log(auth);
  console.log(postId);

  useEffect(() => {
    updateLike();
  }, [liked]);

  async function updateLike() {
    try {
      const { data } = await api.getLikes(auth);
      console.log(data);
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
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Icon liked={likedByUser} onClick={() => handleLike()}>
        {likedByUser ? <FaHeart /> : <FaRegHeart />}
      </Icon>
      {likesNumber}
    </>
  );
}
