import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = (props) => {
  const totalAmount = useSelector((state) => state.items.totalAmount);
  const items = useSelector((state) => state.items.items);
  console.log(items);
  const cartItems = (
    <ul className="m-0 p-0 max-h-80 overflow-auto">
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
          />
        );
      })}
    </ul>
  );
  console.log(cartItems);
  const cartModalContent = (
    <>
      <div>
        <span className=" font-bold">
          Total Amount: {totalAmount.toFixed(2)}
        </span>
        {cartItems}
        <button
          className="mx-8 bg-blue-500 text-white rounded-md py-2 px-9 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
          onClick={props.onClose}
        >
          Close
        </button>
      </div>
    </>
  );
  return <Modal onClose={props.onClose}>{cartModalContent}</Modal>;
};

export default Cart;
