import styled from "styled-components"

const CommentsContainer = styled.div`
	padding-top: 15px;
	background-color: #1E1E1E;
	width: 100%;
`;

const PostComment = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: #1E1E1E;
	padding: 15px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
`;

const CommentImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;

const WriteCommentContainer = styled.div`
	height: 100%;
	width: 90%;
	background-color: #252525;
	margin-left: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 8px;
	padding-right: 5px;
	svg {
		width: 5%;
		font-size: 20px;
		margin: 10px;
		border: 8px;
		cursor: pointer;
	}
`;

const CommentInput = styled.input`
	height: 30px;
	width: 95%;
	background-color: #252525;
	border: none;
	border-radius: 8px;
	color: white;
	::placeholder {
		padding-left: 10px;
		color: #575757;
	}
`;

export {
	CommentsContainer,
	PostComment,
	CommentImg,
	WriteCommentContainer,
	CommentInput,
};