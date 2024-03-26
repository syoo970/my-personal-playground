"use client";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const theme = createTheme({});

const StyleProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <MantineProvider>{children}</MantineProvider>
    </ThemeProvider>
  );
};

export default StyleProvider;
