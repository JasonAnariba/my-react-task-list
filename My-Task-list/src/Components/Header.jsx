import { Flex, Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex bg="blue.500" py={4}>
      <Box width="100%" px={8} textAlign="center">
        <Heading as="h1" size="xl" color="white">
          Lista de Tareas
        </Heading>
        <Heading as="h2" size="md" color="white" mt={2}>
          Items
        </Heading>
      </Box>
    </Flex>
  );
};

export default Header;