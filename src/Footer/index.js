import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper } from '../ui';

const Container = styled.section`
  background-color: #1F1F1F;
  color: white;
  padding: 80px 0 60px 0;
  font-size: 18px;
`;

const Social = styled.div`
  text-align: left;
  margin-top: 30px;

  @media screen and (min-width: 992px) {
    margin-top: 0px;
    text-align: right;
  }
`;

const Link = styled.a`
  color: rgba(255, 255, 255, .6);

  &:hover {
    color: white;
  }
`;

const Copyright = styled.div`
  margin-top: 80px;
  color: rgba(255, 255, 255, .6);

  @media screen and (min-width: 992px) {
    margin-top: 130px;
  }
`;

const Logo = styled.img`
  padding-right: 8px;
  position: relative;
  top: 4px;
`;

export default () => (
  <Container>
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} lg={6}>
            Агентство отложенных диджитал-решений<br />«Вот-вот запустим». Держим слово с 2017 года
          </Col>
          <Col xs={12} lg={6}>
            <Social>Тут соцсети</Social>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={12}>
            <Copyright>Наконец-то запустили <Link href="http://gridly.ru"><Logo src={require('./gridly-logo.svg')} />Гридли</Link> и <Link href="http://codecode.ru"><Logo src={require('./codecode-logo.svg')} />Кодельная</Link></Copyright>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Container>
);
