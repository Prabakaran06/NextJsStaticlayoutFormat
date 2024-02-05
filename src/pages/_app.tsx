import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import MainLayout from "@/component/Layout/main-layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
        <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
