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

const components = {};

const colors = {};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
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