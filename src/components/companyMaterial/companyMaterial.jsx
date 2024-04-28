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
  Center,
  MdUnsubscribe,
  Button,
  useMediaQuery,
  Divider,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

import { FaFilePdf } from "react-icons/fa";
import inwardCross from "@/Svg/inwardCross.svg";
import Image from "next/image";

const CompanyMaterial = () => {
  const PdfDownload = [
    {
      id: 1,
      title:"Ownership Structure and Responsibilities",
      p:"This section defines the rights and duties of each owner or partner within the company, including decision-making authority and financial obligations."
    },
    {
      id: 2,
      title:"Investment Terms and Conditions",
      p:"It outlines the terms for investing in the company, such as capital contributions, profit-sharing arrangements, and procedures for adding or exiting investors."
    },
    {
      id: 3,
      title:"Management and Governance",
      p:"This part specifies how the company will be managed and governed, including the roles of managers, decision-making processes, and mechanisms for resolving disputes."
    },
  ];
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
          <Image src={inwardCross} width={100} height={100} />
          <Text
            fontSize={["30px", "40px", "40px", "50px", "70px"]}
            fontFamily={"Raleway"}
            fontWeight={"500"}
          >
            Company Material
          </Text>
        </HStack>
      </HStack>

      <HStack w={"100%"} h={"100%"} align={"center"} justify={"center"}>
        <HStack
          fontFamily={"Raleway"}
          w={"100%"}
          h={"100%"}
          align={"start"}
          justify={"center"}
          gap={["10px", "8px", "12px", "15px", "20px"]}
          mt={["85px", "85px", "150px", "200px", "225px"]}
          px={["0px", "10px", "30px", "40px", "60px"]}
          wrap={["wrap", "wrap", "wrap", "wrap", "wrap"]}
        >
          {PdfDownload.map(({ id }) => (
            <Box
              key={id}
              w={["170px", "500px", "500px", "325px", "500px"]}
              h={["225px", "300px", "290px", "250px", "250px"]}
              maxW={["200px", "200px", "250px", "100%", "100%"]}
              shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
              p={"10px"}
              rounded={"10px"}
            >
              <HStack w={"100%"} h={"100%"} align={"end"} justify={"center"}>
                <Box
                  _hover={{
                    cursor: "pointer",
                    shadow: "0px 0px 20px red",
                    transform: "scale(1.05)",
                  }}
                  transition={"all 0.3s ease-in-out"}
                  w={["80%", "80%", "60%", "50%", "50%"]}
                  h={["15%", "15%", "20%", "20%", "20%"]}
                  rounded={"10px"}
                  shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
                >
                  <HStack
                    w={"100%"}
                    h={"100%"}
                    align={"center"}
                    justify={"center"}
                  >
                    <FaFilePdf fontSize={"25px"} />
                    <Text fontWeight={"600"} fontSize={["13px", "13px", "13px", "18px", "20px"]}>
                      {" "}
                      Download{" "}
                    </Text>
                  </HStack>
                </Box>
              </HStack>
            </Box>
          ))}
        </HStack>
      </HStack>
    </>
  );
};

export default CompanyMaterial;
