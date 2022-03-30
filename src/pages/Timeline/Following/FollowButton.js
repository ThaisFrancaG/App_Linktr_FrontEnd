import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/userAuth";
import api from "../../../services/api";

import { Button } from "./ButtonStyle";

function FollowButton({ display, pageInfo }) {
  const { auth } = useAuth();
  const [buttonStatus, setButtonStatus] = useState(true);
  const [isFollowing, setFollowing] = useState(false);

  async function checkIfFollowing() {
    try {
      const response = await api.getFollowing(auth);
      const following = response.data;

      setButtonStatus(false);

      for (let i = 0; i < following.length; i++) {
        if (following[i].followingId === pageInfo) {
          setFollowing(true);
          return;
        }
        setFollowing(false);
      }
    } catch (error) {
      setButtonStatus(false);
      console.log(error);
    }
  }

  async function handleClick() {
    setButtonStatus(true);

    try {
      const { data } = await api.toggleFollowing(auth, parseInt(pageInfo));
      checkIfFollowing();
    } catch (error) {
      alert("Something went wrong, please wait before trying again");

      console.log(error);
    }
    setButtonStatus(false);
  }

  useEffect(() => {
    setButtonStatus(true);
    checkIfFollowing();
  }, []);

  return (
    <>
      <Button
        onClick={() => handleClick()}
        display={display}
        disabled={buttonStatus}
        following={isFollowing}
      >
        {buttonStatus ? "Loading" : isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </>
  );
}

export default FollowButton;
