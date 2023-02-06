import { Box, Button, Flex, Text, Spacer, Link } from "@chakra-ui/react";
import { setLogout } from "state";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <Flex
      w="full"
      as="header"
      align={"center"}
      justify={"center"}
      h="16"
      py="4"
      px="12"
      pos="sticky"
      top="0"
      zIndex={999}
    >
      <Link href={"/"}>logo</Link>

      <Spacer />
      {user ? (
        <Text>Profile</Text>
      ) : (
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Button variant="ghost" mr={6}>
            sign in
          </Button>
          <Button background="mint" color="white">
            <Text mb="1">sign up</Text>
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
