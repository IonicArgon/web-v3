"use client";

import type { ReactNode } from "react";
import { VStack } from "@chakra-ui/react";

export default function ProjectContentWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <VStack spacing={4} align="left">
      {children}
    </VStack>
  );
}
