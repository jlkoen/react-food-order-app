const Card = (props) => {
  return (
    <div className='p-4 shadow-md rounded-2xl bg-very-peri-50'>
      {props.children}
    </div>
  );
};

export default Card;
