import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper, } from '../ui';

const Container = styled.section`
  background-color: #1F1F1F;
  color: white;
  padding: 80px 0 60px 0;
  font-size: 18px;
`;

const Social = styled.div`
  float: right;
`;

const Copyright = styled.div`
  margin-top: 130px;
  color: rgba(255, 255, 255, .6);
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
            <Copyright>Наконец-то запустили Гридли и Кодельная</Copyright>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Container>
);
