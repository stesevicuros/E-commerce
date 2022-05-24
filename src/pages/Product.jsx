import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 3rem;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90 vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 3rem;
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
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    margin: 0 5px;
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 0.6rem;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    padding: 0.9rem;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 0.3rem;

    &:hover {
        background-color: #f8f4f4;
    }
`;

export default function Product() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec venenatis, dolor in finibus malesuada, lectus
                        ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla
                        fermentum vestibulum ex, eget tristique tortor perium
                        ut. Cutabitur elit justo, consequat id condimentum ac,
                        volutpat ornare.
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='darkblue' />
                            <FilterColor color='gray' />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
}
