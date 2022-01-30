import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const Backdrop = (props) => {
  return <div className="fixed inset-0 w-full h-screen z-20 bg-gray-800 opacity-75" onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-1/4 w-11/12 bg-white	p-4 rounded-xl shadow-2xl z-30	">
      <div>{props.children}</div>
    </div>
  );
};



const Modal = (props) => {
  return (
    <>
      {<Backdrop onClose={props.onClose} />}
      {<ModalOverlay>{props.children}</ModalOverlay>}
    </>
  );
};

export default Modal;
