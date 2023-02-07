import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './../context/UserContext';
import {
    Input, Button, Box, FormControl,
    FormLabel,
    Text,
} from '@chakra-ui/react'

export interface User {
    token?: string;
}
interface Props { }
const Login: React.FC<Props> = ({ }) => {
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('');

    const [token, setToken] = useState<string>('')

    const { user, handleLogin } = useContext(UserContext)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const userData = JSON.stringify({ username, password });
        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                body: userData,
                headers: {
                    "content-type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data)
            console.log(user);
            handleLogin({ token: data.access_token })
            setToken(user.token)
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

        <Text>
            Le token - {JSON.stringify(token)}
        </Text>
    </Box>
}
export default Login;