import React from "react";
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

import Image from "next/image";
import SpikeStar from "@/Svg/SpikeStar.svg";
import roundedFlower from "@/Svg/roundedFlower.svg";

import ninjaStarFlower from "@/Svg/ninjaStarFlower.svg";
const IdeaBox = () => {
  const ideaList = [
    {
      img: SpikeStar,
      title: "Diversify",
      text: "Co-ownership reduces the financial threshold for entry, accelerating wealth growth.",
    },
    {
      img: roundedFlower,
      title: "Shared",
      text: "Pooling resources maximizes opportunities and improves outcomes.",
    },
    {
      img: ninjaStarFlower,
      title: "Socially",
      text: "Co-ownership diversifies investments across properties, lowering risk.",
    },
  ];

  const ideaBoxes = ideaList.map((idea, index) => {
    return (
      <Box
        key={index}
        p={"3"}
        px={["2", "2", "2", "5", "5"]}
        bg={"white"}
        rounded={"xl"}
        w={"100%"}
        h={["170px", "170px", "200px", "200px", "200px"]}
        boxShadow={"0px 0px 20px rgba(0,0,0,0.25)"}
      >
        <VStack w={"100%"} h={"100%"} justify={"left"} align={"start"}>
          <Box w={["35px", "35px", "50px", "50px", "100px"]}>
            <Image src={idea.img} />
          </Box>

          <Text
            fontWeight={"bold"}
            fontSize={["16px", "16px", "20px", "16px", "20px"]}
          >
            {idea.title}{" "}
          </Text>
          <Text
            fontWeight={"400"}
            fontSize={["10px", "12px", "15px", "13px", "16px"]}
          >
            {idea.text}{" "}
          </Text>
        </VStack>
      </Box>
    );
  });

  return <>{ideaBoxes}</>;
};

export default IdeaBox;
