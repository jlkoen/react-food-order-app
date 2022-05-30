import Input from '../UI/Input';

const MealItemForm = (props) => {
  return (
    <form className='text-right pr-3'>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className='border rounded-3xl bg-very-peri-400  hover:bg-very-peri-500 text-very-peri-100 font-bold px-5 py-0'>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
