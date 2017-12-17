import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Wrapper } from '../ui';

const Container = styled.section`
  background-color: #1f1f1f;
  color: white;
  padding: 80px 0 60px 0;
  font-size: 18px;
`;

const Social = styled.div`
  position: relative;
  right: 0px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1060px) {
    right: -30px;
  }

  @media screen and (min-width: 992px) {
    margin-top: 0px;
    justify-content: flex-end;
  }
`;

const Link = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;

  &:hover {
    color: white;

    img {
      opacity: 1;
    }
  }
`;

const Copyright = styled.div`
  margin-top: 80px;
  color: rgba(255, 255, 255, 0.6);

  @media screen and (min-width: 992px) {
    margin-top: 130px;
  }
`;

const Logo = styled.img`
  padding-right: 8px;
  position: relative;
  top: 4px;
  opacity: 0.8;
`;

const NoWrap = styled.span`
  white-space: nowrap;
`;

const SocialWrapper = styled.a`
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Icon = styled.img``;

const SocialLink = ({href, src}) => (
  <SocialWrapper href={href} target="_blank">
    <Icon src={src}/>
  </SocialWrapper>
);

export default () => (
  <Container>
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} lg={6}>
            Агентство отложенных диджитал-решений<br />«Вот-вот запустим». Держим слово с&nbsp;2017 года
          </Col>
          <Col xs={12} lg={6}>
            <Social>
              <SocialLink href="https://www.facebook.com/sharer/sharer.php?u=https://vot-vot.net" src={require('./facebook.svg')}/>
              <SocialLink href="https://vk.com/share.php?url=https://vot-vot.net" src={require('./vk.svg')}/>
              <SocialLink href="https://twitter.com/intent/tweet?url=https://vot-vot.net" src={require('./twitter.svg')}/>
              <SocialLink href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=https://vot-vot.net" src={require('./ok.svg')}/>
              <SocialLink href="https://telegram.me/share/url?url=https://vot-vot.net" src={require('./telegram.svg')}/>
            </Social>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={12}>
            <Copyright>
              Наконец-то запустили{' '}
              <NoWrap>
                <Link href="http://gridly.ru">
                  <Logo src={require('./gridly-logo.svg')} />Гридли
                </Link>{' '}
              </NoWrap>
              <NoWrap>
                и&nbsp;
                <Link href="http://codecode.ru">
                  <Logo src={require('./codecode-logo.svg')} />Кодельная
                </Link>
              </NoWrap>
            </Copyright>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Container>
);
