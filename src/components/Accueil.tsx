
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Stack,
    HStack,
    Center,
    IconButton,
    Heading,
    useBreakpointValue,
} from '@chakra-ui/react'
import { GrLogout } from 'react-icons/Gr'
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const Accueil = () => {
    
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <>
            <Box as="section" pb={{ base: '12', md: '24' }}>
                <Box as="nav" bg="bg-surface" boxShadow="sm">
                    <Container py={{ base: '4', lg: '5' }}>
                        <HStack spacing="10" justify="space-between">
                            {isDesktop ? (
                                <Flex justify="space-between" flex="1">
                                    <ButtonGroup variant="link" spacing="20">
                                        {['About', 'How it works', 'Features'].map((item) => (
                                            <Button key={item}>{item}</Button>
                                        ))}
                                        <HStack>
                                            <IconButton icon={<GrLogout />} aria-label={''} />
                                        </HStack>
                                    </ButtonGroup>
                                    <HStack spacing='5'>
                                        <Button variant="ghost"></Button>
                                        <Button variant="primary" border='3'>Sign up</Button>
                                    </HStack>
                                </Flex>
                            ) : (
                                <IconButton
                                    variant="ghost"
                                    icon={<GrLogout fontSize="1.25rem" />}
                                    aria-label="Open Menu"
                                    border='4px'
                                />
                            )}
                        </HStack>
                    </Container>
                </Box>
            </Box>
            <Stack spacing='6'>
                <Center>
                    <Heading as='h2' size='3xl'>Big Transfers, Bigger <br />
                        <Center>Impact</Center>
                    </Heading>
                </Center>
            </Stack>
            <Stack spacing='6' pt='12'>
                <Center>
                    <Heading as='h2' size='md'>
                        The simplest way to send big ideas around the word,and <br />
                        <Center>discover new creative work while you're at it.</Center>
                    </Heading>
                </Center>
            </Stack>
            <Player // set the ref to your class instance
                autoplay={true}
                loop={true}
                controls={true}
                speed={0.7}
                src="https://assets5.lottiefiles.com/packages/lf20_fWd36IjnsR.json"
                /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
                style={{ height: '450px', width: '500px' }}
            >
               
            </Player>
        </>
    )
}
export default Accueil