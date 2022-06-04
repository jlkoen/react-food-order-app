import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      className='flex cursor-default space-x-2 absolute right-0 text-sm justify-around items-center bg-very-peri-700 rounded-3xl font-bold hover:bg-very-peri-900 px-5 py-2'
      onClick={props.onClick}
    >
      <span className='w-5 h-5'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='bg-very-peri-600 rounded-3xl px-3 py-1 text-xs'>
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
