import React from 'react'
import BannerBg from '../assets/Bike.jpg'
function Banner() {
  return (
    <>
        <section className=' bg-cover bg-center bg-no-repeat'style={{backgroundImage: `url(${BannerBg})`}}>
             <div className=' container mx-auto'>
                <div className='w-full lg:w-163 text-black pt-60 mt-10 lg:pt-18 pb-11  lg:pb-61.5 left-10'>
                    <h1 className=' text-4xl text-white font-bold py-5'> Welcome to!My Bmw Bike web said</h1>
                    <p className='text-2xl text-white py-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum amet ipsam ullam excepturi perspiciatis earum soluta, eos et, sit dolorum culpa ea quidem similique, numquam non praesentium? Doloremque, debitis architecto.</p>
                    <button className='py-5 px-5 text-2xl bg-blue-400 rounded-full text-white font-bold cursor-pointer duration-300 hover:bg-black '>Order now</button>
                </div>
             </div>
        </section>
    </>
  )
}

export default Banner
