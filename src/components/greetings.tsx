"use client";

import { useEffect, useState } from "react";
import { Box, Heading, Fade } from "@chakra-ui/react";

export default function Greetings() {
  const greetings = [
    "Hello, my name is Marco!",
    "Bonjour, je m'appelle Marco!",
    "你好, 我的名字是 Marco!",
  ];

  let [index, setIndex] = useState(0);
  let [fade, setFade] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((index + 1) % greetings.length);
        setFade(true);
      }, 500);
    }, 5000);
  }, [index, greetings.length]);

  return (
    <Box>
      <Fade in={fade}>
        <Heading size="md">{greetings[index]}</Heading>
      </Fade>
    </Box>
  );
}
