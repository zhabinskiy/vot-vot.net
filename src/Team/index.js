import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper, Label, H2, H3 } from '../ui';

const Container = styled.section`
  margin-top: 60px;
  margin-bottom: 5px;

  @media screen and (min-width: 576px) {
    margin-top: 120px;
  }
`;

const Title = H2.extend`
  margin-bottom: 60px;
`;

const Name = H3.extend`
  margin-top: 20px;
  margin-bottom: 15px;
`;

const Position = styled.div`
  color: #1f1f1f;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 60px;
`;

const Photo = styled.img`
  display: block;
  margin: 0 auto;
  width: 60%;

  @media screen and (min-width: 576px) {
    width: 100%;
    margin: auto;
  }
`;

export default () => (
  <Container>
    <Wrapper>
      <Grid>
        <Row center="xs" start="sm">
          <Col xs={12} lg={6}>
            <Label>Наша гордость</Label>
            <Title>Команда</Title>
          </Col>
        </Row>

        <Row center="xs" start="sm">
          <Col xs={10} sm={6} md={4} lg={3}>
            <Photo src={require('./vlad.png')} />
            <Name>Константин Жабинский</Name>
            <Position>Директор по дискоммуникациям и визуалной слепоте</Position>
          </Col>

          <Col xs={10} sm={6} md={4} lg={3}>
            <Photo src={require('./vlad.png')} />
            <Name>Илья Страйков</Name>
            <Position>Начальник отдела имитации разработки</Position>
          </Col>

          <Col xs={10} sm={6} md={4} lg={3}>
            <Photo src={require('./vlad.png')} />
            <Name>Вера Жабинская</Name>
            <Position>Менеджер, заканчивает письма словами «На связи» (это обнадёживает)</Position>
          </Col>

          <Col xs={10} sm={6} md={4} lg={3}>
            <Photo src={require('./vlad.png')} />
            <Name>Дарья Пономарёва</Name>
            <Position>Руководитель отдела сбрасывания звонков</Position>
          </Col>

          <Col xs={10} sm={6} md={4} lg={3}>
            <Photo src={require('./vlad.png')} />
            <Name>Владислав Касаткин</Name>
            <Position>Head of Mobile Development, former Victor Arthur</Position>
          </Col>

          <Col xs={10} sm={6} md={4} lg={3}>
            <Photo src={require('./vlad.png')} />
            <Name>Константин Константинопольский</Name>
            <Position>Ответственный за происшествия с исполнителями</Position>
          </Col>

          <Col xs={10} sm={6} md={4} lg={3}>
            <Photo src={require('./vlad.png')} />
            <Name>Артём Иванов</Name>
            <Position>Разработчик, ухаживает за умирающей бабушкой</Position>
          </Col>

          <Col xs={10} sm={6} md={4} lg={3}>
            <Photo src={require('./vlad.png')} />
            <Name>Антонина Михайловна</Name>
            <Position>Бабушка Артёма, профессиональная актриса</Position>
          </Col>

          <Col xs={10} sm={6} md={4} lg={3}>
            <Photo src={require('./vlad.png')} />
            <Name>Евгений Волосатенко</Name>
            <Position>Дизайнер, живёт в доме без света</Position>
          </Col>

          <Col xs={10} sm={6} md={4} lg={3}>
            <Photo src={require('./vlad.png')} />
            <Name>superglow1</Name>
            <Position>Фрилансер. Мы не знаем, как его зовут, на Фриланс.ру нашли</Position>
          </Col>

          <Col xs={10} sm={6} md={4} lg={3}>
            <Photo src={require('./vlad.png')} />
            <Name>Кошка</Name>
            <Position>Кошка. Готова вот-вот родить в нужный момент</Position>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Container>
);
