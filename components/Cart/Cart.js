import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartModalContent = (
        <>
          <div>
            <span>Total Amount</span>
            <button className="mx-8 bg-blue-500 text-white rounded-md py-2 px-9 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center" onClick={props.onClose}>
        Close
      </button>
          </div>
        </>
      );
    return <Modal onClose = {props.onClose}>
        {cartModalContent}
    </Modal>
}

export default Cart;