import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.300"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>

          <Link to="/">Pokédex</Link>
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Navbar;
