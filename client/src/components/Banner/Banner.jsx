import { Box, Button, Flex, Text, Heading } from "@chakra-ui/react";
import { setLogout } from "state";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Banner = () => {
  return (
    <Box
      w="full"
      bgGradient="radial-gradient(85.63% 780.35% at 17.15% 17.4%, #C8DDC0 0%, #9EE9A5 100%)"
      h="80"
      pt="6"
      px="28"
    >
      <Heading color="white" mb={20}>
        Connecting eager developers and growing businesses
      </Heading>
      <Text color="white" mb={2}>
        As a business - expand your platform and gain a website to streamline
        processes
      </Text>
      <Text color="white">
        As a developer - build your experience and develop a website to
        accelerate your career
      </Text>
    </Box>
  );
};

export default Banner;
