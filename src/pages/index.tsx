import React from "react";
import {
  Container,
  Title,
  Text,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import { NextPage } from "next";
import AddressInputWithButton from "@/components/AddressInputWithButton";
import Footer from "@/components/Footer";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
  },
  wrapper: {
    position: "relative",
    paddingTop: 120,
    paddingBottom: 80,

    "@media (max-width: 768px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 64,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,

    "@media (max-width: 520px)": {
      fontSize: 48,
    },
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <>
      <div className={classes.root}>
        <Container className={classes.wrapper} size="xl">
          <div className={classes.inner}>
            <Title className={classes.title}>
              Block{" "}
              <Text component="span" color={theme.primaryColor} inherit>
                Profiler
              </Text>
            </Title>

            {/* Address Bar */}
            <Container p={0} size="md">
              <AddressInputWithButton />
            </Container>
          </div>
        </Container>
        <Footer
          links={[
            { link: "/", label: "Github" },
            { link: "/", label: "Privacy" },
          ]}
        />
      </div>
    </>
  );
};

export default Home;
