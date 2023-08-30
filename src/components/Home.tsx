import React from 'react'
import { Link } from 'react-router-dom'
import TypewriterComponent from 'typewriter-effect'

const Home = () => {
    return (
        <div className='w-full h-[100vh] bg-black'>
            <div className='flex flex-col gap-10 w-full h-full items-center justify-center'>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-9 text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "TAIYO AI ASSIGNMENT!"
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className='flex flex-col md:flex-row  gap-5 items-center justify-center'>
                    {/* Link to Contacts List */}
                    <Link to={"/contacts"} className='bg-gray-200 text-lg px-2 py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-400 transition-colors ease-in-out duration-200 md:text-xl font-bold '>Contacts List</Link>

                    {/* Link to Dashboard */}
                    <Link to={"/charts-and-maps"} className='bg-gray-200 text-lg px-2 py-1 md:px-4 md:py-2 rounded-full hover:bg-gray-400 transition-colors ease-in-out duration-200 md:text-xl font-bold '>Charts And Maps</Link>
                </div>
            </div>
        </div>
    )
}

export default Home