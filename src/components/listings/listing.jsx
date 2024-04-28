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
  Center,
  MdUnsubscribe,
  Button,
  useMediaQuery,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";

import SwirlyStar from "@/Svg/SwirlyStar.svg";
import { FaArrowRight, FaArrowUp, FaExpand } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { LuBoxSelect } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const Listing = () => {
  const Featured = [
    {
      id: 1,
      imgUrl:
        "https://source.unsplash.com/white-and-brown-concrete-building-under-blue-sky-during-daytime-_TPTXZd9mOo",
      Price: "$1,542,964",
      address: "123 Main St",
      change: "9%",
      bed: "2",
      bathrooms: "2",
      size: "100",
      onHover: true,
    },
    {
      id: 2,
      imgUrl:
        "https://source.unsplash.com/white-and-brown-concrete-building-under-blue-sky-during-daytime-5QLCohwVndQ",
      Price: "$742,011",
      address: "123 Main St",
      change: "3%",
      bed: "2",
      bathrooms: "2",
      size: "100",
      onHover: true,
    },
    ,
    {
      id: 3,
      imgUrl:
        "https://source.unsplash.com/brown-and-white-wooden-house-near-green-trees-during-daytime-2gDwlIim3Uw",
      Price: "$1,242,825",
      address: "123 Main St",
      change: "5%",
      bed: "2",
      bathrooms: "2",
      size: "100",
      onHover: true,
    },
    {
      id: 4,
      imgUrl:
        "https://source.unsplash.com/white-and-blue-swimming-pool-Id7u0EkTjBE",

      Price: "$1,442,616",
      address: "123 Main St",
      change: "6%",
      bed: "2",
      bathrooms: "2",
      size: "100",
      onHover: true,
    },
    {
      id: 5,
      imgUrl:
        "https://source.unsplash.com/brown-and-white-concrete-building-MAnVoJlQUvg",

      Price: "$1,442,616",
      change: "6%",
      bed: "2",
      bathrooms: "2",
      size: "800m",
      address: "123 Main St",
      onHover: true,
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);
  return (
    <>
      <HStack
        w={"100%"}
        h={"100%"}
        align={"center"}
        justify={"center"}
        mt={"250px"}
      >
        <HStack px={"50px"} gap={"5px"} textColor={"#393939"}>
          <Image src={SwirlyStar} width={100} height={100} />
          <Text
            fontSize={["40px", "40px", "40px", "50px", "70px"]}
            fontFamily={"Raleway"}
            fontWeight={"500"}
          >
            Featured
          </Text>
        </HStack>
      </HStack>

      <HStack
        columnGap={["20px", "20px", "40px", "40px", "50px"]}
        rowGap={["20px", "20px", "40px", "40px", "50px"]}
        px={["10px", "30px", "50px", "70px", "100px"]}
        wrap={["wrap", "wrap", "wrap", "wrap", "wrap"]}
        w={"100%"}
        h={"100%"}
        align={"center"}
        justify={"center"}
        mt={"125px"}
      >
        {" "}
        {Featured.map(
          (
            { id, imgUrl, Price, change, bed, bathrooms, size, address },
            index,
          ) => (
            <Box
              key={id}
              _hover={{
                transform: "scale(1.05)",
              }}
              transition={"all 0.3s ease-in-out"}
              h={"100%"}
              w={["350px", "275px", "300px", "375px", "400px"]}
              shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
              rounded={"10px"}
            >
              <Box
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
                transition={"all 0.3s ease-in-out"}
                _hover={{
                  height: "250px",
                }}
                h={"200px"}
                w={"100%"}
                shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
                rounded={"10px"}
                bgImage={`${imgUrl}`}
                bgSize={"cover"}
                bgPos={["center", " center", "center", "center", "center"]}
                borderBottomRadius={"10px"}
                borderTopRadius={"0px"}
              >
                {expandedIndex === index && (
                  <HStack
                    transition={"all 0.3s ease-in-out"}
                    w={"100%"}
                    h={"100%"}
                    justify={"end"}
                    align={"start"}
                    p={5}
                    cursor={"pointer"}
                  >
                    {" "}
                    <Box>
                      <FaExpand fontSize={"20px"} color="white" />{" "}
                    </Box>
                  </HStack>
                )}
              </Box>
              <Box w={"100%"} h={"100%"} p={"10px"} px={"20px"}>
                <HStack w={"100%"} justify={"left"} align={"center"}>
                  <Text
                    fontSize={["28px", "28px", "28px", "35px", "40px"]}
                    fontWeight={"400"}
                  >
                    {" "}
                    {Price}
                  </Text>
                  <Box
                    cursor={"pointer"}
                    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                    w={["70px", "70px", "70px", "70px", "70px"]}
                    h={"28px"}
                    bg={"#C2FF93"}
                    rounded={"10px"}
                    zIndex={"1"}
                  >
                    <HStack
                      w={"100%"}
                      h={"100%"}
                      justify={"center"}
                      align={"center"}
                      textColor={"#197C00"}
                    >
                      <FaArrowUp fontSize={"12px"} />
                      <Text
                        fontFamily={"sans-serif"}
                        fontWeight={"500"}
                        fontSize={"17px"}
                        color={"#197C00"}
                      >
                        {change}
                      </Text>
                    </HStack>
                  </Box>
                </HStack>

                <Text
                  mb={"5px"}
                  fontSize={["12px", "12px", "16px", "18px", "18px"]}
                  fontWeight={"400"}
                >
                  {" "}
                  {address}
                </Text>

                <HStack gap={"10px"}>
                  <Icon as={FaBed} />
                  <Text
                    fontSize={["10px", "12px", "12px", "16px", "16px"]}
                    fontWeight={"500"}
                  >
                    {" "}
                    {bed}
                  </Text>

                  <VStack></VStack>

                  <Center height="40px">
                    <Divider orientation="vertical" color={"gray.300"} />
                  </Center>

                  <Icon as={FaShower} />
                  <Text
                    fontSize={["10px", "12px", "12px", "16px", "16px"]}
                    fontWeight={"500"}
                  >
                    {" "}
                    {bathrooms}
                  </Text>

                  <Center height="40px">
                    <Divider orientation="vertical" color={"gray.300"} />
                  </Center>
                  <Icon as={LuBoxSelect} />
                  <Text
                    fontSize={["10px", "12px", "12px", "16px", "16px"]}
                    fontWeight={"500"}
                  >
                    {" "}
                    {size}
                    <sup>2</sup>
                  </Text>
                </HStack>
              </Box>
            </Box>
          ),
        )}
      </HStack>
    </>
  );
};

export default Listing;
