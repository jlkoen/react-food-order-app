import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div className='flex border-b-2 border-very-peri-200 justify-between m-4 pb-4'>
        <div className='flex-col'>
          <h3 className='mb-1 font-bold'>{props.name}</h3>
          <div className='italic text-sm'>{props.description}</div>
        </div>
        <div className='mt-1 ml-10 font-bold text-xl'>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
