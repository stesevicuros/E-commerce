import { Badge, Menu } from '@material-ui/core';
import {
	Search,
	ShoppingCartOutlined
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 0.9rem;
	cursor: pointer;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgrey;
	display: flex;
	align-items: center;
	margin-left: 2rem;
	padding: 0.3rem;
`;

const Input = styled.input`
	border: none;
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	margin: 0;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	font-size: 0.9rem;
	cursor: pointer;
	margin: 0 1.5rem;
`;

export default function Navbar() {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<Search
							style={{
								color: 'grey',
								fontSize: '1rem'
							}}
						/>
					</SearchContainer>
				</Left>
				<Center>
					<Logo>LAMA.</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge
							badgeContent={4}
							color='primary'>
							<ShoppingCartOutlined color='action' />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
}
