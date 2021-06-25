import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const setDarkMode = (setThemeState) => {
  return ({ theme }) => {
    const html = document.querySelector('html');
    
    if (theme) {
      html.classList.add('dark-mode');
      return void setThemeState({ theme });
    }
    html.classList.remove('dark-mode');
    setThemeState({ theme });
    // html.classList.toggle('dark-mode')
  };
}

function DarkModeContext(children) {
  const [themeState, setThemeState] = useState({theme: false});

  return (
    <ThemeContext.Provider value={{ state: themeState, setDarkMode: setDarkMode(setThemeState) }}>
        {children}
      {/* <div className="html" data-theme={theme}>
      </div> */}
    </ThemeContext.Provider>
  );
}

export default DarkModeContext;
