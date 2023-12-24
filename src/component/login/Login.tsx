// components/LoginPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { login } from '../../services/products.service.tsx';
import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

// Define styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
const FormErrorText = styled.p<{ isError: boolean }>`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ isError }) => isError ? 'red' : 'green'};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const useLoginMutation = (): UseMutationResult<
  AxiosResponse<{
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token?: string;
  }>,
  AxiosError,
  { username: string; password: string }
> => {
  return useMutation(login);
};


const Login: React.FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const loginMutation = useLoginMutation();


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (username?.trim()?.length > 0 && password?.trim()?.length > 0) {
      setFormError('');
      setLoading(true);
      try {
        const response = await loginMutation.mutateAsync({
          username,
          password,
        });
        if (response) {
          localStorage.setItem('userData', JSON.stringify(response));
          setLoading(false);
          navigate('/')
        } else {
          console.log(response);
          setLoading(false);

        }
      } catch (error) {
        error.message && setFormError(error.message);
        setLoading(false);
        console.error(error);
      }
    } else {
      setFormError('Please enter username and password.');
    }
  };


  return (
    <Container>
      <LoginForm onSubmit={handleLogin}>
        <FormTitle>Login</FormTitle>
        {formError && <FormErrorText isError={true}>{formError}</FormErrorText>}
        {<FormErrorText isError={false}>`Please enter usename : 'ggude7'
          password : MWwlaeWcOoF6`</FormErrorText>}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={loading}>{loading ? "Login..." : "Login"}</Button>
      </LoginForm>
    </Container>
  );
};

export default Login;
