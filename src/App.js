import Navbar from "./components/Navbar/Navbar";
import styled, { ThemeProvider } from "styled-components";
import { dark, light, GlobalStyles } from "./global-styles/global-styles";
import { useTheme } from "./hooks/useTheme";
import Notifications from "./components/Notifications/Notifications";

const Container = styled.div`
  padding: 2rem;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.body.bg};
  transition: 2s background-color ease;
  display: grid;

  @media (max-width: 1000px){
    padding: 0;
  }
`;

function App() {
  const [theme, setTheme] = useTheme();
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyles />
      <Container>
        <Notifications theme={theme} setTheme={setTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
