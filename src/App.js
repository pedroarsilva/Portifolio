// 20:18
import styled from "styled-components";
import { useTheme } from "./context/themeContext";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Navigation from "./Components/Navigation";
import { useState } from "react";

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colorBlack};
  color: ${(props) => props.theme.colorWhite};
  position: relative;
  p, a, li{
    color: ${(props) => props.theme.colorGrey1};
  }

  p{
    line-height: 1.9rem;
  }
`;

function App() {
  
  const theme = useTheme()
  // console.log(theme)

  // state
  const [toggle, setToggle] = useState(false)

  return (
    <AppStyled theme={theme}>
      <Navigation toggle={toggle} />
      <Header toggle={toggle} setToggle={setToggle} />
      <Button />
    </AppStyled>
  );
}

export default App;
