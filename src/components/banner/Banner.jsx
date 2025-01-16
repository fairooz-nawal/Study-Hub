import React from 'react';
import { FaBaby } from "react-icons/fa6";
import '../banner/Banner.css'
const Banner = () => {
    return (

        <div className=" mx-auto p-5 max-w-sm lg:max-w-6xl flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between bg-white">
            <div className="w-full flex justify-center lg:w-1/3  mb-4">
                <div id="phonediv" className="w-3/4 lg:w-2/3">
                    <img
                        className="rounded-lg w-full h-full"
                        src="../../../asset/phone.png"
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2 ">
                <h1 className="text-2xl lg:text-7xl font-bold">Shared <span className='text-blue-800'>Collaborative</span> Platform, For Your Education</h1>
                <p className="py-6  text-gray-500 text-lg ">
                    Read freely, lake, arrow-shaped and placed at the edge of the sea. Pure truss sits at the edge and eats. Feathered dictum sits in the middle of the ornament, which. You, and the easy-to-use egestas donec nullam element.
                </p>

                <div className="flex item-center bg-white">
                    <div className="w-full lg:w-3/5"><input className='w-full  p-5' type="text" placeholder='Your Email Addres' /></div>
                    <div className="lg:w-2/5 items-center bg-blue-800 rounded-xl"><button className="btn h-full border-none bg-transparent w-full text-white">Send Invitation</button></div>
                </div>

                <div className="my-5">
                    <h1 className='text-2xl font-bold py-5'>Features</h1>
                    <div className="grid grid-cols-2 Lg:grid-cols-3 gap-6 w-full">
                        <div className="flex gap-2 items-center  text-orange-500 text-lg ">
                            <FaBaby />
                            <div className="text-gray-500">Excellent Feature</div>
                        </div>
                        <div className="flex gap-2 items-center  text-orange-500 text-lg ">
                            <FaBaby />
                            <div className="text-gray-500">Excellent Feature</div>
                        </div>
                        <div className="flex gap-2 items-center  text-orange-500 text-lg ">
                            <FaBaby />
                            <div className="text-gray-500">Excellent Feature</div>
                        </div>
                        <div className="flex gap-2 items-center  text-orange-500 text-lg ">
                            <FaBaby />
                            <div className="text-gray-500">Excellent Feature</div>
                        </div>
                        <div className="flex gap-2 items-center  text-orange-500 text-lg ">
                            <FaBaby />
                            <div className="text-gray-500">Excellent Feature</div>
                        </div>
                        <div className="flex gap-2 items-center  text-orange-500 text-lg ">
                            <FaBaby />
                            <div className="text-gray-500">Excellent Feature</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Banner;