import './app.css'
import { useState,useEffect } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";



function app() {

  let [email,setEmail] = useState("");
  let [password,setpassword] = useState("");
  let [show,setShow] = useState(false);
  
  
    let handleClick = (e) => {
      e.preventDefault()
      if(email == ""){
      alert("please fill in all tha fields")
      }
    }
    
let handleye = () => {
  setShow(!show)
}



  return(
    <>
    <div className='center mt-50'>
        <form className="max-w-sm mx-auto border border-gray-300 p-10 rounded-lg bg-blue-400 ">
      <h2 className='text-black text-3xl font-bold pb-10 text-center'>Registration form</h2>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
            <input  onChange={(e)=>setEmail(e.target.value)} type="email" id="email" className="bg-neutral-secondary-medium border-none focus:outline-none bg-amber-50 rounded border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
             
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
            <div className='relative'>
            <input onChange={(e)=>setpassword(e.target.value)} type = {show ? "password" : "text"} id="password" className=" bg-neutral-secondary-medium border-none focus:outline-none bg-amber-50 rounded  border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />

            {
              show ?
              <FaRegEyeSlash onClick={handleye} className='absolute cursor-pointer top-0 right-0 top-3 right-4' />
              :
              <IoEyeOutline onClick={handleye} className='absolute top-0 right-0 top-3 right-4 ' />
            }
            </div>
          </div>
          <label htmlFor="remember" className="flex items-center mb-5">
            <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
            <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</p>
          </label>
          <button onClick={(e)=> handleClick(e)} type="submit" className="text-white cursor-pointer bg-black rounded border-none box-border border border-transparent hover:bg-brand-strong hover:bg-purple-600 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none ">Submit</button>
        </form>
    </div>
              


    </>
  )
}
export default app