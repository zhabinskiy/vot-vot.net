import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper, Label, H2 } from '../ui';
import Input from './Input';
import Result from './Result';

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
  margin-top: 40px;
  padding: 30px 35px 30px 20px;
  background: #fff;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 992px) {
    padding: 60px 70px 60px 40px;
  }
`;

export default class Form extends Component {
  state = { totalPrice: 0 };

  handleChange = (value) => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
      totalPrice: value,
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
                  <Input
                    price={2000}
                    checked={this.state.isChecked}
                    onClick={() => this.handleChange(2000)}
                  >
                    Отключение света, к вечеру должны
                  </Input>
                </Fields>
              </Col>
              <Col xs={12} lg={4}>
                <Result price={this.state.totalPrice} />
              </Col>
            </Row>
          </Grid>
        </Wrapper>
      </Container>
    );
  }
}
