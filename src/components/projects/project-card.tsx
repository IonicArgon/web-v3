"use client";

import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  date: string;
  href: string;
  description: string;
}

export default function ProjectCard({
  title,
  date,
  href,
  description,
}: ProjectCardProps) {
  const themeColor = useColorModeValue("#eee", "#333");

  return (
    <Card bg={themeColor}>
      <CardHeader pb="0">
        <Link href={href}>
          <Heading size="md" mb={2}>
            {title}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {format(parseISO(date), "MMMM dd, yyyy")}
          </Text>
        </Link>
      </CardHeader>
      <CardBody>{description}</CardBody>
    </Card>
  );
}
