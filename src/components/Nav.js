import React from 'react';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex items-center space-x-12 font-secondary'>
        <li className='nav-link'>
          <a href='#'>Inicio</a>
        </li>
        <li className='nav-link'>
          <a href='#'>Sobre nosotros</a>
        </li>
        <li className='nav-link'>
          <a href='#'>Experiencia de usuarios</a>
        </li>
        <li className='btn'>
          <a href='#'>Inicia Sesión</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
