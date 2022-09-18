import React from "react";
import styled from "styled-components";
import { ReactComponent as Sun } from "../../assets/images/icon-sun.svg";
import { ReactComponent as Moon } from "../../assets/images/icon-moon.svg";

const StyledHeader = styled.header`
  padding: 2rem;
  display: inline-block;

  button {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }

    & > * {
      transform: scale(2);
    }
  }
`;

const Navbar = ({ theme, setTheme }) => {
  return (
    <StyledHeader>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </StyledHeader>
  );
};

export default Navbar;
