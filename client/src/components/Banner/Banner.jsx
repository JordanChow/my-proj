import { Box, Text, Heading } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      w="full"
      bgGradient="radial-gradient(85.63% 780.35% at 17.15% 17.4%, #C8DDC0 0%, #9EE9A5 100%)"
      h="80"
      pt="6"
      px="28"
    >
      <Heading color="white" mb={8}>
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
