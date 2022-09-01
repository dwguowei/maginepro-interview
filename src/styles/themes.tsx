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


const mainTheme = {
  input: {
    border: "#4B5563",
    focus: {
      border: "#3F83F8"
    },
  },

  button: {
    main: {
      background: "#EC0032",
      text: "#ffffff",
    },
  }
}

export const darkTheme : DefaultTheme = {
  ...mainTheme,

  background: "#021820",

  text: {
    main: "#ffffff",
  },

  input: {
    ...mainTheme.input,
    background: "#374151",
    text: "#ffffff",
  },

  button: {
    ...mainTheme.button,
    disabled: {
      background: "#374151",
      text: "#9CA3AF",
    }
  }
}

export const lightTheme : DefaultTheme = {
  ...mainTheme,

  background: "#ffffff",

  text: {
    main: "#021820",
  },

  input: {
    ...mainTheme.input,
    background: "#ffffff",
    text: "#021820",
  },

  button: {
    ...mainTheme.button,
    disabled: {
      background: "#0000001f",
      text: "#00000042",
    }
  }
}