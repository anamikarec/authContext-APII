import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { ThemeContext } from "../Context/ThemeProvider";
import {Login} from "./Login";
const Header = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);
  const [{ theme }, toggleTheme] = useContext(ThemeContext);
  return (
    <div>
      This is a navbar!
      <div>
        {isAuth ? (
          <button onClick={() => setIsAuth(false)}>SIGN OUT</button>
        ) : (
          // <button onClick={() => setIsAuth(true)}> SIGN IN</button>
          <Login />
        )}
      </div>
      <div>
      </div>
    </div>
  );
};

export default Header;
