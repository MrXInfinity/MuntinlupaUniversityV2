import { Box, Container } from "@chakra-ui/react";
import homepageImg from "../assets/HomepageImg.png";

const Homepage = () => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      maxW="5xl"
    >
      <img src={homepageImg} />
    </Container>
  );
};

export default Homepage;
