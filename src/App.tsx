import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "parts/Navbar";
import "./App.scss";

const theme = {
  colors: {
    main: "#45aaf2",
    bgc: "#1f1f1f",
  },
};

function App() {
  return (
    <div className="App" style={{ backgroundColor: theme.colors.bgc }}>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
