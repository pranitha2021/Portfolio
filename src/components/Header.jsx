import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: sticky;
  top:0;
  z-index: 1000;
  background-color:rgb(9, 84, 134);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
  gap: 20px;
    font-weight: bold;
  }
`;

const NavLinks = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin: 0 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 15px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>My Portfolio</h1>
      </div>

      <NavLinks>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#internship">Internship</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </HeaderWrapper>
  );
};

export default Header;