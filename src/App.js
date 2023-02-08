import { useTheme } from "./context/themeContext";

function App() {
  
  const theme = useTheme()
  console.log(theme)

  return (
    <div className="app"><h1>Hello Word</h1></div>
  );
}

export default App;
