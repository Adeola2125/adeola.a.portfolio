import React from "react";
import { Button, Link, Text, Flex, UnorderedList, ListItem, Heading, Container, Box } from "@chakra-ui/react";

export default function Header({ ...props }) {
  return (
    <Box {...props} as="header">
      <Container
        bg="white.A700"
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="1222px"
        gap="20px"
        px="0px"
        mx="auto"
        flexDirection={{ md: "row", base: "column" }}
        p={{ md: "", base: "20px" }}
      >
        <Flex p="10px">
          <Heading size="3xl" color="deep_purple.A200" fontSize="34px">
            ISAVE
          </Heading>
        </Flex>
        <UnorderedList
          styleType="none"
          gap={{ md: "60px", base: "20px" }}
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          <ListItem>
            <Link href="#">
              <Text color="gray.900_03" mt="2px">
                Save{" "}
              </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="Company" target="_blank" rel="noreferrer" alignSelf="end">
              <Text color="gray.900_03">Company</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="Invest" target="_blank" rel="noreferrer">
              <Text color="gray.900_03">Invest</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="FAQs" target="_blank" rel="noreferrer" alignSelf="end">
              <Text color="gray.900_03">FAQs</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="Blog" target="_blank" rel="noreferrer" alignSelf="end">
              <Text color="gray.900_03">Blog</Text>
            </Link>
          </ListItem>
        </UnorderedList>
        <Flex gap="16px">
          <Link href="#" borderRadius="4px" p={{ base: "20px", sm: "" }}>
            <Text size="2xl" color="deep_purple.A200" textAlign="center" px="32px" py="21px">
              Sign in
            </Text>
          </Link>
          <Button
            size="2xl"
            variant="fill"
            colorScheme="deep_purple_A200"
            minW="247px"
            borderRadius="4px"
            px={{ base: "20px", sm: "" }}
          >
            Create an account
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
