import { CommentImg, CommentInput, CommentsContainer, PostComment, WriteCommentContainer } from "./CommentsStyle";
import { FiSend } from "react-icons/fi"
import { useState } from "react";
import api from "../../../services/api";

function CommentsComponent ({user, post}) {
	const [ comment, setComment ] = useState("");
	const [ posted, setPosted] = useState(false);

	async function handleClick() {
		const token = JSON.parse(localStorage.getItem("auth"));
		try {
			console.log(user.id, post)
			const response = await api.postComment(token, {comment, userId:user.id}, post.id)
			console.log(response)
			setPosted(true)
		} catch(error) {
			console.error(error)
			return
		}
		setComment(" ")
		setPosted(false)
	}

	return (
		<CommentsContainer>
			<PostComment>
				<CommentImg  src="https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02.jpg"/>
				<WriteCommentContainer>
					<CommentInput 
						placeholder="Write a comment ..."
						value={comment}
						onChange={e => setComment(e.target.value)}
					/>
					<FiSend onClick={handleClick}/>
				</WriteCommentContainer>
			</PostComment>
		</CommentsContainer>
	)
}

export default CommentsComponent;