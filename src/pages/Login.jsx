import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 1.25rem;
    width: 25%;
    background-color: white;
`;

const Title = styled.h1`
    margin: 0 0 0.625rem;
    font-size: 1.5rem;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 0.625rem 0;
    padding: 0.5rem 1rem;
    outline: none;

    &::placeholder {
        font-family: 'Urbanist', sans-serif;
        letter-spacing: 1px;
    }
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 1rem 1.25rem;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 0.7rem 0 1.4rem;
    border-radius: 0.3rem;
    letter-spacing: 1.5px;
`;

const Link = styled.a`
    margin: 0.5rem 0;
    font-size: 0.75rem;
    text-decoration: underline;
    cursor: pointer;
    color: #2c2cff;
    letter-spacing: 1px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export default function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>SING IN</Title>
                <Form>
                    <Input placeholder='username' />
                    <Input placeholder='password' />
                    <Button>LOGIN</Button>
                    <Link>DON'T REMEMBER MY PASSWORD</Link>
                    <Link>CREATE AN ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}
