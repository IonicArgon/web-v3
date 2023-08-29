"use client";

import { Badge, Box, Heading, HStack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  date: string;
  tags: string[];
}

//todo: i am quite aware this is a copy of the project header but it might change later so
export default function BlogHeader({ title, date, tags }: Props) {
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
