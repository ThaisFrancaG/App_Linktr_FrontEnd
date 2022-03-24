import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../services/api";
import PublishCard from "./PublishCard";
import { HeaderComponent, LogoutButton, ProfileComponent, ProfileImg, Title } from './TimelineStyles'

function Header ({ user }) {
	const [showLogout, setActive] = useState(false);
	const navigation = useNavigate();

	async function handleLogOut () {
		const token = JSON.parse(localStorage.getItem('auth'));
		try {
			await api.logOut(token)
			localStorage.removeItem('auth')
		}catch(error) {
			alert("Sessão não encontrada")
			return
		}
		navigation('/')
		return
	}

	return (
		<HeaderComponent>
			<Title>linktr</Title>
			<ProfileComponent onClick={() => setActive(!showLogout)}>
				{showLogout ? <IoIosArrowUp /> : <IoIosArrowDown />}
				<ProfileImg src={user?.pictureUrl} />
			</ProfileComponent>
			{showLogout ? 
			<LogoutButton onClick={() => handleLogOut()}>Logout</LogoutButton>
			: <></>}
		</HeaderComponent>
	)
};

function Timeline () {
	const navigation = useNavigate();
	const [user, setUser] = useState({})
	const location = useLocation();

	async function getUser () {
		const token = JSON.parse(localStorage.getItem('auth'));
		if(!token) {
			alert("Faça Login")
			navigation('/')
			return
		}
		try {
			const response = await api.getUserData(token);
			setUser(response.data)
		}catch(error) {
			if (error.response.status === 400){
				alert("Token Vazio, faça login novamente")
			}
			else {
				alert(`Algo deu errado`);
			}
			navigation('/')
			return
		}
	}

	useEffect(() => {
		getUser()
	},[])


	return (
	<>
		<Header user={user}/>
		{location.pathname !== '/timeline' ?
			<></> : <PublishCard user={user}/>
		}
		
	</>)
};

export default Timeline