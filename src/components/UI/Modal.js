import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen z-20 bg-very-peri-bg'></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className='fixed left-1/4 z-30 bg-very-peri-100 p-4 rounded-2xl'>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
