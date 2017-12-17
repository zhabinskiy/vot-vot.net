import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper, Label, H2 } from '../ui';

const Container = styled.section`
  margin-top: 60px;
  margin-bottom: 40px;

  h2 {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 576px) {
    margin-top: 120px;
    margin-bottom: 90px;
  }
`;

const GrayLabel = Label.extend`
  color: #ababab;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const P = styled.p`
  margin-top: 0;
`;

export default () => (
  <Container>
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} md={9}>
            <Label>Как это работает</Label>
            <H2>
              Мы не сделаем проект вовремя (и&nbsp;вообще не&nbsp;сделаем), но&nbsp;облажаемся —
              по&nbsp;плану
            </H2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <GrayLabel>01.</GrayLabel>
            <P>Вы&nbsp;выбираете список необходимых проблем на проекте и&nbsp;отправляете заявку</P>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <GrayLabel>02.</GrayLabel>
            <P>Оплачиваете счёт, который мы&nbsp;вот-вот выставим</P>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <GrayLabel>03.</GrayLabel>
            <P>
              Мы&nbsp;в&nbsp;точности выполняем план (если, конечно, чего-нибудь не&nbsp;случится)
            </P>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <GrayLabel>04.</GrayLabel>
            <P>
              Ваши коллеги будут уверены, что проект активно делается и&nbsp;вот-вот будет готов
            </P>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Container>
);
