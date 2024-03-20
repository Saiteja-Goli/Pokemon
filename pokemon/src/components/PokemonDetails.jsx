import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Center,Flex, VStack, Heading, Text, Image, Stack, Divider, Button, ButtonGroup, CardFooter, Card, CardBody } from '@chakra-ui/react';

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        fetchPokemonDetails();
    }, [id]);

    const fetchPokemonDetails = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemonDetails(data);
        } catch (error) {
            console.error('Error fetching Pokemon details:', error);
        }
    };

    if (!pokemonDetails) {
        return <Box p={4}>Loading...</Box>;
    }

    return (
        (
            <Center>
                <Box>
                    <Flex>
                        {/* Left side with the image */}
                        <Box mr={8}>
                            <Image src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} borderRadius='lg' />
                        </Box>
                        {/* Right side with the information */}
                        <Stack spacing='3'>
                            <Heading size="lg">{pokemonDetails.name}</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                {/* Displaying weight */}
                                Weight: {pokemonDetails.weight}
                            </Text>
                            <Text color='blue.600'>
                                {/* Displaying base experience */}
                                Base Experience: {pokemonDetails.base_experience}
                            </Text>
                            {/* Displaying types */}
                            <Text color='blue.600'>
                                Types:
                                {pokemonDetails.types.map((type, index) => (
                                    <Text key={index}>{type.type.name}</Text>
                                ))}
                            </Text>
                            {/* Displaying abilities */}
                            <Text color='blue.600'>
                                Abilities:
                                {pokemonDetails.abilities.map((ability, index) => (
                                    <Text key={index}>{ability.ability.name}</Text>
                                ))}
                            </Text>
                            {/* Displaying stats */}
                            <Text color='blue.600'>
                                Stats:
                                {pokemonDetails.stats.map((stat, index) => (
                                    <Text key={index}>{stat.stat.name}: {stat.base_stat}</Text>
                                ))}
                            </Text>
                        </Stack>
                    </Flex>
                    <Divider />
                </Box>
            </Center>));
};

export default PokemonDetails;
