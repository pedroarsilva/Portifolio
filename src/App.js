import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/';
import Header from './components/Header';

import { ThemeProvider } from 'styled-components';
import { GlobalStiles } from './components/styles/Globals.styled';

function App() {

  const theme = {
    colors: {
      white: "rgba(240, 247, 255, 1)",
      navyBlue: "rgba(2, 12, 27, 1)",
      lightNavyBlue: "rgba(4, 22, 48, 1)",
      green: "rgba(0, 206, 158, 1)",
      orange: "rgba(249, 105, 14, 1)",
      purple: "rgba(102, 51, 153, 1)"
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  }

  return (
    <>
    <ThemeProvider theme = {theme}>
      <GlobalStiles />
      <Navbar />
      <Header />
    </ThemeProvider>
    </>
  );
}

export default App;
