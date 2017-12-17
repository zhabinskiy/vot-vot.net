import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Label, H2 } from '../ui';

const Container = styled.div`
  visibility: ${props => (props.isModalOpened ? 'visible' : 'hidden')};
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  background: rgba(254, 217, 0, 0.8);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

const Panel = styled.div`
  background: #1f1f1f;
  color: white;
  position: absolute;
  top: 0;
  padding: 55px;
  z-index: 30;
  max-width: 790px;
  opacity: ${props => (props.isModalOpened ? '1' : '0')};
  transition: 0.6s cubic-bezier(0.86, 0, 0.07, 1);
  min-height: 100vh;

  @media screen and (min-width: 576px) {
    position: fixed;
    top: 0;
    min-height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: ${props => (props.isModalOpened ? 'translate(-50%, -50%)' : 'translate(-50%, -30%)')};
  }
`;

const Close = styled.a`
  position: absolute;
  top: 20px;
  width: 50px;
  height: 50px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    will-change: transform;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const P = styled.p`
  font-size: 16px;
  line-height: 22px;
`;

const Social = styled.div`
  position: relative;
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 992px) {
    left: -27px;
  }
`;

const SocialWrapper = styled.a`
  width: 80px;
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    will-change: transform;
  }

  &:active {
    transform: scale(0.975);
  }
`;

const Icon = styled.img``;

const SocialLink = ({ href, src, onClick }) => (
  <SocialWrapper href={href} onClick={onClick} target="_blank">
    <Icon src={src} />
  </SocialWrapper>
);

export default class Modal extends React.Component {

  shareLink = (link) => {
    window.open(link, 'sharer', 'toolbar=0,status=0,width=548,height=325');
  };

  render() {
    const { isModalOpened, onClick } = this.props;

  return (
  <Container isModalOpened={isModalOpened}>
    <Overlay onClick={onClick} />
    <Panel isModalOpened={isModalOpened}>
      <Close><img src={require('./close.svg')} onClick={onClick} /></Close>
      <Grid>
        <Row center="xs" start="lg">
          <Col xs={12} md={8} lg={5}>
            <Label>Начало положено</Label>
            <H2>
              Спасибо за&nbsp;отличный проект! На&nbsp;связи
            </H2>
            <P>Вашим коллегам необходимо узнать о нашем агентстве. Кто поможет им не запуститься, если не мы?</P>
            <Social>
              <SocialLink
                onClick={() =>
                  this.shareLink(
                    'https://www.facebook.com/sharer/sharer.php?u=https://vot-vot.net',
                  )
                }
                src={require('../Footer/facebook.svg')}
              />
              <SocialLink
                onClick={() =>
                  this.shareLink('https://vk.com/share.php?url=https://vot-vot.net')
                }
                src={require('../Footer/vk.svg')}
              />
              <SocialLink
                onClick={() =>
                  this.shareLink('https://twitter.com/intent/tweet?url=https://vot-vot.net')
                }
                src={require('../Footer/twitter.svg')}
              />
              <SocialLink
                onClick={() =>
                  this.shareLink(
                    'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=https://vot-vot.net',
                  )
                }
                src={require('../Footer/ok.svg')}
              />
              <SocialLink
                onClick={() =>
                  this.shareLink('https://telegram.me/share/url?url=https://vot-vot.net')
                }
                src={require('../Footer/telegram.svg')}
              />
            </Social>
          </Col>
          <Col xs={12} md={8} lgOffset={1} lg={6}><img src={require('./picture.png')} width="100%" style={{marginTop: "40px"}}/></Col>
        </Row>
      </Grid>
    </Panel>
  </Container>
);
}
}
