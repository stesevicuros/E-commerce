import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
`;

const Arrow = styled.div`
	width: 3rem;
	height: 3rem;
	background-color: #e9e9e9;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${props =>
		props.direction === 'left' && '0.8rem'};
	right: ${props =>
		props.direction === 'right' && '0.8rem'};
	margin: auto;
	cursor: pointer;
	opacity: 0.6;
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.3s ease;
	transform: translateX(
		${props => props.slideIndex * -100}vw
	);
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
	text-align: center;
`;

const Image = styled.img`
	padding-top: 1rem;
	height: 75%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 3rem;
`;

const Title = styled.h1`
	font-size: 4.3rem;
`;

const Desc = styled.p`
	margin: 3rem 2rem 3rem 0;
	font-size: 1.4rem;
	font-weight: 500;
	letter-spacing: 3px;
`;

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = direction => {
		if (direction === 'left') {
			setSlideIndex(
				slideIndex > 0 ? slideIndex - 1 : 2
			);
		} else {
			setSlideIndex(
				slideIndex < 2 ? slideIndex + 1 : 0
			);
		}
	};

	return (
		<Container>
			<Arrow
				direction='left'
				onClick={() => handleClick('left')}>
				<ArrowLeft />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map(item => (
					<Slide bg={item.bg}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>SHOP NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow
				direction='right'
				onClick={() => handleClick('right')}>
				<ArrowRight />
			</Arrow>
		</Container>
	);
}
