import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {

    const [formdata, setFormdata] = useState([])

    function adddata() {
        axios.get('https://64bf4cb55ee688b6250d3e8c.mockapi.io/crudproject/Crudprojects')
        .then((res) => {
            setFormdata(res.data)
        })
    }

    useEffect(() => {
        adddata();
    }, [])

    function deleteHandler(id) {
        axios
          .delete(`https://64bf4cb55ee688b6250d3e8c.mockapi.io/crudproject/Crudprojects/${id}`)
          .then(() => {
            adddata();
        });
        
      }

    function localstorageHandler (id, firstname, lastname,email, country) {
        localStorage.setItem("id", id)
        localStorage.setItem("firstname", firstname)
        localStorage.setItem("lastname", lastname)
        localStorage.setItem("email", email)
        localStorage.setItem("country", country)
    }
  return (
    <div>
        <div>
            <h1 className='text-[40px]'>Home</h1>
        </div>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-sm font-light text-left table-auto">
                    <thead className="text-lg font-medium border-b dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">#</th>
                        <th scope="col" className="px-6 py-4">First Name</th>
                        <th scope="col" className="px-6 py-4">Last Name</th>
                        <th scope="col" className="px-6 py-4">Email</th>
                        <th scope="col" className="px-6 py-4">Country</th>
                        <th scope="col" className="px-6 py-4"></th>
                        <th scope="col" className="px-6 py-4"></th>
                      </tr>
                    </thead>
                    {formdata.map((data) => {
                            return (
                                <tbody key={data.id} > 
                                    <>
                                        <tr className="border-b dark:border-neutral-500 ">
                                          <td scope="row" className="px-6 py-4 text-base font-medium whitespace-nowrap">{data.id}</td>
                                          <td className="px-6 py-4 text-base font-medium whitespace-nowrap">{data.firstname}</td>
                                          <td className="px-6 py-4 text-base font-medium whitespace-nowrap">{data.lastname}</td>
                                          <td className="px-6 py-4 text-base font-medium whitespace-nowrap">{data.email}</td>
                                          <td className="px-6 py-4 text-base font-medium whitespace-nowrap">{data.country}</td>
                                          <td>
                                          <NavLink to='/edit'>
                                            <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
                                            onClick={() => localstorageHandler(
                                                data.id, 
                                                data.firstname,
                                                data.lastname,
                                                data.email,
                                                data.country
                                            )}>
                                              Edit
                                            </button>
                                          </NavLink>
                                          </td>
                                          <td>
                                          <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                                          onClick={() => deleteHandler(data.id)}>
                                            Delete
                                          </button>
                                          </td>
                                        </tr>
                                    </>
                                  </tbody>
                               )
                        })
                    }
                  </table>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home
