import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Box,
  Heading,
  Flex,
  Link,
  Container,
  AbsoluteCenter,
  Button,
  InputLeftElement,
  InputGroup,
  Image,
  Input,
  AccordionPanel,
  AccordionButton,
  Accordion,
  AccordionItem,
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>iSave - Digital Saving Solution</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box bg="white.A700" w="100%">
        <Flex bg="white.A700" flexDirection="column" alignItems="center" px={{ md: "70px", base: "20px" }}>
          <Flex
            bg="white.A700"
            w={{ md: "96%", base: "100%" }}
            justifyContent="center"
            alignItems="center"
            p="10px"
            as="header"
          >
            <Container
              bg="white.A700"
              w="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              maxW="1229px"
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
                    <Heading size="s" as="h6" color="gray.900_03" mt="2px">
                      Save{" "}
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" alignSelf="end">
                    <Heading size="s" as="h6" color="gray.900_03">
                      Company
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    <Heading size="s" as="h6" color="gray.900_03">
                      Invest
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" alignSelf="end">
                    <Heading size="s" as="h6" color="gray.900_03">
                      FAQs
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" alignSelf="end">
                    <Heading size="s" as="h6" color="gray.900_03">
                      Blog
                    </Heading>
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
          </Flex>
          <Flex mt="121px" gap="25px" w={{ md: "64%", base: "100%" }} flexDirection="column">
            <Heading size="6xl" as="h1" color="black.900" textTransform="capitalize" textAlign="center" fontSize="54px">
              <Heading size="6xl" as="span" color="black.900">
                <>
                  Reach Your Financial Dreams
                  <br />
                  with Our&nbsp;
                </>
              </Heading>
              <Heading size="6xl" as="span" color="deep_purple.A200">
                <>
                  All-In-One Savings
                  <br />
                </>
              </Heading>
              <Heading size="6xl" as="span" color="black.900">
                Solution
              </Heading>
            </Heading>
            <Text size="2xl" color="black.900" textAlign="center" lineHeight="28px">
              <>
                {" "}
                Our platform offers a range of features designed to make saving effortless and fun
                <br />
                .With us by your side, you can finally achieve your financial dreams.{" "}
              </>
            </Text>
          </Flex>
          <Box h="511px" mt="25px" alignSelf="start" w="95%" position="relative">
            <Flex w="93%" flexDirection="column" position="absolute" bottom="0.00px" left="0.00px" m="auto">
              <Flex flexDirection="column">
                <Flex
                  ml={{ md: "84px", base: "0px" }}
                  zIndex={1}
                  w={{ md: "14%", base: "100%" }}
                  position="relative"
                  alignItems="start"
                >
                  <Text
                    size="s"
                    color="white.A700"
                    mt="18px"
                    borderTopLeftRadius="8px"
                    borderBottomLeftRadius="8px"
                    borderBottomRightRadius="8px"
                    fontFamily="Inter"
                    textAlign="center"
                    zIndex={2}
                    position="relative"
                    bg="deep_purple.A200"
                    justifyContent="center"
                    display="flex"
                    alignItems="center"
                    h="18px"
                    px={{ base: "20px", sm: "22px" }}
                    py="1px"
                    sx={{ "text-shadow": "0px 20px 100px #222222" }}
                  >
                    Writer
                  </Text>
                  <Image
                    src="images/img_ellipse_34.png"
                    borderRadius="50%"
                    h="100px"
                    ml="-27px"
                    position="relative"
                    w="100px"
                  />
                </Flex>
                <Flex mt="-9px" position="relative" alignItems="center" flexDirection={{ md: "row", base: "column" }}>
                  <Flex
                    mb="102px"
                    zIndex={3}
                    alignSelf="end"
                    w={{ md: "12%", base: "100%" }}
                    position="relative"
                    alignItems="center"
                  >
                    <Text
                      size="s"
                      color="white.A700"
                      mb="32px"
                      borderTopLeftRadius="8px"
                      borderBottomLeftRadius="8px"
                      borderBottomRightRadius="8px"
                      fontFamily="Inter"
                      textAlign="center"
                      zIndex={4}
                      alignSelf="end"
                      position="relative"
                      bg="deep_purple.A200"
                      justifyContent="center"
                      display="flex"
                      alignItems="center"
                      h="18px"
                      px="18px"
                      py="1px"
                      sx={{ "text-shadow": "0px 20px 100px #222222" }}
                    >
                      Blogger
                    </Text>
                    <Image
                      src="images/img_ellipse_34_100x100.png"
                      borderRadius="50%"
                      h="100px"
                      ml="-32px"
                      position="relative"
                      w="100px"
                    />
                  </Flex>
                  <Flex
                    ml={{ md: "-91px", base: "0px" }}
                    position="relative"
                    flex={1}
                    alignItems="start"
                    alignSelf="stretch"
                  >
                    <Flex mt="27px" zIndex={5} w="13%" position="relative" alignItems="center">
                      <Text
                        size="s"
                        color="white.A700"
                        mb="23px"
                        borderTopLeftRadius="8px"
                        borderBottomLeftRadius="8px"
                        borderBottomRightRadius="8px"
                        fontFamily="Inter"
                        textAlign="center"
                        zIndex={6}
                        alignSelf="end"
                        position="relative"
                        bg="green.A700"
                        justifyContent="center"
                        display="flex"
                        alignItems="center"
                        h="18px"
                        px={{ base: "20px", sm: "21px" }}
                        py="1px"
                        sx={{ "text-shadow": "0px 20px 100px #222222" }}
                      >
                        Coach
                      </Text>
                      <Image
                        src="images/img_ellipse_38.png"
                        borderRadius="50%"
                        h="100px"
                        ml="-37px"
                        position="relative"
                        w="100px"
                      />
                    </Flex>
                    <Flex
                      ml="-47px"
                      pb="17px"
                      position="relative"
                      bg="blue_gray.100"
                      flex={1}
                      justifyContent="flex-end"
                      px="17px"
                      borderRadius="20px"
                    >
                      <Flex mb="246px" w={{ md: "16%", base: "100%" }} justifyContent="flex-end" alignItems="center">
                        <Image src="images/img_ellipse_36.png" borderRadius="50%" h="100px" w="100px" />
                        <Text
                          size="s"
                          color="white.A700"
                          mb="12px"
                          ml="-30px"
                          borderTopRightRadius="8px"
                          borderBottomLeftRadius="8px"
                          borderBottomRightRadius="8px"
                          fontFamily="Inter"
                          textAlign="center"
                          alignSelf="end"
                          position="relative"
                          bg="green.A700"
                          justifyContent="center"
                          display="flex"
                          alignItems="center"
                          h="18px"
                          px="20px"
                          py="1px"
                          sx={{ "text-shadow": "0px 20px 100px #222222" }}
                        >
                          Trainer
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                mt="-83px"
                ml={{ md: "67px", base: "0px" }}
                position="relative"
                w={{ md: "13%", base: "100%" }}
                alignItems="center"
              >
                <Text
                  size="s"
                  color="white.A700"
                  borderTopLeftRadius="7px"
                  borderBottomLeftRadius="7px"
                  borderBottomRightRadius="7px"
                  fontFamily="Inter"
                  textAlign="center"
                  zIndex={7}
                  alignSelf="end"
                  position="relative"
                  bg="red.A700"
                  justifyContent="center"
                  display="flex"
                  alignItems="center"
                  h="14px"
                  px="9px"
                  py="1px"
                  sx={{ "text-shadow": "0px 20px 100px #222222" }}
                >
                  Consultant
                </Text>
                <Image
                  src="images/img_ellipse_34_83x100.png"
                  borderRadius="50%"
                  h="83px"
                  ml="-38px"
                  position="relative"
                  w="56%"
                />
              </Flex>
            </Flex>
            <Flex
              w="56%"
              justifyContent="space-between"
              alignItems="start"
              position="absolute"
              right="0.00px"
              top="0.00px"
              gap="20px"
              m="auto"
            >
              <Button
                size="2xl"
                variant="fill"
                colorScheme="deep_purple_A200"
                rightIcon={<Image src="images/img_arrowleft.svg" w="24px" h="24px" />}
                gap="8px"
                minW="215px"
                borderRadius="4px"
                px={{ base: "20px", sm: "" }}
              >
                Start saving
              </Button>
              <Flex mt="30px" w="22%" justifyContent="center" alignItems="start">
                <Image src="images/img_ellipse_37.png" borderRadius="50%" h="100px" w="100px" />
                <Text
                  size="s"
                  color="white.A700"
                  mt="27px"
                  ml="-27px"
                  borderTopRightRadius="8px"
                  borderBottomLeftRadius="8px"
                  borderBottomRightRadius="8px"
                  fontFamily="Inter"
                  textAlign="center"
                  position="relative"
                  bg="red.A700"
                  justifyContent="center"
                  display="flex"
                  alignItems="center"
                  h="18px"
                  px="14px"
                  py="1px"
                  sx={{ "text-shadow": "0px 20px 100px #222222" }}
                >
                  Designer
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap="19px"
              w="14%"
              flexDirection="column"
              alignItems="start"
              position="absolute"
              bottom="10.00px"
              right="3%"
              m="auto"
            >
              <Flex alignSelf="end" w={{ md: "80%", base: "100%" }} alignItems="center">
                <Image src="images/img_ellipse_39.png" borderRadius="50%" h="100px" w="100px" />
                <Text
                  size="s"
                  color="white.A700"
                  mb="20px"
                  ml="-46px"
                  borderTopRightRadius="8px"
                  borderBottomLeftRadius="8px"
                  borderBottomRightRadius="8px"
                  fontFamily="Inter"
                  textAlign="center"
                  alignSelf="end"
                  position="relative"
                  bg="deep_purple.A200"
                  justifyContent="center"
                  display="flex"
                  alignItems="center"
                  h="18px"
                  px={{ base: "20px", sm: "24px" }}
                  py="1px"
                  sx={{ "text-shadow": "0px 20px 100px #222222" }}
                >
                  Artist
                </Text>
              </Flex>
              <Flex w={{ md: "83%", base: "100%" }} alignItems="center">
                <Image src="images/img_ellipse_35.png" borderRadius="50%" h="100px" w="100px" />
                <Text
                  size="s"
                  color="white.A700"
                  mb="13px"
                  ml="-40px"
                  borderTopRightRadius="8px"
                  borderBottomLeftRadius="8px"
                  borderBottomRightRadius="8px"
                  fontFamily="Inter"
                  textAlign="center"
                  alignSelf="end"
                  position="relative"
                  bg="green.A700"
                  justifyContent="center"
                  display="flex"
                  alignItems="center"
                  h="18px"
                  px="14px"
                  py="1px"
                  sx={{ "text-shadow": "0px 20px 100px #222222" }}
                >
                  Marketer
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex
          mt="4px"
          gap="27px"
          bg="white.A700"
          flexDirection="column"
          alignItems="center"
          p={{ md: "41px", base: "20px" }}
        >
          <Heading size="2xl" color="black.900" fontSize="32px">
            Our Partners
          </Heading>
          <Container
            mb="68px"
            w="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            maxW="1156px"
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
        <Flex
          bg="white.A700"
          justifyContent="space-between"
          alignItems="start"
          gap="20px"
          p={{ md: "68px", base: "20px" }}
          flexDirection={{ md: "row", base: "column" }}
        >
          <Center
            h={{ md: "658px", base: "auto" }}
            mt="20px"
            ml={{ md: "55px", base: "0px" }}
            bgImage="url(/images/img_group_8.png)"
            bgSize="cover"
            bgRepeat="no-repeat"
            w={{ md: "55%", base: "100%" }}
            flexDirection="column"
            px="56px"
            py="102px"
            p={{ md: "", base: "20px" }}
          >
            <Image src="images/img_dashboard_1.png" h="344px" w="83%" my="55px" borderRadius="20px" />
          </Center>
          <Flex
            mt="77px"
            mr={{ md: "46px", base: "0px" }}
            pt="9px"
            gap="16px"
            w={{ md: "41%", base: "100%" }}
            flexDirection="column"
            alignItems="start"
          >
            <Heading size="s" color="deep_purple.A200" fontWeight={700}>
              MAXIMISE SPENDING
            </Heading>
            <Flex gap="30px" alignSelf="stretch" flexDirection="column" alignItems="start">
              <Flex gap="12px" alignSelf="stretch" flexDirection="column">
                <Heading size="4xl" as="h3" color="gray.900_02" textTransform="capitalize" fontSize="40px">
                  Put your money to work
                </Heading>
                <Text color="gray.900_02" lineHeight="28px">
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                  aliquet odio mattis. Class aptent taciti{" "}
                </Text>
              </Flex>
              <Button
                size="2xl"
                variant="fill"
                colorScheme="deep_purple_A200"
                rightIcon={<Image src="images/img_arrowleft.svg" w="24px" h="24px" />}
                gap="8px"
                minW="209px"
                borderRadius="4px"
                px={{ base: "20px", sm: "" }}
              >
                Get started
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          pt={{ md: "52px", base: "20px" }}
          gap={{ md: "88px", base: "44px", sm: "66px" }}
          bg="white.A700"
          flexDirection="column"
          alignItems="start"
          px={{ md: "52px", base: "20px" }}
        >
          <Container
            alignSelf="center"
            w="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            maxW="1164px"
            gap="20px"
            px="0px"
            mx="auto"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex pt="9px" gap="48px" w={{ md: "42%", base: "100%" }} flexDirection="column" alignItems="start">
              <Heading size="s" color="deep_purple.A200" fontWeight={700}>
                HOW TO SAVE
              </Heading>
              <Flex gap="24px" alignSelf="stretch" flexDirection="column">
                <Heading size="4xl" as="h3" color="gray.900_02" textTransform="capitalize" fontSize="40px">
                  5 ways to build your savings
                </Heading>
                <Text color="gray.900_02" lineHeight="28px">
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                  aliquet odio mattis. Class aptent taciti{" "}
                </Text>
              </Flex>
            </Flex>
            <Flex
              mt="61px"
              gap="24px"
              bg="white.A700"
              w={{ md: "41%", base: "100%" }}
              flexDirection="column"
              alignItems="start"
              justifyContent="center"
              p={{ base: "20px", sm: "25px" }}
              borderRadius="8px"
            >
              <Heading size="xl" as="h4" color="black.900" mt="2px" textAlign="center" fontSize="28px">
                Group Thrift Collections(AJO)
              </Heading>
              <Text color="gray.900_02" w={{ md: "88%", base: "100%" }} lineHeight="28px">
                <>
                  Our group thrift collection feature allows you to
                  <br />
                  save collectively with your friends, family or
                  <br />
                  colleagues.
                </>
              </Text>
              <Flex gap="8px" alignItems="center" p={{ base: "20px", sm: "21px" }} borderRadius="4px">
                <Link href="AJO" target="_blank" rel="noreferrer">
                  <Text size="2xl" color="deep_purple.A200" textAlign="center">
                    AJO
                  </Text>
                </Link>
                <Image src="images/img_arrow_left_deep_purple_a200.svg" h="24px" w="24px" />
              </Flex>
            </Flex>
          </Container>
          <Flex ml={{ md: "41px", base: "0px" }} gap="43px" w={{ md: "88%", base: "100%" }} flexDirection="column">
            <Container
              flex={1}
              display="flex"
              justifyContent="space-between"
              alignItems="start"
              maxW="1114px"
              w="100%"
              gap="20px"
              px="0px"
              mx="auto"
              flexDirection={{ md: "row", base: "column" }}
              p={{ md: "", base: "20px" }}
            >
              <Flex
                gap="24px"
                bg="white.A700"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
                p={{ base: "20px", sm: "25px" }}
                borderRadius="8px"
              >
                <Heading size="xl" color="black.900" mt="2px" textAlign="center" fontSize="28px">
                  Kolo Savings
                </Heading>
                <Text color="gray.900_02" lineHeight="28px">
                  <>
                     This feature provides a yearly rotating <br />
                    savings service, set to be fixed for 12 <br />
                    months (January to  December) to <br />
                    ascertain a goal.
                  </>
                </Text>
                <Flex gap="8px" alignItems="center" p="19px" borderRadius="4px">
                  <Link href="#" alignSelf="end">
                    <Text size="2xl" color="deep_purple.A200" textAlign="center">
                      Kolo Savings
                    </Text>
                  </Link>
                  <Image src="images/img_arrow_left_deep_purple_a200.svg" h="24px" w="24px" />
                </Flex>
              </Flex>
              <Flex
                gap="25px"
                bg="white.A700"
                w={{ md: "36%", base: "100%" }}
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
                py={{ base: "20px", sm: "25px" }}
                borderRadius="8px"
              >
                <Flex mt="2px" gap="23px" alignSelf="stretch" flexDirection="column" alignItems="start">
                  <Heading size="xl" as="h3" color="black.900" textAlign="center" fontSize="28px">
                    Target Savings
                  </Heading>
                  <Text color="gray.900_02" lineHeight="28px">
                    <>
                      Set specific financial goals and track your progress
                      <br />
                      over time with our target savings feature.
                    </>
                  </Text>
                </Flex>
                <Flex gap="8px" alignItems="center" p="19px" borderRadius="4px">
                  <Link href="#" alignSelf="end">
                    <Text size="2xl" color="deep_purple.A200" textAlign="center">
                      Target savings
                    </Text>
                  </Link>
                  <Image src="images/img_arrow_left_deep_purple_a200.svg" h="24px" w="24px" />
                </Flex>
              </Flex>
            </Container>
            <Flex
              flex={1}
              justifyContent="space-between"
              alignItems="start"
              gap="20px"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex
                gap="24px"
                bg="white.A700"
                w={{ md: "34%", base: "100%" }}
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
                p={{ base: "20px", sm: "25px" }}
                borderRadius="8px"
              >
                <Heading size="xl" as="h4" color="black.900" mt="2px" textAlign="center" fontSize="28px">
                  Fixed Savings
                </Heading>
                <Text color="gray.900_02" lineHeight="28px">
                  <>
                     Decide on  a set amount to save regularly, <br />
                    whether it&#39;s weekly, bi-weekly, or monthly, <br />
                    and sit back while our platform  takes care
                    <br />
                    of the rest.
                  </>
                </Text>
                <Flex gap="8px" alignItems="center" p="19px" borderRadius="4px">
                  <Link href="#" alignSelf="end">
                    <Text size="2xl" color="deep_purple.A200" textAlign="center">
                      Fixed savings
                    </Text>
                  </Link>
                  <Image src="images/img_arrow_left_deep_purple_a200.svg" h="24px" w="24px" />
                </Flex>
              </Flex>
              <Flex
                gap="25px"
                bg="white.A700"
                w={{ md: "38%", base: "100%" }}
                flexDirection="column"
                alignItems="start"
                justifyContent="center"
                p={{ base: "20px", sm: "25px" }}
                borderRadius="8px"
              >
                <Flex mt="2px" gap="23px" alignSelf="stretch" flexDirection="column" alignItems="start">
                  <Heading size="xl" as="h5" color="black.900" textAlign="center" fontSize="28px">
                    Savings Challenge
                  </Heading>
                  <Text color="gray.900_02" lineHeight="28px">
                    <>
                       Break the monotony of saving by participating <br />
                      in savings challenges. Set personalised saving <br />
                      targets and  compete with other users or even
                      <br />
                      yourself.
                    </>
                  </Text>
                </Flex>
                <Flex gap="8px" alignItems="center" p="19px" borderRadius="4px">
                  <Link href="#" alignSelf="end">
                    <Text size="2xl" color="deep_purple.A200" textAlign="center">
                      Savings challenge
                    </Text>
                  </Link>
                  <Image src="images/img_arrow_left_deep_purple_a200.svg" h="24px" w="24px" />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          mt="38px"
          bg="white.A700"
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          p={{ base: "20px", sm: "33px" }}
          flexDirection={{ md: "row", base: "column" }}
        >
          <Box h="783px" mt="26px" ml={{ md: "75px", base: "0px" }} w={{ md: "54%", base: "100%" }} position="relative">
            <Image
              src="images/img_group_8.png"
              h="658px"
              w="100%"
              position="absolute"
              top="0.00px"
              right="0px"
              left="0px"
              m="auto"
            />
            <Image
              src="images/img_dashboard_1.png"
              h="659px"
              w="40%"
              position="absolute"
              bottom="0.00px"
              right="0px"
              left="0px"
              m="auto"
              borderRadius="20px"
            />
          </Box>
          <Flex
            mr={{ md: "90px", base: "0px" }}
            w={{ md: "40%", base: "100%" }}
            flexDirection="column"
            alignItems="start"
          >
            <Heading size="s" color="deep_purple.A200" fontWeight={700}>
              HOW TO USE
            </Heading>
            <Flex mt="18px" gap="25px" alignSelf="stretch" flexDirection="column">
              <Heading size="4xl" as="h3" color="gray.900_02" textTransform="capitalize" fontSize="40px">
                It only takes 5 minutes
              </Heading>
              <Flex gap="26px" flexDirection="column">
                <Flex pt="6px" gap="11px" w={{ md: "78%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Link href="#" ml={{ md: 0, base: "0px" }}>
                    <Heading as="h4" color="black.900" ml="5px">
                      Create an account
                    </Heading>
                  </Link>
                  <Text color="black.900" lineHeight="28px">
                    <>
                      Sign up for an account with your name, email
                      <br /> and phone number.
                    </>
                  </Text>
                </Flex>
                <Flex pt="8px" gap="9px" flexDirection="column" alignItems="start">
                  <Heading as="h5" color="black.900" ml={{ md: "3px", base: "0px" }}>
                    Add a payment method
                  </Heading>
                  <Text color="black.900" lineHeight="28px">
                    <>
                      Using your debit card or a bank transfer, setup <br />
                      your first plan.
                    </>
                  </Text>
                </Flex>
                <Flex pt="7px" gap="10px" w={{ md: "93%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Heading as="h6" color="black.900" ml={{ md: "3px", base: "0px" }}>
                    Start your AJO contribution
                  </Heading>
                  <Text color="black.900" lineHeight="28px">
                    <>
                      save collectively with your friends, family or <br />
                      colleagues.
                    </>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Button
              size="2xl"
              variant="fill"
              colorScheme="deep_purple_A200"
              rightIcon={<Image src="images/img_arrowleft.svg" w="24px" h="24px" />}
              mt="50px"
              ml={{ md: "5px", base: "0px" }}
              gap="8px"
              minW="328px"
              borderRadius="4px"
              px={{ base: "20px", sm: "" }}
            >
              Create an account now
            </Button>
          </Flex>
        </Flex>
        <Flex
          mt="73px"
          pl="87px"
          pr="56px"
          bg="white.A700"
          flexDirection="column"
          alignItems="start"
          justifyContent="center"
          py="87px"
          p={{ md: "", base: "20px" }}
        >
          <Link href="FAQS" target="_blank" rel="noreferrer" ml={{ md: 0, base: "0px" }}>
            <Heading size="s" color="deep_purple.A200" fontWeight={700} ml="29px">
              FAQS
            </Heading>
          </Link>
          <Container
            mt="-6px"
            mb="18px"
            alignSelf="center"
            position="relative"
            w="100%"
            display="flex"
            alignItems="start"
            maxW="1199px"
            px="0px"
            mx="auto"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Heading
              size="4xl"
              color="blue_gray.900_02"
              mt="37px"
              fontFamily="DM Sans"
              textTransform="capitalize"
              fontSize="40px"
              w={{ md: "44%", base: "100%" }}
              lineHeight="62px"
            >
              Frequently Asked Questions{" "}
            </Heading>
            <Accordion
              defaultIndex={[0]}
              ml={{ md: "-40px", base: "0px" }}
              gap="39px"
              position="relative"
              display="flex"
              flex={1}
              flexDirection="column"
              w={{ md: "auto", base: "100%" }}
              alignSelf="stretch"
            >
              {[...Array(5)].map(() => (
                <AccordionItem>
                  {(props) => (
                    <>
                      <Flex mr={{ md: "27px", base: "0px" }} gap="3px" flex={1} flexDirection="column">
                        <AccordionButton
                          pb="7px"
                          display="flex"
                          justifyContent="space-between"
                          alignItems="start"
                          flexWrap="wrap"
                          gap="20px"
                        >
                          <Heading as="h3" color="deep_purple.A200" mt="5px">
                            What is iSAVE ?
                          </Heading>
                          {props?.isExpanded ? (
                            <Image src="images/img_group_35602.svg" h="1px" />
                          ) : (
                            <Image src="images/img_plus.svg" h="14px" w="14px" />
                          )}
                        </AccordionButton>
                        <AccordionPanel w={{ md: "86%", base: "100%" }} p="0px">
                          <Text color="blue_gray.500" lineHeight="24px">
                            Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit
                            amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
                          </Text>
                        </AccordionPanel>
                      </Flex>
                      <Box bg="gray.300" w="100%" h="1px" transform="rotate(0deg)" />
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Flex>
        <Flex mt="16px" bg="white.A700" justifyContent="center" p={{ base: "20px", sm: "26px" }}>
          <Container
            mb="115px"
            bg="blue.50"
            boxShadow="xs"
            w="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            maxW="1169px"
            gap="20px"
            p={{ md: "77px", base: "20px" }}
            mx="auto"
            borderRadius="20px"
            flexDirection={{ md: "row", base: "column" }}
          >
            <Flex ml={{ md: "13px", base: "0px" }} gap="24px" w={{ md: "59%", base: "100%" }} flexDirection="column">
              <Flex pt="6px" gap="14px" flexDirection="column" alignItems="start">
                <Heading color="deep_purple.A200">Our Newsletter</Heading>
                <Heading size="lg" as="h3" color="gray.900_01" fontSize="24px" fontWeight={700} lineHeight="130%">
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
              <Heading as="h4" color="deep_purple.A200">
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
        <Box h={{ md: "550px", base: "auto" }} position="relative">
          <Box as="footer" borderColor="white.A700" borderTopWidth="1px" borderStyle="solid" w="100%" />
          <AbsoluteCenter
            borderColor="gray.300_01"
            borderTopWidth="1px"
            borderStyle="solid"
            bg="white.A700"
            w="100%"
            h="max-content"
            py={{ md: "63px", base: "20px" }}
            m="auto"
          >
            <Flex mt="4px" flexDirection="column" alignItems="center">
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
                  <Text size="md" color="gray.800" fontFamily="Manrope" fontWeight={500} lineHeight="26px">
                     Introducing our online savings platform – an all-in-one solution for your savings goals and
                    financial  aspirations.
                  </Text>
                  <Flex gap="22px" flexDirection="column" alignItems="start">
                    <Heading as="h3" color="gray.800" mt="6px">
                      Contact
                    </Heading>
                    <Link href="hello@iSAVE.com" target="_blank" rel="noreferrer">
                      <Text color="gray.800">hello@iSAVE.com</Text>
                    </Link>
                  </Flex>
                </Flex>
                <Flex w={{ md: "42%", base: "100%" }} justifyContent="space-between" alignItems="start" gap="20px">
                  <Flex gap="24px" w="31%" flexDirection="column" alignItems="start" justifyContent="center" py="8px">
                    <Heading as="h4" color="gray.800">
                      Company
                    </Heading>
                    <Text
                      size="s"
                      color="gray.800_01"
                      alignSelf="end"
                      w={{ md: "86%", base: "100%" }}
                      lineHeight="24px"
                    >
                      <>
                        AJO
                        <br />
                        Kolo Salving
                        <br />
                        Target Savings
                        <br />
                        Fixed Savings
                        <br />
                        Savings Challenge
                      </>
                    </Text>
                  </Flex>
                  <Flex pt="6px" gap="16px" w="20%" flexDirection="column" alignItems="start">
                    <Heading as="h5" color="gray.800">
                      Product
                    </Heading>
                    <Box w={{ md: "68%", base: "100%" }} p="10px">
                      <Text size="s" color="gray.800_01" lineHeight="24px">
                        <>
                          About
                          <br />
                          FAQs
                          <br />
                          Blog
                        </>
                      </Text>
                    </Box>
                  </Flex>
                  <Flex pt="8px" gap="14px" w="16%" flexDirection="column" alignItems="center">
                    <Heading as="h6" color="gray.800">
                      Legal
                    </Heading>
                    <Box alignSelf="stretch" p="10px">
                      <Text size="s" color="gray.800_01" lineHeight="24px">
                        <>
                          Terms
                          <br />
                          Privacy
                          <br />
                          Security
                        </>
                      </Text>
                    </Box>
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
    </>
  );
}
