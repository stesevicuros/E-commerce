import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	display: flex;

	${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 1.25rem;
`;

const Logo = styled.h1`
	letter-spacing: 4px;

	${mobile({ fontSize: '2.5rem' })}
`;

const Desc = styled.p`
	margin: 1.3rem 0;
	${mobile({ fontSize: '2rem' })}
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1.25rem;

	${mobile({
		width: '4.5rem',
		height: '4.5rem',
	})}
`;

const Center = styled.div`
	flex: 1;
	padding: 1.25rem;

	${mobile({ display: 'none' })}
`;

const Title = styled.h3`
	letter-spacing: 1.5px;
	margin: 1.85rem 0 3.09rem;

	${mobile({ fontSize: '2.5rem' })}
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 0.85rem;
`;

const Right = styled.div`
	flex: 1;
	padding: 1.25rem;

	${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
	margin-bottom: 1.25rem;
	display: flex;
	align-items: center;

	${mobile({ fontSize: '2rem' })}
`;

const Payment = styled.img`
	width: 50%;
`;

export default function Footer() {
	return (
		<Container>
			<Left>
				<Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
					<Logo>LAMA.</Logo>
				</Link>
				<Desc>
					There are many variations of passages of Lorem Ipsum
					available, but the majority have suffered alteration in some
					form, by injected humor, or randomized words which don't
					look even slightly believable.
				</Desc>
				<SocialContainer>
					<SocialIcon color='365999'>
						<Facebook />
					</SocialIcon>
					<SocialIcon color='E4405F'>
						<Instagram />
					</SocialIcon>
					<SocialIcon color='55ACEE'>
						<Twitter />
					</SocialIcon>
					<SocialIcon color='E60023 '>
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<Link
						to='/'
						style={{ textDecoration: 'none', color: 'black' }}
					>
						<ListItem>Home</ListItem>
					</Link>
					<Link
						to='/cart'
						style={{ textDecoration: 'none', color: 'black' }}
					>
						<ListItem>Cart</ListItem>
					</Link>
					<Link
						to='/products/Man'
						style={{ textDecoration: 'none', color: 'black' }}
					>
						<ListItem>Man Fashion</ListItem>
					</Link>
					<Link
						to='/products/Women'
						style={{ textDecoration: 'none', color: 'black' }}
					>
						<ListItem>Woman Fashion</ListItem>
					</Link>

					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: '15px' }} />
					622 Dixie Path, South Tobinchester 98336
				</ContactItem>

				<ContactItem>
					<Phone style={{ marginRight: '15px' }} />
					+1 234 56 78
				</ContactItem>

				<ContactItem>
					<MailOutline style={{ marginRight: '15px' }} />
					contact@lama.dev
				</ContactItem>
				<Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
			</Right>
		</Container>
	);
}
