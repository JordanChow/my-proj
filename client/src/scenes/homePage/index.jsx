import { Text, VStack } from "@chakra-ui/react";
import Post from "components/Post/Post";
import Banner from "components/Banner/Banner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <VStack spacing={10} mx={28} mt={10}>
        <Post />
        <Post />
        <Post />
      </VStack>
    </>
  );
};

export default HomePage;
