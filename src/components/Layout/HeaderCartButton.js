import CartIcon from '../Cart/CartIcon';

import React from 'react';

const HeaderCartButton = () => {
  return (
    <button className='flex cursor-default space-x-2 absolute right-0 text-sm justify-around items-center bg-red-500 rounded-3xl font-bold hover:bg-red-900 px-5 py-2'>
      <span className='w-5 h-5'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='bg-red-800 rounded-3xl px-3 py-1 text-xs'>3</span>
    </button>
  );
};

export default HeaderCartButton;
