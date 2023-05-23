import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ColorTheme } from "../App";
import { HeaderUl } from "./HeaderList";
import ReactSwitch from "react-switch";

export const Header = () => {
  const { theme, changeTheme } = useContext(ColorTheme);
  const location = useLocation();

  return (
    <header>
      <nav>
        <ul>
          {HeaderUl.map((list, key) => {
            return (
              <li key={key}>
                <Link
                  to={list.links}
                  className={list.className}
                  id={location.pathname === list.links ? "active" : ""}
                >
                  {list.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link>
              <ReactSwitch onChange={changeTheme} checked={theme === "dark"} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
