import { createContext } from "react";

interface ChainContextProps {
  chainId: number;
  rpcUrl: string;
}

const defaultChainState = {
  chainId: 1,
  rpcUrl: "",
};

export const ChainContext = createContext<ChainContextProps>(defaultChainState);
