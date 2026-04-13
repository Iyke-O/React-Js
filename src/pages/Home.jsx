import React from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />

        <h1 className='text-3xl font-bold text-center my-10'> This is the Home Page</h1>

        <div className='mt-8 px-12 py-8'>
            <Cards />
        </div>
    
    </div>


  )
}

export default Home