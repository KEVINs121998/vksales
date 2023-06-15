import React from 'react'

const Cards = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container */}
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
<div>
    <p className='text-4xl font-bold inline'>Products</p>
</div>
<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3059-1-1.jpg" alt="HTML icon" />
<p className='my-4'>HTML</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3059-1-1.jpg" alt="CSS icon" />
<p className='my-4'>CSS</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3059-1-1.jpg" alt="JavaScript icon" />
<p className='my-4'>JavaScript</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3059-1-1.jpg" alt="React icon" />
<p className='my-4'>React</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3059-1-1.jpg" alt="Node icon" />
<p className='my-4'>Node</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3059-1-1.jpg" alt="GitHub icon" />
<p className='my-4'>GitHub</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3059-1-1.jpg" alt="Tailwind icon" />
<p className='my-4'>Tailwind</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
<img className='w-20 mx-auto' src="https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3059-1-1.jpg" alt="Mongo icon" />
<p className='my-4'>Mongo</p>
</div>

</div>
</div>
</div>
//     <div className='w-96 py-40 px-20'>
//       <div
//   className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
//   <div
//     className="relative overflow-hidden bg-cover bg-no-repeat"
//     data-te-ripple-init
//     data-te-ripple-color="light">
//     <img
//       className="rounded-t-lg"
//       src="https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3059-1-1.jpg"
//       alt="" />
//     <a href="#!">
//       <div
//         className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
//     </a>
//   </div>
//   <div className="p-6">
//     <h5
//       className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
//       Canapes
//     </h5>
//     <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
//     A canapé is an appetizer consisting of a piece of bread or toast or a cracker topped with a savory spread (such as caviar or cheese).
//     </p>
//     <button
//       type="button"
//       className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//       data-te-ripple-init
//       data-te-ripple-color="light">
//       Know More
//     </button>
//   </div>
// </div>
//     </div>
  )
}

export default Cards