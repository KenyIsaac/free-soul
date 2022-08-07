import React from 'react';

// import icons
import { IoClose } from 'react-icons/io5';

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className='lg:hidden bg-[#e3b0f6] w-full h-full'>
      <IoClose
        onClick={() => setNavMobile(false)}
        className='text-3xl absolute left-4 top-6 cursor-pointer'
      />
      <ul className='flex flex-col items-center justify-center space-y-8 h-full font-secondary text-white'>
        <li className='text-lg text-[white]'>
          <a href='#'>Inicio</a>
        </li>
        <li className='text-lg text-[white]'>
          <a href='#'>Sobre nosotros</a>
        </li>
        <li className='text-lg text-[white]'>
          <a href='#'>Experiencia de usuarios</a>
        </li>
        <li className='btn text-[white]'>
          <a href='#'>Inicia Sesión</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
