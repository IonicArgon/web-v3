"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

interface Props {
  title: string;
  date: string;
}

export default function ProjectHeader({ title, date }: Props) {
  return (
    <Box mb={8}>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.500">
        {format(parseISO(date), "MMMM dd, yyyy")}
      </Text>
    </Box>
  );
}
