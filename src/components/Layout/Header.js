import { Fragment } from 'react';
import { FaReact } from 'react-icons/fa';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header() {
  return (
    <Fragment>
      <header className='flex relative space-x-3 text-very-peri-50 text-3xl bg-very-peri-800 font-semibold px-3 py-4 left-0 top-0'>
        <FaReact />
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className='w-full h-80'>
        <img
          src={mealsImage}
          alt='A table full of food'
          className='w-full h-80 max-h-full'
        />
      </div>
    </Fragment>
  );
}

export default Header;
