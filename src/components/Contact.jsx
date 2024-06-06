// import React from 'react';
import Navbar from './Navber';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-20 pb-10'>
        <h2 className="lg:text-5xl md:text-3xl text-xl font-extrabold text-center  my-3">Contact Us</h2>
      </div>
      <hr />
      <h2 className='text-sm md:text-xl text-center py-6'>
        Thanks for reaching out to Bookshop. In order to ensure you receive a quick reply, please fill out our <span className='text-rose-600'>Contact Us</span> form.

      </h2>
      <h2 className='text-sm md:text-xl text-center'>
        For partnerships, promotional opportunities, and advertising inquiries, please email us at: <span className='text-rose-600'>promotions@bookshop.org</span>

      </h2>
      <h2 className='text-sm md:text-xl text-center py-6'>
        Interested in joining our team? Email us at <span className='text-rose-600'>jobs@bookshop.org</span>
      </h2>
    </div>
  );
};

export default Contact;