"use client";

import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  date: string;
  href: string;
  description: string;
  mainTag: string;
}

export default function ProjectCard({
  title,
  date,
  href,
  description,
  mainTag,
}: ProjectCardProps) {
  const themeColor = useColorModeValue("#eee", "#333");
  const parsedDate = date.replace(/-/g, "/").replace(/T00:00:00.000Z/g, "");
  const datePublished = new Date(parsedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card bg={themeColor}>
      <CardHeader pb="0">
        <Link href={href}>
          <Flex>
            <Heading size="md" mb={2}>
              {title}
            </Heading>
            <Badge fontSize="0.8em" ml="auto" alignSelf="center">
              {mainTag}
            </Badge>
          </Flex>
          <Text fontSize="sm" color="gray.500">
            {datePublished}
          </Text>
        </Link>
      </CardHeader>
      <CardBody>{description}</CardBody>
    </Card>
  );
}
