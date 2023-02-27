import React, { useEffect } from 'react'
import {useParams, useHistory} from "react-router-dom"
import {useFetch} from '../../../hooks/useFetch'
import Navbar1 from '../../navbar1/Navbar1'
import Footer from '../../footer/Footer'


const BlogDetails = () => {
  const {id}= useParams()
const url = 'http://localhost:3000/blogs/' + id
const {data: blog, isPending, error} = useFetch(url)
const history = useHistory()


useEffect(() =>{
  if(error){
      //redirect
      setTimeout(() => {
          history.push('/')
      }, 4000) 
  }
}, [error, history])
  return (

    <div>
      <Navbar1/>
  <div className='bg-gray-700 mb-12 h-30'>
  <h1 className="text-center py-10 text-4xl text-white ">
                   BLOG DETAILS
  </h1>
    </div>
  {isPending && <div>Loding...</div>}
  {error && <div>{error}</div>}
    {
      blog &&(
        <>
        <div className='flex justify-center'>
      <img src={blog.src} className=" h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"  />
      </div>
      <h1 class="text-lg sm:text-xl font-semibold  text-gray-600">
 {blog.title}
 </h1>

      </>
      
      )
    }
    <div className='mt-24'>
    <Footer/>
    </div>

    </div>
    
  )
}

export default BlogDetails