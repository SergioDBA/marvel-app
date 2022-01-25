import Image from 'next/image';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  return (
    <button className='cursor-pointer border-none bg-purple-500	text-white py-3 px-12 flex justify-around items-center rounded-3xl font-bold' onClick={props.onClick}>
      <span className='w-5 h-5 m-2'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='bg-purple-800 py-1 px-4 rounded-3xl ml-4'>5</span>
    </button>
  );
};

export default HeaderCartButton;
