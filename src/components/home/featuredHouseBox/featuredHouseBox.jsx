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
import { FaArrowUp } from "react-icons/fa6";
import Star from "@/Svg/Star.svg";
import Image from "next/image";
const FeaturedHouseBox = () => {
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
      <Box
        rounded={"xl"}
        boxShadow={"0px 0px 30px rgba(0,0,0,0.25)"}
        h={"100%"}
        w={"100%"}
        p={["5", "5", "4", "4", "5"]}
      >
        <Box minW={"100"} as="span">
          <HStack>
            <Text
              as={"span"}
              fontSize={["12px", "16px", "20px", "30px", "30px"]}
              fontFamily={"Raleway"}
              w={"100%"}
              fontWeight={"600"}
            >
              Featured
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
          gap={["10px", "10px", "10px", "10px", "15px"]}
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
                p={2}
                gap={"-1000px"}
              >
                <HStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
                  <Box
                    cursor={"pointer"}
                    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.03)",
                    }}
                    w={["70px", "70px", "70px", "70px", "70px"]}
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
                </HStack>
                <Text
                  fontFamily={"sans-serif"}
                  as={"span"}
                  fontSize={["12px", "16px", "16px", "20px", "25px"]}
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
                  <HStack></HStack>
                </Text>
              </VStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </>
  );
};

export default FeaturedHouseBox;
