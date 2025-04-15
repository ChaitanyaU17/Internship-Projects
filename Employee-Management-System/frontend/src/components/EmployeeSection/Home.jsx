import React from 'react'
import EmployeeManagementApp from '../EmployeeManagementApp';

const Home = () => {
  return (
  <>
  <div>
        <section id="home" className='min-h-screen flex items-center justify-center bg-blue-50 text-center px-4'>
            <div className='pt-4'>
                <h2 className='text-4xl font-bold mb-4'>
                    Welcome to the Employee Management System
                </h2>
            </div>
        </section>
    </div>
    <EmployeeManagementApp />
  </>
    
  )
}

export default Home;
