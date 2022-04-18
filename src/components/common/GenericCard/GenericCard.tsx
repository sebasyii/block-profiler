import { Card, createStyles, Paper, Text } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[3],
  },
  headerSection: {
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.gray[3],
    color: theme.colors.gray[7],
    fontWeight: "600",
    fontSize: theme.fontSizes.md,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

type GenericCardProps = {
  headerTitle: string;
  cardContent: React.ReactNode;
};

const GenericCard = ({ headerTitle, cardContent }: GenericCardProps) => {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="sm" className={classes.card} m={6}>
      <Card.Section className={classes.headerSection}>
        {headerTitle}
      </Card.Section>
      {cardContent}
    </Card>
  );
};

export default GenericCard;
