/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navber'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
    return (
        <>
            <Navbar />
            <div className=" min-h-screen">
                <Course />
            </div>
            <Footer />
        </>
    )
}

export default Courses