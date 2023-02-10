import { Link } from "react-router-dom";
import { useContext } from "react";
import { ColorTheme } from "./App";
import ReactSwitch from "react-switch";

export const Header = () => {
  const { theme, changeTheme } = useContext(ColorTheme);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="border-bottom" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="border-bottom" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link>
              <b>
                <span className="js-center">js</span>
              </b>
            </Link>
          </li>
          <li>
            <Link className="border-bottom" to="/">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/">
              <ReactSwitch onChange={changeTheme} checked={theme === "dark"} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
