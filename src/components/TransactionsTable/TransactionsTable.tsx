import { formatAddressToShorterAddress } from "@/utils/helpers";
import { Card, createStyles, Loader, ScrollArea, Table } from "@mantine/core";
import { ethers } from "ethers";
import React from "react";
import GenericCard from "../common/GenericCard";

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
      <tr key={transaction.tx_hash}>
        <td>{formatAddressToShorterAddress(transaction.from_address)}</td>
        <td>{formatAddressToShorterAddress(transaction.to_address)}</td>
        <td>{ethers.utils.formatEther(transaction.value)}</td>
      </tr>
    );
  });

  return (
    <GenericCard
      headerTitle="Transactions"
      cardContent={
        <Card.Section>
          <ScrollArea m={6}>
            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>{transactions ? rows : <Loader variant="dots" />}</tbody>
            </Table>
          </ScrollArea>
        </Card.Section>
      }
    />
  );
};

export default TransactionsTable;
