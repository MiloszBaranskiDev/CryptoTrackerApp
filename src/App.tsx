import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.scss";
import Navbar from "parts/Navbar";
import CryptoList from "parts/CryptoList";

const theme = {
  colors: {
    main: "#45aaf2",
    gray: "#292929",
    red: "#e74c3c",
    green: "#27ae60",
  },
};

const App: React.FC = () => {
  const [currency, updateCurrency] = useState<string>("USD");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar updateCurrency={updateCurrency} />
        <CryptoList currency={currency} />
      </ThemeProvider>
    </div>
  );
};

export default App;
