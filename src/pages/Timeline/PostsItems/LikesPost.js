import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Icon } from "./LikesStyle";
export default function LikesDisplay() {
  const [liked, setLiked] = useState(false);
  function handleLike() {
    liked ? setLiked(false) : setLiked(true);
  }
  return (
    <>
      <Icon liked={liked} onClick={() => handleLike()}>
        {liked ? <FaHeart /> : <FaRegHeart />}
      </Icon>
    </>
  );
}
