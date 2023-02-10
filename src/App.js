import "./App.css";
import { Header } from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { createContext, useState } from "react";
import { Footers } from "./Pages/Footer";
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footers />
        </Router>
      </div>
    </ColorTheme.Provider>
  );
}

export default App;
