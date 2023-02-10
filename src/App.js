// 20:18
import styled from "styled-components";
import { useTheme } from "./context/themeContext";
import Header from "./Components/Header";
import Button from "./Components/Button";

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorWhite};
  position: relative;
`;

function App() {
  
  const theme = useTheme()
  // console.log(theme)

  return (
    <AppStyled theme={theme}>
      <Header />
      <Button />
    </AppStyled>
  );
}

export default App;
