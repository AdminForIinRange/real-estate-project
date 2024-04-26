"use client";

import {
  HStack,
  Text,
  Box,
  Icon,
  Spacer,
  VStack,
  Input,
  InputGroup,
  InputRightAddon,
  MdUnsubscribe,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Spark from "@/Svg/Spark.svg";
import Star from "@/Svg/Star.svg";
import Image from "next/image";
import { TiStarburst } from "react-icons/ti";

import SpikeStar from "@/Svg/SpikeStar.svg";
import roundedFlower from "@/Svg/roundedFlower.svg";

import ninjaStarFlower from "@/Svg/ninjaStarFlower.svg";
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import dimond from "@/Svg/dimond.svg";

const Hero = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery("(max-width: 1024px)");

  const Featured = [
    {
      id: 1,
      imgUrl:
        "https://source.unsplash.com/white-and-brown-concrete-building-under-blue-sky-during-daytime-_TPTXZd9mOo",
      Price: "$1,542,964",
      change: "9%",
    },
    {
      id: 2,
      imgUrl:
        "https://source.unsplash.com/white-and-brown-concrete-building-under-blue-sky-during-daytime-5QLCohwVndQ",
      Price: "$742,011",
      change: "3%",
    },
    ,
    {
      id: 3,
      imgUrl:
        "https://source.unsplash.com/brown-and-white-wooden-house-near-green-trees-during-daytime-2gDwlIim3Uw",
      Price: "$1,242,825",
      change: "5%",
    },
    {
      id: 4,
      imgUrl:
        "https://source.unsplash.com/white-and-blue-swimming-pool-Id7u0EkTjBE",

      Price: "$1,442,616",
      change: "6%",
    },
  ];
  return (
    <>
      <HStack
        mt={"10"}
        justify={"center"}
        align={"start"}
        w={"100%"}
        wrap={["wrap", "wrap", "wrap", "nowrap", "nowrap"]}
      >
        <VStack h={"100%"} justify={"left"} align={"left"}>
          <Text as={"span"} fontSize={"70px"} fontFamily={"Raleway"} w={"100%"}>
            Unlock Success: Co-Own for Max Returns, Min Risk!
          </Text>

          <Text
            textAlign={"left"}
            fontWeight={"light"}
            fontSize={"30px"}
            fontFamily={"Raleway"}
            w={"70%"}
          >
            Accelerate Wealth Growth: Explore Co-Ownership Opportunities for
            Smart Investors!
          </Text>

          <HStack w={"100%"} align={"center"} justify={"left"} mt={"20px"}>
            <Input
              fontFamily={"Raleway"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.03)",
              }}
              w={["80%", "70%", "60%", "60%", "50%"]}
              h={["30px", "40px", "60px", "60px", "60px"]}
              variant="filled"
              bgColor={"white"}
              boxShadow={"0px 0px 30px rgba(0,0,0,0.25)"}
              bg={"white"}
              borderRadius={"10px"}
              borderWidth={"0px"}
              fontSize={["12px", "16px", "18px", "18px", "18px"]}
              placeholder="Enter an address and zip code"
            />

            <Box
              cursor={"pointer"}
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              _hover={{
                transform: "scale(1.03)",
              }}
              w={"70px"}
              h={"30px"}
              bg={"#9E9E9E"}
              rounded={"10px"}
              boxShadow={"0px 0px 30px rgba(0,0,0,0.25)"}
              ml={"-100px"}
              zIndex={"1"}
            ></Box>
          </HStack>

          <HStack
            fontFamily={"Raleway"}
            w={"100%"}
            align={"start"}
            justify={"right"}
            mt={"60px"}
            gap={"20px"}
            h={"100%"}
            pr={"50px"}
          >
            <Box
              p={"3"}
              px={"5"}
              bg={"white"}
              rounded={"xl"}
              w={"100%"}
              h={"200px"}
              boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            >
              <VStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
                <Image src={SpikeStar} width={50} height={100} />
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  {" "}
                  Diversified Portfolio{" "}
                </Text>
                <Text fontWeight={"200"} fontSize={"16px"}>
                  {" "}
                  Co-ownership reduces the financial threshold for entry,
                  accelerating wealth growth.{" "}
                </Text>
              </VStack>
            </Box>
            <Box
              p={"3"}
              px={"5"}
              bg={"white"}
              rounded={"xl"}
              w={"100%"}
              h={"200px"}
              boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            >
              <VStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
                <Image src={roundedFlower} width={50} height={100} />
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  Shared Expertise{" "}
                </Text>
                <Text fontWeight={"200"} fontSize={"16px"}>
                  {" "}
                  Pooling resources maximizes opportunities and improves
                  outcomes.
                </Text>
              </VStack>
            </Box>
            <Box
              p={"3"}
              px={"5"}
              bg={"white"}
              rounded={"xl"}
              w={"100%"}
              h={"200px"}
              boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            >
              {" "}
              <VStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
                <Image src={ninjaStarFlower} width={50} height={100} />
                <Text fontWeight={"bold"} fontSize={"20px"}>
                  {" "}
                  Accessible Investment{" "}
                </Text>
                <Text fontWeight={"200"} fontSize={"16px"}>
                  Co-ownership diversifies investments across properties,
                  lowering risk.{" "}
                </Text>
              </VStack>
            </Box>
          </HStack>

          <VStack
            w={"100%"}
            align={"center"}
            justify={"center"}
            mt={"60px"}
            pr={"50px"}
          >
            <Box
              w={"100%"}
              h={"130px"}
              rounded={"10px"}
              boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            ></Box>

            <Box
              w={"80%"}
              h={"400px"}
              mt={"-90px"}
              boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
              rounded={"xl"}
              bgImage={
                "https://source.unsplash.com/windowpanes-at-the-building-B0aCvAVSX8E"
              }
              bgSize={"cover"}
              bgPos={["center", " center", "center", "center", "center"]}
            ></Box>
          </VStack>

          <Box mt={"60px"}>
            <HStack px={"50px"} gap={"20px"}>
              <Image src={dimond} width={50} height={100} />
              <Text fontSize={"50px"} fontFamily={"Raleway"}>
                Why Co-Ownership
              </Text>
            </HStack>

            <Text
              px={"115px"}
              fontSize={"20px"}
              fontFamily={"Raleway"}
              mt={"50px"}
              w={"90%"}
            >
              Co-ownership offers a powerful investment strategy where
              individuals join forces to share ownership of properties, pooling
              resources for greater returns while spreading risk. It's a
              collaborative path to real estate success."
            </Text>
          </Box>

          <VStack
            px={"50px"}
            w={"100%"}
            align={"center"}
            justify={"center"}
            mt={"60px"}
            pr={"50px"}
          >
            <Box
              bgImage={
                "https://source.unsplash.com/white-and-brown-concrete-building-b_79nOqf95I"
              }
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              bgPos={["center", " center", "center", "center", "center "]}
              w={"100%"}
              h={"300px"}
              rounded={"10px"}
              boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
            ></Box>
          </VStack>
        </VStack>

        <Spacer />
        <HStack w={"50%"} h={"100%"}>
          { !isTablet ? <Box
            rounded={"xl"}
            boxShadow={"0px 0px 30px rgba(0,0,0,0.25)"}
            h={"100%"}
            w={"100%"}
            p={5}
          >
            <Box minW={"100"} as="span">
              <HStack>
                <Text
                  as={"span"}
                  fontSize={"35px"}
                  fontFamily={"Raleway"}
                  w={"100%"}
                  fontWeight={"600"}
                >
                  Featured Near You
                </Text>
                <Image src={Star} width={50} height={100} />
              </HStack>
            </Box>

            <VStack
              fontFamily={"Raleway"}
              w={"100%"}
              h={"850px"}
              justify={"start"}
              align={"center"}
              mt={"20px"}
              gap={"27px"}
              transition="all 0.3s ease-in-out"
            >
              {Featured.map(({ id, imgUrl, Price, change }, index) => (
                <Box
                  key={index}
                  cursor={"pointer"}
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    shadow: "0px 0px 20px gray",
                    height: "200%",
                    // use px when dealing with pixel values not %
                  }}
                  w={"100%"}
                  h={"100%"}
                  rounded={"xl"}
                  bgImage={`${imgUrl}`}
                  bgSize={"cover"}
                  bgPos={["center", " center", "center", "center", "center"]}
                >
                  <VStack
                    w={"100%"}
                    h={"100%"}
                    justify={"end"}
                    align={"left"}
                    p={4}
                    gap={"-1000px"}
                  >
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      justify={"left"}
                      align={"start"}
                    >
                      <Box
                        cursor={"pointer"}
                        transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                        _hover={{
                          transform: "scale(1.03)",
                        }}
                        w={"12%"}
                        h={"28px"}
                        bg={"green.200"}
                        rounded={"10px"}
                        boxShadow={"0px 0px 30px rgba(0,0,0,0.25)"}
                        zIndex={"1"}
                      >
                        <HStack
                          w={"100%"}
                          h={"100%"}
                          justify={"center"}
                          align={"center"}
                          textColor={"green.500"}
                        >
                          <FaArrowUp fontSize={"13px"} />
                          <Text
                            fontFamily={"sans-serif"}
                            fontWeight={"500"}
                            fontSize={"17px"}
                            color={"green.500"}
                          >
                            {change}
                          </Text>
                        </HStack>
                      </Box>
                      <Box
                        cursor={"pointer"}
                        transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                        _hover={{
                          transform: "scale(1.03)",
                        }}
                        w={"12%"}
                        h={"28px"}
                        bg={"gray.200"}
                        rounded={"10px"}
                        boxShadow={"0px 0px 30px rgba(0,0,0,0.25)"}
                        zIndex={"1"}
                      >
                        <HStack
                          w={"100%"}
                          h={"100%"}
                          justify={"center"}
                          align={"center"}
                          textColor={"green.500"}
                        >
                          <Text
                            fontFamily={"sans-serif"}
                            fontWeight={"500"}
                            fontSize={"17px"}
                            color={"gray"}
                          >
                            New
                          </Text>
                        </HStack>
                      </Box>
                    </HStack>
                    <Text
                      fontFamily={"sans-serif"}
                      as={"span"}
                      fontSize={"30px"}
                      textShadow={"0px 0px  10px rgba(0,0,0,1)"}
                      w={"100%"}
                      fontWeight={"600"}
                      color={"white"}
                    >
                      {Price}
                    </Text>{" "}
                    <Text
                      fontFamily={"sans-serif"}
                      as={"span"}
                      fontSize={"20px"}
                      textShadow={"0px 0px  60px rgba(0,0,0,1)"}
                      w={"100%"}
                      fontWeight={"600"}
                      color={"white"}
                    >
                      <HStack>
                        <FaStar color="yellow" /> <FaStar color="yellow" />{" "}
                        <FaStar color="yellow" /> <FaStar color="yellow" />{" "}
                        <FaStar />
                      </HStack>
                    </Text>
                    <Box
                      mt={"10px"}
                      cursor={"pointer"}
                      transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                      _hover={{
                        transform: "scale(1.03)",
                        backgroundColor: "#C2FF93",
                      }}
                      w={"190px"}
                      h={"30px"}
                      bg={"white"}
                      rounded={"10px"}
                      boxShadow={"0px 0px 30px rgba(0,0,0,0.25)"}
                    >
                      <HStack
                        w={"100%"}
                        h={"30px"}
                        justify={"center"}
                        align={"center"}
                        textColor={"black"}
                      >
                        <Text
                          fontFamily={"sans-serif"}
                          fontWeight={"500"}
                          fontSize={"16px"}
                          color={"black"}
                        >
                          Buy a Percentage
                        </Text>
                        <FaArrowRight fontSize={"16px"} />
                      </HStack>
                    </Box>
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Box>  : <> </>}
        </HStack>
        
      </HStack>
    </>
  );
};

export default Hero;
