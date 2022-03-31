import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/userAuth";
import api from "../../../services/api";

import { Button } from "./ButtonStyle";

function FollowButton({ display, pageInfo }) {
  const { auth } = useAuth();
  const [buttonStatus, setButtonStatus] = useState(true);
  const [isFollowing, setFollowing] = useState(false);
  const location = useLocation();

  async function checkIfFollowing(id) {
    try {
      const response = await api.getFollowing(auth);
      const following = response.data;

      setButtonStatus(false);
      for (let i = 0; i < following.length; i++) {
        console.log(following[i].followingId === id);
        console.log(following[i]);

        if (following[i].followingId === id) {
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
      await api.toggleFollowing(auth, parseInt(pageInfo));
      isFollowing ? setFollowing(false) : setFollowing(true);
    } catch (error) {
      alert("Something went wrong, please wait before trying again");

      console.log(error);
    }
    setButtonStatus(false);
  }

  useEffect(() => {
    const path = location.pathname;
    const id = path.split("/")[2];
    setButtonStatus(true);
    checkIfFollowing(id);
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
