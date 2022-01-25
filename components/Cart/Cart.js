import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartModalContent = (
        <>
          <div>
            <span>Total Amount</span>
          </div>
        </>
      );
    return <Modal onClose = {props.onClose}>
        {cartModalContent}
    </Modal>
}

export default Cart;