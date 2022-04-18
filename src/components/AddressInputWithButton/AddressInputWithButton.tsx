import {
  ActionIcon,
  TextInput,
  TextInputProps,
  useMantineTheme,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

import React, { useContext } from "react";
import { FiArrowLeft, FiArrowRight, FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";

const AddressInputWithButton = (props: TextInputProps) => {
  const theme = useMantineTheme();
  const router = useRouter();

  const [address, setAddress] = useLocalStorage<string>({
    key: "address",
    defaultValue: "",
  });

  return (
    <TextInput
      icon={<FiSearch size={18} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
          onClick={() => router.push(`/address/${address}`)}
        >
          {theme.dir === "ltr" ? (
            <FiArrowRight size={18} />
          ) : (
            <FiArrowLeft size={18} />
          )}
        </ActionIcon>
      }
      aria-label="address"
      placeholder="Search by address"
      value={address}
      onChange={(event) => setAddress(event.target.value)}
      // onClick={handleClick}
      rightSectionWidth={42}
      {...props}
    />
  );
};

export default AddressInputWithButton;
