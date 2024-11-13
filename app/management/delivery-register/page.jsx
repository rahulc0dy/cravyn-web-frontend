"use client";

import React from "react";
import Image from "next/image";
import FileInput from "@components/restaurant/FileInput";

const RegisterRestaurant=()=>{
    return <div className="border-2 border-blue-medium rounded-3xl m-4">
    <div className="grid grid-cols-1 w-9/12 mx-auto py-6">
        <div className="grid grid-cols-[auto_1fr] bg-blue-dark-2 p-4 rounded-3xl">    
            <Image className="mx-auto pl-8" src="/assets/images/management/delivery.png" width={150} height={100}></Image>
            <p className="text-center text-white text-3xl my-auto font-bold px-2">Delivery Partner Registration Form</p>
        </div>

        <div className="mx-auto lg:mx-0">

            <div className="bg-blue-100 rounded-3xl my-8">
            <p className="px-8 pt-5 text-2xl font-bold text-blue-dark-1">Delivery Partner Name</p>
            <p className="text-base px-8 text-blue-dark-2">Customers will see this name on their order status page</p>
            <input className="mb-10 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-10/12 mx-8 mt-8 py-2 px-3" type="text" placeholder="Delivery Partner Name*"></input>
            </div>

            <div className="bg-blue-100 rounded-3xl my-8">
                <p className="px-8 pt-5 text-2xl font-bold text-blue-dark-1">Contact Details</p>
                <p className="text-base px-8 text-blue-dark-2">Cravyn will use these details for communication to delivery partner</p>

                <input className="mb-5 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-10/12 mx-8 mt-8 py-2 px-3" type="text" placeholder="Email address*"></input>
                
                <input className="placeholder-gray-600 bg-grey-light-2 mb-10 border-2 rounded-xl w-10/12 mx-8 py-2 px-3" type="number" placeholder="Phone Number*"></input>
            </div>

            <div className="bg-blue-100 rounded-3xl my-8">
                <p className="px-8 pt-5 text-2xl font-bold text-blue-dark-1">Service Details</p>
                <p className="text-base px-8 text-blue-dark-2">Cravyn will use these details for assigning delivery partners to orders</p>

                <input className="mb-5 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-10/12 mx-8 mt-8 py-2 px-3" type="text" placeholder="Service Area*"></input>
                
                <div className="px-8 flex items-center justify-start">
                <label className="-translate-y-5 font-semibold text-blue-dark-2 text-lg" for="vehicle">Vehicle Type: </label>
                <select name="vehicle" className="placeholder-gray-600 bg-grey-light-2 mb-10 border-2 rounded-xl w-6/12 mx-8 py-2 px-3">
                <option value="Bike">Bike</option>
                <option value="Cycle">Cycle</option>
                </select>
                </div>
            </div>

            <div className="bg-blue-100 rounded-3xl my-8">
            <p className="px-8 pt-5 text-2xl font-bold text-blue-dark-1">Set Password</p>
            <p className="text-base px-8 text-blue-dark-2">Delivery Partners will use this password for first access to their account</p>
            <input className="mb-10 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-10/12 mx-8 mt-8 py-2 px-3" type="password" placeholder="Password*"></input>
            </div>

            <div className="text-center">
            <button className="opacity-100 bg-blue-medium rounded-full w-40 h-10 text-white font-bold hover:bg-blue-dark-2">Register</button>
            </div>

        </div>
    </div>
    </div>
}

export default RegisterRestaurant;