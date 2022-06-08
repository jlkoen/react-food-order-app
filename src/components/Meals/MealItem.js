import { useContext } from 'react';

import CartContext from '../../store/CartContext';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className='flex border-b border-very-peri-200 justify-between m-4 pb-4'>
      <div>
        <h3 className='mb-1 font-bold'>{props.name}</h3>
        <div className='italic text-sm'>{props.description}</div>
        <div className='mt-1 font-bold text-l'>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
