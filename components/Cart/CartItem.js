import { useDispatch } from "react-redux";
import { itemsActions } from "../../store/items";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const buttonStyles =
    "font-bold text-lg text-blue-700 border w-12 text-center rounded-md backdrop-opacity-0 cursor-pointer ml-4 m-1";

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      itemsActions.addItem({
        id: props.id,
        name: props.name,
        amount: 1,
        price: props.price,
      })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(
      itemsActions.remove({
        id: props.id,
      })
    );
  };

  return (
    <li className="flex justify-between items-center border-b border-r border-l rounded-b-lg border-blue-700 py-4 px-3 my-4 mx-0">
      <div>
        <h2 className="font-bold my-3">{props.name}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-bold text-blue-700">{price}</span>
          <span className="font-bold border border-blue-300 py-1 px-3 rounded-md text-black">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <button className={buttonStyles} onClick={addToCartHandler}>
          +
        </button>
        <button className={buttonStyles} onClick={removeFromCartHandler}>
          −
        </button>
      </div>
    </li>
  );
};

export default CartItem;
