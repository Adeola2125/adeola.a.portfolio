import React from "react";
import { Helmet } from "react-helmet";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  Link,
  Flex,
  Heading,
  UnorderedList,
  ListItem,
  Container,
  AbsoluteCenter,
  Button,
  InputLeftElement,
  InputGroup,
  Image,
  Input,
  AccordionButton,
  Accordion,
  AccordionItem,
  InputRightElement,
} from "@chakra-ui/react";

export default function FAQSOnePage() {
  const [searchBarValue4, setSearchBarValue4] = React.useState("");

  return (
    <>
      <Helmet>
        <title>iSave - Digital Saving Solution</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex
        gap={{ md: "88px", base: "44px", sm: "66px" }}
        bg="white.A700"
        w="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py={{ base: "20px", sm: "38px" }}
      >
        <Box bg="white.A700" w={{ md: "85%", base: "100%" }} p={{ md: "", base: "20px" }} as="header">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            gap="20px"
            flexDirection={{ md: "row", base: "column" }}
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
                <Link href="#" alignSelf="end">
                  <Text color="gray.900_03">Company</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text color="gray.900_03">Invest</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" alignSelf="end">
                  <Text color="gray.900_03">FAQs</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" alignSelf="end">
                  <Text color="gray.900_03">Blog</Text>
                </Link>
              </ListItem>
            </UnorderedList>
            <Flex gap="16px">
              <Button
                size="2xl"
                colorScheme="deep_purple_A200"
                minW="134px"
                borderRadius="4px"
                px={{ base: "20px", sm: "" }}
              >
                Sign in
              </Button>
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
          </Flex>
        </Box>
        <Box mb="4px" alignSelf="stretch">
          <Flex gap={{ md: "130px", base: "65px", sm: "97px" }} flexDirection="column" alignItems="center">
            <Container
              w="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              maxW="1188px"
              px="0px"
              mx="auto"
              p={{ md: "", base: "20px" }}
            >
              <Heading
                size="5xl"
                as="h1"
                color="blue_gray.900_02"
                textTransform="capitalize"
                textAlign="center"
                fontSize="48px"
              >
                Frequently Asked Questions (FAQS){" "}
              </Heading>
              <InputGroup w="59%" mt="28px" size="md">
                <Input
                  placeholder={`Search for question`}
                  value={searchBarValue4}
                  onChange={(e) => setSearchBarValue4(e.target.value)}
                  color="blue_gray.400"
                  gap="35px"
                  borderColor="blue_gray.100"
                  borderWidth="1px"
                  borderRadius="8px"
                />
                <InputRightElement>
                  {searchBarValue4?.length > 0 ? (
                    <CloseIcon onClick={() => setSearchBarValue4("")} />
                  ) : (
                    <Image src="images/img_search.svg" w="32px" h="32px" />
                  )}
                </InputRightElement>
              </InputGroup>
              <Flex
                mt="91px"
                gap="24px"
                alignSelf="stretch"
                alignItems="start"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex gap={{ base: "26px", sm: "52px" }} flex={1} flexDirection="column" alignSelf="stretch">
                  <Flex gap="23px" flexDirection="column" alignItems="start">
                    <Heading size="2xl" color="black.900" fontSize="32px">
                      General
                    </Heading>
                    <Flex gap="14px" alignSelf="stretch" flexDirection="column">
                      <Flex gap="16px" flex={1} flexDirection="column">
                        <Flex justifyContent="space-between" alignItems="start" gap="20px">
                          <Heading as="h3" color="deep_purple.A200" mt="8px">
                            What is iSAVE ?
                          </Heading>
                          <Image src="images/img_frame_40204.png" h="44px" w="44px" />
                        </Flex>
                        <Box h="1px" bg="gray.400" />
                      </Flex>
                      <Flex gap="16px" flex={1} flexDirection="column">
                        <Flex justifyContent="space-between" alignItems="center" gap="20px">
                          <Heading as="h4" color="deep_purple.A200" mb="8px" alignSelf="end">
                            Why should I save on iSAVE ?
                          </Heading>
                          <Image src="images/img_frame_40204.png" h="44px" w="44px" />
                        </Flex>
                        <Box h="1px" bg="gray.400" />
                      </Flex>
                      <Flex gap="16px" flex={1} flexDirection="column">
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                          gap="20px"
                          flexDirection={{ md: "row", base: "column" }}
                        >
                          <Heading as="h5" color="deep_purple.A200" mb="8px" alignSelf="end">
                            How are you able to offer higher returns than traditional banks?
                          </Heading>
                          <Image src="images/img_frame_40204.png" h="44px" w={{ md: "44px", base: "100%" }} />
                        </Flex>
                        <Box h="1px" bg="gray.400" />
                      </Flex>
                      <Flex gap="16px" flex={1} flexDirection="column">
                        <Flex
                          justifyContent="space-between"
                          alignItems="start"
                          gap="20px"
                          flexDirection={{ base: "column", sm: "row" }}
                        >
                          <Heading as="h6" color="deep_purple.A200" mt="8px">
                            What kind of debit cards can I use on iSAVE?
                          </Heading>
                          <Image src="images/img_frame_40204.png" h="44px" w={{ base: "100%", sm: "44px" }} />
                        </Flex>
                        <Box h="1px" bg="gray.400" />
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex pt="5px" gap="24px" flexDirection="column" alignItems="start">
                    <Heading size="lg" as="h4" color="black.900" fontSize="24px" fontWeight={700}>
                      Safety & Security
                    </Heading>
                    <Accordion defaultIndex={[0]} gap="26px" display="flex" alignSelf="stretch" flexDirection="column">
                      {[...Array(4)].map(() => (
                        <AccordionItem>
                          {(props) => (
                            <>
                              <AccordionButton
                                mt="10px"
                                ml="3px"
                                mr="8px"
                                flex={1}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                gap="20px"
                                mx={{ md: 0, base: "0px" }}
                              >
                                <Heading as="h5" color="deep_purple.A200" mb="5px" alignSelf="end">
                                  How secure is my information?
                                </Heading>
                              </AccordionButton>
                              <Box bg="gray.400" w="99%" h="1px" transform="rotate(0deg)" />
                            </>
                          )}
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Flex>
                  <Flex gap="24px" flexDirection="column" alignItems="start">
                    <Heading size="lg" as="h4" color="black.900" fontSize="24px" fontWeight={700}>
                      Savings & Returns
                    </Heading>
                    <Box h={{ md: "677px", base: "auto" }} alignSelf="stretch" position="relative">
                      <Box h="44px" mb="16px" w="100%" />
                      <Accordion
                        defaultIndex={[0]}
                        gap="14px"
                        w="100%"
                        flexDirection="column"
                        position="absolute"
                        left="0px"
                        bottom="0px"
                        right="0px"
                        top="0px"
                        m="auto"
                      >
                        {[...Array(9)].map(() => (
                          <AccordionItem>
                            {(props) => (
                              <>
                                <AccordionButton
                                  flex={1}
                                  display="flex"
                                  justifyContent="space-between"
                                  alignItems="start"
                                  gap="20px"
                                  flexDirection={{ base: "column", sm: "row" }}
                                >
                                  <Heading as="h5" color="deep_purple.A200" mt="8px">
                                    How much can I save on iSAVE?
                                  </Heading>
                                </AccordionButton>
                                <Box bg="gray.400" w="100%" h="1px" transform="rotate(0deg)" />
                              </>
                            )}
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </Box>
                  </Flex>
                  <Flex gap="23px" flexDirection="column" alignItems="start">
                    <Heading size="lg" as="h4" color="black.900" fontSize="24px" fontWeight={700}>
                      Fees & Charges
                    </Heading>
                    <Flex gap="21px" alignSelf="stretch" flexDirection="column">
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="deep_purple.A200" mt="8px">
                          How much do you charge?
                        </Heading>
                        <Image src="images/img_frame_40213.svg" h="44px" w="44px" />
                      </Flex>
                      <Box h="1px" bg="gray.400" />
                    </Flex>
                  </Flex>
                  <Flex gap="26px" flexDirection="column" alignItems="start">
                    <Heading size="lg" as="h4" color="black.900" fontSize="24px" fontWeight={700}>
                      Withdrawals
                    </Heading>
                    <Flex gap="14px" alignSelf="stretch" flexDirection="column">
                      <Flex gap="15px" flex={1} flexDirection="column">
                        <Flex
                          justifyContent="space-between"
                          alignItems="start"
                          gap="20px"
                          flexDirection={{ base: "column", sm: "row" }}
                        >
                          <Heading as="h5" color="deep_purple.A200" mt="7px">
                            When can I withdraw my money?
                          </Heading>
                          <Image src="images/img_frame_40213.svg" h="44px" w={{ base: "100%", sm: "44px" }} />
                        </Flex>
                        <Box h="1px" bg="gray.400" />
                      </Flex>
                      <Flex gap="15px" flex={1} flexDirection="column">
                        <Flex
                          justifyContent="space-between"
                          alignItems="start"
                          gap="20px"
                          flexDirection={{ base: "column", sm: "row" }}
                        >
                          <Heading as="h5" color="deep_purple.A200" mt="7px">
                            How do I withdraw my money?
                          </Heading>
                          <Image src="images/img_frame_40213.svg" h="44px" w={{ base: "100%", sm: "44px" }} />
                        </Flex>
                        <Box h="1px" bg="gray.400" />
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex pt="6px" gap="23px" flexDirection="column" alignItems="start">
                    <Heading size="lg" as="h4" color="black.900" fontSize="24px" fontWeight={700}>
                      Our People
                    </Heading>
                    <Flex gap="21px" alignSelf="stretch" flexDirection="column">
                      <Flex justifyContent="space-between" alignItems="start" gap="20px">
                        <Heading as="h5" color="deep_purple.A200" mt="5px">
                          Who is behind iSAVE?
                        </Heading>
                        <Image src="images/img_frame_40213.svg" h="44px" w="44px" />
                      </Flex>
                      <Box h="1px" bg="gray.400" />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex mt="236px" w={{ md: "17%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Image src="images/img_vector.svg" h="153px" w="153px" />
                  <Image src="images/img_vector.svg" h="153px" mt="620px" alignSelf="end" w="153px" />
                  <Image src="images/img_vector.svg" h="153px" mt="447px" ml={{ md: "5px", base: "0px" }} w="153px" />
                </Flex>
              </Flex>
            </Container>
            <Flex
              gap="28px"
              bg="white.A700"
              alignSelf="stretch"
              flexDirection="column"
              alignItems="center"
              p={{ md: "41px", base: "20px" }}
            >
              <Heading size="2xl" color="black.900" fontSize="32px">
                Our Partners
              </Heading>
              <Container
                mb="67px"
                w="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                maxW="1210px"
                gap="20px"
                px="0px"
                mx="auto"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Image src="images/img_autocredit_logo.png" h="230px" w={{ md: "230px", base: "100%" }} />
                <Image src="images/img_social_connector.png" h="226px" w={{ md: "227px", base: "100%" }} />
                <Image src="images/img_edutams_logo_1.png" h="226px" w={{ md: "226px", base: "100%" }} />
                <Image src="images/img_trylaunchpad_logo.png" h="185px" w={{ md: "185px", base: "100%" }} />
              </Container>
            </Flex>
          </Flex>
          <Box as="footer">
            <Box h="1049px" position="relative">
              <Flex
                pt={{ base: "20px", sm: "26px" }}
                bg="white.A700"
                w="100%"
                justifyContent="center"
                position="absolute"
                top="0.00px"
                right="0px"
                left="0px"
                px={{ base: "20px", sm: "26px" }}
                m="auto"
              >
                <Container
                  alignSelf="start"
                  bg="blue.50"
                  boxShadow="xs"
                  w="100%"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="start"
                  maxW="1169px"
                  gap="20px"
                  p={{ md: "77px", base: "20px" }}
                  borderRadius="20px"
                  flexDirection={{ md: "row", base: "column" }}
                >
                  <Flex
                    ml={{ md: "13px", base: "0px" }}
                    gap="24px"
                    w={{ md: "59%", base: "100%" }}
                    flexDirection="column"
                  >
                    <Flex pt="6px" gap="14px" flexDirection="column" alignItems="start">
                      <Heading as="h5" color="deep_purple.A200">
                        Our Newsletter
                      </Heading>
                      <Heading size="lg" as="h4" color="gray.900_01" fontSize="24px" fontWeight={700} lineHeight="130%">
                        <>
                          Stay updated with our
                          <br />
                          weekly newsletter
                        </>
                      </Heading>
                    </Flex>
                    <Text color="blue_gray.900_01" w={{ md: "88%", base: "100%" }} lineHeight="24px">
                      a collection of the hottest stock market news sent every week to your email
                    </Text>
                  </Flex>
                  <Flex
                    mr={{ md: "13px", base: "0px" }}
                    pt="7px"
                    gap="45px"
                    w={{ md: "33%", base: "100%" }}
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Heading as="h5" color="deep_purple.A200">
                      Signup For Newsletter
                    </Heading>
                    <Flex gap="24px" alignSelf="stretch" flexDirection="column">
                      <InputGroup>
                        <InputLeftElement>
                          <Image src="images/img_checkmark.svg" w="16px" h="16px" />
                        </InputLeftElement>
                        <Input
                          placeholder={`Email address`}
                          type="email"
                          gap="12px"
                          borderColor="gray.300_02"
                          borderWidth="1px"
                          borderRadius="8px"
                          pr={{ base: "20px", sm: 0 }}
                        />
                      </InputGroup>
                      <Button
                        size="lg"
                        variant="fill"
                        colorScheme="deep_purple_A200"
                        fontFamily="DM Sans"
                        fontWeight={700}
                        w="100%"
                        borderRadius="8px"
                        px={{ base: "20px", sm: "" }}
                      >
                        Get Started
                      </Button>
                    </Flex>
                  </Flex>
                </Container>
              </Flex>
              <Box
                h={{ md: "550px", base: "auto" }}
                w="100%"
                position="absolute"
                bottom="0.00px"
                right="0px"
                left="0px"
                m="auto"
              >
                <Box h="522px" borderColor="white.A700" borderTopWidth="1px" borderStyle="solid" w="100%" />
                <AbsoluteCenter
                  borderColor="gray.300_01"
                  borderTopWidth="1px"
                  borderStyle="solid"
                  bg="white.A700"
                  w="100%"
                  h="max-content"
                  py={{ base: "20px", sm: "35px" }}
                  m="auto"
                >
                  <Flex mt="60px" flexDirection="column" alignItems="center">
                    <Container
                      w="100%"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      maxW="1006px"
                      gap="20px"
                      px="0px"
                      mx="auto"
                      flexDirection={{ md: "row", base: "column" }}
                      p={{ md: "", base: "20px" }}
                    >
                      <Flex gap="50px" w={{ md: "34%", base: "100%" }} flexDirection="column">
                        <Flex p="10px">
                          <Heading size="3xl" color="deep_purple.A200" fontSize="34px">
                            ISAVE
                          </Heading>
                        </Flex>
                        <Text color="gray.800" fontFamily="Manrope" fontWeight={500} lineHeight="26px">
                           Introducing our online savings platform – an all-in-one solution for your savings goals and
                          financial  aspirations.
                        </Text>
                        <Flex gap="22px" flexDirection="column" alignItems="start">
                          <Heading as="h5" color="gray.800" mt="6px">
                            Contact
                          </Heading>
                          <Link href="hello@iSAVE.com" target="_blank" rel="noreferrer">
                            <Text color="gray.800">hello@iSAVE.com</Text>
                          </Link>
                        </Flex>
                      </Flex>
                      <Flex
                        w={{ md: "42%", base: "100%" }}
                        justifyContent="space-between"
                        alignItems="start"
                        gap="20px"
                      >
                        <Flex gap="24px" flexDirection="column" alignItems="start" justifyContent="center" py="8px">
                          <Heading as="h5" color="gray.800">
                            Company
                          </Heading>
                          <UnorderedList
                            styleType="none"
                            gap="11px"
                            alignSelf="end"
                            display="flex"
                            flexDirection="column"
                            alignItems="start"
                          >
                            <ListItem>
                              <Link href="#">
                                <Text size="s" color="gray.800_01">
                                  AJO
                                </Text>
                              </Link>
                            </ListItem>
                            <ListItem>
                              <Link href="#">
                                <Text size="s" color="gray.800_01">
                                  Kolo Salving
                                </Text>
                              </Link>
                            </ListItem>
                            <ListItem>
                              <Link href="#">
                                <Text size="s" color="gray.800_01">
                                  Target Savings
                                </Text>
                              </Link>
                            </ListItem>
                            <ListItem>
                              <Link href="#">
                                <Text size="s" color="gray.800_01">
                                  Fixed Savings
                                </Text>
                              </Link>
                            </ListItem>
                            <ListItem>
                              <Link href="#">
                                <Text size="s" color="gray.800_01">
                                  Savings Challenge
                                </Text>
                              </Link>
                            </ListItem>
                          </UnorderedList>
                        </Flex>
                        <Flex pt="6px" gap="16px" flexDirection="column" alignItems="start">
                          <Heading as="h5" color="gray.800">
                            Product
                          </Heading>
                          <Flex gap="13px" flexDirection="column" alignItems="start" p="10px">
                            <Link href="About" target="_blank" rel="noreferrer" alignSelf="center">
                              <Text size="s" color="gray.800_01">
                                About
                              </Text>
                            </Link>
                            <Link href="FAQs" target="_blank" rel="noreferrer">
                              <Text size="s" color="gray.800_01">
                                FAQs
                              </Text>
                            </Link>
                            <Link href="Blog" target="_blank" rel="noreferrer">
                              <Text size="s" color="gray.800_01">
                                Blog
                              </Text>
                            </Link>
                          </Flex>
                        </Flex>
                        <Flex pt="8px" gap="14px" flexDirection="column" alignItems="center">
                          <Heading as="h5" color="gray.800">
                            Legal
                          </Heading>
                          <Flex gap="13px" flexDirection="column" alignItems="start" p="10px">
                            <Link href="Terms" target="_blank" rel="noreferrer">
                              <Text size="s" color="gray.800_01">
                                Terms
                              </Text>
                            </Link>
                            <Link href="Privacy" target="_blank" rel="noreferrer">
                              <Text size="s" color="gray.800_01">
                                Privacy
                              </Text>
                            </Link>
                            <Link href="Security" target="_blank" rel="noreferrer">
                              <Text size="s" color="gray.800_01">
                                Security
                              </Text>
                            </Link>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Container>
                    <Box h="1px" mt="62px" bg="gray.500" alignSelf="stretch" w="100%" />
                    <Text size="s" color="gray.800" mt="24px" ml={{ md: "182px", base: "0px" }} alignSelf="start">
                      2024 @ISAVE. All rights reserved. -- Privacy Policy - Terms of Services
                    </Text>
                  </Flex>
                </AbsoluteCenter>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
