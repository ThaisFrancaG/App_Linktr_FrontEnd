import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import {
  ReadContainer,
  ProfileContainer,
  InfoContainer,
  PostComment,
  Container,
  CommentDisplay,
  PostUser,
  UsenameContainer,
  IconsContainer,
  RepostContainer,
} from "../PostStyle";
import {
  PostBanner,
  LinkImage,
  LinkInfo,
  LinkTitle,
  LinkDesc,
  LinkUrl,
} from "./SnippetStyle";
import { AiOutlineComment } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";
import { FormInput } from "../TimelineStyles";
import { FiTrash2 } from "react-icons/fi";
import ReactHashtag from "@mdnm/react-hashtag";
import api from "../../../services/api";
import LikesDisplay from "./LikesPost";
import CommentsComponent from "./Comments";
import RepostDisplay from "./RepostDisplay";
import Modal from "react-modal";
import { ThreeDots } from "react-loader-spinner";
import { Cancel, CustomStyles, Delete, Form } from "./DeleteStyle";
import useAuth from "../../../hooks/userAuth";
import { Icon } from "./LikesStyle";

Modal.setAppElement(".root");

export default function PostsLists({
  likes,
  posts,
  user,
  loadPosts,
  getWhoLiked,
}) {
  const [postEditId, setEditId] = useState();
  const [linkEdit, setLink] = useState();
  const [descEdit, setDesc] = useState();
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [postCommentsId, setShowId] = useState();
  const ref = useRef();
  const navigation = useNavigate();
  const { auth } = useAuth();
  let newLocation = useLocation();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleDelete(id, e) {
    e.preventDefault();
    setIsOpen(false);

    try {
      await api.deletePost(id, auth);
      setLoading(false);
    } catch (error) {
      alert("Something went wrong while deleting. Reload and try again");
    }
    document.location.reload(true);
  }

  function handleClick(link) {
    window.open(link);
  }

  function handleChange(e, post) {
    e.preventDefault();
    navigation(`/user/${post.userId}`, { state: { username: post.username } });
    window.location.reload();
  }

  function editPost(e, post) {
    if (edit) {
      setDesc(ref.current._wrapperState.initialValue);
      setEdit(false);
      return;
    }
    setEditId(post.id);
    setLink(post.link);
    setEdit(true);
  }

  function handleShowComments(post) {
    setShowComments(!showComments);
    setShowId(post.id);
  }

  async function enterKeyPress(e) {
    if (e.keyCode === 13 && edit) {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem("auth"));
      try {
        await api.updatePosts(token, {
          link: linkEdit,
          description: descEdit,
          id: postEditId,
        });
        setEdit(false);
      } catch (error) {
        alert(error);
      }
    } else if (e.keyCode === 27) {
      setDesc(ref.current._wrapperState.initialValue);
      setEdit(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    window.addEventListener("keydown", enterKeyPress);

    return () => {
      window.removeEventListener("keydown", enterKeyPress);
    };
  });

  useEffect(() => {
    if (edit) {
      ref.current.focus();
    }
  }, [edit]);

  useEffect(() => {
    loadPosts(newLocation);
    getWhoLiked();
  }, [loading]);

  return (
    <>
      {posts[0].id ? (
        posts.map((post) => (
          <Container>
            <RepostContainer display={post.isRepost}>
              <Icon>
                <BiRepost />
              </Icon>
              Re-posted by {post.repostUsername}
            </RepostContainer>
            <ReadContainer key={post.id}>
              <ProfileContainer>
                <img src={post.userPic} alt="profile pic" />
                <IconsContainer>
                  <LikesDisplay
                    postId={post.id}
                    likesNumber={post.likes_count}
                    likedByUser={post.likedByUser}
                    likes={likes}
                    user={user}
                  />
                  <CommentDisplay onClick={() => handleShowComments(post)}>
                    <AiOutlineComment />
                    <span>{post.comment_count} comments</span>
                  </CommentDisplay>
                  <RepostDisplay
                    postId={post.id}
                    reposts={post.reposts_count}
                  />
                </IconsContainer>
              </ProfileContainer>
              <InfoContainer>
                <UsenameContainer>
                  <PostUser onClick={(e) => handleChange(e, post)}>
                    {post.username}
                  </PostUser>
                  {user.id === post.userId ? (
                    <div>
                      <FiEdit2 onClick={(e) => editPost(e, post)} />
                      <FiTrash2 onClick={openModal} />
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={CustomStyles}
                      >
                        <h2>
                          Are you sure you want <br />
                          to delete this post?{" "}
                        </h2>
                        <Form>
                          <Cancel onClick={closeModal}>No, go back</Cancel>
                          <Delete
                            onClick={(e) => handleDelete(post.id, e)}
                            disabled={loading}
                          >
                            {loading ? (
                              <ThreeDots
                                color="#ffffff"
                                height={20}
                                width={20}
                              />
                            ) : (
                              "yes, delete it"
                            )}
                          </Delete>
                        </Form>
                      </Modal>
                    </div>
                  ) : (
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
                ) : (
                  <PostComment>
                    <ReactHashtag
                      renderHashtag={(hashtag) => (
                        <span
                          onClick={() => {
                            navigation(`/hashtag/${hashtag.substr(1)}`);
                            window.location.reload();
                          }}
                        >
                          {hashtag}
                        </span>
                      )}
                    >
                      {post.description}
                    </ReactHashtag>
                  </PostComment>
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

            {showComments && postCommentsId === post.id && (
              <CommentsComponent user={user} post={post} load={showComments} />
            )}
          </Container>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
