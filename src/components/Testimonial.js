import React from 'react';

// import components
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  return (
    <section className='mb-64 lg:mb-48'>
      <div className='container mx-auto'>
        <div className='bg-gradient-to-r from-[#e3b0f6] to-[#a5edbb]/40 max-h-[400px] p-12 rounded-lg'>
          <div className='text-center'>
            <h2
              className='text-3xl font-bold mb-6'
              data-aos='fade-up'
              data-aos-offset='300'
              data-aos-delay='1600'
            >
              Lo que dicen nuestros amigos
            </h2>
            <p
              className='max-w-2xl mx-auto mb-12 lg:mb-24 font-bold'
              data-aos='fade-up'
              data-aos-offset='300'
              data-aos-delay='1800'
            >
              Estos son algunos de los testimonios de nuestros amigos que han solicitado ayuda en <b>Free Soul</b>, como parte de su proceso de aprendizaje y de crecimiento personal.
            </p>
          </div>
          {/* slider */}
          <div data-aos='fade-up' data-aos-offset='300' data-aos-delay='2000'>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
