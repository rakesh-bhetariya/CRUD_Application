import React from 'react'

const About = () => {
  return (
    <div className='w-10/12 mx-auto mt-4'>
      <h1 className='text-xl font-extrabold'>Overview:</h1>
      <p className='mt-2 ml-2 font-medium'>
        The Curd App is a web application developed using React.js, Axios, Router, HTML, and CSS. The primary objective of this project is to demonstrate the implementation of basic CRUD (Create, Read, Update, Delete) operations on a dataset. The app allows users to perform various actions like adding, viewing, updating, and deleting records. It provides a user-friendly interface to interact with the data and seamlessly manages the communication with the server through Axios.
      </p>
      <h2 className='text-2xl font-bold mt-7'>Key Features:</h2>
      <ul className='mt-2 ml-5 font-medium list-decimal'>
        <li>
            <p>
                <span className='font-bold'>Create:</span> Users can add new records to the dataset using a user-friendly form. The app validates the input data to ensure accuracy before submitting it to the server.
            </p>
        </li>
        <li>
            <p>
               <span className='font-bold' >Edit:</span> Users can modify the existing records by selecting the desired entry and editing the information in the provided form. The app ensures that only valid updates are sent to the server.
            </p>
        </li>
        <li>
            <p>
               <span className='font-bold' >Delete:</span> The app offers the capability to remove records from the dataset securely. Users can select a specific entry and confirm the deletion to eliminate it from the system.
            </p>
        </li>
      </ul>

      <h2 className='text-2xl font-bold mt-7'>Technology Stack:</h2>
      <ul className='mt-2 ml-6 font-medium list-disc'>
        <li>
            <p>
                <span className='font-bold'>React.js:</span> The front-end of the Curd App is built using React.js, a popular JavaScript library for building user interfaces. React.js allows for the creation of reusable components, making the code modular and easy to maintain
            </p>
        </li>
        <li>
            <p>
                <span className='font-bold'>Axios:</span> To facilitate communication with the server, Axios is utilized as an HTTP client. It enables the app to send asynchronous requests to the backend API and handle responses efficiently.            
            </p>
        </li>
        <li>
            <p>
                <span className='font-bold'>Router:</span> React Router is employed to manage navigation within the application. It enables the app to have different views based on the URL, facilitating smooth user experience and easy access to various functionalities.
            </p>
        </li>
        <li>
            <p>
                <span className='font-bold'>HTML & CSS:</span> HTML and CSS are used to structure the user interface and apply styles to make the app visually appealing and responsive on different devices.
            </p>
        </li>
      </ul>

      <h1 className='text-2xl font-bold mt-7' >Conclusion:</h1>
      <p className='mt-2 ml-2 font-medium'>
        The Curd App built with React.js, Axios, Router, HTML, and CSS demonstrates the implementation of basic CRUD operations. It provides users with a user-friendly interface to interact with data, enabling them to create, read, update, and delete records effortlessly. The combination of these technologies ensures efficient communication with the server, a modular codebase, and an engaging user experience. This project serves as a foundation for more complex applications that require data management and CRUD functionality.
      </p>
    </div>
    
    
  )
}

export default About
