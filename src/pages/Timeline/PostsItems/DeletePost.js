import React from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Modal from "react-modal";
import { useNavigate } from "react-router";
import App from "../../../App";
import useAuth from "../../../hooks/userAuth";
import api from "../../../services/api";
import { Cancel, CustomStyles, Delete, Form } from "./DeleteStyle";

export default function DeletePost({ postId, setIsOpen, modalIsOpen }) {
  const [isLoading, setIsLoading] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();

  Modal.setAppElement(document.getElementById("root"));

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    navigate("/timeline");
  }

  async function handleDelete(id) {
    setIsOpen(false);
    setIsLoading(false);
    console.log(id);

    try {
      await api.deletePost(id, auth);
      console.log(id);
      setIsLoading(false);
      // document.location.reload(true);
    } catch (error) {
      alert("Erro ao apagar o post. Tente novamente");
    }
  }

  return (
    <Modal
      a={openModal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={CustomStyles}
    >
      <h2>
        Are you sure you want <br />
        to delete this post?{" "}
      </h2>
      <Form>
        <Cancel onClick={() => closeModal()}>No, go back</Cancel>
        <Delete onClick={() => handleDelete(postId)} disabled={isLoading}>
          {isLoading ? (
            <ThreeDots color="#ffffff" height={20} width={20} />
          ) : (
            "yes, delete it"
          )}
        </Delete>
      </Form>
    </Modal>
  );
}
