import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Wrapper, H1 } from '../ui';

const Container = styled.section`
  background: #301526;
  width: 100%;
  padding: 30px 0 50px;

  @media screen and (min-width: 576px) {
    background: #301526 url(${require('./bg@2x.png')}) 50% 50% no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: 992px) {
    padding: 70px 0 130px;

    &:after {
      position: absolute;
      margin-top: 60px;
      left: 32vw;
      display: block;
      content: '';
      width: 150px;
      height: 130px;
      background: url(${require('./block@2x.png')}) 50% 50% no-repeat;
      background-size: cover;
    }
  }
`;

const Logo = styled.img`
  margin-bottom: 18vw;
`;

const Red = styled.span`
  color: #fb4132;
`;

export default () => (
  <Container>
    <Wrapper>
      <Grid>
        <Logo src={require('./logo.svg')} />
        <H1>
          <Red>2018</Red>
          <br />Подарите коллегам надежду в&nbsp;Новом году
        </H1>
      </Grid>
    </Wrapper>
  </Container>
);
