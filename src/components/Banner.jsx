import React from 'react'
import dress from '../../public/dress.jpg'
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2  md:mr-2 mt-20 md:mt-32">
       <div className='space-y-12'>
       <h1 className='text-4xl font-bold'>
        WEAR THE CLOTHES YOU <span className='text-blue-500'> WISHED</span> FOR !!!
        </h1>
        <p className='text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum, nunc ac consectetur ullamcorper, justo neque faucibus erat, ac dictum lacus ligula vel neque. Aliquam erat volutpat. Sed vel ipsum et neque ullamcorper condimentum. Sed scelerisque, nunc vel tempor dignissim, mauris ipsum semper nunc, at sagittis purus velit non velit.
        </p>
       </div>
       <div className="mt-10 "> <button className="btn btn-active btn-primary">Login</button></div>
        </div>
        <div className="w-full md:w-1/2 md:ml-2  mt-7 md:mt-32"><img src={dress} className="w-70 h-70" alt=""></img></div>
      </div>
    </>
  )
}

export default Banner
