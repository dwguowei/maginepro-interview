import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { mainTheme } from "./styles/themes"

import Layout from "./components/layout";
import Search from "./pages/search";

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
      <GlobalStyles/>
      <Layout>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
