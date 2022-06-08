import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className='list-none m-0 p-0 max-h-80 overflow-auto'>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className='flex justify-between align-middle font-bold '>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className='text-right'>
        <button
          className='cursor-pointer bg-transparent ml-4 pt-2 pb-2 pr-5 pl-5 rounded-3xl bg-very-peri-100 border-very-peri-700'
          onClick={props.onClose}
        >
          Close
        </button>
        {hasItems && (
          <button className='cursor-pointer bg-transparent ml-4 pt-2 pb-2 pr-5 pl-5 rounded-3xl text-very-peri-100 bg-very-peri-400'>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
