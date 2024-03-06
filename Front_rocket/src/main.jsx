import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { FavoritesProvider } from "./hooks/favorites.jsx";
import GlobalStyles from "./styles/global.js";
import { AuthProvider } from "./hooks/auth";
import { Routes } from "./routes";
import theme from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <FavoritesProvider>
          <Routes />
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
