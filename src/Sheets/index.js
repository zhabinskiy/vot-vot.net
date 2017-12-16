import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper, Label, H2 } from '../ui';

const Container = styled.section`
  width: 100%;
  background: #1f1f1f;
  padding: 80px 0 20px;

  @media screen and (min-width: 576px) {
    padding: 120px 0 20px;
  }
`;

const WhiteH2 = H2.extend`
  color: #fff;
`;

const P = styled.p`
  color: #fff;
  margin-top: 30px;
`;

const GrayLabel = Label.extend`
  margin-top: 34px;
  font-size: 16px;
  line-height: 22px;
  color: #ababab;
  text-transform: none;
`;

const Image = styled.img``;

export default () => (
  <Container>
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} lg={9}>
            <Label>Каждый час на счету</Label>
            <WhiteH2>
              Сдаём отчёты о&nbsp;работе в&nbsp;Экселе вместо презентации результата
            </WhiteH2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={8}>
            <P>
              Ведём двойную отчётность: кроме отчётов о&nbsp;выполнении согласованных работ
              по&nbsp;плану, каждую неделю мы&nbsp;сдаём список якобы сделанных якобы настоящих
              работ по&nbsp;проекту. Цифры говорят о&nbsp;готовности проекта больше, чем безликий
              адрес в&nbsp;интернете на&nbsp;промежуточный вариант.
            </P>
          </Col>
          <Col xs={12} lgOffset={1} lg={3}>
            <GrayLabel>
              Ниже&nbsp;&mdash; пример типичного недельного отчёта, который мы&nbsp;бережно
              отправляем с&nbsp;опозданием
            </GrayLabel>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Image src={require('./screenshot@2x.png')} width="100%" />
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Container>
);
