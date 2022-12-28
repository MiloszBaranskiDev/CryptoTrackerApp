import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "parts/Navbar";
import Footer from "parts/Footer";
import CryptoList from "views/CryptoList";
import SingleCrypto from "views/SingleCrypto";

import { EThemeColorKey } from "enums/EThemeColorKey";
import { ESortOption } from "enums/ESortOption";
import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { ITheme } from "interfaces/ITheme";

const App: React.FC = () => {
  const [currencySymbol, updateCurrencySymbol] = useState<ECurrencySymbol>(
    ECurrencySymbol.usd
  );
  const [currentSortBy, setCurrentSortBy] = useState<ESortOption>(
    ESortOption.default
  );
  const [isDarkMode, updateIsDarkMode] = useState<boolean>(true);

  const theme: ITheme = {
    colors: {
      [EThemeColorKey.main]: "#7d5fff",
      [EThemeColorKey.bgc]: isDarkMode ? "#292929" : "#ecf0f1",
      [EThemeColorKey.bgc_light]: isDarkMode ? "#353535" : "#cbd2d6",
      [EThemeColorKey.typography]: isDarkMode ? "white" : "#292929",
      [EThemeColorKey.typography_light]: "#808080",
      [EThemeColorKey.red]: "#e74c3c",
      [EThemeColorKey.green]: "#27ae60",
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
            updateCurrencySymbol={updateCurrencySymbol}
            isDarkMode={isDarkMode}
            updateIsDarkMode={updateIsDarkMode}
          />
          <Routes>
            <Route
              path="/"
              element={
                <CryptoList
                  currencySymbol={currencySymbol}
                  currentSortBy={currentSortBy}
                  setCurrentSortBy={setCurrentSortBy}
                />
              }
            />
            <Route
              path="/crypto/:id"
              element={<SingleCrypto currencySymbol={currencySymbol} />}
            />
          </Routes>
          <Footer />
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
