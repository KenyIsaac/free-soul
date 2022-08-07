import React from 'react';

// import images
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';

const Headsets = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className='container mx-auto'>
        {/* title */}
        <h2
          className='text-3xl font-bold mb-6'
          data-aos='fade-down'
          data-aos-offset='300'
        >
          Nuestros consejos y tips
        </h2>
        {/* grid */}
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1000'
          >
            <img src={Headset1} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h5 className='text-xl mb-2 text-[#fff] text-left'>Si tu estadía en la tierra es tan corta, debería ser por lo menos agradable</h5>
              {/* <p className='text-[#fff]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p> */}
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1300'
          >
            <img src={Headset2} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h5 className='text-xl mb-2 text-[#fff] text-right'>Preocuparte o sentirte mal por un hecho pasado o futuro, equivale a vivir en otro mundo</h5>
              {/* <p className='text-[#fff]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p> */}
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1600'
          >
            <img src={Headset3} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h5 className='text-xl mb-2 text-[#fff] text-left'>Compórtate con Honor y dignidad para que te traten bien</h5>
              {/* <p className='text-[#fff]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p> */}
            </div>
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1900'
          >
            <img src={Headset4} alt='' />
            <div className='absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6'>
              <h5 className='text-xl mb-2 text-[#fff] text-right'>Sé miserable o motívate a tí mismo. Lo que sea que hagas, es siempre tu decisión</h5>
              {/* <p className='text-[#fff]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
