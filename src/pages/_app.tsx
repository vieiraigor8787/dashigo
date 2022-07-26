import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { SidebarDrawerPovider } from "../contexts/SidebarDrawerContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <SidebarDrawerPovider>
        <Component {...pageProps} />
      </SidebarDrawerPovider>
    </ChakraProvider>
  );
}

export default MyApp;
