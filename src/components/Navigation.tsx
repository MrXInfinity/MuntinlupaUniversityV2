import { Box, Button, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import { Outlet } from "react-router";
import iconImg from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Container
      maxW="full"
      p={0}
    >
      <Box
        bg="gray.100"
        display="flex"
        flexDirection="row"
        px={8}
        py={4}
      >
        <Flex>
          <img
            src={iconImg}
            style={{ height: "70px", width: "70px" }}
          />
          <Flex
            justifyContent="center"
            direction="column"
            fontFamily="Montserrat"
            fontWeight={500}
          >
            <Text color="blue.800">Muntinlupa</Text>
            <Text color="yellow.500">University</Text>
          </Flex>
        </Flex>
        <Spacer />
        <Flex
          justifyContent="center"
          alignItems="center"
          gap={6}
        >
          <Button variant="link">
            <NavLink to="/">Home</NavLink>
          </Button>
          <Button variant="link">
            <NavLink to="/courses">Courses</NavLink>
          </Button>
          <Button variant="link">
            <NavLink to="/courses">About Us</NavLink>
          </Button>
          <Button>
            <NavLink to="/signin_account">Login</NavLink>
          </Button>
          <Button variant="outline">
            <NavLink to="/application">Apply</NavLink>
          </Button>
        </Flex>
      </Box>
      <Outlet />
    </Container>
  );
};

export default Navigation;
