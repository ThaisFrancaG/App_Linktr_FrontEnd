import { CommentImg, CommentInput, CommentsContainer, PostComment, WriteCommentContainer } from "./CommentsStyle";
import { FiSend } from "react-icons/fi"

function CommentsComponent () {

	return (
		<CommentsContainer>
			<PostComment>
				<CommentImg  src="https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02.jpg"/>
				<WriteCommentContainer>
					<CommentInput 
						placeholder="Write a comment ..."
					/>
					<FiSend />
				</WriteCommentContainer>
			</PostComment>
		</CommentsContainer>
	)
}

export default CommentsComponent;