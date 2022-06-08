import React from 'react';
import { ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	height: 3.75rem;
	${mobile({ height: 'fit-content' })}
`;

const Wrapper = styled.div`
	padding: 0.625rem 1.25rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: '1.5rem 0' })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 0.9rem;
	cursor: pointer;
	letter-spacing: 1.5px;

	${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 2rem;
	padding: 0.3rem;

	${mobile({ marginLeft: '1rem' })}
`;

// const Input = styled.input`
// 	border: none;
// 	outline: none;

// 	&::placeholder {
// 		font-family: 'Urbanist', sans-serif;
// 	}

// 	${mobile({ width: '3.125rem' })}
// `;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	margin: 0;
	letter-spacing: 5px;

	${mobile({
		fontSize: '5.5rem',
		letterSpacing: '3px',
		marginLeft: '0.625rem',
	})}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	${mobile({ flex: 1, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
	font-size: 0.9rem;
	cursor: pointer;
	margin: 0 1.5rem;

	${mobile({
		fontSize: '0.7rem',
		margin: '0 0.625rem',
	})}
`;

export default function Navbar() {
	// const user = useSelector((state) => state.user.currentUser);
	const cart = useSelector((state) => state.cart);

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						{/* <Input placeholder='Search' />
						<Search
							style={{
								color: 'grey',
								fontSize: '1rem',
							}}
						/> */}
					</SearchContainer>
				</Left>
				<Center>
					<Link
						to='/'
						style={{ textDecoration: 'none', color: 'black' }}
					>
						<Logo>LAMA.</Logo>
					</Link>
				</Center>
				<Right>
					{/* {!user && (
						<>
							<Link
								to='/register'
								style={{
									textDecoration: 'none',
									color: 'black',
								}}
							>
								<MenuItem>REGISTER</MenuItem>
							</Link>
							<Link
								to='/login'
								style={{
									textDecoration: 'none',
									color: 'black',
								}}
							>
								<MenuItem>LOGIN</MenuItem>
							</Link>
						</>
					)} */}
					<Link to='/cart'>
						<MenuItem>
							<Badge
								badgeContent={cart.products.length}
								color='primary'
							>
								<ShoppingCartOutlined
									color='action'
									style={{ transform: 'scale(2.5)' }}
								/>
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
}
