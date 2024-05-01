import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: black;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin-left: 30px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
