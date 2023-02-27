import React, {useState} from "react";
// import bgImg from "../../assets/kwaraTechh.png"
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import products from "../../../dev-data/data";


const Courses = () => {
  const [dataFiles, setDataFiles] = useState(null);
  const [error, setError] = useState(null);
  const [noOfElement, setnoOfElement] = useState(3);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  }
  useEffect(()=>{
    fetch('http://localhost:5000/dataFiles/')
    .then(res => {
      if(!res.ok){
        throw Error('could not fetch data from database');
      }
      return res.json();
    })
    .then(data => {
      setDataFiles(data);
    })
    .catch(err =>{
    setError(err.message);
  }, 1000);
  },[]);
  const slice = products.slice(0, noOfElement);
  return (
  <div className="">
    <h1 className="text-center text-4xl mt-4 mb-8 font-bold">PROGRAMS</h1>
    {error && <div> {error}</div>}  
    {/* grid grid-cols-1  gap-2 md:grid-cols-2 */}
    
    <div className ="courses flex justify-center align-center">   
     
  <div className="grid grid-cols-1  gap-2 md:grid-cols-3" >
  {slice.map((product, index)=>{
      return (
  <div className="mt-2 w-auto max-w-sm bg-white shadow-md dark:bg-gray-800 dark:border-gray-700 sm:w-full max-w-2xl mr-4 ml-4" key={index}>
    {/* bg-green-400 p-2 w-auto max-w-2xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none */}
          <div className="flex justify-center align-center">
          <img className=" h-60  w-full " src={product.image}  alt="/" />
          </div>      
      <div className="px-5 pb-5">
              <Link to={`/details/${product.id}`}>
      <h5 className="mt-4 font-semibold tracking-tight text-blue-900 dark:text-white">
             {product.title}
              </h5>
           
            </Link>
          <h5 className="mt-4 text-sm  mb-8 tracking-tight text-gray-900 dark:text-white">
        {product.desc}
              </h5>
         <hr/>
          <div className="flex items-center justify-between">
          <img className="" src={product.img} width={90} alt="/" />
              <h2 className ="font-bold text-xl">{product.price}</h2>
          </div>
      </div>
  </div>
   )
       
       
    })}
   </div>
</div>
<div  className=" mt-6 flex justify-center align-center ">
<button href="/contact">
                    <a
                      className="text-white font-bold px-8 py-4 rounded 
                    outline-none bg-blue-600 focus:outline-none mr-1 mb-1 bg-lightBlue-500
                    active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    onClick={() => loadMore()}>
                     Load More
                    </a>
                  </button>
 
</div>
    </div>
 
  );
};

export default Courses;
