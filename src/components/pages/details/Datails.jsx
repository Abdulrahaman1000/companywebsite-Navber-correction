import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar1 from '../../navbar1/Navbar1';
import Footer from '../../footer/Footer';

import DetailsData from "../../../dev-data/detailsData";

const Datails = () => {
  const {id} = useParams();
  // const handleClick =(item, index) =>{}
  const slice = DetailsData.slice(null);
  return (
    <>   
       <Navbar1/>
       <div className='bg-gray-700 mb-12 h-30'>
   
         </div>
    <div className='flex ml-12 mt-8 gap-16'>
         <aside className="w-auto mb-8" aria-label="Sidebar">
   <div className=" bg-white rounded dark:bg-gray-800">
      <ul className="space-y-2 ">
         <li>
            <a href="#" className="flex items-center  p-2 text-base font-normal bg-gray-400 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="ml-3 font-bold">Search by gategory</span>
            </a>
         </li>
         <li>
            <button type="button" className="flex items-center p-4 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="flex-1 ml-3 text-left whitespace-nowrap font-bold" sidebar-toggle-item>Front-end Developement</span>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
            <hr className='w-full'/>
         </li>
         <li>
            <button type="button" className="flex items-center p-4 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="flex-1 ml-3 text-left whitespace-nowrap font-bold" sidebar-toggle-item>Back-end Developement</span>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
            <hr className='w-full'/>
         </li>
         <li>
            <button type="button" className="flex items-center p-4 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="flex-1 ml-3 text-left whitespace-nowrap font-bold" sidebar-toggle-item>Graphics Design</span>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
            <hr className='w-full'/>
         </li>
         <li>
            <button type="button" className="flex items-center p-4 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="flex-1 ml-3 text-left whitespace-nowrap font-bold" sidebar-toggle-item>Data Science </span>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
            <hr className='w-full'/>
         </li>
         <li>
            <button type="button" className="flex items-center p-4 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="flex-1 ml-3 text-left whitespace-nowrap font-bold" sidebar-toggle-item>UI/UX Design</span>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
            <hr className='w-full'/>
         </li>
         <li>
            <button type="button" className="flex items-center p-4 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="flex-1 ml-3 text-left whitespace-nowrap font-bold" sidebar-toggle-item>Basic ICT</span>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
            <hr className='w-full'/>
         </li>
         <li>
            <button type="button" className="flex items-center p-4 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="flex-1 ml-3 text-left whitespace-nowrap font-bold" sidebar-toggle-item>Digital & Affliating Marketing</span>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
            <hr className='w-full'/>
         </li>
         <li>
            <button type="button" className="flex items-center p-4 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="flex-1 ml-3 text-left whitespace-nowrap font-bold" sidebar-toggle-item>Cyber Security</span>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
            <hr className='w-full'/>
         </li>
         <li>
            <button type="button" className="flex items-center p-4 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <span className="flex-1 ml-3 text-left whitespace-nowrap font-bold" sidebar-toggle-item>Machine Learning</span>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
            <hr className='w-full'/>
         </li> 
      </ul>
   </div>
</aside>
    <>
    <div className ="course flex justify-center align-center">   
     <div className="grid grid-cols-1  gap-4 md:grid-cols-3" >
     {slice.map((DetailsData, index)=>{
         return (
            <Link to={`/details/${DetailsData.id}`}>
          <div className="w-full  max-w-sm bg-white  shadow-md dark:bg-gray-800 dark:border-gray-700" key={index}>
             <div className="flex justify-center align-center">
             <img className=" h-40  w-full " src={DetailsData.image}  alt="/" />
             </div>      
         <div className="px-5 pb-5">
         <h5 className="mt-4 font-bold tracking-tight text-blue-900 dark:text-white">
             {DetailsData.title}
              </h5>
             <h5 className="mt-4 text-sm  mb-8 tracking-tight text-gray-900 dark:text-white">
           {DetailsData.desc}
                 </h5>
         </div>
     </div>
                  </Link>
   
      )
          
          
       })}
      </div>
   </div>
    </>

    </div>

    <Footer/>
   
    </>

  )
}

export default Datails