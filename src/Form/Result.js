import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.section`
  position: sticky;
  margin-top: 20px;
  padding: 40px 20px 20px;
  background: #1f1f1f;
  color: #fff;

  @media screen and (min-width: 992px) {
    margin-top: 40px;
  }
`;

const Content = styled.div`
  padding: 0 10px;
`;

const Title = styled.span`
  margin-bottom: 10px;
  padding-right: 40px;
`;

const PriceAnimation = keyframes`
  0% {
    opacity: 0.3;
    transform: translateY(-15px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Price = styled.h3`
  font-size: 46px;
  line-height: 62px;
  margin: 0;
  animation: ${PriceAnimation} 0.2s 0s both;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 36px;
  padding: 22px 0 20px;
  border: 0;
  border-radius: 0;
  background: #fb4132;
  font: bold 18px/21px 'Montserrat', Helvetica Neue, Arial, sans-serif;
  color: #fff;
  outline: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: #e83627;
    will-change: transform;
  }

  &:active {
    transform: scale(0.975);
  }
`;

export default ({ totalPrice, onClick }) => (
  <Container>
    <Content>
      <Title>С учётом новогодней скидки:</Title>
      <Price>{totalPrice || '0'} ₽</Price>
    </Content>
    <Button onClick={onClick}>Заказать</Button>
  </Container>
);
