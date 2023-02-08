import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import {
    Input, Button, Box, FormControl,
    FormLabel,
    Text,
    Badge,
} from '@chakra-ui/react'

export interface User {
    token?: string;
}
interface Props { }
const Login: React.FC<Props> = ({ }) => {
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('');

    const [token, setToken] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
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
            if (data.statusCode === 401) {
                setError(data.message);
            } else {
                handleLogin({ token: data.access_token })
                setToken(user.token)
            }

            // console.log(user);
        } catch (e) {
            console.error(e);

        }
    }

    const onChange = (e: any) => {
        setError(false)
        if (e.target.name === 'username') {
            setUserName(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    return <Box w={3 / 4} mx='auto'>
        <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="username">Username:</FormLabel>
            <Input
                type="text"
                id="username"
                name='username'
                value={username}
                onChange={onChange}
            />
            <FormLabel htmlFor="username">Password:</FormLabel>
            <Input
                type="password"
                id="password"
                name='password'
                value={password}
                onChange={onChange}
            />
            {
                error ? <Badge colorScheme='red'>erreur</Badge> : null
            }
            <Button type={"submit"} mt='4' w='full' colorScheme='blue'>Login</Button>
        </form>
        {/* 
        <Text>
            Le token - {JSON.stringify(token)}
        </Text> */}


    </Box>
}
export default Login;