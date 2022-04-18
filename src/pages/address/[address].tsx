import GenericCard from "@/components/common/GenericCard";
import TransactionsTable from "@/components/TransactionsTable";
import { SERVER_BASE_URL } from "@/utils/constant";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const AccountAddress = () => {
  const router = useRouter();
  const [address, setAddress] = useState<string>("");
  const [accountBalance, setAccountBalance] = useState();
  const [accountTransactions, setAccountTransactions] = useState();

  useEffect(() => {
    const { address } = router.query;
    if (address && typeof address === "string") {
      setAddress(address);
    }
  }, [router.query]);

  useEffect(() => {
    if (address) {
      axios
        .get(
          `${SERVER_BASE_URL}/1/address/${address}/portfolio_v2/?quote-currency=USD&format=JSON&key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`
        )
        .then((res) => {
          setAccountBalance(res.data.data.items);
        })
        .catch((err) => {
          console.error(err);
        });

      // Get Transactions
      axios
        .get(
          `${SERVER_BASE_URL}/1/address/${address}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`
        )
        .then((res) => {
          setAccountTransactions(res.data.data.items);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [address]);

  // console.log(accountBalance);
  console.log(accountTransactions);

  return (
    <div>
      <TransactionsTable transactions={accountTransactions} />
      <GenericCard headerTitle={"Transactions"} cardContent={<>HEllo</>} />
    </div>
  );
};

export default AccountAddress;
