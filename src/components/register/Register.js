import React, { Component, useState } from 'react'
    export default class Register extends Component{
    constructor(props){
        super(props)
        this.state ={
            fname:"",
            email:"",
            password:"" 
        }; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }
//     const [data, setData] = useState({
        // first_name:"",
        // last_name:"",
        // email:"",
        // password:""
//     })

//     const handleChange=(e)=>{
//         setData({...data, [e.target.name]: e.target.value});
//         // console.log(data)
//     }
//     const submitForm=(e)=>{
//         e.preventDefault();
//       const sendData ={
//         first_name:data.first_name,
//         last_name:data.last_name,
//         email:data.email,
//         password:data.password
//     }
//     console.log(sendData);
// }
handleSubmit(e){
    e.preventDefault();
    const {fname,  email, password} = this.state;
    console.log(fname,  email, password); 
    fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            fname,
            email,
            password,
        }),
    })
    .then((res) => res.json())
    .then((data) =>{
        console.log(data, "userRegister");
    });
}
render (){
  return (
    
        <>
        <section className="w-100 h-auto  rounded-lg bg-white dark:bg-gray-900">
    <div className="">
        <div className="">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div >
                <h1 className="text-xl font-bold mb-4  leading-tight tracking-tight text-blue-900 text-center md:text-2xl dark:text-white">
                Register Your Account
                </h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label for="Fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                        <input type="fullname" 
                        name="first_name" 
                        id="fullname" 
              
                        className="form-control bg-blue-300 border border-gray-300 text-gray-900 
                        sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                        dark:border-gray-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            onChange={(e) => this.setState({ fname: e.target.value })}/>
                    </div>
                    {/* <div>
                        <label for="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input type="firstname" name="last_name" id="lastname" className="form-control bg-blue-300 border border-gray-300 text-gray-900 
                        sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                        dark:border-gray-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        onChange={handleChange}
                        value={data.last_name}
                        placeholder="" required=""/>
                    </div> */}
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" className="form-control bg-blue-300 border border-gray-300 text-gray-900 
                        sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                        dark:border-gray-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                 
                        placeholder="" required=""
                        onChange={(e) => this.setState({ email: e.target.value })}/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="" className="form-control bg-blue-300 border border-gray-300 
                        text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      
                        required=""
                        onChange={(e) => this.setState({ password: e.target.value })}/>
                    </div>
                    <p className="text-sm mb-3 font-light font-bold text-center text-blue-700 dark:text-blue-400">
                        Login if you alreday have an account? <a href="" className="font-medium text-black hover:underline dark:text-primary-500">Login</a>
                    </p>
                    <div className='text-center'>
                        <input type="submit" name="submit" value="register" 
                        className="form-control flex w-full justify-center text-white font-bold px-8 py-4 rounded 
                        outline-none bg-orange-600 focus:outline-none mr-1 mb-1 bg-lightBlue-500
                        active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg 
                        ease-linear transition-all duration-150"/>
                    </div>
                </form>
                </div>
            </div>
            
        </div>
        
    </div>
  </section>
        </>
   
  )
}}

