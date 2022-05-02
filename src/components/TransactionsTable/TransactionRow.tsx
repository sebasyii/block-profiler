import { formatAddressToShorterAddress } from "@/utils/helpers";
import { Box, Grid, Text } from "@mantine/core";
import { ethers } from "ethers";
import React from "react";

const TransactionRow = ({ transaction, ...rest }) => {
  const { key } = rest;
  return (
    <Box key={key}>
      <Grid>
        <Grid.Col span={3}>
          <Text>{transaction.block_signed_at}</Text>
          <Text>{formatAddressToShorterAddress(transaction.tx_hash)}</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text>{formatAddressToShorterAddress(transaction.to_address)}</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text>{ethers.utils.formatEther(transaction.value)}</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text>
            Gas Fees: {ethers.utils.formatEther(transaction.fees_paid ?? "0")}
          </Text>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default TransactionRow;
