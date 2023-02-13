import "./App.css";
import { Header } from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { createContext, useState } from "react";
import { Footers } from "./Pages/Footer";
import { Animation } from "./Components/AnimatedRoutes";

export const ColorTheme = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ColorTheme.Provider value={{ theme, changeTheme }}>
      <div className="App" id={theme}>
        <Router>
          <Header theme={theme} changeTheme={changeTheme} />
          <Animation />
          <Footers />
        </Router>
      </div>
    </ColorTheme.Provider>
  );
}

export default App;
