"use client";

import {
  Avatar,
  AvatarBadge,
  Box,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface SocialProps {
  href: string;
  avatarSrc: string;
  badgeSrc: string;
  header: string;
  subheader: string;
}

export default function Social(props: SocialProps) {
  const themeColor = useColorModeValue("#eee", "#333");
  const themeBorderColor = useColorModeValue("#ddd", "#444");
  const themeTextColor = useColorModeValue("#000", "#fff");

  return (
    <Link href={props.href} isExternal>
      <Box
        as="a"
        display="flex"
        flexDirection="row"
        bg={themeColor}
        border="1px solid"
        borderColor={themeBorderColor}
        color={themeTextColor}
        p="5"
        borderRadius={10}
        minW="300px"
      >
        <Avatar src={props.avatarSrc} size="lg" borderRadius="full">
          <AvatarBadge boxSize="1.25em" borderColor="#fff" bg="#fff">
            <Image src={props.badgeSrc} alt="Social media icon." />
          </AvatarBadge>
        </Avatar>
        <Box ml="4" mt="auto" mb="auto">
          <Box fontWeight="bold">{props.header}</Box>
          <Box fontSize="sm">{props.subheader}</Box>
        </Box>
        <ExternalLinkIcon ml="auto" mt="auto" mb="auto" />
      </Box>
    </Link>
  );
}
