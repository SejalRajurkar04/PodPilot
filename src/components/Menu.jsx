import React from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logout } from "../redux/userSlice";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import LogoIcon from '../Images/Logo.png'
import { openSignin } from '../redux/setSigninSlice';

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100%")};
  }
`;

const Elements = styled.div`
  padding: 8px 20px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + "20"};
    transform: perspective(500px) translateY(-5px) scale(1.03);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  }
`;

const NavText = styled.div`
  padding: 12px 0;
  font-size: 16px;
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text_secondary + "20"};
  margin: 15px 0;
`;

const Flex = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  margin-bottom: 20px;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
    cursor: pointer;
  }
`;

// Updated Logo: Accepts darkMode prop to set text color dynamically
const Logo = styled.div`
  color: ${({ darkMode }) => darkMode ? "#ffffff" : "#000000"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
  font-size: 24px;
  margin: 20px 0;
`;

const Image = styled.img`
  height: 50px;
`;

const Menu = ({ setMenuOpen, darkMode, setDarkMode, setUploadOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(state => state.user);

  const logoutUser = () => {
    dispatch(logout());
    navigate(`/`);
  };

  return (
    <MenuContainer setMenuOpen={setMenuOpen}>
      <Flex>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {/* Pass darkMode prop to Logo */}
          <Logo darkMode={darkMode}>
            <Image src={LogoIcon} alt="Logo" />
            PODPILOT
          </Logo>
        </Link>
        <Close>
          <CloseRounded onClick={() => setMenuOpen(false)} style={{ cursor: "pointer" }} />
        </Close>
      </Flex>
      <Link to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
        <Elements>
          <HomeRoundedIcon />
          <NavText>Dashboard</NavText>
        </Elements>
      </Link>
      <Link to='/search' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
        <Elements>
          <SearchRoundedIcon />
          <NavText>Search</NavText>
        </Elements>
      </Link>
      { currentUser ? (
          <Link to='/favourites' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
            <Elements>
              <FavoriteRoundedIcon />
              <NavText>Favourites</NavText>
            </Elements>
          </Link>
        ) : (
          <Link onClick={() => dispatch(openSignin())} style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
            <Elements>
              <FavoriteRoundedIcon />
              <NavText>Favourites</NavText>
            </Elements>
          </Link>
      )}
      {/* New PodAI menu item */}
      <Link to='/podai' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
        <Elements>
          <SmartToyRoundedIcon />
          <NavText>PodAI</NavText>
        </Elements>
      </Link>
      <HR />
      <Link onClick={() => {
          if (currentUser) {
            setUploadOpen(true)
          } else {
            dispatch(openSignin())
          }
        }} style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
        <Elements>
          <BackupRoundedIcon />
          <NavText>Upload</NavText>
        </Elements>
      </Link>
      { darkMode ? (
          <Elements onClick={() => setDarkMode(false)}>
            <LightModeRoundedIcon />
            <NavText>Light Mode</NavText>
          </Elements>
        ) : (
          <Elements onClick={() => setDarkMode(true)}>
            <DarkModeRoundedIcon />
            <NavText>Dark Mode</NavText>
          </Elements>
      )}
      { currentUser ? (
          <Elements onClick={() => logoutUser()}>
            <ExitToAppRoundedIcon />
            <NavText>Log Out</NavText>
          </Elements>
        ) : (
          <Elements onClick={() => dispatch(openSignin())}>
            <ExitToAppRoundedIcon />
            <NavText>Log In</NavText>
          </Elements>
      )}
    </MenuContainer>
  )
}

export default Menu
