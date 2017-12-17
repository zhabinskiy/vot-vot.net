import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  display: ${props => (props.isModalOpened ? 'flex' : 'none')};
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
  background: black;
  position: fixed;
  
  z-index: 30;
  width: 900px;
  height: 460px;
`;

export default ({isModalOpened, onClick}) => (
  <Modal isModalOpened={isModalOpened}>
    <Overlay onClick={onClick}></Overlay>
    <Panel>
      Хуище
    </Panel>
  </Modal>
);
