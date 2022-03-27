import { useNavigate } from "react-router-dom";
import {
  ReadContainer,
  ProfileContainer,
  InfoContainer,
  PostComment,
  PostUser,
  UsenameContainer,
} from "../PostStyle";
import LikesDisplay from "./LikesPost";
import {
  PostBanner,
  LinkImage,
  LinkInfo,
  LinkTitle,
  LinkDesc,
  LinkUrl,
} from "./SnippetStyle";
import { FiEdit2 } from "react-icons/fi"
import React, { useState, useRef, useEffect } from "react";
import { FormInput } from "../TimelineStyles";
import api from "../../../services/api";

export default function PostsLists({ posts, user, loadPosts}) {
  const [postEditId, setEditId] = useState();
  const [linkEdit, setLink] = useState();
  const [descEdit, setDesc] = useState();
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false)
  const ref = useRef(); 
  const navigation = useNavigate();

  function handleClick(link) {
    window.open(link);
  }

  function handleChange(e, post) {
    e.preventDefault();
    navigation(`/user/${post.userId}`);
    window.location.reload();
  }

  function editPost(e,post) {
    if(edit) {
      setDesc(ref.current._wrapperState.initialValue)
      setEdit(false)
      return
    }
    setEditId(post.id)
    setLink(post.link)
    setEdit(true)
    
    
  };

  async function enterKeyPress (e) {
    if(e.keyCode == 13 && edit) {
      setLoading(true)
      const token = JSON.parse(localStorage.getItem("auth"));
      try {
        await api.updatePosts(token, {link: linkEdit, description:descEdit,id:postEditId});
        setEdit(false)
      }catch(error) {
        alert(error)
      }
    } else if (e.keyCode == 27) {
      setDesc(ref.current._wrapperState.initialValue)
      setEdit(false)
    }
    setLoading(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', enterKeyPress);

    return () => {
      window.removeEventListener('keydown', enterKeyPress);
    }
  })

  useEffect(() => {
    if(edit) {
      ref.current.focus()
    }
  },[edit]);

  useEffect(() => {
    loadPosts()
  },[loading])

  return (
    <>
      {posts[0].id? posts.map((post) => (
        <ReadContainer key={post.id}>
          <ProfileContainer>
            <img src={post.userPic} alt="profile pic" />
            <LikesDisplay
              postId={post.id}
              likesNumber={post.likes_count}
              likedByUser={post.likedByUser}
            />
          </ProfileContainer>
          <InfoContainer>
            <UsenameContainer>
              <PostUser onClick={(e) => handleChange(e, post)}>
                {post.username}
              </PostUser>
              {user.id === post.userId ? (
                <FiEdit2 onClick={(e) => editPost(e, post)}/>
              ): (
                <></>
              )}
            </UsenameContainer>
            {edit && postEditId === post.id ? (
              <FormInput 
                value={descEdit}
                defaultValue={post.description}
                type="text"
                ref={ref}
                disabled={loading}
                onChange={(e) => setDesc(e.target.value)}
              />
            ): (
              <PostComment >{post.description}</PostComment>
            )}
            <PostBanner onClick={() => handleClick(post.link)}>
              <LinkInfo>
                <LinkTitle>{post.linkName}</LinkTitle>
                <LinkDesc>{post.linkDesc}</LinkDesc>
                <LinkUrl>{post.link}</LinkUrl>
              </LinkInfo>
              <LinkImage>
                <img src={post.linkBanner} alt="profile pic" />
              </LinkImage>
            </PostBanner>
          </InfoContainer>
        </ReadContainer>
      )) : <></>}
    </>
  );
}
