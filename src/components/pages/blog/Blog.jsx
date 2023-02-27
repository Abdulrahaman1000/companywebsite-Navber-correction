import React from "react";
import {  Link } from 'react-router-dom';
import {useFetch} from '../../../hooks/useFetch'



const Blog= () => {
    const {data: blogs, ispending, error} = useFetch('  http://localhost:3000/blogs')
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Blog</h2>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
      {ispending && <div>Loading....</div>}
  {error && <div>{error}</div>}
  {blogs && blogs.map((blog) =>(
      <div key={blog.key} class="bg-white p-2 w-auto max-w-2xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
    <div>        
         <img src={blog.img} className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"  />
    </div>
    <div className="flex sm:flex-1 flex-col gap-2 p-1">
        <h1 className="text-lg sm:text-xl font-semibold  text-gray-600">
        {blog.title}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
        {blog.desc}
        </p>
        <div className="flex gap-4 mt-auto">

        <Link to={`/blogs/${blog.id}`}>
         <button
            className='ml-auto flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
        >
            <span>Read more</span>
        </button>
        </Link>
        </div>
    </div>
</div>
  ))}
  </div>
  </div>
</section>
  );
};
export default Blog;

