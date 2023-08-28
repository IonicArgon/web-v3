import type { MDXComponents } from "mdx/types";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Link from "next/link";

function P(props: any) {
  return <Text as="p" mt={4} lineHeight="tall" {...props} />;
}

function H2(props: any) {
  return (
    <Box mt={4}>
      <Divider />
      <Heading size="md" mt={4} {...props} />
    </Box>
  );
}

function OL(props: any) {
  return <Text as="ol" mt={4} lineHeight="tall" {...props} />;
}

function UL(props: any) {
  return <Text as="ul" mt={4} lineHeight="tall" {...props} />;
}

function Blockquote(props: any) {
  return (
    <Flex mt={4}>
      <Box as="span" fontSize="2xl" mr={4}>
        &ldquo;
      </Box>
      <Text as="blockquote" lineHeight="tall" {...props} />
      <Box as="span" fontSize="2xl" ml={4}>
        &rdquo;
      </Box>
    </Flex>
  );
}

function A(props: any) {
  let isExternal = false;
  if (props.href) {
    isExternal = props.href.startsWith("http");
  }

  return (
    <Link href={props.href}>
      <ChakraLink isExternal={isExternal} color="blue.500">
        {props.children} {isExternal && <ExternalLinkIcon mx="2px" />}
      </ChakraLink>
    </Link>
  );
}

function Img(props: any) {
  return (
    <Center>
      <Box overflow="hidden" borderRadius={10}>
        <Image {...props} alt="" />
      </Box>
    </Center>
  );
}

const mdxComponents: MDXComponents = {
  p: P,
  h2: H2,
  ol: OL,
  ul: UL,
  blockquote: Blockquote,
  a: A,
  img: Img,
};

export default mdxComponents;
