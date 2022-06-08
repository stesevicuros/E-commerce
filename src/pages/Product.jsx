import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { addProduct } from '../redux/cartRedux';
import { publicRequest } from '../requestMethods';
import { mobile } from '../responsive';

const Container = styled.div`
	${mobile({ fontSize: '2em' })}
`;

const Wrapper = styled.div`
	padding: 3rem;
	display: flex;

	${mobile({ padding: '0.625rem', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;
	height: 90 vh;
	object-fit: cover;

	${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 3rem;

	${mobile({ padding: '0.625rem' })}
`;

const Title = styled.h1`
	margin: 0;
	font-weight: 300;
`;

const Desc = styled.p`
	margin: 1.25rem 0;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 2.5rem;
`;

const FilterContainer = styled.div`
	width: 50%;
	margin: 1.9rem 0;
	display: flex;
	justify-content: space-between;

	${mobile({ width: '100%' })}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.span`
	font-size: 1.25rem;
	font-weight: 200;
`;

const FilterColor = styled.div`
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0 5px;
	cursor: pointer;
`;

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
	border-radius: 0.5rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

// const Amount = styled.span`
// 	margin: 0 5px;
// 	width: 1.9rem;
// 	height: 1.9rem;
// 	border-radius: 0.6rem;
// 	border: 1px solid teal;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// `;

const Button = styled.button`
	padding: 0.9rem;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	border-radius: 0.3rem;
	letter-spacing: 1px;

	&:hover {
		background-color: #f8f4f4;
	}
`;

export default function Product() {
	const location = useLocation();
	const id = location.pathname.split('/')[2];

	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState('');
	const [size, setSize] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get('/products/find/' + id);
				setProduct(res.data);
			} catch {}
		};
		getProduct();
	}, [id]);

	function handleQuantity(type) {
		if (type === 'dec') {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	}

	const handleClick = () => {
		dispatch(addProduct({ ...product, quantity, color, size }));
	};

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src={product.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Desc>{product.desc}</Desc>
					<Price>$ {product.price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							{product.color &&
								product.color.map((c) => (
									<FilterColor
										color={c}
										key={c}
										onClick={() => setColor(c)}
									/>
								))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize
								onChange={(e) => setSize(e.target.value)}
							>
								{product.size &&
									product.size.map((s) => (
										<FilterSizeOption key={s}>
											{s}
										</FilterSizeOption>
									))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							{/* <Remove onClick={() => handleQuantity('dec')} />
							<Amount>{quantity}</Amount>
							<Add onClick={() => handleQuantity('inc')} /> */}
						</AmountContainer>
						<Button onClick={handleClick}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
}
