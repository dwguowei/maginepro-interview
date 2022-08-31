import 'styled-components';
import {DefaultTheme} from "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;

    text: {
      main: string;
    };

  }
}

export const mainTheme : DefaultTheme = {
  background: "#021820",

  text: {
    main: "#ffffff"
  },
}
