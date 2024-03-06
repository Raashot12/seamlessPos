import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      className="footer mt={5}"
      data-testid={"_footer"}
      fontSize="1.1em"
      bg="blue.100"
      style={{fontFamily: '"Rajdhani", sans-serif'}}
    >
      <Box as="h5">
        &copy; {new Date().getFullYear()} <span>SeamlessPOS.</span>
      </Box>
      <h5>All rights reserved</h5>
    </Box>
  )
};

export default Footer;
