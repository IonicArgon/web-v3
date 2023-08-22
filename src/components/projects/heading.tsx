// i am dumb and i use chakra ui for everything so
// i have to do this b/c the project page is server-side rendered

"use client";

import { Heading } from "@chakra-ui/react";

export default function ProjectsHeading() {
  return (
    <Heading size="md" mb={4}>
      some projects, i guess
    </Heading>
  );
}
