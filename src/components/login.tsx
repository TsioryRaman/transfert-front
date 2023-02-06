import React, { useState } from 'react';
import {
    Input, Button, Box, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
interface Props { }
const Login: React.FC<Props> = ({ }) => {
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('');
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = JSON.stringify({ username, password });
        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                body: user,
                headers: {
                    "content-type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data)
        } catch (e) {
            console.error(e);
        }
    }

    return <Box w={3 / 4} mx='auto'>
        <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="username">Username:</FormLabel>
            <Input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUserName(event.target.value)}
            />
            <FormLabel htmlFor="username">Password:</FormLabel>
            <Input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button type={"submit"} mt='4' w='full' colorScheme='blue'>Login</Button>
        </form>
    </Box>
}
export default Login;