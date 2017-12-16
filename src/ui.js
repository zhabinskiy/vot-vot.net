import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`;

export const H1 = styled.h1`
  font: 900 44px/54px 'Montserrat', Helvetica Neue, Arial, sans-serif;
  color: #ffffff;
  margin: 0;

  @media screen and (min-width: 576px) {
    font-size: 64px;
    line-height: 74px;
  }
`;

export const H2 = styled.h2`
  font: bold 26px/31px 'Montserrat', Helvetica Neue, Arial, sans-serif;
  margin: 0;

  @media screen and (min-width: 576px) {
    font-size: 32px;
    line-height: 37px;
  }
`;

export const H3 = styled.h3`
  font: bold 20px/25px 'Montserrat', Helvetica Neue, Arial, sans-serif;
  margin: 0;

  @media screen and (min-width: 576px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

export const Label = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 15px;
  font-weight: bold;
  margin-bottom: 16px;
  text-transform: uppercase;
  color: #fb4132;
`;
