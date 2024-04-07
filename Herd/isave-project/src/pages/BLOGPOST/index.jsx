import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  Heading,
  Flex,
  Container,
  AbsoluteCenter,
  IconButton,
  Image,
  Button,
  SimpleGrid,
  InputRightElement,
  InputGroup,
  Input,
} from "@chakra-ui/react";

export default function BLOGPOSTPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>iSave - Digital Saving Solution</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box bg="white.A700" w="100%">
        <Flex gap="3px" flexDirection="column" alignItems="center">
          <Header
            display="flex"
            bg="white.A700"
            w={{ md: "86%", base: "100%" }}
            justifyContent="center"
            alignItems="center"
            p="10px"
          />
          <Flex gap="46px" alignSelf="stretch" flexDirection="column" alignItems="center">
            <Box h={{ md: "973px", base: "auto" }} alignSelf="stretch" position="relative">
              <Flex
                gap={{ md: "75px", base: "37px", sm: "56px" }}
                w="100%"
                flexDirection="column"
                alignItems="center"
                p={{ base: "20px", sm: "34px" }}
              >
                <Flex pt="4px" gap="6px" flexDirection="column" alignItems="center">
                  <Heading size="5xl" as="h1" textTransform="capitalize" textAlign="center" fontSize="48px">
                    iSAVE blog
                  </Heading>
                  <Text size="2xl" color="gray.700" textAlign="center">
                    Tips to make money online and KreateSell updates.
                  </Text>
                </Flex>
                <Container
                  mb="12px"
                  w="100%"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="start"
                  maxW="1327px"
                  gap="20px"
                  px="0px"
                  mx="auto"
                  flexDirection={{ md: "row", base: "column" }}
                >
                  <Flex
                    w={{ md: "56%", base: "100%" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="20px"
                    flexDirection={{ md: "row", base: "column" }}
                  >
                    <Image
                      src="images/img_close.svg"
                      h="52px"
                      mb="259px"
                      alignSelf="end"
                      w={{ md: "52px", base: "100%" }}
                    />
                    <Flex gap="24px" w={{ md: "85%", base: "100%" }} flexDirection="column">
                      <Image src="images/img_frame_1573.png" h="380px" borderRadius="8px" />
                      <Flex gap="12px" flexDirection="column">
                        <Heading size="5xl" textTransform="capitalize" fontSize="48px">
                          3 Easy Steps To Creating A Digital Product That Earns You $9,997 In 1 Week
                        </Heading>
                        <Flex gap="16px">
                          <Flex gap="8px" alignItems="center">
                            <Image src="images/img_folder.svg" h="24px" w="24px" />
                            <Text size="xl" color="deep_purple.A200" fontFamily="Inter">
                              MARKETING
                            </Text>
                          </Flex>
                          <Flex gap="8px" alignItems="center">
                            <Image src="images/img_access_time.svg" h="24px" w="24px" />
                            <Text size="xl" fontFamily="Inter" alignSelf="end">
                              7 Days ago
                            </Text>
                          </Flex>
                        </Flex>
                        <Text w={{ md: "98%", base: "100%" }} lineHeight="24px">
                          For me, research is something I can go hours on end doing without getting tired. You see, I am
                          a very curious person and ask a lot of questions. So, you can say Google is my best friend. At
                          least, it doesn’t get tired of my endless rounds of questions, unlike people do.
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    w={{ md: "35%", base: "100%" }}
                    justifyContent="center"
                    alignItems="start"
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <Flex mb="232px" gap="32px" flex={1} flexDirection="column" alignItems="start" alignSelf="stretch">
                      <InputGroup w="87%" size="sm">
                        <Input
                          placeholder={`Search blog by keyword...`}
                          value={searchBarValue1}
                          onChange={(e) => setSearchBarValue1(e.target.value)}
                          color="blue_gray.400"
                          gap="35px"
                          borderColor="blue_gray.100"
                          borderWidth="1px"
                          borderRadius="8px"
                          pr={{ base: "20px", sm: 0 }}
                        />
                        <InputRightElement>
                          {searchBarValue1?.length > 0 ? (
                            <CloseIcon onClick={() => setSearchBarValue1("")} />
                          ) : (
                            <Image src="images/img_search.svg" w="32px" h="32px" />
                          )}
                        </InputRightElement>
                      </InputGroup>
                      <Flex gap="15px" alignSelf="stretch" flexDirection="column" alignItems="start">
                        <Heading size="2xl" as="h3" fontSize="32px">
                          Categories:
                        </Heading>
                        <Flex gap="8px" alignSelf="stretch" flexDirection="column" alignItems="start">
                          <Flex gap="8px" w={{ md: "87%", base: "100%" }}>
                            <Button
                              variant="fill"
                              colorScheme="deep_purple_A200"
                              fontFamily="Inter"
                              minW="43px"
                              borderRadius="8px"
                            >
                              All
                            </Button>
                            <Button flex={1} w="100%" borderRadius="8px">
                              Marketing
                            </Button>
                            <Button flex={1} w="100%" borderRadius="8px">
                              Features
                            </Button>
                            <Button minW="88px" borderRadius="8px">
                              Lifestyle
                            </Button>
                          </Flex>
                          <Flex gap="8px" flexDirection={{ base: "column", sm: "row" }}>
                            <Button minW="131px" borderRadius="8px">
                              Press Release
                            </Button>
                            <Button minW="151px" borderRadius="8px">
                              Course Creation
                            </Button>
                            <Button minW="105px" borderRadius="8px">
                              Favourite
                            </Button>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                    <IconButton
                      size="xl"
                      icon={<Image src="images/defaultNoData.png" />}
                      aria-label="218_1769_1328_707_55_55-iconbutton"
                      w="55px"
                    />
                  </Flex>
                </Container>
              </Flex>
              <Box
                h={{ md: "55px", base: "auto" }}
                boxShadow="sm"
                w="55px"
                position="absolute"
                bottom="31%"
                right="4%"
                m="auto"
              >
                <Box h="52px" bg="deep_purple.A200" w="52px" borderRadius="26px" />
                <Image
                  src="images/img_user.svg"
                  h="32px"
                  w="32px"
                  position="absolute"
                  left="0px"
                  bottom="0px"
                  right="0px"
                  top="0px"
                  m="auto"
                />
              </Box>
            </Box>
            <Container
              gap={{ base: "27px", sm: "54px" }}
              display="flex"
              w="100%"
              flexDirection="column"
              alignItems="center"
              maxW="1113px"
              px="0px"
              mx="auto"
              p={{ md: "", base: "20px" }}
            >
              <SimpleGrid
                alignSelf="stretch"
                gap="24px"
                justifyContent="center"
                sx={{ "grid-template-columns": "repeat(auto-fill, minmax(351px , 1fr))" }}
              >
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Heading size="lg" as="h4" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                      <Heading size="lg" as="span" color="gray.900_04">
                        5&nbsp;
                      </Heading>
                      <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                        Digital Products You Can Easily Sell As A Digital Kreator in 2022
                      </Heading>
                    </Heading>
                    <Flex gap="16px" alignItems="center">
                      <Flex pr="8px" gap="8px" alignSelf="start" alignItems="center">
                        <Image src="images/img_folder.svg" h="24px" w="24px" />
                        <Text color="deep_purple.A200">MARKETING</Text>
                      </Flex>
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_access_time.svg" h="24px" w="24px" />
                        <Text fontFamily="Inter" fontWeight={500}>
                          Over a week
                        </Text>
                      </Flex>
                    </Flex>
                    <Text lineHeight="24px">
                      A digital product can be created around a wide range of topics depending on your area of
                      expertise. This could be child care, cooking, education, personal development, business/ career,
                      makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576_220x345.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Box pb="12px">
                      <Heading size="lg" as="h5" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                        <Heading size="lg" as="span" color="gray.900_04">
                          The&nbsp;
                        </Heading>
                        <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                          Abc Guide To Seamlessly Using Kreatesell For Kreators
                        </Heading>
                      </Heading>
                    </Box>
                    <Flex gap="12px" flexDirection="column">
                      <Flex gap="16px" alignItems="center">
                        <Flex pr="8px" gap="8px" alignSelf="start" alignItems="center">
                          <Image src="images/img_folder.svg" h="24px" w="24px" />
                          <Text color="deep_purple.A200">MARKETING</Text>
                        </Flex>
                        <Flex gap="8px" alignItems="center">
                          <Image src="images/img_access_time.svg" h="24px" w="24px" />
                          <Text fontFamily="Inter" fontWeight={500}>
                            Over a week
                          </Text>
                        </Flex>
                      </Flex>
                      <Text lineHeight="24px">
                        A digital product can be created around a wide range of topics depending on your area of
                        expertise. This could be child care, cooking, education, personal development, business/ career,
                        makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576_1.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Box>
                      <Heading size="lg" as="h6" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                        <Heading size="lg" as="span" color="gray.900_04">
                          The
                        </Heading>
                        <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                          &nbsp;Easiest Way To Be A Successful&nbsp;
                        </Heading>
                        <Heading size="lg" as="span" color="gray.900_04">
                          Affiliate&nbsp;
                        </Heading>
                        <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                          Marketer In Nigeria (2022)
                        </Heading>
                      </Heading>
                    </Box>
                    <Flex gap="16px" alignItems="center">
                      <Flex pr="8px" gap="8px" alignSelf="start" alignItems="center">
                        <Image src="images/img_folder.svg" h="24px" w="24px" />
                        <Text color="deep_purple.A200">MARKETING</Text>
                      </Flex>
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_access_time.svg" h="24px" w="24px" />
                        <Text fontFamily="Inter" fontWeight={500}>
                          Over a week
                        </Text>
                      </Flex>
                    </Flex>
                    <Text lineHeight="24px">
                      A digital product can be created around a wide range of topics depending on your area of
                      expertise. This could be child care, cooking, education, personal development, business/ career,
                      makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576_2.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Box>
                      <Heading size="lg" as="h4" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                        <Heading size="lg" as="span" color="gray.900_04">
                          The 4&nbsp;
                        </Heading>
                        <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                          Best Types Of Digital Marketing That I Use To Generate $9,997 Weekly (2022)
                        </Heading>
                      </Heading>
                    </Box>
                    <Flex gap="16px" alignItems="center">
                      <Flex pr="8px" gap="8px" alignSelf="start" alignItems="center">
                        <Image src="images/img_folder.svg" h="24px" w="24px" />
                        <Text color="deep_purple.A200">MARKETING</Text>
                      </Flex>
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_access_time.svg" h="24px" w="24px" />
                        <Text fontFamily="Inter" fontWeight={500}>
                          Over a week
                        </Text>
                      </Flex>
                    </Flex>
                    <Text lineHeight="24px">
                      A digital product can be created around a wide range of topics depending on your area of
                      expertise. This could be child care, cooking, education, personal development, business/ career,
                      makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576_3.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Heading size="lg" as="h4" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                      <Heading size="lg" as="span" color="gray.900_04">
                        The&nbsp;
                      </Heading>
                      <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                        Fastest And Easiest Way To Make Money Online (Up To $9,997 In 1 Week) In 2022
                      </Heading>
                    </Heading>
                    <Flex gap="16px" alignItems="center">
                      <Flex pr="8px" gap="8px" alignSelf="start" alignItems="center">
                        <Image src="images/img_folder.svg" h="24px" w="24px" />
                        <Text color="deep_purple.A200">MARKETING</Text>
                      </Flex>
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_access_time.svg" h="24px" w="24px" />
                        <Text fontFamily="Inter" fontWeight={500}>
                          Over a week
                        </Text>
                      </Flex>
                    </Flex>
                    <Text lineHeight="24px">
                      A digital product can be created around a wide range of topics depending on your area of
                      expertise. This could be child care, cooking, education, personal development, business/ career,
                      makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576_4.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Heading size="lg" as="h4" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                      <Heading size="lg" as="span" color="gray.900_04">
                        Why African Kreators
                      </Heading>
                      <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                        &nbsp;Should Invest In Personal Branding In 2022
                      </Heading>
                    </Heading>
                    <Flex gap="12px" flexDirection="column">
                      <Flex gap="16px" alignItems="center">
                        <Flex pr="8px" gap="8px" alignSelf="start" alignItems="center">
                          <Image src="images/img_folder.svg" h="24px" w="24px" />
                          <Text color="deep_purple.A200">MARKETING</Text>
                        </Flex>
                        <Flex gap="8px" alignItems="center">
                          <Image src="images/img_access_time.svg" h="24px" w="24px" />
                          <Text fontFamily="Inter" fontWeight={500}>
                            Over a week
                          </Text>
                        </Flex>
                      </Flex>
                      <Text lineHeight="24px">
                        A digital product can be created around a wide range of topics depending on your area of
                        expertise. This could be child care, cooking, education, personal development, business/ career,
                        makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576_5.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Box>
                      <Heading as="h5" lineHeight="38px">
                        7 Digital Marketing Mistakes You Should Avoid At All Cost
                      </Heading>
                    </Box>
                    <Flex gap="16px">
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_folder.svg" h="24px" w="24px" />
                        <Text color="deep_purple.A200" fontFamily="Inter">
                          MARKETING
                        </Text>
                      </Flex>
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_access_time.svg" h="24px" w="24px" />
                        <Text fontFamily="Inter" fontWeight={500}>
                          Over a week
                        </Text>
                      </Flex>
                    </Flex>
                    <Text lineHeight="24px">
                      A digital product can be created around a wide range of topics depending on your area of
                      expertise. This could be child care, cooking, education, personal development, business/ career,
                      makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576_6.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Heading as="h5" lineHeight="31px">
                      All You Need To Know About Selling Online Membership Digital Products In 2022
                    </Heading>
                    <Flex gap="16px">
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_folder.svg" h="24px" w="24px" />
                        <Text color="deep_purple.A200" fontFamily="Inter">
                          MARKETING
                        </Text>
                      </Flex>
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_access_time.svg" h="24px" w="24px" />
                        <Text fontFamily="Inter" fontWeight={500}>
                          Over a week
                        </Text>
                      </Flex>
                    </Flex>
                    <Text lineHeight="24px">
                      A digital product can be created around a wide range of topics depending on your area of
                      expertise. This could be child care, cooking, education, personal development, business/ career,
                      makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576_7.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Box pb="16px">
                      <Heading as="h5" lineHeight="38px">
                        Uncommon Digital Products That Make A Profit Of More Than ₦67,997 A Month In 2022
                      </Heading>
                    </Box>
                    <Flex gap="12px" flexDirection="column">
                      <Flex gap="16px">
                        <Flex gap="8px" alignItems="center">
                          <Image src="images/img_folder.svg" h="24px" w="24px" />
                          <Text color="deep_purple.A200" fontFamily="Inter">
                            MARKETING
                          </Text>
                        </Flex>
                        <Flex gap="8px" alignItems="center">
                          <Image src="images/img_access_time.svg" h="24px" w="24px" />
                          <Text fontFamily="Inter" fontWeight={500}>
                            Over a week
                          </Text>
                        </Flex>
                      </Flex>
                      <Text lineHeight="24px">
                        A digital product can be created around a wide range of topics depending on your area of
                        expertise. This could be child care, cooking, education, personal development, business/ career,
                        makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576_8.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Heading as="h5" lineHeight="34px">
                      How We Sold A $7 Digital Product & Made $15,997 In 1 Week In Nigeria (2022)
                    </Heading>
                    <Flex gap="16px">
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_folder.svg" h="24px" w="24px" />
                        <Text color="deep_purple.A200" fontFamily="Inter">
                          MARKETING
                        </Text>
                      </Flex>
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_access_time.svg" h="24px" w="24px" />
                        <Text fontFamily="Inter" fontWeight={500}>
                          Over a week
                        </Text>
                      </Flex>
                    </Flex>
                    <Text lineHeight="24px">
                      A digital product can be created around a wide range of topics depending on your area of
                      expertise. This could be child care, cooking, education, personal development, business/ career,
                      makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576_9.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Box pb={{ base: "20px", sm: "21px" }}>
                      <Heading as="h5" lineHeight="38px">
                        3 Secret Websites To Earn Money (No One Knows About Them)
                      </Heading>
                    </Box>
                    <Flex gap="16px">
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_folder.svg" h="24px" w="24px" />
                        <Text color="deep_purple.A200" fontFamily="Inter">
                          MARKETING
                        </Text>
                      </Flex>
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_access_time.svg" h="24px" w="24px" />
                        <Text fontFamily="Inter" fontWeight={500}>
                          Over a week
                        </Text>
                      </Flex>
                    </Flex>
                    <Text lineHeight="24px">
                      A digital product can be created around a wide range of topics depending on your area of
                      expertise. This could be child care, cooking, education, personal development, business/ career,
                      makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap="24px" w="100%" flexDirection="column">
                  <Image src="images/img_frame_1576_10.png" h="220px" borderRadius="8px" />
                  <Flex gap="12px" flexDirection="column">
                    <Heading as="h5" lineHeight="34px">
                      Why Selling Digital Products Is The Best Side Income Business In 2022
                    </Heading>
                    <Flex gap="16px">
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_folder.svg" h="24px" w="24px" />
                        <Text color="deep_purple.A200" fontFamily="Inter">
                          MARKETING
                        </Text>
                      </Flex>
                      <Flex gap="8px" alignItems="center">
                        <Image src="images/img_access_time.svg" h="24px" w="24px" />
                        <Text fontFamily="Inter" fontWeight={500}>
                          Over a week
                        </Text>
                      </Flex>
                    </Flex>
                    <Text lineHeight="24px">
                      A digital product can be created around a wide range of topics depending on your area of
                      expertise. This could be child care, cooking, education, personal development, business/ career,
                      makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                    </Text>
                  </Flex>
                </Flex>
              </SimpleGrid>
              <Flex gap="12px" w={{ md: "27%", base: "100%" }}>
                <Flex flex={1}>
                  <Button
                    size="sm"
                    variant="fill"
                    colorScheme="gray_50"
                    borderTopLeftRadius="8px"
                    borderBottomLeftRadius="8px"
                    fontFamily="Inter"
                    fontWeight={500}
                    borderColor="blue_gray.100"
                    borderWidth="1px"
                    borderStyle="solid"
                    minW="48px"
                  >
                    1
                  </Button>
                  <Button
                    size="sm"
                    variant="fill"
                    colorScheme="white_A700"
                    fontFamily="Inter"
                    fontWeight={500}
                    borderColor="blue_gray.100"
                    borderWidth="1px"
                    borderStyle="solid"
                    minW="48px"
                  >
                    2
                  </Button>
                  <Button
                    size="sm"
                    variant="fill"
                    colorScheme="white_A700"
                    fontFamily="Inter"
                    fontWeight={500}
                    borderColor="blue_gray.100"
                    borderWidth="1px"
                    borderStyle="solid"
                    minW="48px"
                  >
                    3
                  </Button>
                  <Button
                    size="sm"
                    variant="fill"
                    colorScheme="white_A700"
                    fontFamily="Inter"
                    fontWeight={500}
                    borderColor="blue_gray.100"
                    borderWidth="1px"
                    borderStyle="solid"
                    minW="48px"
                  >
                    ...
                  </Button>
                  <Button
                    size="sm"
                    variant="fill"
                    colorScheme="white_A700"
                    fontFamily="Inter"
                    fontWeight={500}
                    borderColor="blue_gray.100"
                    borderWidth="1px"
                    borderStyle="solid"
                    minW="48px"
                  >
                    5
                  </Button>
                </Flex>
                <IconButton
                  size="md"
                  variant="fill"
                  colorScheme="white_A700"
                  icon={<Image src="images/img_arrow_right.svg" />}
                  aria-label="218:2009-arrowright_one"
                  borderColor="blue_gray.100"
                  borderWidth="1px"
                  borderStyle="solid"
                  w="48px"
                  borderRadius="8px"
                />
              </Flex>
            </Container>
            <Box h={{ md: "550px", base: "auto" }} alignSelf="stretch" position="relative">
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
                      <Text color="gray.800" fontFamily="Manrope" fontWeight={500} lineHeight="26px">
                         Introducing our online savings platform – an all-in-one solution for your savings goals and
                        financial  aspirations.
                      </Text>
                      <Flex gap="22px" flexDirection="column" alignItems="start">
                        <Heading as="h5" color="gray.800" mt="6px">
                          Contact
                        </Heading>
                        <Text color="gray.800">hello@iSAVE.com</Text>
                      </Flex>
                    </Flex>
                    <Flex w={{ md: "42%", base: "100%" }} justifyContent="space-between" alignItems="start" gap="20px">
                      <Flex
                        gap="24px"
                        w="31%"
                        flexDirection="column"
                        alignItems="start"
                        justifyContent="center"
                        py="8px"
                      >
                        <Heading as="h5" color="gray.800">
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
                        <Heading as="h5" color="gray.800">
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
                  <Text size="s" color="gray.800" mt="24px" ml={{ md: "180px", base: "0px" }} alignSelf="start">
                    2024 @ISAVE. All rights reserved. -- Privacy Policy - Terms of Services
                  </Text>
                </Flex>
              </AbsoluteCenter>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
