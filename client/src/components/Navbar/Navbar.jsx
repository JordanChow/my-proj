import { Box, Button, Flex, Text, Spacer, Link, Icon } from "@chakra-ui/react";
import { setLogout } from "state";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiAccountCircleLine } from "react-icons/ri";

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
      background="white"
    >
      {/* TODO: add logo */}
      <Link href={"/"}>logo</Link>

      <Spacer />
      {user ? (
        <Icon as={RiAccountCircleLine} boxSize={6} />
      ) : (
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Button onClick={() => navigate("/login")} variant="ghost" mr={6}>
            sign in
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            background="mint"
            color="white"
          >
            <Text mb="1">sign up</Text>
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
