import { formatAddressToShorterAddress } from "@/utils/helpers";
import {
  Card,
  createStyles,
  Loader,
  ScrollArea,
  Stack,
  Table,
} from "@mantine/core";
import { ethers } from "ethers";
import React from "react";
import GenericCard from "../common/GenericCard";
import TransactionRow from "./TransactionRow";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

const TransactionsTable = ({ transactions }) => {
  const rows = transactions?.map((transaction) => {
    return (
      <TransactionRow key={transaction.tx_hash} transaction={transaction} />
    );
  });

  return (
    <GenericCard
      headerTitle="Transactions"
      cardContent={
        <Card.Section>
          <Stack spacing="sm">{rows}</Stack>
        </Card.Section>
      }
    />
  );
};

export default TransactionsTable;
