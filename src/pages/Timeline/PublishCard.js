import {
  FormInput,
  FormSubmit,
  FormTextInput,
  ProfileImg,
  PublishCardContainer,
  PublishForm,
} from "./TimelineStyles";
import React, { useState } from "react";
import api from "../../services/api";

export default function PublishCard({ user, setReloadPosts, setLoading }) {
  const [link, setLink] = useState("");
  const [description, setDesc] = useState("");
  const [disabled, setDisabled] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    if (!link) {
      setDisabled(false);
      alert("Please add post link");
      return;
    }
    try {
      await api.postPublication({ link, description, id: user.id });
      setLink("");
      setDesc("");
      setDisabled(false);
      setLoading(true);
      setReloadPosts(true);
      return;
    } catch (error) {
      alert("Something went wrong while publishing your post");
      console.error(error);
      setDisabled(false);
      return;
    }
  }

  return (
    <PublishCardContainer>
      <ProfileImg src={user?.pictureUrl} />
      <PublishForm onSubmit={(e) => handleSubmit(e)}>
        <label>What are you going to share today?</label>
        <FormInput
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="http://..."
          required
          disabled={disabled}
        />
        <FormTextInput
          type="text"
          className="desc_input"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Awesome article about #javascript"
          disabled={disabled}
        />
        <FormSubmit
          type="submit"
          value={disabled ? "Publishing..." : "Publish"}
          align="right"
          disabled={disabled}
        />
      </PublishForm>
    </PublishCardContainer>
  );
}
