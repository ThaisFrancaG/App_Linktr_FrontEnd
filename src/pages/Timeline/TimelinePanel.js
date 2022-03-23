import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { HeaderComponent, LogoutButton, ProfileComponent, ProfileImg, Title } from './TimelineStyles'

function Header (props) {
	const [showLogout, setActive] = useState(false);
	const navigation = useNavigate();

	async function handleLogOut () {
		const token = JSON.parse(localStorage.getItem('auth'));
		try {
			await api.logOut(token)
		}catch(error) {
			if (error.response.status === 401){
				alert("Email ou senha incorreto, verifique seus dados");
				return
			}
			else {
				alert(`Confira seus dados ou tente novamente mais tarde`);
				return
			}
		}
		localStorage.removeItem('auth')
		navigation('/')
	}

	return (
		<HeaderComponent>
			<Title>linktr</Title>
			<ProfileComponent onClick={() => setActive(!showLogout)}>
				{showLogout ? <IoIosArrowUp /> : <IoIosArrowDown />}
				<ProfileImg src="https://hiperideal.vteximg.com.br/arquivos/ids/167660-1000-1000/27502.jpg?v=636615816147030000"></ProfileImg>
			</ProfileComponent>
			{showLogout ? 
			<LogoutButton onClick={() => handleLogOut()}>Logout</LogoutButton>
			: <></>}
		</HeaderComponent>
	)
};

function Timeline () {

	return <Header />
};

export default Timeline