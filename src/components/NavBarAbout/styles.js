import styled from "styled-components";

export const NavbarContainer = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: black;
  color: #fff;
  position: fixed; 
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin-left: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`;
