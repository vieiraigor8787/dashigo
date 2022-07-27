import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import { SidebarDrawerPovider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider resetCSS={false} theme={theme}>
      <SidebarDrawerPovider>
        <Component {...pageProps} />
      </SidebarDrawerPovider>
    </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
