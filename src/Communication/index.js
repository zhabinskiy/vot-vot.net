import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper, Label, H2 } from '../ui';

const Container = styled.section`
  margin-top: 60px;

  @media screen and (min-width: 576px) {
    margin-top: 120px;
  }
`;

const P = styled.p`
  margin-top: 46px;
`;

const Image = styled.img`
  margin-top: 40px;

  @media screen and (min-width: 992px) {
    margin-top: 80px;
  }
`;

export default () => (
  <Container>
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} lg={6}>
            <Label>Коммуникация — это мы</Label>
            <H2>
              Участвуем в&nbsp;переписке на&nbsp;двенадцать человек, не&nbsp;считая исполнительного
              и&nbsp;финдира
            </H2>
          </Col>
          <Col xs={12} lg={6}>
            <P>
              Стандартный пакет гарантирует 2&nbsp;обнадёживающих письма в&nbsp;день, одно
              возмущённое письмо в&nbsp;неделю, 3&nbsp;принятых и&nbsp;6&nbsp;пропущенных звонков.
              В&nbsp;конце писем и&nbsp;разговоров говорим &laquo;На&nbsp;связи&raquo;.
            </P>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={10}>
            <Image src={require('./screenshot@2x.png')} width="100%" />
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Container>
);
