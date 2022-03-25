import {
	DebounceContainer,
	HeaderComponent,
	LogoutButton,
	ProfileComponent,
	ProfileImg,
	Title
} from "./TimelineStyles";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SearchContainer, Users } from "./TimelineStyles";	

function Header({ user }) {
	const [showLogout, setActive] = useState(false);
	const [users, setUsers] = useState([]);
	const [selectedValue, setSelected] = useState("")
	const [showList, setShowList] = useState(false)
	const navigation = useNavigate();
	const ref = useRef();

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
			const { data } = await api.getUsers(selectedValue);
			setUsers(data);
			return
		}catch(error) {
			alert("Algo deu errado")
			return
		}
	};

	function handleChange(e) {
		setSelected(e.target.value)
		if(selectedValue.length < 2) {
			setShowList(false)
			return
		}
		setShowList(true)
	};

	const handleClick = (e) => {
		if (ref.current  && !ref.current.contains(e.target)) {
			setSelected("")
			setShowList(false)
		}
	};

	useEffect(() => {
		getUsers()
	},[selectedValue,showList]);

	useEffect(() => {
		document.addEventListener('click', handleClick)
		return () => {
			document.removeEventListener('click', handleClick);
		}
	},[]);

	return (
		<HeaderComponent>
			<Title>linktr</Title>
			<SearchContainer ref={ref}>
				<DebounceContainer 
					id="search-container"
					placeholder="Search for people"
					debounceTimeout={300}
					value={selectedValue}
					onChange={(e) => handleChange(e)}
				/>
				{showList && users?.map((profile,index) => (
					<Users key={`profile-${index}`}><ProfileImg src={profile.pictureUrl} /><span>{profile.username}</span></Users>
				))}
			</SearchContainer>
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