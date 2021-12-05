import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { ThemeContext } from "../Context/ThemeProvider";

function Body() {
  const [isAuth] = useContext(AppContext);
  const [{ theme, themeData }] = useContext(ThemeContext);

  const currentTheme = themeData[theme];
  console.log(currentTheme);
  if (isAuth) {
    return (
      <div
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.background
        }}
      >
        </div>
    );
  } else {
    return (
      <div>
         </div>
    );
  }
}

export default Body;
