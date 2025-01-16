import React from 'react';
import { IoMdMailUnread } from "react-icons/io";
import { FaSms } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className='grid grid-cols-1 lg:grid-cols-6 gap-4'>
                <div className=" lg:col-span-2">
                    <div className="w-1/2 mb-7"><img className='w-full' src="../../../asset/logo.png" alt="" /></div>
                    <div className="w-2/3">
                        <p className=' text-gray-500 text-lg'>
                            Ornare tellus at scelerisque facilisi. Ac convallis pharetra, in proin congue. Egestas nec egestas fermentum, tellus hac. Molestie
                        </p>
                    </div>
                    <div className="flex items-center my-4">
                        <div className=""><IoMdMailUnread /></div>
                        <div className="text-gray-500 text-lg">arlnapps@earlnapps.com</div>
                    </div>
                    <div className="flex items-center">
                        <div className=""><FaSms /></div>
                        <div className="text-gray-500 text-lg">arlnapps@earlnapps.com</div>
                    </div>
                </div>
                <div className=" w-full">
                    <div className="w-1/4 mx-auto ">
                        <h1 className='text-2xl text-gray-900 font-extrabold mb-5'>Menu</h1>
                        <p className="text-gray-500 mb-5">Home</p>
                        <p className="text-gray-500 mb-5">About us</p>
                        <p className="text-gray-500 mb-5">Destination</p>
                        <p className="text-gray-500">Promotion</p>
                    </div>
                </div>
                <div className=" w-full">
                    <div className="w-1/4 mx-auto ">
                        <h1 className='text-2xl text-gray-900 font-extrabold mb-5'>Menu</h1>
                        <p className="text-gray-500 mb-5">Home</p>
                        <p className="text-gray-500 mb-5">About us</p>
                        <p className="text-gray-500 mb-5">Destination</p>
                        <p className="text-gray-500">Promotion</p>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <h1 className='text-2xl text-gray-900 font-extrabold mb-5'>Media Gallery</h1>
                    <div className=" grid grid-cols-2 gap-1 lg:grid-cols-3 ">
                        <div className="image-container rounded-xl"><img className="w-full h-full object-contain rounded-xl" src="../../../asset/icon-1.jpg" alt="" /></div>
                        <div className="image-container rounded-xl"><img className="w-full h-full object-contain rounded-xl" src="../../../asset/icon-2.jpg" alt="" /></div>
                        <div className="image-container rounded-xl"><img className="w-full h-full object-contain rounded-xl" src="../../../asset/icon-3.jpg" alt="" /></div>
                        <div className="image-container rounded-xl"><img className="w-full h-full object-contain rounded-xl" src="../../../asset/icon-4.jpg" alt="" /></div>
                        <div className="image-container rounded-xl"><img className="w-full h-full object-contain rounded-xl" src="../../../asset/icon-5.jpg" alt="" /></div>
                        <div className="image-container rounded-xl"><img className="w-full h-full object-contain rounded-xl" src="../../../asset/icon-6.jpg" alt="" /></div>
                        <div className="image-container rounded-xl"><img className="w-full h-full object-contain rounded-xl" src="../../../asset/icon-7.jpg" alt="" /></div>
                        <div className="image-container rounded-xl"><img className="w-full h-full object-contain rounded-xl" src="../../../asset/icon-8.jpg" alt="" /></div>
                        <div className="image-container rounded-xl"><img className="w-full h-full object-contain rounded-xl" src="../../../asset/icon-9.jpg" alt="" /></div>
                    </div>
                </div>



            </footer>
        </div>
    );
};

export default Footer;