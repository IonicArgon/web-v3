import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#dddddd", "#111111")(props),
      color: mode("#000000", "#ffffff")(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: (props: any) => ({
      color: mode("#007ba7", "#87cefa")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const colors = {};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const fonts = {
  heading: "Inter, sans-serif",
  body: "Inter, sans-serif",
};

const theme = extendTheme({
  styles,
  components,
  colors,
  config,
  fonts,
});

export default theme;
