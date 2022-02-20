import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { flexAlignCenter } from '../../styles/mixin';
import Login from './Login/Login';
import SearchBar from './SearchBar/SearchBar';

const Nav = () => {
  const [loginModalState, setLoginModalState] = useState(false);
  const [searchBarState, setSearchBarState] = useState(false);
  const closeLoginModal = () => setLoginModalState(false);
  const closeSearchBar = () => setSearchBarState(false);
  const navigate = useNavigate();

  return (
    <>
      <NavWrapper>
        <LogoImg
          alt="logoImage"
          src="/images/logo.png"
          onClick={() => navigate('/list')}
        />
        <LogoCharImg
          alt="logoCharacter"
          src="/images/logo_character.jpg"
          onClick={() => navigate('/list')}
        />
        <RightSide>
          <RightBtn onClick={() => setLoginModalState(true)}> LOGIN </RightBtn>
          <span>|</span>
          <RightBtn>
            <span onClick={() => setSearchBarState(true)}> SEARCH</span>
            <Icon>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={() => setSearchBarState(true)}
              />
            </Icon>
          </RightBtn>
        </RightSide>
      </NavWrapper>
      <Login
        loginModalState={loginModalState}
        closeLoginModal={closeLoginModal}
      />
      <SearchBar
        searchBarState={searchBarState}
        closeSearchBar={closeSearchBar}
      />
    </>
  );
};

const NavWrapper = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  margin-bottom: -3vh;
  padding: 2vh;
  z-index: 20;
`;

const LogoImg = styled.img`
  width: 8vw;
  height: auto;
  cursor: pointer;
`;

const LogoCharImg = styled.img`
  padding-bottom: 5vh;
  margin-left: 3vw;
  width: 8vw;
  cursor: pointer;
`;

const RightSide = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 1.2vw;
  font-weight: bold;

  span {
    margin-left: 1vw;
  }
`;

const RightBtn = styled.div`
  cursor: pointer;
`;

const Icon = styled.span`
  margin-right: 1.2vw;
  color: black;
  font-size: 1.4vw;
  cursor: pointer;
`;

export default Nav;
