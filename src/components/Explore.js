import React from 'react';

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-16 lg:mb-4'>
      <div className='container mx-auto h-full'>
        <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
          <h3
            className='text-3xl font-semibold mb-8'
            data-aos='fade-right'
            data-aos-offset='1000'
          >
            Ingresa tu correo para <br/> recibir más información
          </h3>
          {/* <p
            className='max-w-xs mb-12'
            data-aos='fade-right'
            data-aos-offset='1100'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
          {/* form */}
          <form
            className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0'
            data-aos='fade-up'
            data-aos-offset='200'
          >
            <input
              className='bg-gradient-to-t from-[#e3b0f6] to-[#a5edbb] h-12 px-4 outline-none rounded-md text-black'
              type='text'
              placeholder='Ingrese su correo'
            />
            <button className='btn'>Comenzar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;
