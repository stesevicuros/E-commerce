import styled from 'styled-components';
import React from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    ${mobile({ padding: '0', flexDirection: 'column' })}
`;

export default function Categories() {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    );
}
