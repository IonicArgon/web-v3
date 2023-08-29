"use client";

import type { ReactNode } from "react";
import { VStack } from "@chakra-ui/react";

export default function BlogCardWrapper({ children }: { children: ReactNode }) {
  return (
    <VStack spacing={2} align="left">
      {children}
    </VStack>
  );
}
