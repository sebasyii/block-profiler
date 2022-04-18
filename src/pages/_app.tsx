import React, { useState } from "react";

import { AppProps } from "next/app";

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { ChainContext } from "@/contexts/ChainContext";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "light" ? "dark" : "light"));

  return (
    <>
      <DefaultSeo {...SEO} />

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
          }}
        >
          <ChainContext.Provider
            value={{
              chainId: 1,
              rpcUrl: "https://rpc.ankr.com/eth",
            }}
          >
            <Component {...pageProps} />
          </ChainContext.Provider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default App;
