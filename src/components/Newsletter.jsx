import { Send } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	height: 60vh;
	background-color: #fcf5f5;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	${mobile({ fontSize: '1.5em', height: '45vh' })}
`;

const Title = styled.h1`
	font-size: 4.4rem;
	margin: 1.2rem;

	${mobile({ fontSize: '8rem' })}
`;

const Desc = styled.div`
	font-size: 1.5rem;
	font-weight: 300;
	margin-bottom: 1.2rem;

	${mobile({ textAlign: 'center', fontSize: '3rem' })}
`;

const InputContainer = styled.div`
	width: 50%;
	height: 2.5rem;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgrey;
	border-radius: 0.2rem;

	${mobile({ width: '80%', height: 'fit-content' })}
`;

const Input = styled.input`
	padding: 0.75rem 1.5rem;
	border: none;
	flex: 8;
	font-family: 'Urbanist', sans-serif;
	font-weight: 500;
	outline: none;

	${mobile({
		fontSize: '3rem',
		padding: '4rem 2rem',
		flex: '6',
	})}

	&::placeholder {
		font-family: 'Urbanist', sans-serif;
		letter-spacing: 3px;
		font-weight: 600;
		color: #c9c9c9;

		${mobile({ letterSpacing: '6px' })}
	}
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1.3;
	border: 2px;
	border-radius: 0.2rem;
	cursor: pointer;
	margin: 2px;
	background-color: teal;
	color: white;

	${mobile({ fontSize: '3rem', flex: '3' })}
`;

const Optimize = styled.div`
	${mobile({ transform: '(2.5)' })}
`;

export default function Newsletter() {
	const [email, setEmail] = React.useState('');

	function handleClick(e) {
		setEmail('');
	}

	return (
		<Container>
			<Title>Newsletter</Title>
			<Desc>Get timely updates from your favorite products.</Desc>
			<InputContainer>
				<Input
					placeholder='Your email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Button onClick={handleClick}>
					<Optimize>
						<Send />
					</Optimize>
				</Button>
			</InputContainer>
		</Container>
	);
}
