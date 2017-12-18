import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper, Label, H2 } from '../ui';

const Container = styled.section`
  margin-top: 60px;

  @media screen and (min-width: 992px) {
    margin-top: 140px;
  }
`;

const Text = styled.div`
  margin-top: 46px;
`;

const Image = styled.div`
  background: #ffda00 url(${require('./bg@2x.png')}) 50% 55% no-repeat;
  background-size: 220px 227px;
  height: 320px;
  margin-top: 40px;

  @media screen and (min-width: 576px) {
    margin-top: 90px;
  }
`;

export default () => (
  <Container>
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} lg={6}>
            <Label>Big Idea</Label>
            <H2>Ваш проект не&nbsp;запустится, но&nbsp;это не&nbsp;будет для вас сюрпризом</H2>
          </Col>
          <Col xs={12} lg={6}>
            <Text>
              <p>
                Сколько раз подрядчики подводили вас, пропадали в&nbsp;самый ответственный момент,
                а&nbsp;потом появлялись через два дня и&nbsp;рассказывали правдивую историю
                о&nbsp;том, что случилось?
              </p>
              <p>Вот-вот.</p>
              <p>
                Больше такого не&nbsp;будет. Мы&nbsp;предлагаем честную и&nbsp;прозрачную
                услугу&nbsp;&mdash; вы&nbsp;будете точно знать, что и&nbsp;когда произойдёт:
                надеяться на&nbsp;запуск проекта можно будет по&nbsp;расписанию и&nbsp;без
                сюрпризов.
              </p>
            </Text>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Image />
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Container>
);
