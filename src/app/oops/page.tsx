"use client";

import { Center, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";

export default function Oops() {
  console.log(
    "%cu think ur a smart one dont u",
    "color: red; font-size: 20px;",
  );
  console.log(
    "%chttps://www.youtube.com/watch?v=C9PFVo1FEwU",
    "font-size: 20px;",
  );

  return (
    <main>
      <Center>
        <VStack>
          <Image
            src="oops.png"
            alt="Oops."
            minW="100%"
            minH="100%"
            fit="cover"
          />
          <br />
          <Heading as="h2" size="xl" textAlign="center">
            oops, you&apos;re not supposed to be here
          </Heading>
          <br />
          <Link href="/">go back</Link>
          <br />
          <Text>(or don&apos;t, i&apos;m not your mom)</Text>
          <br />
          <Text>bonus points if you got the reference</Text>
        </VStack>
      </Center>
    </main>
  );
}
