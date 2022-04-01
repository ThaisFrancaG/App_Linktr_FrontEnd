import { Comment, CommentImg, CommentInput, CommentsContainer, PostComment, Reply, UserComments, UserDescript, Username, WriteCommentContainer } from "./CommentsStyle";
import { FiSend } from "react-icons/fi"
import { useState } from "react";
import api from "../../../services/api";
import { useEffect } from "react";

function CommentsComponent ({user, post}) {
	const [ commentValue, setComment ] = useState("");
	const [ load, setLoad] = useState(false);
	const [ followers, setFollowers] = useState([]);
	const [ commentsList, setCommentsList] = useState([]);
	const token = JSON.parse(localStorage.getItem("auth"));

	async function handleClick() {
		try {
			await api.postComment(token, {comment: commentValue, userId:user.id}, post.id)
			setLoad(true)
		} catch(error) {
			console.error(error)
			return
		}
		setComment(" ")
		setLoad(false)
	};

	async function loadComments() {
		setLoad(true)
		try {
			const response = await api.getComments(token, post.id)
			setCommentsList(response.data)
		} catch(error) {
			alert("Algo deu errado, não foi possivel carregar os comentários")
			console.error(error)
			return
		}
	};

	async function getUserFollowers() {
		setLoad(true)
		try {
			const response = await api.getFollowing(token)
			setFollowers(response.data)
		}catch(error) {
			alert("Não carregou seus seguidores")
			console.error(error)
			return
		}
	}

	useEffect(() => {
		loadComments()
		getUserFollowers()
		setLoad(false)
	}, [load])

	return (
		<CommentsContainer>
			{ commentsList?.map((comment) => (
				<Comment>
					<CommentImg  src={comment.pictureUrl}/>
					<UserComments>
						<div>
							<Username>{comment.username}</Username>
							<UserDescript>{
								comment.postOwnerId !== comment.userId 
									?	followers?.find(foll => foll.followingId === comment.userId)
										? `• following` 
										: ""
									:`• post’s author`} </UserDescript>
						</div>
						<Reply>{comment.comment}</Reply>
					</UserComments>
				</Comment>
			))}
			<PostComment>
				<CommentImg  src={user.pictureUrl}/>
				<WriteCommentContainer>
					<CommentInput 
						placeholder="Write a comment ..."
						value={commentValue}
						onChange={e => setComment(e.target.value)}
					/>
					<FiSend onClick={handleClick}/>
				</WriteCommentContainer>
			</PostComment>
		</CommentsContainer>
	)
}

export default CommentsComponent;