import React from "react";
import { MdCircleNotifications } from "react-icons/md";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from "../../hooks/useTheme";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;

  button {
    font-size: 2rem;
  }
`;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <StyledHeader>
      <div>
        <MdCircleNotifications />
      </div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </StyledHeader>
  );
};

export default Navbar;
