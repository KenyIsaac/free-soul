import React from 'react';

// import images
import Img1 from '../assets/img/exp-img1.png';
import Img2 from '../assets/img/exp-img2.png';

const Experience = () => {
  return (
    <section className='mb-12 lg:mb-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
          <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
            {/* images */}
            <div
              className='self-start'
              data-aos='fade-down'
              data-aos-offset='400'
            >
              <img src={Img1} alt='' />
            </div>
            <div className='self-end' data-aos='fade-up'>
              <img src={Img2} alt='' />
            </div>
          </div>
          {/* text */}
          <div
            className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <h2 className='text-3xl font-bold mb-6'>
              Un equipo profesional que te escucha
            </h2>
            <p className='font-secondary mb-6 text-justify'>
              En <b>Free Soul</b> contamos con <b>consejos ideales</b> que te ayudarán a profundizar sobre tu propia <b>situación actual</b>, los cuales te permitirán hacer una instrospección profunda y detalla de tu propio entorno y tu manera de pensar.<br/>
              Además nuestro <b>grupo experto</b> de profesionales, te ayudarán con <b>charlas personalizadas</b> y te guiarán a travéz de <b>consultas online</b> en el horario de tu comodidad.
            </p>
            <button className='btn'>Seguir explorando</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
