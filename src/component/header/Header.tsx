import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #fff;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 31px; 
  width: 21px;
`;

const HeadingText = styled.p`
  font-family: Plus Jakarta Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  padding: 5px;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 10px; 
  margin-left: auto;
`;

const NavLink = styled(Link)`
  color: #2D3748;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const GetInButton = styled.button`
  background-color: #6153CD;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  margin-left: 20px;
  cursor: pointer;
`;

const Header: React.FC = () => {
  const navigate = useNavigate()

  const logout =()=>{
    localStorage.removeItem("userData");
    navigate('/login')
  }
  return (
    <HeaderContainer>
      <Logo src="/logo.png" alt="Logo" />
      <HeadingText>Digital agency</HeadingText>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/">Projects</NavLink>
      </Navigation>
      <GetInButton onClick={logout}>Logout</GetInButton>
    </HeaderContainer>
  );
};

export default Header;
