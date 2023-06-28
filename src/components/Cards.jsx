import React from 'react'

const Cards = () => {
  const Product_items = [
    {"name": "Canapes", "path": "/products/canapes" ,"img":"https://2blissofbaking.com/wp-content/uploads/2019/09/DSC_3038-1.jpg"},
    {"name": "Tacos", "path": "/tacos","img":"https://funwithoutfodmaps.com/wp-content/uploads/2022/07/Low-FODMAP-Beef-Tacos-Square.jpg" },
    {"name": "Nachos", "path": "/services","img":"https://www.shutterstock.com/image-photo/delicious-nachos-chips-isolated-on-260nw-1672307776.jpg"},
    {"name": "Vol-au-vent", "path": "/" ,"img":"https://www.mariebel.com/wp-content/uploads/2018/10/vol-au-vent-55mm-mariebel-1286x1286.jpg"},
    {"name": "Khakra", "path": "about-us","img":"https://img.freepik.com/premium-photo/khakhra-khakra-is-thin-cracker-is-popular-jain-gujarati-rajasthani-breakfast-food-served-with-hot-tea-tomato-ketchup-colourful-wooden-background_466689-62021.jpg"},
    {"name": "A1 Masala", "path": "/contact-us","img":"https://www.jainsuperbazar.in/pub/media/catalog/product/cache/4e4275a4460c398de857f28b0072ab4a/2/0/20.jpg"},
    {"name": "Aam-Papad", "path": "/" ,"img":"https://www.dryfruithub.com/image/cache/catalog/1New%20Photos20.01.21/MANGO%20PAPAD%2010-550x550.jpg.webp"},
    {"name": "Sandwizza", "path": "/" ,"img":"https://5.imimg.com/data5/SELLER/Default/2023/4/298832201/ZH/LR/WU/47367999/spicezzaa-100g-sandwich-masala-500x500.jpg"},
  ]
    
  return (
    <div className='w-full h-screen bg-black text-gray-300'>
    {/* Container */}
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen xs:h-screen'>
<div>
    <p className='text-4xl font-bold inline'>Skills</p>
</div>
<div className='w-full grid grid-cols-2 sm:grid-cols-4 px-16 gap-4 text-center py-8'>
{Product_items.map((item, i) => (


<div class="max-w-sm bg-white border w-48  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg h-40 w-full" src={item.img} alt="product images" />
    </a>
    <div class="p-2">
        <a href="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
        </a>
        <a href={item.path} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
))}
</div>
</div>
</div>
  )
}

export default Cards