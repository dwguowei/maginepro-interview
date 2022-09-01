import React, {lazy} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { mainTheme } from "./styles/themes"

import Layout from "./components/layout";
import Detail from "./pages/Detail";
import Search from "./pages/Search";

// const Search = lazy(() => import('./pages/Search'));
// const Detail = lazy(() => import('./pages/Detail'));

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
      <GlobalStyles/>
      <Layout>
        <Routes>
          <Route path="detail/:imdbID" element={<Detail />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
