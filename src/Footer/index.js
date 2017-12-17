import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper } from '../ui';

const Container = styled.section`
  background-color: #1f1f1f;
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
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    color: white;
  }
`;

const Copyright = styled.div`
  margin-top: 80px;
  color: rgba(255, 255, 255, 0.6);

  @media screen and (min-width: 992px) {
    margin-top: 130px;
  }
`;

const Logo = styled.img`
  padding-right: 8px;
  position: relative;
  top: 4px;
`;

const NoWrap = styled.span`
  white-space: nowrap;
`;

export default () => (
  <Container>
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} lg={6}>
            Агентство отложенных диджитал-решений<br />«Вот-вот запустим». Держим слово с&nbsp;2017
            года
          </Col>
          <Col xs={12} lg={6}>
            <Social>Тут соцсети</Social>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={12}>
            <Copyright>
              Наконец-то запустили{' '}
              <Link href="http://gridly.ru">
                <Logo src={require('./gridly-logo.svg')} />Гридли
              </Link>{' '}
              <NoWrap>
                и&nbsp;
                <Link href="http://codecode.ru">
                  <Logo src={require('./codecode-logo.svg')} />Кодельная
                </Link>
              </NoWrap>
            </Copyright>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Container>
);
