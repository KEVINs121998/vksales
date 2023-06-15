import React from 'react'

const Footer = () => {
  return (
    <div>
        
<footer className="fixed bottom-0 left-0 z-20 w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-black">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a href="/" class="hover:underline">V.K. SALES™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/about-us" className="mr-4 hover:underline md:mr-6">About Us</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="/contact-us" className="hover:underline">Contact Us</a>
        </li>
    </ul>
</footer>

    </div>
  )
}

export default Footer