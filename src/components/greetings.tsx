"use client";

import { useEffect, useState } from "react";
import { Box, Heading, Fade } from "@chakra-ui/react";

export default function Greetings() {
  const greetings = [
    "hi, my name is marco",
    "salut, je m'appelle marco",
    "nǐ hǎo, wǒ de míng zì shì marco",
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
