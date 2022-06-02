const Input = (props) => {
  return (
    <div className='flex align-center mb-2'>
      <label className='mr-4 font-bold' htmlFor={props.input.id}>
        {props.label}
      </label>
      <input className='w-12 rounded-md pl-2 border' {...props.input} />
    </div>
  );
};

export default Input;
