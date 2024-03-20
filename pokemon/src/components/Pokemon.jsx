
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Grid, HStack, Heading, List, ListItem, Stack, VStack } from '@chakra-ui/react';

const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    const limit = 10;

    useEffect(() => {
        fetchPokemon();
    }, [offset]);

    const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
            const data = await response.json();
            setPokemonList([...pokemonList, ...data.results]);
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
        }
    };

    const loadMorePokemon = () => {
        setOffset(offset + limit);
    };

    return (
        <Box p={4}>
            <Heading as="h1" mb={4}>List of Pokémon</Heading>
            <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gap="10px">

                {pokemonList.map(pokemon => (
                    <Box
                    key={pokemon.name}
                    mb={4}
                    p={2}
                    borderWidth="1px"
                    borderRadius="lg"
                    _hover={{ bg: 'gray.200', cursor: 'pointer' }} // Change background color and cursor on hover
                >
                    <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none', color: 'teal' }}>
                        <Heading as="h2" size="md">{pokemon.name}</Heading>
                    </Link>
                </Box>
                ))}
            </Grid>
            <Button onClick={loadMorePokemon} mt={4}>Load More</Button>
        </Box>
    );
};

export default Pokemon;