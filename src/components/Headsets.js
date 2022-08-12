import React from 'react';

// import images
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';
import Headset5 from '../assets/img/headset-5.png';
import Headset6 from '../assets/img/headset-6.png';
import Headset7 from '../assets/img/headset-7.png';
import Headset8 from '../assets/img/headset-8.png';

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
            <img src={Headset1} alt='Headset1' />
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1300'
          >
            <img src={Headset2} alt='Headset2' />
            
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1600'
          >
            <img src={Headset3} alt='Headset3' />
            
          </div>
          {/* item */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1900'
          >
            <img src={Headset4} alt='Headset4' />
          </div>
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1900'
          >
            <img src={Headset5} alt='Headset5' />
          </div>
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1900'
          >
            <img src={Headset6} alt='Headset6' />
          </div>
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1900'
          >
            <img src={Headset7} alt='Headset7' />
          </div>
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1900'
          >
            <img src={Headset8} alt='Headset8' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
