import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.scss";
import Navbar from "parts/Navbar";
import CryptoList from "parts/CryptoList";

const App: React.FC = () => {
  const [currency, updateCurrency] = useState<string>("USD");
  const [isDarkMode, updateIsDarkMode] = useState<boolean>(true);

  const theme = {
    colors: {
      main: "#7d5fff",
      bgc: isDarkMode ? "#292929" : "#ecf0f1",
      bgc_light: isDarkMode ? "#353535" : "#bdc3c7",
      typography: isDarkMode ? "white" : "#292929",
      typography_light: "#808080",
      red: "#e74c3c",
      green: "#27ae60",
    },
  };

  return (
    <div className="App" style={{ backgroundColor: theme.colors.bgc_light }}>
      <ThemeProvider theme={theme}>
        <Navbar
          updateCurrency={updateCurrency}
          isDarkMode={isDarkMode}
          updateIsDarkMode={updateIsDarkMode}
        />
        <CryptoList currency={currency} />
      </ThemeProvider>
    </div>
  );
};

export default App;
