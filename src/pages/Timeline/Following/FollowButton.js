import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/userAuth";
import api from "../../../services/api";

import { Button } from "./ButtonStyle";

function FollowButton({ display, pageInfo, following }) {
  const { auth } = useAuth();
  const [buttonStatus, setButtonStatus] = useState(true);
  const [isFollowing, setFollowing] = useState(false);

  async function checkIfFollowing() {
    try {
      setButtonStatus(true);
      const response = await api.getFollowing(auth);
      const following = response.data;
      console.table(following);

      let alreadyFollowing = 0;
      for (let i = 0; i < following.length; i++) {
        if (following[i].followingId == pageInfo) {
          alert("is following");
          setFollowing(true);
          setButtonStatus(false);
          alreadyFollowing++;
        }
      }

      if (alreadyFollowing === 0) {
        setFollowing(false);
      }
      setButtonStatus(false);
    } catch (error) {
      setButtonStatus(false);
      console.log(error);
    }
  }

  async function handleClick() {
    setButtonStatus(true);

    try {
      await api.toggleFollowing(auth, parseInt(pageInfo));
      isFollowing ? setFollowing(false) : setFollowing(true);
    } catch (error) {
      alert("Something went wrong, please wait before trying again");

      console.log(error);
    }
    setButtonStatus(false);
  }

  useEffect(() => {
    checkIfFollowing();
  }, []);
  console.log(`is following? ${isFollowing}`);
  return (
    <>
      <Button
        onClick={() => handleClick()}
        show={display}
        disabled={buttonStatus}
        following={isFollowing}
      >
        {buttonStatus ? "Loading" : isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </>
  );
}

export default FollowButton;
