import { Box, Heading, Text, Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW="container.md" mt={8}>
      <Box textAlign="center">
        <Heading as="h1" size="xl" mb={4}>
          Bienvenido a mi App de lista de tareas
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6}>
          ¡Bienvenido a esta aplicación diseñada para ayudarte a mantener un
          seguimiento de tus tareas diarias! Aquí puedes crear, editar y eliminar
          tareas según tus necesidades. Organiza tus responsabilidades de manera
          eficiente y mantén un registro de tus actividades pendientes y
          completadas. ¡Comienza a utilizar la aplicación ahora y haz tu vida más
          organizada y productiva!
        </Text>
      </Box>
    </Container>
  );
};

export default Home;