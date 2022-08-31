import 'styled-components';
import {DefaultTheme} from "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;

    text: {
      main: string;
    };

    input: {
      background: string;
      border: string;
      text: string;
      focus: {
        border: string;
      };
    }

    button: {
      main: {
        background: string;
        text: string;
      }
      disabled: {
        background: string;
        text: string;
      }
    }

  }
}

export const mainTheme : DefaultTheme = {
  background: "#021820",

  text: {
    main: "#ffffff",
  },

  input: {
    background: "#374151",
    border: "#4B5563",
    text: "#ffffff",
    focus: {
      border: "#3F83F8"
    },
  },

  button: {
    main: {
      background: "#EC0032",
      text: "#ffffff",
    },
    disabled: {
      background: "#374151",
      text: "#9CA3AF",
    }
  }
}
