import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper, Label, H2 } from '../ui';
import Input from './Input';
import Result from './Result';
import Modal from './Modal';

const Container = styled.section`
  width: 100%;
  background: #ffda00;
  padding: 80px 0 80px 0;

  @media screen and (min-width: 576px) {
    padding: 120px 0 120px 0;
  }
`;

const P = styled.p`
  margin-top: 30px;
`;

const Fields = styled.form`
  position: relative;
  margin-top: 40px;
  padding: 30px 35px 30px 20px;
  background: #fff;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 992px) {
    padding: 60px 70px 60px 40px;
  }
`;

const Discount = styled.div`
  position: absolute;
  width: 213px;
  height: 213px;
  background: url(${require('./discount.svg')}) no-repeat;
  background-size: cover;
  z-index: 10;
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
    top: -450px;
    right: 0px;
  }

  @media screen and (min-width: 992px) {
    top: -150px;
    right: -80px;
  }
`;

const DiscountPrice = styled.div`
  text-align: center;
  font: 900 52px/52px 'Montserrat', Helvetica Neue, Arial, sans-serif;
  color: #ffda00;
  margin-top: 60px;
`;

const DiscountLabel = styled.div`
  font-weight: bold;
  padding-top: 5px;
  color: white;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export default class Form extends Component {
  state = { totalPrice: 0, isModalOpened: true };

  handleChange = (value, index) => {
    this.setState(prevState => ({
      [index]: !prevState[index],
      totalPrice: this.state[index] ? this.state.totalPrice - value : this.state.totalPrice + value,
    }));
  };

  modalHandler = () => {
    this.setState(prevState => ({
      isModalOpened: !prevState.isModalOpened,
    }));
  };

  render() {
    return (
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
                  Мы посчитаем затраты на сопровождение проекта, выставим&nbsp;счёт и&nbsp;вот-вот
                  начнём
                </P>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={8}>
                <Fields>
                  <Discount>
                    <DiscountPrice>30%</DiscountPrice>
                    <DiscountLabel>
                      Скидка до<br />31&nbsp;декабря
                    </DiscountLabel>
                  </Discount>

                  <Input price={2100} onChange={() => this.handleChange(2100, 1)}>
                    Отключение света, к&nbsp;вечеру должны дать
                  </Input>
                  <Input price={4000} onChange={() => this.handleChange(4000, 2)}>
                    Проблемы с&nbsp;сервером, вызванные наводнением на&nbsp;столе сисадмина
                  </Input>
                  <Input price={2000} onChange={() => this.handleChange(2000, 3)}>
                    Общий созвон со&nbsp;всеми сотрудниками с&nbsp;двух сторон для обсуждения
                    изменений в&nbsp;правках
                  </Input>
                  <Input price={13000} onChange={() => this.handleChange(13000, 4)}>
                    Задержка на&nbsp;четыре дня в&nbsp;связи со&nbsp;сменой старого менеджера
                    на&nbsp;нового менеджера
                  </Input>
                  <Input price={30000} onChange={() => this.handleChange(30000, 5)}>
                    Дизайнер попадает в&nbsp;ДТП на мопеде в&nbsp;Тайланде, сбивает человека
                    и&nbsp;незаконно покидает страну с&nbsp;поддельными документами
                  </Input>
                  <Input price={85000} onChange={() => this.handleChange(85000, 6)}>
                    Переписывание фронтенда с&nbsp;Ангуляра на&nbsp;Ангуляр 2
                  </Input>
                  <Input price={7000} onChange={() => this.handleChange(7000, 7)}>
                    Любая меловероятная причина срыва дедлайна, как будто вам важно вообще, какая
                  </Input>
                  <Input price={5500} onChange={() => this.handleChange(5500, 8)}>
                    Заключение нового договора вместо старого, с&nbsp;опечатками
                  </Input>
                  <Input price={3000} onChange={() => this.handleChange(3000, 9)}>
                    Содержательная переписка
                  </Input>
                  <Input price={1500} onChange={() => this.handleChange(1500, 10)}>
                    Принятие ведущим разработчиком родов у&nbsp;кошки ведущего разработчика
                  </Input>
                  <Input price={5000} onChange={() => this.handleChange(5000, 11)}>
                    Сброшенные звонки за&nbsp;5 минут до&nbsp;промежуточного дедлайна
                  </Input>
                  <Input price={170000} onChange={() => this.handleChange(170000, 12)}>
                    Закрытие фирмы-подрядчика и&nbsp;отъезд директора за&nbsp;рубеж
                  </Input>
                  <Input price={25000} onChange={() => this.handleChange(25000, 13)}>
                    Перепродажа проекта эстонской студии
                  </Input>
                </Fields>
              </Col>
              <Col xs={12} lg={4}>
                <Result totalPrice={this.state.totalPrice} onClick={this.modalHandler} />
              </Col>
            </Row>
          </Grid>
        </Wrapper>

        <Modal isModalOpened={this.state.isModalOpened} onClick={this.modalHandler}/>
      </Container>
    );
  }
}
