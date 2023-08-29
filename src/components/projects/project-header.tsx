"use client";

import { Badge, Box, Heading, HStack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  date: string;
  tags: string[];
}

export default function ProjectHeader({ title, date, tags }: Props) {
  return (
    <Box mb={8}>
      <Heading size="md" mb={4}>
        {title}
      </Heading>
      <HStack spacing={2} mb={2}>
        {tags.map((tag) => (
          <Badge key={tag} fontSize="0.8em">
            {tag}
          </Badge>
        ))}
      </HStack>
      <Text fontSize="sm" color="gray.500">
        {date}
      </Text>
    </Box>
  );
}
