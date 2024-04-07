import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import {
  Box,
  Text,
  Heading,
  Flex,
  Link,
  Container,
  AbsoluteCenter,
  Image,
  SimpleGrid,
  Input,
  Button,
} from "@chakra-ui/react";

export default function BLOGPOSTOnePage() {
  return (
    <>
      <Helmet>
        <title>iSave - Digital Saving Solution</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Box h={{ md: "7045px", base: "auto" }} w="100%" position="relative">
        <Flex
          gap={{ md: "89px", base: "44px", sm: "66px" }}
          bg="white.A700"
          w="100%"
          flexDirection="column"
          alignItems="center"
        >
          <Header
            display="flex"
            bg="white.A700"
            w={{ md: "87%", base: "100%" }}
            justifyContent="center"
            alignItems="center"
            p="10px"
          />
          <Flex
            mr={{ md: "52px", base: "0px" }}
            alignSelf="end"
            w={{ md: "89%", base: "100%" }}
            flexDirection="column"
            alignItems="start"
            p={{ md: "", base: "20px" }}
          >
            <Flex gap="37px" alignSelf="stretch" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
              <Flex gap="26px" flex={1} flexDirection="column" alignSelf="stretch">
                <Flex gap="18px" flexDirection="column">
                  <Heading size="5xl" as="h1" fontFamily="Inter" fontSize="48px" fontWeight={800} lineHeight="64px">
                    <Heading size="5xl" as="span" color="gray.900_04">
                      5 D
                    </Heading>
                    <Heading size="5xl" as="span" color="gray.900_04" textTransform="lowercase">
                      igital Products You Can Easily Sell As A Digital
                    </Heading>
                    <Heading size="5xl" as="span" color="gray.900_04">
                      &nbsp;Kreator&nbsp;
                    </Heading>
                    <Heading size="5xl" as="span" color="gray.900_04" textTransform="lowercase">
                      In 2022
                    </Heading>
                  </Heading>
                  <Flex gap="16px" flexDirection={{ base: "column", sm: "row" }}>
                    <Flex gap="8px" alignItems="center">
                      <Image src="images/img_folder.svg" h="24px" w="24px" />
                      <Text size="xl" color="deep_purple.A200" fontFamily="Inter">
                        Course creation
                      </Text>
                    </Flex>
                    <Flex gap="8px" alignItems="center">
                      <Image src="images/img_access_time.svg" h="24px" w="24px" />
                      <Text size="xl" fontFamily="Inter" alignSelf="end">
                        7 Days ago
                      </Text>
                    </Flex>
                    <Flex gap="8px" alignItems="center">
                      <Image src="images/img_access_time.svg" h="24px" w="24px" />
                      <Text size="xl" fontFamily="Inter">
                        2 min read
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Image src="images/img_frame_1573_433x723.png" h="433px" borderRadius="16px" />
                <Text size="xl" color="gray.700" fontFamily="Inter" fontWeight={400} lineHeight="28px">
                  <>
                    ‘I am a creator!’
                    <br />
                    <br />
                    That&#39;s what I told my friend and he started laughing hysterically. We had previously been
                    discussing career paths. Being a doctor, he was concerned that I didn&#39;t have a clear choice of
                    career. <br />
                    <br />
                    “Is that even a thing?” he asked, still laughing. I chose not to take his reaction personally and
                    continued ‘I am a digital creator and yes! It is a thing.’ <br />
                    <br />
                    Funny as it may sound, there are many people like my friend who are oblivious to the digital world
                    and the creative career paths and opportunities one can pursue in it. As the name signifies, a
                    creator is one with the unique ability to create something from nothing. <br />
                    <br />
                    Have you brought anything to being from your imagination or from materials around you?
                    Congratulations! You are a creator. While we are on this, do you know that you can earn from this
                    ability? Yes, you can! <br />
                    <br />
                    The internet has presented a wide range of opportunities for creators, mostly called digital
                    creators on the internet. One of these opportunities is creating and selling digital products
                    online. <br />
                    <br />
                    Digital products are solely available for sale virtually on the internet and are not physically
                    available, so can only be accessed through a digital device.
                    <br />
                    <br />
                    There are many types of digital products which can be in the form of a document, video, image,
                    web-based page, etc. We would be discussing five of these digital products that are in high demand
                    and can easily be sold.
                  </>
                </Text>
                <Box
                  h={{ md: "433px", base: "auto" }}
                  bgImage="url(/images/img_frame_1604.png)"
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  borderRadius="16px"
                >
                  <Image
                    src="images/img_frame_1573_1.png"
                    h={{ md: "433px", base: "auto" }}
                    w="100%"
                    borderRadius="16px"
                  />
                </Box>
              </Flex>
              <Flex mt="19px" gap={{ base: "34px", sm: "68px" }} w={{ md: "39%", base: "100%" }} flexDirection="column">
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                  flexDirection={{ base: "column", sm: "row" }}
                >
                  <Flex gap="29px" w={{ base: "100%", sm: "76%" }} flexDirection="column">
                    <Flex gap="15px" w={{ md: "85%", base: "100%" }} flexDirection="column" alignItems="start">
                      <Heading size="xl" fontFamily="Inter" fontSize="28px">
                        Latest Posts
                      </Heading>
                      <Box h="3px" bg="gray.900_04" w="48%" />
                    </Flex>
                    <Flex gap="32px" flexDirection="column">
                      <Flex gap="13px" flex={1} alignItems="center">
                        <Image src="images/img_frame_1597.png" h="141px" w="47%" borderRadius="8px" />
                        <Flex gap="6px" flex={1} flexDirection="column" alignItems="start">
                          <Text size="xs" fontFamily="Inter" fontSize="8.07px">
                            Today
                          </Text>
                          <Heading size="xs" as="h3" fontFamily="Inter" lineHeight="18px">
                            The Fastest And Easiest Way To Make Money
                          </Heading>
                          <Text size="xs" fontFamily="Inter" fontSize="8.07px" lineHeight="13px">
                            A digital product can be created around a wide range of topics depending on your area of
                            expertise. This could be child care, cooking, education, personal development, business/
                            career, makeup artistry
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex gap="13px" flex={1} alignItems="center">
                        <Image src="images/img_frame_1605.png" h="141px" w="47%" borderRadius="8px" />
                        <Flex gap="6px" flex={1} flexDirection="column" alignItems="start">
                          <Text size="xs" fontFamily="Inter" fontSize="8.07px">
                            Yesterday
                          </Text>
                          <Heading size="xs" as="h4" fontFamily="Inter" lineHeight="18px">
                            The Fastest And Easiest Way To Make Money
                          </Heading>
                          <Text size="xs" fontFamily="Inter" fontSize="8.07px" lineHeight="13px">
                            A digital product can be created around a wide range of topics depending on your area of
                            expertise. This could be child care, cooking, education, personal development, business/
                            career, makeup artistry
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex gap="13px" flex={1} alignItems="center">
                        <Image src="images/img_frame_1607.png" h="141px" w="47%" borderRadius="8px" />
                        <Flex gap="7px" flex={1} flexDirection="column" alignItems="start">
                          <Text size="xs" fontFamily="Inter" fontSize="8.07px">
                            2 days ago
                          </Text>
                          <Flex gap="6px" alignSelf="stretch" flexDirection="column">
                            <Heading size="xs" as="h5" fontFamily="Inter" lineHeight="18px">
                              The Fastest And Easiest Way To Make Money
                            </Heading>
                            <Text size="xs" fontFamily="Inter" fontSize="8.07px" lineHeight="13px">
                              A digital product can be created around a wide range of topics depending on your area of
                              expertise. This could be child care, cooking, education, personal development, business/
                              career, makeup artistry
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Flex gap="13px" flex={1} alignItems="center">
                        <Image src="images/img_frame_1597_141x160.png" h="141px" w="47%" borderRadius="8px" />
                        <Flex gap="7px" flex={1} flexDirection="column" alignItems="start">
                          <Text size="xs" fontFamily="Inter" fontSize="8.07px">
                            2 days ago
                          </Text>
                          <Flex gap="6px" alignSelf="stretch" flexDirection="column">
                            <Heading size="xs" as="h6" fontFamily="Inter" lineHeight="18px">
                              The Fastest And Easiest Way To Make Money
                            </Heading>
                            <Text size="xs" fontFamily="Inter" fontSize="8.07px" lineHeight="13px">
                              A digital product can be created around a wide range of topics depending on your area of
                              expertise. This could be child care, cooking, education, personal development, business/
                              career, makeup artistry
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Flex gap="13px" flex={1} alignItems="center">
                        <Image src="images/img_frame_1605_141x160.png" h="141px" w="47%" borderRadius="8px" />
                        <Flex gap="7px" flex={1} flexDirection="column" alignItems="start">
                          <Text size="xs" fontFamily="Inter" fontSize="8.07px">
                            2 days ago
                          </Text>
                          <Flex gap="6px" alignSelf="stretch" flexDirection="column">
                            <Heading size="xs" as="h6" fontFamily="Inter" lineHeight="18px">
                              The Fastest And Easiest Way To Make Money
                            </Heading>
                            <Text size="xs" fontFamily="Inter" fontSize="8.07px" lineHeight="13px">
                              A digital product can be created around a wide range of topics depending on your area of
                              expertise. This could be child care, cooking, education, personal development, business/
                              career, makeup artistry
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Flex gap="13px" flex={1} alignItems="center">
                        <Image src="images/img_frame_1607_141x160.png" h="141px" w="47%" borderRadius="8px" />
                        <Flex gap="7px" flex={1} flexDirection="column" alignItems="start">
                          <Text size="xs" fontFamily="Inter" fontSize="8.07px">
                            2 days ago
                          </Text>
                          <Flex gap="6px" alignSelf="stretch" flexDirection="column">
                            <Heading size="xs" as="h6" fontFamily="Inter" lineHeight="18px">
                              The Fastest And Easiest Way To Make Money
                            </Heading>
                            <Text size="xs" fontFamily="Inter" fontSize="8.07px" lineHeight="13px">
                              A digital product can be created around a wide range of topics depending on your area of
                              expertise. This could be child care, cooking, education, personal development, business/
                              career, makeup artistry
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Box h={{ md: "55px", base: "auto" }} boxShadow="sm" w="55px" position="relative">
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
                </Flex>
                <Flex gap="22px" w={{ md: "74%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Heading size="lg" as="h4" fontFamily="Inter" fontSize="24px">
                    Tags:
                  </Heading>
                  <Flex gap="8px" alignSelf="stretch" flexDirection="column">
                    <Flex gap="8px">
                      <Button fontFamily="Inter" minW="90px" borderRadius="8px">
                        Messages
                      </Button>
                      <Button fontFamily="Inter" flex={1} w="100%" borderRadius="8px">
                        Store
                      </Button>
                      <Button fontFamily="Inter" flex={1} w="100%" borderRadius="8px">
                        Video
                      </Button>
                      <Button fontFamily="Inter" minW="107px" borderRadius="8px">
                        Make money
                      </Button>
                    </Flex>
                    <Flex gap="8px">
                      <Button fontFamily="Inter" minW="64px" borderRadius="8px">
                        Online
                      </Button>
                      <Button fontFamily="Inter" minW="130px" borderRadius="8px">
                        Course Creation
                      </Button>
                      <Button fontFamily="Inter" minW="92px" borderRadius="8px">
                        Favourite
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              mt="24px"
              w={{ md: "60%", base: "100%" }}
              alignItems="center"
              flexDirection={{ md: "row", base: "column" }}
            >
              <Flex
                mb="20px"
                zIndex={2}
                alignSelf="end"
                w={{ md: "22%", base: "100%" }}
                position="relative"
                justifyContent="space-between"
                gap="20px"
              >
                <Flex pr="7px" gap="9px" alignItems="center">
                  <Image src="images/img_icon_filled.svg" h="32px" w="32px" />
                  <Text size="xl" mb="2px" fontFamily="Inter" alignSelf="end">
                    6.5K
                  </Text>
                </Flex>
                <Flex pr="7px" gap="9px" alignItems="center">
                  <Image src="images/img_user_light_blue_a700.svg" h="32px" w="32px" />
                  <Text size="xl" mb="2px" fontFamily="Inter" alignSelf="end">
                    6.5K
                  </Text>
                </Flex>
              </Flex>
              <Text
                size="xl"
                color="gray.700"
                ml={{ md: "-206px", base: "0px" }}
                fontFamily="Inter"
                fontWeight={400}
                position="relative"
                w={{ md: "78%", base: "100%" }}
                lineHeight="28px"
              >
                <Text size="xl" as="span" color="black.900">
                  <>
                    Paid Video Tutorial Courses
                    <br />
                  </>
                </Text>
                <Text size="xl" as="span" color="gray.700">
                  <>
                    <br />A paid video tutorial as the name implies is a tutorial/ teaching that is delivered through a
                    video. The reason that the term “paid” is emphasised is that there are some social media platforms
                    today where users can freely upload videos including tutorials. <br />
                    <br />
                    Knowing this, as a creator creating a paid video tutorial, you should be able to teach something
                    that is not common. This is the reason you are advised to create a product around expert knowledge.{" "}
                    <br />
                    <br />
                    This type of digital product is common amongst people who brand themselves as thought leaders in
                    their fields. And so, have uncommon knowledge to share that is worth paying for.
                    <br />
                    <br />
                  </>
                </Text>
                <Text size="xl" as="span" color="black.900">
                  <>
                    Coaching Sessions
                    <br />
                  </>
                </Text>
                <Text size="xl" as="span" color="gray.700">
                  <>
                    <br />
                    In a coaching session, you are selling your time as well as your knowledge. This is because a
                    coaching session involves you having a one on one direct interaction with your client through a
                    digital medium. <br />
                    <br />A coaching session is more like the private tutorial lessons we had growing up, only this time
                    there is no physical contact. A client has the liberty to ask questions and receive a direct
                    response from the creator. This digital product is usually time-based in its delivery structure.
                    <br />
                    <br />
                  </>
                </Text>
                <Text size="xl" as="span" color="black.900">
                  <>
                    Action Packed Ebook
                    <br />
                  </>
                </Text>
                <Text size="xl" as="span" color="gray.700">
                  <>
                    <br />
                    Action-packed? Yes. When talking about ebooks, an electronic book with a broad range of topics might
                    come to mind. But, do you know that an ebook packed solely with action points on a single target
                    topic sells faster? <br />
                    <br />
                    Due to the excess of information out there, people are on the lookout for more action-filled
                    information that solves a problem they are facing and less theoretical knowledge. Plus, the average
                    attention span of humans has greatly reduced. <br />
                    <br />A research report by Microsoft corp refers to it as less than that of a goldfish. This means
                    that the shorter and more actionable your ebook, the faster you are likely to sell, especially from
                    positive reviews.
                    <br />
                    <br />
                    Your ebook could be in a downloadable pdf format or a web-based kindle format. Whatever format you
                    choose, the plan is for your audience to pay before accessing it.
                    <br />
                    <br />
                  </>
                </Text>
                <Text size="xl" as="span" color="black.900">
                  <>
                    Art And Graphics
                    <br />
                  </>
                </Text>
                <Text size="xl" as="span" color="gray.700">
                  <>
                    <br />
                    If you are an artistic creator, you can create digital art and sell it to art lovers across the
                    internet. This could be comic art, drawing, painting etc. You can also sell your pre-designed
                    graphics that appeal to or inform your target audience e.g infographics.
                    <br />
                    <br />
                    Talking about infographics, remember what we said about people having a short attention span? One of
                    the ways to go about capturing people’s attention is to pass across a piece of information at a
                    glance through well-designed infographics. An infographic is a series of graphic images that carries
                    information that can easily be absorbed.
                    <br />
                    <br />
                    The idea is to sell the licence of the images to people who would like to republish them or
                    personally consume them.
                    <br />
                    <br />
                  </>
                </Text>
                <Text size="xl" as="span" color="black.900">
                  <>
                    Audio
                    <br />
                    <br />
                    Audio here refers broadly to the different types we have available. They are mostly presented in an
                    mp3 format. Examples of sellable audio files you can create are audiobooks, music, podcasts,
                    recorded tutorials, instrumentals, etc.
                    <br />
                    <br />
                    No matter the niche you might be in, you can convert your content into audio and sell it. The best
                    way to sell audio is to create a collection or album and sell access to it.
                    <br />
                    <br />
                    After determining and creating the digital product you would like to sell, the next thing to do is
                    to sell to your target audience. The best way to easily sell to a wide range of your target audience
                    is through Kreatesell. <br />
                    <br />
                    Simply visit our home page, sign up to create a free account on our website, upload your product And
                    you can start selling and earning securely with no stress on you at all.
                  </>
                </Text>
              </Text>
            </Flex>
            <Box h="1px" mt="4px" bg="blue_gray.100" w="93%" />
            <Image
              src="images/img_polygon_2.svg"
              h="14px"
              mt="16px"
              ml={{ md: "374px", base: "0px" }}
              zIndex={1}
              w="14px"
              position="relative"
            />
            <Box h="540px" mt="-4px" position="relative" w="44%">
              <Flex
                bg="white.A700"
                boxShadow="md"
                w="35%"
                justifyContent="center"
                position="absolute"
                right="0.00px"
                top="0.00px"
                p="12px"
                m="auto"
                borderRadius="8px"
              >
                <Flex gap="13px" w="100%" flexDirection="column" alignItems="center" my="12px">
                  <Text size="md" color="gray.700" fontFamily="Inter">
                    Share to friends on
                  </Text>
                  <Flex gap="12px" alignSelf="start">
                    <Image src="images/img_icon_filled_gray_900_04.svg" h="24px" w="24px" />
                    <Image src="images/img_icon_filled_gray_900_04_24x24.svg" h="24px" w="24px" />
                    <Image src="images/img_icon_filled_24x24.svg" h="24px" w="24px" />
                    <Image src="images/img_icon_outlined.svg" h="24px" w="24px" />
                    <Image src="images/img_icon_filled_1.svg" h="24px" w="24px" />
                  </Flex>
                  <Box h="1px" bg="blue_gray.100" w="90%" />
                  <Flex gap="9px" alignItems="center">
                    <Image src="images/img_content_copy.svg" h="24px" w="24px" />
                    <Text size="md" color="gray.700" mb="2px" fontFamily="Inter" alignSelf="end">
                      Copy link
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="31px"
                w="72%"
                flexDirection="column"
                position="absolute"
                bottom="0.00px"
                left="0.00px"
                m="auto"
              >
                <Flex w={{ md: "86%", base: "100%" }} justifyContent="center">
                  <Flex gap="8px" w="100%" alignItems="start">
                    <Image src="images/img_ellipse_142.png" borderRadius="50%" h="59px" w="59px" />
                    <Flex gap="4px" flex={1} flexDirection="column" alignItems="center">
                      <Flex
                        gap="16px"
                        bg="gray.100"
                        alignSelf="stretch"
                        flexDirection="column"
                        alignItems="start"
                        p="20px"
                        borderRadius="24px"
                      >
                        <Text size="md" color="gray.700" ml={{ md: "8px", base: "0px" }} fontFamily="Inter">
                          Adeyemi Gbenga
                        </Text>
                        <Text color="gray.900_04" mb="24px" ml={{ md: "8px", base: "0px" }} fontFamily="Inter">
                          You are doing well.{" "}
                        </Text>
                      </Flex>
                      <Flex gap="16px">
                        <Flex gap="9px" alignItems="center">
                          <Image src="images/img_icon_outlined_blue_gray_400.svg" h="24px" alignSelf="start" w="24px" />
                          <Text size="xl" fontFamily="Inter" alignSelf="end">
                            Like
                          </Text>
                        </Flex>
                        <Flex gap="9px" alignItems="center">
                          <Image src="images/img_user_blue_gray_400.svg" h="24px" w="24px" />
                          <Text size="xl" fontFamily="Inter" alignSelf="end">
                            Reply
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex w={{ md: "86%", base: "100%" }} justifyContent="center">
                  <Flex gap="8px" w="100%" alignItems="start">
                    <Image src="images/img_unsplash_f6hbvngtnny.png" borderRadius="50%" h="59px" w="59px" />
                    <Flex gap="4px" flex={1} flexDirection="column" alignItems="center">
                      <Flex
                        gap="12px"
                        bg="gray.100"
                        alignSelf="stretch"
                        flexDirection="column"
                        alignItems="start"
                        justifyContent="center"
                        p="14px"
                        borderRadius="24px"
                      >
                        <Text size="md" color="gray.700" mt="6px" ml={{ md: "15px", base: "0px" }} fontFamily="Inter">
                          Adeyemi Gbenga
                        </Text>
                        <Text
                          color="gray.900_04"
                          mb="4px"
                          fontFamily="Inter"
                          alignSelf="end"
                          w={{ md: "94%", base: "100%" }}
                          lineHeight="26px"
                        >
                          So, I’m a creator? Let me brag!
                        </Text>
                      </Flex>
                      <Flex gap="16px">
                        <Flex gap="9px" alignItems="center">
                          <Image src="images/img_icon_outlined_blue_gray_400.svg" h="24px" alignSelf="start" w="24px" />
                          <Text size="xl" fontFamily="Inter" alignSelf="end">
                            Like
                          </Text>
                        </Flex>
                        <Flex gap="9px" alignItems="center">
                          <Image src="images/img_user_blue_gray_400.svg" h="24px" w="24px" />
                          <Text size="xl" fontFamily="Inter" alignSelf="end">
                            Reply
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex gap="8px" alignItems="start" flexDirection={{ base: "column", sm: "row" }}>
                  <Image src="images/img_unsplash_j1oscm_uhuq.png" borderRadius="50%" h="59px" w="59px" />
                  <Input
                    colorScheme="gray_100"
                    placeholder={`Write a comment`}
                    fontFamily="Inter"
                    flexGrow={1}
                    borderRadius="24px"
                    px={{ base: "20px", sm: "" }}
                  />
                </Flex>
              </Flex>
              <Flex gap="8px" position="absolute" left="0.00px" top="5.00px" m="auto">
                <Flex gap="9px" alignItems="center">
                  <Image src="images/img_icon_outlined_blue_gray_400.svg" h="24px" alignSelf="start" w="24px" />
                  <Text size="xl" fontFamily="Inter" alignSelf="end">
                    Like
                  </Text>
                </Flex>
                <Flex gap="9px" alignItems="center">
                  <Image src="images/img_user_blue_gray_400.svg" h="24px" w="24px" />
                  <Text size="xl" fontFamily="Inter">
                    Comment
                  </Text>
                </Flex>
                <Flex gap="9px" alignItems="center">
                  <Image src="images/img_share.svg" h="24px" w="24px" />
                  <Text size="xl" fontFamily="Inter">
                    Share
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Heading
              size="4xl"
              as="h1"
              mt="127px"
              fontFamily="Inter"
              textAlign="center"
              fontSize="40px"
              alignSelf="center"
            >
              More blogs
            </Heading>
            <SimpleGrid
              mt="29px"
              w="91%"
              gap="30px"
              sx={{ "grid-template-columns": "repeat(auto-fill, minmax(351px , 1fr))" }}
            >
              <Flex gap="24px" w="100%" flexDirection="column">
                <Image src="images/img_frame_1576_5.png" h="220px" borderRadius="8px" />
                <Flex gap="12px" flexDirection="column">
                  <Box pb="16px">
                    <Heading size="lg" as="h4" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                      <Heading size="lg" as="span" color="gray.900_04">
                        7 Digital&nbsp;
                      </Heading>
                      <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                        Marketing Mistakes You Should Avoid At All Cost
                      </Heading>
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
                  <Text fontFamily="Inter" fontWeight={500} lineHeight="26px">
                    A digital product can be created around a wide range of topics depending on your area of expertise.
                    This could be child care, cooking, education, personal development, business/ career, makeup
                    artistry, digital marketing, entrepreneurship, to mention but a few.
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="24px" w="100%" flexDirection="column">
                <Image src="images/img_frame_1576_6.png" h="220px" borderRadius="8px" />
                <Flex gap="12px" flexDirection="column">
                  <Box pb="5px">
                    <Heading size="lg" as="h4" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                      <Heading size="lg" as="span" color="gray.900_04">
                        All&nbsp;
                      </Heading>
                      <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                        You Need To Know About Selling Online Membership Digital Products In 2022
                      </Heading>
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
                    <Text fontFamily="Inter" fontWeight={500} lineHeight="26px">
                      A digital product can be created around a wide range of topics depending on your area of
                      expertise. This could be child care, cooking, education, personal development, business/ career,
                      makeup artistry, digital marketing, entrepreneurship, to mention but a few.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex gap="24px" w="100%" flexDirection="column">
                <Image src="images/img_frame_1576_7.png" h="220px" borderRadius="8px" />
                <Flex gap="12px" flexDirection="column">
                  <Box pb={{ base: "20px", sm: "34px" }}>
                    <Heading size="lg" as="h4" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                      <Heading size="lg" as="span" color="gray.900_04">
                        Uncommon
                      </Heading>
                      <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                        &nbsp;Digital Products That Make A Profit Of More Than ₦67,997 A Month In 2022
                      </Heading>
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
                    <Text fontFamily="Inter" fontWeight={500} lineHeight="26px">
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
                  <Heading size="lg" as="h4" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                    <Heading size="lg" as="span" color="gray.900_04">
                      How&nbsp;
                    </Heading>
                    <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                      We Sold A $7 Digital Product & Made $15,997 In 1 Week In Nigeria (2022)
                    </Heading>
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
                  <Text fontFamily="Inter" fontWeight={500} lineHeight="26px">
                    A digital product can be created around a wide range of topics depending on your area of expertise.
                    This could be child care, cooking, education, personal development, business/ career, makeup
                    artistry, digital marketing, entrepreneurship, to mention but a few.
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="24px" w="100%" flexDirection="column">
                <Image src="images/img_frame_1576_9.png" h="220px" borderRadius="8px" />
                <Flex gap="12px" flexDirection="column">
                  <Box>
                    <Heading size="lg" as="h4" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                      <Heading size="lg" as="span" color="gray.900_04">
                        3 Secret
                      </Heading>
                      <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                        &nbsp;Websites To Earn Money (No One Knows About Them)
                      </Heading>
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
                  <Text fontFamily="Inter" fontWeight={500} lineHeight="26px">
                    A digital product can be created around a wide range of topics depending on your area of expertise.
                    This could be child care, cooking, education, personal development, business/ career, makeup
                    artistry, digital marketing, entrepreneurship, to mention but a few.
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="24px" w="100%" flexDirection="column">
                <Image src="images/img_frame_1576_10.png" h="220px" borderRadius="8px" />
                <Flex gap="12px" flexDirection="column">
                  <Box>
                    <Heading size="lg" as="h4" fontFamily="Inter" fontSize="24px" lineHeight="32px">
                      <Heading size="lg" as="span" color="gray.900_04">
                        Why&nbsp;
                      </Heading>
                      <Heading size="lg" as="span" color="gray.900_04" textTransform="lowercase">
                        Selling Digital Products Is The Best Side Income Business In 2022
                      </Heading>
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
                  <Text fontFamily="Inter" fontWeight={500} lineHeight="26px">
                    A digital product can be created around a wide range of topics depending on your area of expertise.
                    This could be child care, cooking, education, personal development, business/ career, makeup
                    artistry, digital marketing, entrepreneurship, to mention but a few.
                  </Text>
                </Flex>
              </Flex>
            </SimpleGrid>
          </Flex>
          <Box h={{ md: "550px", base: "auto" }} alignSelf="stretch" position="relative">
            <Box as="footer" w="100%">
              <Box h="522px" borderColor="white.A700" borderTopWidth="1px" borderStyle="solid" />
            </Box>
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
              <Flex mt="4px" flexDirection="column" alignItems="start">
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
                <Text size="s" color="gray.800" mt="24px" ml={{ md: "177px", base: "0px" }}>
                  2024 @ISAVE. All rights reserved. -- Privacy Policy - Terms of Services
                </Text>
              </Flex>
            </AbsoluteCenter>
          </Box>
        </Flex>
        <Box h="52px" w="4%" position="absolute" left="4%" top="10%" m="auto" />
      </Box>
    </>
  );
}
