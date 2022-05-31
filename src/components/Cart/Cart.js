import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul className='m-0 p-0'>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className='flex justify-between align-middle font-bold '>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className='text-right'>
        <button className='cursor-pointer bg-transparent ml-4 pt-2 pb-2 pr-5 pl-5 rounded-3xl bg-very-peri-100 border-very-peri-700'>
          Close
        </button>
        <button className='cursor-pointer bg-transparent ml-4 pt-2 pb-2 pr-5 pl-5 rounded-3xl text-very-peri-100 bg-very-peri-400'>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
