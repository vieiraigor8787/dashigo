import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProps } from "next/app";
import { SidebarDrawerPovider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { queryClient } from "../services/queryClient";
import { theme } from "../styles/theme";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS={false} theme={theme}>
        <SidebarDrawerPovider>
          <Component {...pageProps} />
        </SidebarDrawerPovider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
