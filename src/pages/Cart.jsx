import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';
import { removeProduct } from '../redux/cartRedux';
import { Remove } from '@mui/icons-material';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 1.25rem;

	${mobile({ padding: '0.625rem' })}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
	margin: 0;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.25rem;
`;

// const TopButton = styled.button`
// 	font-weight: 600;
// 	cursor: pointer;
// 	white-space: nowrap;
// 	overflow: hidden;
// 	border: ${(props) => props.type === 'filled' && 'none'};
// 	padding: ${(props) => (props.type === 'filled' ? '0.75rem' : '0.625rem')};
// 	background-color: ${(props) =>
// 		props.type === 'filled' ? 'black' : 'transparent'};
// 	color: ${(props) => props.type === 'filled' && 'white'};
// 	transition: all 0.5s ease;

// 	&:hover {
// 		background-color: ${(props) =>
// 			props.type === 'filled' ? 'black' : '#31abab29'};
// 		color: ${(props) => (props.type === 'filled' ? '#ffc3c3' : 'black')};
// 	}
// `;

// const TopTexts = styled.div`
// 	${mobile({ display: 'none' })}
// `;

// const TopText = styled.span`
// 	text-decoration: underline;
// 	cursor: pointer;
// 	margin: 0 0.625rem;
// `;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid lightgrey;

	${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	width: 12.5rem;
`;

const Details = styled.div`
	padding: 1.25rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 1.25rem 0;
`;

// const ProductAmount = styled.div`
// 	font-size: 1.5rem;
// 	margin: 5px;

// 	${mobile({ margin: '5px 1rem ' })}
// `;

const ProductPrice = styled.div`
	font-size: 2rem;
	font-weight: 200;

	${mobile({ marginBottom: '1.25rem' })}
`;

// const Hr = styled.hr`
// 	background-color: #eee;
// 	border: none;
// 	height: 1px;
// `;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgrey;
	border-radius: 0.7rem;
	padding: 1.25rem 1.5rem 1.5rem;
	height: fit-content;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 2rem 0;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '1.5rem'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	padding: 0.625rem;
	background-color: black;
	color: white;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.5s ease;

	&:hover {
		color: #ffc3c3;
	}
`;

export default function Cart() {
	const cart = useSelector((state) => state.cart);
	const [stripeToken, setStripeToken] = useState(null);
	const history = useNavigate();
	const dispatch = useDispatch();

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await userRequest.post('/checkout/payment', {
					tokenId: stripeToken.id,
					amount: cart.total * 100,
				});
				history.push('/success', { data: res.data });
			} catch {}
		};
		stripeToken && makeRequest();
	}, [stripeToken, cart.total, history]);

	function onRemoveProduct(product) {
		dispatch(removeProduct(product));
	}

	let totalPrice = cart.products.reduce((a, b) => a + parseInt(b.price), 0);

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>YOUR CART</Title>
				<Top></Top>
				<Bottom>
					<Info>
						{cart.products &&
							cart.products.map((product) => (
								<Product>
									<ProductDetail>
										<Image src={product.img} />
										<Details>
											<ProductName>
												<b>Product:</b> {product.title}
											</ProductName>
											<ProductId>
												<b>ID:</b> {product.id}
											</ProductId>
											<ProductColor
												color={product.color}
											/>
											<ProductSize>
												<b>Size:</b> {product.size}
											</ProductSize>
										</Details>
									</ProductDetail>
									<ProductAmountContainer>
										<div
											onClick={() =>
												onRemoveProduct(product)
											}
											style={{
												cursor: 'pointer',
												fontWeight: '500',
											}}
										>
											Remove
										</div>
									</ProductAmountContainer>
									<PriceDetail>
										<ProductPrice>
											$ {product.price * product.quantity}
										</ProductPrice>
									</PriceDetail>
								</Product>
							))}
						{/* <Hr /> */}
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>
								Estimated Shipping
							</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type='total'>
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
						</SummaryItem>
						<StripeCheckout
							name='Lama Shop'
							image='https://i.ibb.co/0Q532zC/pngegg.png'
							billingAddress
							shippingAddress
							description={`Your total is $${totalPrice}`}
							amount={totalPrice * 100}
							token={onToken}
							stripeKey={KEY}
						>
							<Button>CHECKOUT NOW</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
}
