import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Box,
  Heading,
  Center,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  return (
    <Flex w="full" align="center" justify="center" mt="32">
      <Box px={10} pt={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my="8" w="lg">
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="joesmith@gmail.com" />
            <FormLabel mt="8">Password</FormLabel>
            <Input type="password" />
            <Center mt="10">
              <Button bgColor="mint" textColor="white" type="submit">
                Submit
              </Button>
            </Center>
          </FormControl>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginForm;
