import React from 'react';
import './Social.less';

export default function Social() {
  return (
    <section className='social text-center pt-5 '>
      <div className='d-flex justify-content-center' data-aos="fade-up">
        <a className='mr-lg-5' href='#'>
            <i className='fab fa-twitter-square fa-3x fa-fw' ></i>
        </a> 
        <a className='mr-lg-5' href='#'>
            <i className='fab fa-facebook fa-3x fa-fw'></i> 
        </a> 
        <a href='#'>
            <i className='fab fa-github-square fa-3x fa-fw'></i>  
        </a> 
      </div>
    </section>
  )
}
