import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='flex border-b border-very-peri-200 justify-between m-4 pb-4'>
      <div>
        <h3 className='mb-1 font-bold'>{props.name}</h3>
        <div className='italic text-sm'>{props.description}</div>
        <div className='mt-1 ml-10 font-bold text-xl'>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
