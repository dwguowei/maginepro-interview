import React, {ReactNode} from "react";
import { ThemeProvider } from "styled-components";
import {darkTheme, lightTheme} from "../../styles/themes";
import {useAppSelector} from "../../redux/hooks";

const DarkThemeProvider = ({ children }: { children: ReactNode[] | ReactNode }) => {
  const darkThemeEnabled = useAppSelector(state => state.state.enableDarkTheme);

  console.log("darkThemeEnabled",darkThemeEnabled)

  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme }>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;

