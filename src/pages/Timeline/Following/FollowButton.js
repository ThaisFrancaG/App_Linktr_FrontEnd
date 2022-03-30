import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/userAuth";
import api from "../../../services/api";

import { Button } from "./ButtonStyle";

function FollowButton({ display, pageInfo }) {
  const { auth } = useAuth();
  const [buttonText, setButtonText] = useState("loading");
  const [buttonStatus, setButtonStatus] = useState(true);
  const [isFollowing, setFollowing] = useState(false);

  async function checkIfFollowing() {
    try {
      const response = await api.getFollowing(auth);
      const following = response.data;
      console.log(following);
      for (let i = 0; i < following.length; i++) {
        if (following[i].followingId === pageInfo) {
          alert("caiu aqui");
          setFollowing(true);
          setButtonText("following");
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleClick() {
    try {
      const { data } = await api.toggleFollowing(auth, parseInt(pageInfo));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setButtonStatus(false);
  }

  useEffect(() => {
    checkIfFollowing();
    console.log(isFollowing);
    console.log(buttonText);
  }, [isFollowing]);

  return (
    <>
      <Button
        onClick={() => handleClick()}
        display={display}
        disable={buttonStatus}
      >
        {buttonText}
      </Button>
    </>
  );
}

export default FollowButton;
