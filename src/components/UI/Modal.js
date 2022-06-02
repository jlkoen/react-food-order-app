import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return (
    <div
      className='flex items-center justify-center fixed inset-0 backdrop-blur-sm z-20 bg-very-peri-bg'
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className='my-auto absolute inset-0 self-center max-h-max justify-center max-w-sm mx-auto z-30 bg-very-peri-100 p-4 rounded-3xl'>
      <div className=''>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
