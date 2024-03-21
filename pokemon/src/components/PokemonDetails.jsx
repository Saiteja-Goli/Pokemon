import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Center, Heading, Text, Image, Stack,Card, CardBody, Wrap, WrapItem, Tag } from '@chakra-ui/react';

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
                <Card width={"25%"} mt={'20px'}>
                    <CardBody>
                        <Center>
                            <Image src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} borderRadius='lg' w='60%' />
                        </Center>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{pokemonDetails.name}</Heading>
                            <Text color='blue.600'>Weight: {pokemonDetails.weight}</Text>
                            <Text color='blue.600'>Base Experience: {pokemonDetails.base_experience}</Text>
                            <Box display="inline-block">
                                <Text color='blue.600' display="inline-block">Types : {"  "}</Text>{"  "}
                                <Wrap spacing="2" display="inline-block">
                                    {pokemonDetails.types.map((type, index) => (
                                        <WrapItem key={index}>
                                            <Tag colorScheme="blue">{type.type.name}</Tag>
                                        </WrapItem>
                                    ))}
                                </Wrap>
                            </Box>

                            <Text color='blue.600'>Stats:</Text>
                            <Stack spacing="1">
                                {pokemonDetails.stats.map((stat, index) => (
                                    <Text key={index}>
                                        {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}
                                    </Text>
                                ))}
                            </Stack>
                        </Stack>
                    </CardBody>
                </Card>
            </Center>

        ));
};

export default PokemonDetails;
