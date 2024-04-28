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
import NinjaStar from "@/Svg/NinjaStar.svg";

const BenefitsinCoOwnership = () => {
  return (
    <>
      <HStack px={"5canv0px"} gap={"5px"}>
        <Text
          fontSize={["30px", "30px", "30px", "50px", "70px"]}
          fontFamily={"Raleway"}
          fontWeight={"500"}
        >
          Benefits in Co-Ownership
        </Text>
        <Image src={NinjaStar} width={90} height={100} />
      </HStack>

      <Text
        px={"50px"}
        fontSize={["16px", "16px", "20px", "20px", "27px"]}
        fontFamily={"Raleway"}
        mt={["40px", "40px", "50px", "50px", "50px"]}
        w={["100%", "90%", "80%", "70%", "70%"]}
        fontWeight={"300"}
      >
        Co-ownership offers a powerful investment strategy where individuals
        join forces to share ownership of properties, pooling resources for
        greater returns while spreading risk. It's a collaborative path to real
        estate success."
      </Text>
    </>
  );
};

export default BenefitsinCoOwnership;
