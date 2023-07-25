
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Form = () => {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState("India");
    const navigate = useNavigate()
    
    function submitHandler(event) {
      event.preventDefault();
      axios.post(
          "https://64bf4cb55ee688b6250d3e8c.mockapi.io/crudproject/Crudprojects",
          {
              firstname : firstname,
              lastname : lastname,
              email : email,
              country : country,
          })       
          .then(() => {
              navigate("/") 
      }) 
      
    }

  return (
    <div className='w-full h-screen bg-gradient-to-tr from-fuchsia-300 to-sky-500'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[50px]'>Add Profile</h1>
        <form className="flex flex-col w-full max-w-lg p-6 space-y-3 rounded bg-sky-100" onSubmit={submitHandler}>
            <div className="w-full mb-6 md:w-1/2 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" 
              htmlFor="first-name ">
                First Name
              </label>
              <input className="block px-4 py-3 mb-3 leading-tight text-gray-700 rounded-md appearance-none w-80 borderrounded focus:outline-none focus:bg-white focus:border-gray-600" 
              id="first-name" 
              type="text" 
              onChange={(event) => {setFirstname(event.target.value)}} 
              placeholder="First Name" />
            </div>
            
            <div className="md:w-1/2">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" 
              htmlFor="last-name">
                Last Name
              </label>
              <input className="block px-4 py-3 leading-tight text-gray-700 border border-gray-200 rounded-md appearance-none w-80 focus:outline-none focus:bg-white focus:border-gray-500" 
              id="last-name" 
              type="text"
              onChange={(event) => {setLastName(event.target.value)}} 
              placeholder="Last Name" />
            </div>
          
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" 
              htmlFor="emialid">
                Email
              </label>
              <input className="block px-4 py-3 mb-3 leading-tight text-gray-700 border border-gray-200 rounded-md appearance-none w-80 focus:outline-none focus:bg-white focus:border-gray-500" 
              id="emailid" 
              type="email"
              onChange={(event) => {setEmail(event.target.value)}} 
              placeholder="Enter Your Email" />
            </div>
          </div>
          
          <div className="flex flex-wrap mb-2 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" 
              htmlFor="country">
                Country
              </label>
              <input className="block px-4 py-3 leading-tight text-gray-700 border border-gray-200 rounded-md appearance-none w-80 focus:outline-none focus:bg-white focus:border-gray-500" 
              id="country" 
              type="text" 
              onChange={(event) => {setCountry(event.target.value)}} 
              placeholder="india" />
            </div>
          </div>
          
          <button className="w-1/2 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 ">
            Submit
          </button>
        </form>
      </div>  
    </div>
  )
}

export default Form
