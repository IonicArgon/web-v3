"use client";

import {
  Box,
  Flex,
  Image,
  Link,
  Grid,
  GridItem,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import Greetings from "@/components/greetings";
import Social from "@/components/social";

export default function Home() {
  return (
    <main>
      <span>
        <Greetings />{" "}
      </span>
      <br />
      <p>
        I&apos;m a student, hobbyist, and aspiring software developer from
        Brampton, Ontario. I&apos;m currently studying mechatronics engineering
        and biomedical engineering at McMaster University. I love anything
        hands-on, and I&apos;m always looking for new projects to work on.
      </p>
      <br />

      <Grid templateColumns="repeat(3, 1fr)" templateRows="1fr" gap={2}>
        <GridItem>
          <VStack>
            <Box h="80" borderRadius={10} overflow="hidden">
              <Image
                src="home1.jpg"
                alt="High school graduation photos."
                minW="100%"
                minH="100%"
                fit="cover"
              />
            </Box>
            <Box h="40" borderRadius={10} overflow="hidden">
              <Image
                src="home2.jpg"
                alt="Applebees after ICCAs."
                minW="100%"
                minH="100%"
                fit="cover"
              />
            </Box>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack>
            <Box h="40" borderRadius={10} overflow="hidden">
              <Image
                src="home3.jpg"
                alt="Fun day in Toronto."
                minW="100%"
                minH="100%"
                fit="cover"
              />
            </Box>
            <Box h="80" borderRadius={10} overflow="hidden">
              <Image
                src="home4.png"
                alt="iBioMed Showcase photo, 1EP6 group."
                minW="100%"
                minH="100%"
                fit="cover"
              />
            </Box>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack>
            <Box h="80" borderRadius={10} overflow="hidden">
              <Image
                src="home5.jpg"
                alt="Spring concert with the Macafellas."
                minW="100%"
                minH="100%"
                fit="cover"
              />
            </Box>
            <Box h="40" borderRadius={10} overflow="hidden">
              <Image
                src="home6.jpg"
                alt="Very old photo of me."
                minW="100%"
                minH="100%"
                fit="cover"
              />
            </Box>
          </VStack>
        </GridItem>
      </Grid>

      <br />
      <p>
        Aside from all the technical stuff, I love to sing! I&apos;ve been
        singing since grade 3, and I&apos;ve been involved in a lot of choirs
        and musicals. Currently, I am serving as the secretary of&nbsp;
        <Link href="https://www.facebook.com/McMasterACapella/" isExternal>
          McMaster Acapella
        </Link>
        &nbsp;and as a baritone/tenor and vocal director of the Macafellas, the
        lower voices group. Take a look at some of our performances below!
      </p>
      <br />
      <Flex>
        <Social
          href="https://www.instagram.com/mcmasteracappella/?hl=en"
          avatarSrc="acapella.jpg"
          badgeSrc="instaIcon.svg"
          header="Instagram"
          subheader="@mcmasteracappella"
        />
        <Spacer />
        <Social
          href="https://www.youtube.com/@McMasterACappella"
          avatarSrc="acapella.jpg"
          badgeSrc="youtubeIcon.svg"
          header="YouTube"
          subheader="McMaster Acapella"
        />
      </Flex>
      <br />
      <p>
        Currently, I work as a mentor for the&nbsp;
        <Link href="https://www.bramptonrobotics.org/" isExternal>
          Brampton Robotics
        </Link>
        &nbsp;where I teach students about robotics and programming using the
        VEX IQ and VEX V5 platforms. I used to be on VRC team&nbsp;
        <Link href="https://www.robotevents.com/teams/VRC/1104A" isExternal>
          1104A
        </Link>
        &nbsp;as the lead programmer from 2019 to 2022. I&apos;ve also been
        working on a few personal projects. Occassionally, I&apos;ll write about
        them on my blog; you can check out some of them below.
      </p>
      <br />
      <div>placeholder for linking blog posts</div>
      <br />
      <p>
        I&apos;m always looking for new opportunities to learn and grow. If you
        have any questions or just want to chat, feel free to reach out to me
        through any of the links below! Hope to hear from you soon!
      </p>
      <br />
      <Flex>
        <Social
          href="https://www.instagram.com/marco_tan_04/?hl=en"
          avatarSrc="insta.jpg"
          badgeSrc="instaIcon.svg"
          header="Instagram"
          subheader="@marco_tan_04"
        />
        <Spacer />
        <Social
          href="mailto:marco.tan.200405@gmail.com"
          avatarSrc="gmail.png"
          badgeSrc="gmailIcon.svg"
          header="Email"
          subheader="marco.tan.200405"
        />
      </Flex>
    </main>
  );
}
