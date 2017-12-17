import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 34px;
  cursor: pointer;

  &::selection {
    background: #fff;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Checkbox = styled.input`
  position: relative;
  cursor: pointer;

  &:before {
    position: absolute;
    left: -3px;
    bottom: -12px;
    display: inline-block;
    content: '';
    width: 24px;
    height: 24px;
    background: #fff;
    border: 3px solid #ababab;
    transition: 0.2s;
  }

  &:after {
    position: absolute;
    bottom: -9px;
    display: inline-block;
    content: '';
    width: 24px;
    height: 24px;
    background: url(${require('./check.svg')}) 50% 50% no-repeat;
    transform: scale(0.5);
    opacity: 0;
    transition: 0.2s;
  }

  &:hover {
    &:before {
      background: #f0f0f0;
    }
    &:after {
      will-change: transform;
    }
  }

  &:active {
    &:before {
      transform: scale(0.975);
    }
  }

  &:checked {
    &:before {
      background: #fb4132;
      border: 3px solid #fb4132;
    }

    &:after {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  display: inline-block;
  margin-left: 30px;

  &::selection {
    background: #fff;
  }
`;

const Price = styled.div`
  white-space: nowrap;
  font-weight: bold;
  text-align: right;
  padding-left: 20px;
`;

export default ({ onClick, checked, children, price }) => (
  <Label onClick={onClick}>
    <Content onClick={onClick}>
      <Checkbox type="checkbox" checked={checked} value={price} onClick={onClick} />
      <Title>{children}</Title>
    </Content>
    <Price onClick={onClick}>{price} ₽</Price>
  </Label>
);
