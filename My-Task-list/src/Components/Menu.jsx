

import { Link as RouterLink } from "react-router-dom";
import { List, ListItem, Text } from "@chakra-ui/react";

const Menu = () => {
  return (
    <div>
      <nav>
        <List display="flex" justifyContent="center" p={4}>
          <ListItem>
            <Text fontSize="lg" fontWeight="bold" mr={4}>
              <RouterLink to="/" color="blue.500">
                Home
              </RouterLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="lg" fontWeight="bold" mr={4}>
              <RouterLink to="/App" color="blue.500">
               Lista de Tareas
              </RouterLink>
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="lg" fontWeight="bold" mr={4}>
              <RouterLink to="/sobre-nosotros" color="blue.500">
                Sobre Nosotros
              </RouterLink>
            </Text>
          </ListItem>
        </List>
      </nav>
    </div>
  );
};

export default Menu;