import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

import Container from "components/container";
import EmphasisLinkButton from "components/emphasislinkbutton";
import MetaHelmet from "components/metahelmet";
import ResponsiveTwoColumns from "components/responsivetwocolumns";
import PuzzleLink from "components/puzzlelink";
import Schedule from "components/schedule";
import Sponsor from "components/sponsor";
import { config } from "data";

const HomeContainer = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", { ssr: false });

  return (
    <div className="home">
      <MetaHelmet description="Break the Binary: ACM ICPC and ACM W's problem-solving extravaganza!" />
      <Box bg="#3F3C7A">
        {isMobile ? (
          <Image
            mx="auto"
            objectFit="fit"
            src={process.env.PUBLIC_URL + "/assets/banner.png"}
            alt="Break the Binary Banner"
            width="100%"
          />
        ) : (
          <Image
            mx="auto"
            objectFit="fit"
            src={process.env.PUBLIC_URL + "/assets/banner.svg"}
            alt="Break the Binary Banner"
            maxHeight="500px"
          />
        )}
      </Box>

      <Stack spacing={0} textAlign="left">
        <Box backgroundColor="brand.100" textAlign="right">
          <Container narrow my>
            <Heading as="h1" fontSize={["2xl", "3xl"]}>
              {config.date}
            </Heading>
            <Heading as="h1" fontSize={["2xl", "3xl"]}>
              <Link href={config.datetimeLink} isExternal>
                {config.time}
                <ExternalLinkIcon mx={1} />
              </Link>
            </Heading>

            <Text textAlign="left" fontSize={["sm", "md"]} mx={10}>
              🌟🚀🔥 ACM ICPC and ACM W proudly present{" "}
              <b> Break the Binary: Across the Spider-Verse! </b> 🕸️🕷️
            </Text>

            <Flex wrap="wrap" justify="center" align="center">
              {config.isInterestPublished && (
                <EmphasisLinkButton
                  url={config.interestLink}
                  text="Interest Form"
                />
              )}
              {config.isRegistrationPublished && (
                <EmphasisLinkButton
                  url={config.registerLink}
                  text="Register Now!"
                />
              )}
            </Flex>
          </Container>
        </Box>

        <Box backgroundColor="brand.50">
          <Container narrow my>
            <ResponsiveTwoColumns
              imgSrc={process.env.PUBLIC_URL + "/assets/photos/solving.jpg"}
              imgAlt="Three groups of students are solving puzzles at Break the
                  Binary. There are three to five students per group, and they
                  appear to be thinking."
            >
              <Heading>Puzzle Hunt!</Heading>
              <Text textAlign="left" fontSize={["sm", "md"]}>
                <br />
                Swing into action with this Spider-Man-themed problem-solving
                extravaganza💫, inspired by everyone's favorite web-slinger. Get
                ready for a day packed with coding challenges 💻💥 and
                multiverse-inspired puzzles 🧩 that will have you thinking like
                Miles Morales in no time!
                <br />
                <br />
                Want to get a feel for the types of puzzles you'll encounter? 🧩
                Try out a few sample puzzles to warm up your mind 🧩 and get
                ready for the challenge! 💪🎯
              </Text>
            </ResponsiveTwoColumns>
          </Container>
        </Box>

        <Box backgroundColor="brand.100">
          <Container narrow my>
            <ResponsiveTwoColumns
              imgSrc={process.env.PUBLIC_URL + "/assets/photos/panel.jpg"}
              imgAlt="Students sit at tables enjoying lunch while panelists
                  including Dr. Smallberg answer questions."
              reverse
            >
              <Heading>Networking</Heading>
              <Text textAlign="left" fontSize={["sm", "md"]}>
                <br />
                At Break the Binary, we're tearing down barriers just like
                Spidey takes down villains 🕷️⚡. Whether you're a seasoned coder
                💻 or just starting out 🚀, this is your chance to be a hero 🦸‍♂️,
                spin some code 🕸️, and champion inclusivity with us! ✨ Join us
                for an inspiring fireside chat 🔥 and networking session 🤝 with
                amazing professors 👩‍🏫👨‍🏫 and industry professionals 👩‍💼👨‍💼.
              </Text>
            </ResponsiveTwoColumns>
          </Container>
        </Box>

        <Box backgroundColor="brand.50">
          <Container narrow my>
            <ResponsiveTwoColumns
              imgSrc={process.env.PUBLIC_URL + "/assets/photos/group.jpg"}
              imgAlt="The participants of Break the Binary are lined up for a group picture."
            >
              <Heading>Food and Prizes</Heading>
              <VStack textAlign="left" fontSize={["sm", "md"]}>
                <Text>
                  <br />
                  Get ready for more than just coding! 🎉 We've got delicious
                  food 🥳, awesome prizes 🎁, and tons of fun lined up for you!
                  🍕🎮 Whether you're here for the puzzles or the party, there's
                  something for everyone to enjoy!
                </Text>
                <List>
                  <ListItem>
                    1st place: <strong>$200</strong> Amazon gift card
                  </ListItem>
                  <ListItem>
                    2nd place: <strong>$160</strong> Amazon gift card
                  </ListItem>
                  <ListItem>
                    3rd place: <strong>$120</strong> Amazon gift card
                  </ListItem>
                </List>
              </VStack>
            </ResponsiveTwoColumns>
          </Container>
        </Box>

        <Box backgroundColor="brand.100">
          <Container narrow my>
            <Stack p={3} spacing={3} align="center">
              <Heading as="h1">Sample Puzzles</Heading>
              <PuzzleLink
                url={
                  process.env.PUBLIC_URL +
                  "/assets/sample-puzzles/childs_play.pdf"
                }
                label="Child's Play"
                description="From Break the Binary 2023"
              />
              <PuzzleLink
                url={
                  process.env.PUBLIC_URL +
                  "/assets/sample-puzzles/word_battle.pdf"
                }
                label="Word Battle"
                description="From Break the Binary 2023"
              />
              <PuzzleLink
                url={
                  process.env.PUBLIC_URL +
                  "/assets/sample-puzzles/solutions.txt"
                }
                label="Solutions"
                description="Solutions to Child's Play and Word Battle"
              />
            </Stack>
          </Container>
        </Box>

        <Box backgroundColor="brand.50">
          <Container narrow my>
            <Stack p={3} spacing={3} align="center">
              <Heading as="h1">Schedule</Heading>
              <Schedule fontSize={["md", "lg"]} />
            </Stack>
          </Container>
        </Box>

        <Box backgroundColor="brand.100">
          <Container narrow my>
            <Stack p={3} spacing={3} textAlign="center" align="center">
              <Heading as="p">Sponsored by</Heading>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                direction="row"
                maxWidth={isMobile ? null : "850px"}
                wrap="wrap"
              >
                <Sponsor
                  sponsor_name="Jane Street"
                  external_link="https://www.janestreet.com/"
                  img_src={
                    process.env.PUBLIC_URL +
                    "/assets/sponsors/Jane_Street_Capital_Logo.svg"
                  }
                />
              </Flex>
            </Stack>
            <br />
          </Container>
        </Box>
      </Stack>
    </div>
  );
};

export default HomeContainer;
