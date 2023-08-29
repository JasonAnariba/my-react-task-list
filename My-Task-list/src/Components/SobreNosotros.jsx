import { Box, Heading, Text, Container } from "@chakra-ui/react";

const SobreNosotros = () => {
  return (
    <Container maxW="container.md" mt={8}>
      <Box textAlign="center">
        <Heading as="h1" size="xl" mb={4}>
          Sobre Nosotros
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Somos un equipo apasionado que ha desarrollado esta aplicación de Lista
          de Tareas con el objetivo de hacer tu vida más organizada y productiva.
          Nuestra misión es brindarte una herramienta sencilla y eficiente para
          gestionar tus tareas diarias de manera efectiva.
        </Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Nuestra aplicación te permite crear, editar y eliminar tareas de manera
          fácil, además de marcarlas como completadas para un mejor seguimiento.
          Creemos en la importancia de la gestión del tiempo y la organización
          personal, y por eso creamos esta aplicación para ayudarte a alcanzar tus
          objetivos de manera más eficiente.
        </Text>
        <Text fontSize="lg" color="gray.600">
          Nos enorgullecemos de haber utilizado las últimas tecnologías de
          desarrollo para crear una aplicación moderna, intuitiva y amigable.
          Valoramos tus comentarios y sugerencias para seguir mejorando y
          proporcionarte la mejor experiencia posible.
        </Text>
      </Box>
    </Container>
  );
};

export default SobreNosotros;