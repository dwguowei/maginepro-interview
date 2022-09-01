import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { GlobalStyles } from "./styles/globalStyles";
import store from "./redux/store";

import Layout from "./components/layout";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import DarkThemeProvider from "./components/layout/DarkThemeProvider";

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <DarkThemeProvider>
          <GlobalStyles/>
          <Layout>
            <Routes>
              <Route path="detail/:imdbID" element={<Detail />} />
              <Route path="/" element={<Search />} />
            </Routes>
          </Layout>
        </DarkThemeProvider>
      </ReduxProvider>
    </>
  );
}

export default App;
