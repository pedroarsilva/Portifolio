// 3:51:00
import styled from "styled-components";
import { useTheme } from "./context/themeContext";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Navigation from "./Components/Navigation";
import { useState } from "react";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Experience from "./Pages/Experience";
import Portfolios from "./Pages/Portfolio";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";


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

  footer{
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colorBg2};

    p{

      a{
        color: ${(props) => props.theme.colorPrimary};
        transition: all .3s ease-in-out;

        &:hover{
         color: ${(props) => props.theme.colorGreenDark};
        }
      }
    }

    
  }

`;

function App() {
  
  const theme = useTheme()
  // console.log(theme)

  // state
  const [toggle, setToggle] = useState(true)

  return (
    <AppStyled theme={theme}>
      <Navigation toggle={toggle} />
      <Header toggle={toggle} setToggle={setToggle} />
      <main>
        <About />
        <Services />
        <Experience />
        <Portfolios />
        <Blogs />
        <Contact />
      </main>
      <footer>
        <p>
          Copywright &copy; 2023 <a href="/">C<span>actus</span> Code</a>. All rights reserved.
        </p>
      </footer>
    </AppStyled>
  );
}

export default App;
