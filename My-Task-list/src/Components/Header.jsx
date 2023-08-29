import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";


const Header = () => {
    const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex bg="blue.500" py={4}>
      <Box width="100%" px={8} textAlign="center">
      <Button onClick={toggleColorMode} variant="ghost" color="white">
          Cambiar modo { colorMode === "light" ? "oscuro" : "normal"}
        </Button>
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