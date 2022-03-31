import {
  DebounceContainer,
  HeaderComponent,
  LogoutButton,
  ProfileComponent,
  ProfileImg,
  SearchBar,
  SearchIcon,
  Title,
} from "./TimelineStyles";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchContainer, Users } from "./TimelineStyles";

function Header({ user }) {
  const [showLogout, setActive] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedValue, setSelected] = useState("");
  const [showList, setShowList] = useState(false);
  const navigation = useNavigate();
  const ref = useRef();

  async function handleLogOut() {
    const token = JSON.parse(localStorage.getItem("auth"));
    try {
      await api.logOut(token);
      localStorage.removeItem("auth");
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Try to login again");
      return;
    }
    navigation("/");
    return;
  }

  async function getUsers() {
    const token = JSON.parse(localStorage.getItem("auth"));
    try {
      const { data } = await api.getUsers(selectedValue, token);
      setUsers(data);
      return;
    } catch (error) {
      alert("Sometyhing went wrong, please reload or try to login again");
      return;
    }
  }

  function handleChange(e) {
    setSelected(e.target.value);
    setShowList(true);
  }

  function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setSelected("");
      setShowList(false);
    }
  }

  function goToUser({ id, username }) {
    setSelected("");
    setShowList(false);
    navigation(`/user/${id}`, { state: { username } });
    window.location.reload();
  }

  useEffect(() => {
    getUsers();
  }, [selectedValue, showList]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <HeaderComponent>
      <Title onClick={() => navigation("/timeline")}>linktr </Title>
      <SearchContainer ref={ref}>
        <SearchBar>
          <DebounceContainer
            id="search-container"
            placeholder="Search for people"
            minLength={3}
            debounceTimeout={300}
            value={selectedValue}
            onChange={(e) => handleChange(e)}
          />
          <SearchIcon>
            <AiOutlineSearch />
          </SearchIcon>
        </SearchBar>
        {showList &&
          users?.map((profile, index) => (
            <Users key={`profile-${index}`} onClick={() => goToUser(profile)}>
              <ProfileImg src={profile.pictureUrl} />
              <span>{profile.username}</span>
            </Users>
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
}

export default Header;
