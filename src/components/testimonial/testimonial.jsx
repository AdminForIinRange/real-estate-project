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
import Swiss from "@/Svg/Swiss.svg";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
const Testimonial = () => {
  const topTestimonial = [
    {
      name: "Mary Smith",
      role: "Landlord",
      image:
        "https://source.unsplash.com/woman-wearing-black-jacket-ySTdW42Y7og",
      review:
        "Partnering with [Your Company Name] led to incredible returns. Their expert guidance and transparent approach made me feel confident. Highly recommended!",
    },
    {
      name: "Bob Johnson",
      role: "Tenant",
      image:
        "https://source.unsplash.com/man-wearing-white-v-neck-shirt-iFgRcqHznqg",
      review:
        "Thanks to [Your Company Name], investing in real estate was easy and accessible. Co-ownership truly is the smart way to invest!",
    },
    {
      name: "Alice Brown",
      role: "Property Manager",
      image:
        "https://source.unsplash.com/woman-in-white-crew-neck-shirt-smiling-IF9TK5Uy-KI",
      review:
        "Diversifying my portfolio with [Your Company Name] was a game-changer. Their co-ownership model minimized risk and maximized returns. Grateful for their expertise!",
    },
  ];

  const BottomTestimonial = [
    {
      name: "Jane Doe",
      role: "Investor",
      image:
        "https://source.unsplash.com/man-wearing-henley-top-portrait-7YVZYZeITc8",
      review:
        "Thanks to [Your Company Name], I now enjoy passive income without the hassle of property management. It's been a game-changer for me.",
    },
    {
      name: "Alice Brown",
      role: "Property Manager",
      image:
        "https://source.unsplash.com/man-standing-near-white-wall-d1UPkiFd04A",
      review:
        "Took my portfolio to the next level. Their platform offers access to high-quality properties and a supportive community of investors. Great experience!",
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
          <Image src={Swiss} width={100} height={100} />
          <Text
            fontSize={["40px", "40px", "40px", "50px", "70px"]}
            fontFamily={"Raleway"}
            fontWeight={"500"}
          >
            Testimonial
          </Text>
        </HStack>
      </HStack>

      <HStack w={"100%"} h={"100%"} align={"center"} justify={"center"} >
        <HStack
          w={"100%"}
          h={"100%"}
          align={"start"}
          justify={"center"}
          gap={["5px", "8px", "12px", "15px", "20px"]}
          mt={"125px"}
          px={["10px", "10px", "30px", "40px", "60px"]}
         
        >
          {topTestimonial.map(({ name, role, image, review }, index) => (
            <Box
              key={index}
              w={["500px", "500px", "500px", "325px", "500px"]}
              h={"300px"}
              shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
              p={["10px", "13px", "16px", "18px", "20px"]}
              rounded={"10px"}
            >
              <HStack w={"100%"} align={"left"} justify={"left"}>
                <Avatar name="Dan Abrahmov" src={`${image}`}>
                  {" "}
                </Avatar>
                <VStack
                  w={"100%"}
                  align={"left"}
                  justify={"left"}
                  gap={"-10px"}
                >
                  <Text
                    fontSize={["12px", "13px", "16px", "18px", "20px"]}
                    fontFamily={"Raleway"}
                    fontWeight={"500"}
                    ml={"10px"}
                    color={"#393939"}
                  >
                    {name}
                  </Text>
                  <Text
                    fontSize={["9px", "10px", "14px", "15px", "16px"]}
                    fontFamily={"Raleway"}
                    fontWeight={"700"}
                    ml={"10px"}
                    color={"#393939"}
                  >
                    {role}
                  </Text>
                </VStack>
              </HStack>

              <HStack
                mt={"20px"}
                mb={"10px"}
                w={"100%"}
                justify={"left"}
                align={"start"}
              >
                <FaQuoteLeft fontSize={"16px"} />{" "}
              </HStack>

              <Text    fontSize={["9px", "11px", "14px", "15px", "16px"]} >{review}</Text>

              <HStack mt={"0px"} w={"100%"} justify={"end"} align={"end"}>
                <FaQuoteRight fontSize={"16px"} />{" "}
              </HStack>
            </Box>
          ))}
        </HStack>
      </HStack>

      <HStack w={"100%"} h={"100%"} align={"center"} justify={"center"}>
        <HStack
          w={"100%"}
          h={"100%"}
          align={"start"}
          justify={"center"}
          gap={"20px"}
          mt={"25px"}
          px={["10px", "30px", "50px", "70px", "100px"]}
        >
          {BottomTestimonial.map(({ name, role, image, review }, index) => (
            <Box
              key={index}
              w={["500px", "500px", "500px", "325px", "500px"]}
              h={"300px"}
              shadow={"0px 0px 20px rgba(0,0,0,0.25)"}
              p={["10px", "13px", "16px", "18px", "20px"]}
              rounded={"10px"}
            >
              <HStack w={"100%"} align={"left"} justify={"left"}>
                <Avatar name="Dan Abrahmov" src={`${image}`}>
                  {" "}
                </Avatar>
                <VStack
                  w={"100%"}
                  align={"left"}
                  justify={"left"}
                  gap={"-10px"}
                >
                  <Text
                    fontSize={["12px", "13px", "16px", "18px", "20px"]}
                    fontFamily={"Raleway"}
                    fontWeight={"500"}
                    ml={"10px"}
                    color={"#393939"}
                  >
                    {name}
                  </Text>
                  <Text
                    fontSize={["9px", "10px", "14px", "15px", "16px"]}
                    fontFamily={"Raleway"}
                    fontWeight={"700"}
                    ml={"10px"}
                    color={"#393939"}
                  >
                    {role}
                  </Text>
                </VStack>
              </HStack>

              <HStack
                mt={"20px"}
                mb={"10px"}
                w={"100%"}
                justify={"left"}
                align={"start"}
              >
                <FaQuoteLeft fontSize={"16px"} />{" "}
              </HStack>

              <Text    fontSize={["9px", "11px", "14px", "15px", "16px"]} >{review}</Text>

              <HStack mt={"0px"} w={"100%"} justify={"end"} align={"end"}>
                <FaQuoteRight fontSize={"16px"} />{" "}
              </HStack>
            </Box>
          ))}
        </HStack>
      </HStack>
    </>
  );
};

export default Testimonial;
