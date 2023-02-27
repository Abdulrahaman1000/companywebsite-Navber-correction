import React, {Component} from 'react'


export default class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            email:"",
            password:"" 
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }
    handleSubmit(e){
        e.preventDefault();
        const {email, password} = this.state;
        console.log(email, password); 
        fetch("http://localhost:5000/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data, "userRegister");
            if (data.status == "ok"){
                alert("login succesfully")
                window.localStorage.setItem("token", data.data);
                window.location.href =  "../details";
            }
        });
    }
    
    render(){
  return (
    <div>
           <>
        <section className="w-100 rounded-lg bg-white dark:bg-gray-900">
    <div className="">
        <div className="">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-900 text-center md:text-2xl dark:text-white">
                    Login Into Your Account
                </h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-blue-300 border border-gray-300 text-gray-900 
                        sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                        dark:border-gray-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="" required=""
                        onChange={(e) => this.setState({ email: e.target.value })}/>
                        
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="" className="bg-blue-300 border border-gray-300 
                        text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                        onChange={(e) => this.setState({ password: e.target.value })}/>
                    </div>
                                       <p className="text-sm font-light font-bold text-center text-blue-700 dark:text-blue-400">
                        Don’t have an account yet? <a href="" className="font-medium text-black hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                    <div className='text-center'>
                        <input type="submit" name="submit" value="Login" 
                        className="form-control flex w-full justify-center text-white font-bold px-8 py-4 rounded 
                        outline-none bg-orange-600 focus:outline-none mr-1 mb-1 bg-lightBlue-500
                        active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg 
                        ease-linear transition-all duration-150"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </section>
        </>
    </div>
  )
}
}