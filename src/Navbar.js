import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-image: linear-gradient(red, pink);
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandName = styled.h1`
  margin: 0;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const GetUsersButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

const Navbar = ({ onGetUsersClick }) => {
  return (
    <NavbarContainer>
      <BrandName>AirData</BrandName>
      <GetUsersButton onClick={onGetUsersClick}>Get Users</GetUsersButton>
    </NavbarContainer>
  );
};

export default Navbar;
