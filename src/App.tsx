import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "parts/Navbar";
import Footer from "elements/Footer";
import CryptoList from "views/CryptoList";
import SingleCrypto from "views/SingleCrypto";

const App: React.FC = () => {
  const [currency, updateCurrency] = useState<string>("USD");
  const [currentSortBy, setCurrentSortBy] = useState<string>("Default");
  const [isDarkMode, updateIsDarkMode] = useState<boolean>(true);

  const theme: any = {
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
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundColor: theme.colors.bgc_light,
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <ThemeProvider theme={theme}>
          <Navbar
            updateCurrency={updateCurrency}
            isDarkMode={isDarkMode}
            updateIsDarkMode={updateIsDarkMode}
          />
          <Routes>
            <Route
              path="/"
              element={
                <CryptoList
                  currency={currency}
                  currentSortBy={currentSortBy}
                  setCurrentSortBy={setCurrentSortBy}
                />
              }
            />
            <Route
              path="/crypto/:id"
              element={<SingleCrypto currency={currency} />}
            />
          </Routes>
          <Footer />
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
