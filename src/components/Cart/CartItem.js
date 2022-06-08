import React from 'react';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    //TODO: add CSS classes
    <li className='flex p-4 m-4 justify-between align-middle border-b border-very-peri-500'>
      <div>
        <h2>{props.name}</h2>
        <div className='flex w-40 justify-between align-middle'>
          <span className='font-bold text-very-peri-600'>{price}</span>
          <span className='font-bold text-very-peri-600 border-2 border-very-peri-200 py-1 px-3 rounded-md'>
            x{props.amount}
          </span>
        </div>
      </div>
      <div className='flex'>
        <button
          className='m-1 ml-4 border-2 align-middle rounded-md w-10 font-bold text-xl border-very-peri-500 cursor-pointer'
          onClick={props.onRemove}
        >
          -
        </button>
        <button
          className='m-1 ml-4 border-2 align-middle rounded-md w-10 font-bold text-xl border-very-peri-500 cursor-pointer'
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
