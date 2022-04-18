import { ethers } from "ethers";

export const isAddress = (address: string): boolean => {
  return ethers.utils.isAddress(address);
};

export const formatAddressToShorterAddress = (address: string): string => {
  if (address === null) return "";
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;
};
