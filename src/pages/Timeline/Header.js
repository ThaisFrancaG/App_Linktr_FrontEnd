import {
	HeaderComponent,
	LogoutButton,
	ProfileComponent,
	ProfileImg,
	Title
} from "./TimelineStyles";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SearchContainer, Users } from "./TimelineStyles";

function Header({ user }) {
	const [showLogout, setActive] = useState(false);
	const [users, setUsers] = useState([]);
	const [options, setOptions] = useState([]);
	const [selectedValue, setSelected] = useState("")
	const navigation = useNavigate();

	async function handleLogOut() {
		const token = JSON.parse(localStorage.getItem("auth"));
		try {
		await api.logOut(token);
		localStorage.removeItem("auth");
		} catch (error) {
		alert("Sessão não encontrada");
		return;
		}
		navigation("/");
		return;
	};

	async function getUsers() {
		try {
			const { data } = await api.getUsers();

			const option = data.map(opt => ({
				value: opt.username,
				label: <Users><ProfileImg src={opt.pictureUrl}/><span>{opt.username}</span></Users>,
				id: opt.id
			}));

			setOptions(option)
			setUsers(data);
			return
		}catch(error) {
			alert("Algo deu errado")
			return
		}
	};

	function handleChange(e) {
		navigation(`/user/${e.id}`)
    	window.location.reload()
	}

	useEffect(() => {
		getUsers()
	},[])

	return (
		<HeaderComponent>
			<Title>linktr</Title>
			<SearchContainer
				id="search-container"
				placeholder="Search for people"
				options={options}
				value={selectedValue}
				onChange={(e) => handleChange(e)}
			/>
			<ProfileComponent onClick={() => setActive(!showLogout)}>
				{showLogout ? <IoIosArrowUp /> : <IoIosArrowDown />}
				<ProfileImg src={user?.pictureUrl} />
			</ProfileComponent>
			{showLogout ? (
				<LogoutButton onClick={() => handleLogOut()}>Logout</LogoutButton>
			) : (
				<></>
			)}
		</HeaderComponent>
	);
};

export default Header