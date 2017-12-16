import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper, Label, H2 } from '../ui';

const Container = styled.section`
  width: 100%;
  background: #FFDA00;
  padding: 80px 0 80px 0;

  @media screen and (min-width: 576px) {
    padding: 120px 0 120px 0;
  }
`;

const P = styled.p`
  margin-top: 30px;
`;

export default () => (
  <Container>
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} lg={9}>
            <Label>Пора начинать</Label>
            <H2>
            Соберите свой неидеальный<br />(ну уж какой есть) проект
            </H2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={8}>
            <P>
              Мы посчитаем затраты на сопровождение проекта, выставим&nbsp;счёт и&nbsp;вот-вот начнём
            </P>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={8}>
            Пум-пум
          </Col>
          <Col xs={12} lg={4}>
            Пум-пум
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Container>
);
