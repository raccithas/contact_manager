import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
function Home() {
  return (
    <div>
      <Navbar />
      <div className='Main-Comp'>
        <h1 className='ToDo'>Contact Manager</h1>
      </div>
    </div>
  )
}
export default Home;