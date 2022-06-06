import { Badge, ShoppingCart } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	height: 3.75rem;
	${mobile({ height: '3.125rem' })}
`;

const Wrapper = styled.div`
	padding: 0.625rem 1.25rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: '0.625rem 0' })}
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
	border: 0.5px solid lightgrey;
	display: flex;
	align-items: center;
	margin-left: 2rem;
	padding: 0.3rem;

	${mobile({ marginLeft: '1rem' })}
`;

const Input = styled.input`
	border: none;
	outline: none;

	&::placeholder {
		font-family: 'Urbanist', sans-serif;
	}

	${mobile({ width: '3.125rem' })}
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	margin: 0;
	letter-spacing: 5px;

	${mobile({
		fontSize: '1.5rem',
		letterSpacing: '3px',
		marginLeft: '0.625rem',
	})}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
	font-size: 0.9rem;
	cursor: pointer;
	margin: 0 1.5rem;
	letter-spacing: ${(props) => (props.type === 'card' ? '0px' : '4px')};

	${mobile({
		fontSize: '0.7rem',
		margin: '0 0.625rem',
		letterSpacing: '0px',
	})}
`;

export default function Navbar() {
	const user = useSelector((state) => state.user.currentUser);
	const cart = useSelector((state) => state.cart);

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					{/* <SearchContainer>
						<Input placeholder='Search' />
						<Search
							style={{
								color: 'grey',
								fontSize: '1rem',
							}}
						/>
					</SearchContainer> */}
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
					{!user && (
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
					)}
					<Link to='/cart'>
						<MenuItem type='card'>
							<Badge
								badgeContent={cart.products.length}
								color='primary'
							>
								<ShoppingCart color='action' />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
}
