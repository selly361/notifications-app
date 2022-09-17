import Navbar from "./components/Navbar/Navbar";
import styled, { ThemeProvider } from "styled-components";
import { dark, light, GlobalStyles } from "./global-styles/global-styles";
import { useTheme } from "./hooks/useTheme";



const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.body.bg};

  h1 {
    color: red;
    font-size: 10rem;
  }
`;



function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyles />
      <Container>
        <Navbar />
        <h1>{theme}</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
