// 20:18
import styled from "styled-components";
import { useTheme } from "./context/themeContext";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Navigation from "./Components/Navigation";

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colorBlack};
  color: ${(props) => props.theme.colorWhite};
  position: relative;
`;

function App() {
  
  const theme = useTheme()
  console.log(theme)

  return (
    <AppStyled theme={theme}>
      <Navigation />
      <Header />
      <Button />
    </AppStyled>
  );
}

export default App;
