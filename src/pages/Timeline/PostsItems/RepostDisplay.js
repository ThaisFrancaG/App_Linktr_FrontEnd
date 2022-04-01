import { BiRepost } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

import { Icon, RepostContainer, Repost } from "./RepostStyle";
import { CustomStyles, Form, Cancel } from "./DeleteStyle";
import Modal from "react-modal";
import api from "../../../services/api";
import useAuth from "../../../hooks/userAuth";

Modal.setAppElement(".root");

export default function RepostDisplay({ postId, reposts }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const { auth } = useAuth();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleRepost(id) {
    setIsOpen(false);
    setStatus(false);
    try {
      await api.addRepost(auth, id);
    } catch (error) {
      alert("Something went wrong while reposting. Reload and try again");
    }
    document.location.reload(true);
  }
  return (
    <RepostContainer>
      <Icon>
        <BiRepost onClick={openModal} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={CustomStyles}
        >
          <h2>
            Do you want to re-post <br />
            this link?{" "}
          </h2>
          <Form>
            <Cancel onClick={closeModal}>No, cancel</Cancel>
            <Repost onClick={() => handleRepost(postId)} disabled={status}>
              {status ? (
                <ThreeDots color="#ffffff" height={20} width={20} />
              ) : (
                "Yes,share!"
              )}
            </Repost>
          </Form>
        </Modal>
      </Icon>
      {reposts}
    </RepostContainer>
  );
}
