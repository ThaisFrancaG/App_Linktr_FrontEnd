import styled from "styled-components"

const HeaderComponent = styled.div`
	position: absolute;
	z-index: 1000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	top: 0;
	left: 0;
	height: 70px;
	width: 100vw;
	padding: 0 20px;
	background-color: #151515;
`;

const Title = styled.span`
	font-size: 40px;
	font-weight: bold;
	font-family: "Passion One";
`;

const ProfileImg = styled.img`
	border-radius: 50%;
	height: 50px;
`;

const ProfileComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	svg {
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
`;

const LogoutButton = styled.button`
	position: fixed;
	top: 70px;
	right: 0;
	width: 120px;
	height: 40px;
	background-color: inherit;
	color: inherit;
	border: 0;
	border-bottom-left-radius: 10px;
	font-family: "Lato";
	font-size: 18px;
	cursor: pointer;
`;

const PublishCardContainer = styled.div`
	width: 40%;
	background-color: white;
	position: fixed;
	top: 200px;
	display: flex;
	color: #707070;
	font-size: 30px;
	font-family: "Passion One";
	padding: 10px;
	padding-left: 20px;
	border-radius: 15px;
	@media only screen and (max-width: 430px) {
		width: 100%;
		border-radius: 0;
	}
`;

const PublishForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 10px;
	.desc_input {
		height: 70px;
	}
`;

const FormInput = styled.input`
	border: none;
	background-color: #EFEFEF;
	margin: 5px 0;
	height: 30px;
	border-radius: 8px;
`;

const FormTextInput = styled.textarea`
	border: none;
	background-color: #EFEFEF;
	margin: 5px 0;
	height: 30px;
	border-radius: 8px;
	resize: none;
`;

const FormSubmit = styled.input`
	border: none;
	background-color: #1877F2;
	height: 30px;
	width: 120px;
	border-radius: 10px;
	color: white;
	align-self: flex-end;
`

export {
	HeaderComponent,
	Title,
	ProfileImg,
	ProfileComponent,
	LogoutButton,
	PublishCardContainer,
	PublishForm,
	FormInput,
	FormSubmit,
	FormTextInput
}