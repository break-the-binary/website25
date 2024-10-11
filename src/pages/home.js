import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Container from "components/container";
import MetaHelmet from "components/metahelmet";
import Sponsor from "components/sponsor";
import { useMediaQuery } from "hooks";

const HomeContainer = () => {
  const isMobile = !useMediaQuery("(min-width: 768px)");

  // TODO: descriptions
  return (
    <div className="home">
      <MetaHelmet description="Description" />
      <Box bg="#FCEDF3">
        {!isMobile && (
          <Image
            mx="auto"
            objectFit="fit"
            src={process.env.PUBLIC_URL + "/static/banner.png"}
            alt="ICPC Banner"
            maxHeight="500px"
          />
        )}
        {isMobile && (
          <Image
            mx="auto"
            objectFit="fit"
            src={process.env.PUBLIC_URL + "/static/banner-mobile.png"}
            alt="ICPC Banner"
            width="100%"
          />
        )}
      </Box>

      <Container narrow>
        <Stack p={3} spacing={3} align="center">
          <Heading as="h1" fontSize={["2xl", "3xl"]}>
            who are we?
          </Heading>
          <Heading as="h2" textAlign="center" fontSize={["md", "lg"]}>
            algorithmic thinking, problem solving
          </Heading>
          <Text textAlign="justify" fontSize={["sm", "md"]}>
            We are a group of problem solvers at heart! ACM ICPC at UCLA is a
            student-led organization whose mission is to promote algorithmic
            thinking and help build proficient problem solvers. While we mostly
            dabble in competitive programming, we have grown to encompass
            algorithmic and creative thinking in general whether that helps you
            in answering those challenging coding interview questions or become
            a smarter and better programmer. We work diligently toward the
            shared goal of spreading the love of competitive programming and
            creative thinking to the greater UCLA community. From weekly
            workshops on competitive programming and technical interview
            preparation, to our own in-house puzzle hunts and beginner-friendly
            programming contests, everything we do revolves around the central
            theme of critical algorithmic thinking.
          </Text>
          <Text textalign="center" fontSize={["sm", "md"]}>
            Click below to find out more about us:
          </Text>
          <Flex wrap="wrap" justify="center" align="center">
            <Link to="team">
              <Button m={3} colorScheme="brand" variant="outline">
                Meet Our Team
              </Button>
            </Link>
            <Link to="icpc">
              <Button m={3} colorScheme="brand" variant="outline">
                ICPC Regionals
              </Button>
            </Link>
            <Link
              to={{
                pathname: "events",
                hash: "#all-events",
              }}
            >
              <Button m={3} colorScheme="brand" variant="outline">
                Learn More About our Events
              </Button>
            </Link>
          </Flex>
        </Stack>
      </Container>

      <Divider p={3} borderColor="brand.500" />

      <Container narrow>
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
                "/static/sponsors/Jane_Street_Capital_Logo.svg"
              }
            />
          </Flex>
        </Stack>
        <br />
      </Container>
    </div>
  );
};

export default HomeContainer;
