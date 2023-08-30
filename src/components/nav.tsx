"use client";

import { Box, useColorModeValue, VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/projects": {
    name: "projects",
  },
  "/blog": {
    name: "blog",
  },
  "/resume.pdf": {
    name: "resume",
  },
};

interface NavItemProps {
  href: string;
  name: string;
}

const NavItem = ({ href, name }: NavItemProps) => {
  const pathname = usePathname();
  const active = pathname === href;
  const activeBackgroundColor = useColorModeValue("#eee", "#333");
  const inactiveTextColor = useColorModeValue("#aaa", "#777");

  return (
    <Link href={href}>
      <Box
        display="inline-block"
        px={4}
        py={2}
        borderRadius="md"
        bg={active ? activeBackgroundColor : "inherit"}
        color={active ? "inherit" : inactiveTextColor}
        _hover={{
          bg: activeBackgroundColor,
          color: "inherit",
          transition: "background-color 0.25s ease-in-out",
        }}
      >
        {name}
      </Box>
    </Link>
  );
};

export default function Navbar() {
  const copyrightColor = useColorModeValue("#aaa", "#777");

  return (
    <Box minW="200px" maxW="200px">
      <VStack align="left">
        {Object.entries(navItems).map(([href, { name }]) => (
          <NavItem key={href} href={href} name={name} />
        ))}
      </VStack>
      <Box pt="70vh" color={copyrightColor}>
        Made with Next.js and Chakra UI.
        <br />
        &copy; {new Date().getFullYear()} Marco Tan.
      </Box>
    </Box>
  );
}
