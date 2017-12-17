import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  // display: ${props => (props.isModalOpened ? 'flex' : 'none')};
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  width: 900px;
  height: 460px;
  transform: ${props => (props.isModalOpened ? 'translate(-50%, -50%)' : 'translate(-50%, -30%)')};
  opacity: ${props => (props.isModalOpened ? '1' : '0')};
  transition: 0.6s cubic-bezier(0.86, 0, 0.07, 1);
`;

export default ({ isModalOpened, onClick }) => (
  <Modal isModalOpened={isModalOpened}>
    <Overlay onClick={onClick} />
    <Panel isModalOpened={isModalOpened}>Хуище</Panel>
  </Modal>
);
