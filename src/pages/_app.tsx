import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
