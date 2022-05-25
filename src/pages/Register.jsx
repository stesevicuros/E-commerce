import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 1.25rem;
    width: 40%;
    background-color: white;

    ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 1.25rem 0.625rem 0 0;
    padding: 0.5rem 1rem;
    outline: none;

    &::placeholder {
        font-family: 'Urbanist', sans-serif;
        letter-spacing: 1px;
    }
`;

const Agreement = styled.span`
    font-size: 0.75rem;
    margin: 1.25rem 0;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 1rem 1.25rem;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 0.625rem 0;
    border-radius: 0.4rem;
    letter-spacing: 1.5px;
`;

const Link = styled.a`
    width: 100%;
    margin: 1.2rem 0 0;
    font-size: 0.75rem;
    text-decoration: underline;
    cursor: pointer;
    color: #2c2cff;
    letter-spacing: 1px;
`;

export default function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='name' />
                    <Input placeholder='last name' />
                    <Input placeholder='username' />
                    <Input placeholder='email' />
                    <Input placeholder='password' />
                    <Input placeholder='confirm password' />
                    <Agreement>
                        By creating an account, I consent to the processing og
                        my personal data in accordance with the{' '}
                        <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                    <Link>ALREADY HAVE AN ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}
