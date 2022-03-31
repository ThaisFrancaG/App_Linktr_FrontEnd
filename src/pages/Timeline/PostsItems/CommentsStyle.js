import styled from "styled-components"

const CommentsContainer = styled.div`
	position: relative;
	background-color: #1E1E1E;
	width: 100%;
	max-height: 250px;
	overflow: auto;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	::-webkit-scrollbar {
		width: 3px;
	}

	::-webkit-scrollbar-thumb {
		background-color: darkgrey;
		outline: 1px solid slategrey;
		border-radius: 8px;
	}
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

const Comment = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: #1E1E1E;
	padding: 15px 0;
	margin: 0 15px;
	border-bottom: 1px solid #353535;
`

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

const UserComments = styled.div`
	margin-left: 30px;
	display: flex;
	flex-direction: column;
	> div {
		margin-bottom: 5px;
	}
`; 

const Username = styled.span`
	font-weight: bold;
	font-size: 15px;
	
`;

const Reply = styled.span`
	font-size: 13px;
	opacity: 70%;
`;

const UserDescript = styled.span`
	margin-left: 5px;
	opacity: 30%;
	
`;

export {
	CommentsContainer,
	PostComment,
	CommentImg,
	WriteCommentContainer,
	CommentInput,
	Comment,
	UserComments,
	Username,
	Reply,
	UserDescript
};