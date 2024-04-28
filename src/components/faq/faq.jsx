import React from "react";
import {
  Box,
  VStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Faq = () => {
  // Define an array of FAQ questions and answers
  const faqData = [
    {
      question: "What is CoInvest?",
      answer:
        "CoInvest is a collaborative platform where individuals join forces to share ownership of properties, pooling resources for greater returns while spreading risk. It's a cooperative path to real estate success.",
    },
    {
      question: "How does CoInvest work?",
      answer:
        "CoInvest enables users to invest in real estate properties collectively. Members pool their resources to purchase properties, share ownership, and reap the benefits of rental income and property appreciation.",
    },
    {
      question: "What are the benefits of using CoInvest?",
      answer:
        "CoInvest offers several benefits, including shared financial responsibility, increased purchasing power, diversified real estate portfolio, and potential tax advantages. Additionally, it fosters collaborative decision-making and reduces individual risk.",
    },
    {
      question: "How can I join CoInvest?",
      answer:
        "Joining CoInvest is easy! Simply sign up on our platform, explore available investment opportunities, and connect with other investors to start co-owning properties together.",
    },
    {
      question: "What types of properties does CoInvest focus on?",
      answer:
        "CoInvest focuses on a variety of real estate properties, including residential homes, commercial buildings, vacation rentals, and more. Our goal is to offer diverse investment options to meet the needs of our members.",
    },
    {
      question: "What happens if I want to sell my share of the property?",
      answer:
        "If you decide to sell your share of the property, CoInvest provides mechanisms for exiting your investment. This may involve finding a buyer within the CoInvest community or selling your share back to the company, depending on the terms outlined in the co-ownership agreement.",
    },
    {
      question: "How does CoInvest handle property management?",
      answer:
        "CoInvest typically appoints a professional property management team to handle day-to-day operations, including tenant screening, rent collection, maintenance, and repairs. This ensures efficient management and optimal performance of the properties.",
    },
  ];

  return (
    <>
      <VStack
        w={"100%"}
        mt={["100px", "200px", "200", "250px", "250px"]}
        justify={"center"}
        align={"center"}
        color={"#393939"}
      >
        <VStack justify={"center"} align={"center"}>
          <Text
            textAlign={"center"}
            fontSize={["16px", "26px", "36px", "46px", "46px"]}
            color={"#393939"}
            fontWeight={"700"}
            w={["100%", "100%", "100%", "100%", "100%"]}
            fontFamily={"Raleway"}
          >
            Frequently Asked Questions
          </Text>
          <Text
            textAlign={"center"}
            fontSize={["12px", "12px", "16px", "23px", "23px"]}
            color={"#393939"}
            fontWeight={"500"}
            w={["100%", "100%", "100%", "100%", "100%"]}
            fontFamily={"Raleway"}
          >
            Everything you need to know in one place
          </Text>
        </VStack>

        <VStack
          w={["95%", "95%", "95%", "90%", "90%"]}
          mt={["50px", "50px", "70px", "70px", "70px"]}
        >
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            w={["100%", "95%", "90%", "70%", "70%"]}
          >
            {/* Map over the faqData array to generate AccordionItems */}
            {faqData.map((faq, index) => (
              <AccordionItem key={index} p={2}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={["16px", "16px", "23px", "23px", "23px"]}
                    >
                      {faq.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  fontSize={["12px", "12px", "16px", "16px", "16px"]}
                >
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </VStack>
    </>
  );
};

export default Faq;
