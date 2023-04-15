import React from 'react'
import Logo from '@/assets/Logo.png'

type Props = {}

const Footer = () => {
  return (
   < footer className='bg-primary-100 py-16'>
    <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
      <div className='mt-16 basis-1/2 md:mt-0'>
        <img src={Logo} alt="logo" />
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit, porro dolor dolorum eveniet laudantium praesentium non neque unde provident, repudiandae, aamet consectetur adipisic, ipsam sapiente.</p>
        <p>&#169; Evogym All rights Reserved.</p>
      </div>
      <div className='mt-16 basis-1/4 md: mt-0'>
        <h4 className='font-bold mt-10'>LINKS</h4>
        <p className='my-5'>neque unde provident</p>
        <p className='my-5'>Et gravisda provident</p>
        <p>Ullfrgfr feoikndjed</p>

      </div>
      <div className='mt-16 basis-1/4 md: mt-0'>
        <h4 className='font-bold mt-10'>CONTACT US</h4>
        <p className='my-5'>amet consectetur adipisic</p>
        <p >(333)456-54532</p>
      </div>
    </div>

   </footer>
  )
}
console.log('test');
console.log('test');


export default Footer