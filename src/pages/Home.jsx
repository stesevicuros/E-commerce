import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Component = styled.div`
	${mobile({ fontSize: '1.5em' })}
`;

export default function Home() {
	return (
		<Component>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
			<Footer />
		</Component>
	);
}
