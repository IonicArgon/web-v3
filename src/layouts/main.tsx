"use client";

import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Navbar from "@/components/nav";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function MainLayout({ children }: any) {
  const pathname = usePathname();

  return (
    <Center pt="50px">
      <Box>
        <Grid
          templateAreas={`"nav space" "nav2 content"`}
          templateColumns="200px 1fr"
          templateRows="65px 90vh"
        >
          <GridItem gridArea="nav">
            <Link href="/">
              <Heading>marco tan</Heading>
            </Link>
          </GridItem>
          <GridItem gridArea="space"></GridItem>
          <GridItem gridArea="nav2">
            <Navbar />
          </GridItem>
          <GridItem gridArea="content">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, type: easeInOut }}
                exit={{ opacity: 0 }}
              >
                <Container
                  minW="container.sm"
                  maxW="container.sm"
                  h="100%"
                  overflowY="scroll"
                  sx={{
                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                    scrollbarWidth: "none",
                    "-ms-overflow-style": "none",
                  }}
                  className="none"
                >
                  {children}
                </Container>
              </motion.div>
            </AnimatePresence>
          </GridItem>
        </Grid>
      </Box>
    </Center>
  );
}
