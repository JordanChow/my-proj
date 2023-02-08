import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Flex w="full" align="center" justify="center" mt="auto">
      <Box p={6} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my="8">
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
