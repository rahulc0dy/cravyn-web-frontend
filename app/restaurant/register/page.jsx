"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import FileInput from "@components/restaurant/FileInput";
import DocumentModalBox from "@components/restaurant/DocumentModalBox";

const RegisterRestaurant=()=>{
    const [showDocumentModal, setShowDocumentModal] = useState(false);
    return <>
    <div className="bg-green-100 relative">
    <div className="wrapper grid grid-cols-1 lg:gap-y-0 lg:grid-cols-[1.7fr_3fr] lg:max-h-[80dvh] lg:overflow-y-scroll mx-auto gap-x-10">
        <div className="lg:sticky lg:top-0 bottom-0 bg-green-800 p-4 rounded-3xl lg:rounded-b-none lg:rounded-t-3xl lg:max-h-[80dvh]">
            
            <Image className="mx-auto pb-6" src="/assets/images/restaurant/restaurant-background.png" width={200} height={100}></Image>
            <p className="text-center text-white text-2xl my-auto font-bold px-2">Register with us and get 0% commission for the 1st month for new restaurants in selected cities</p>
            

            <div className="flex bg-white mt-10 rounded-full w-full justify-center p-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="size-6">
                <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd" />
                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>

                <p className="px-1 text-md font-semibold">Documents for registration</p>

                <button onClick={()=>{setShowDocumentModal(true)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="size-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
                </svg></button>
            </div>

            <div className="flex bg-white mt-10 rounded-full w-full justify-center p-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="size-6">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                </svg>


                <p className="px-1 text-md font-semibold">Need help? Contact Us</p>

                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="size-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
                </svg></button>
            </div>
        </div>

        <div className="mx-auto lg:mx-0">
            <p className="text-4xl text-center lg:text-left font-extrabold mt-10 text-green-700">Register your restaurant</p>

            <div className="bg-white rounded-3xl my-8 lg:mr-8">
            <p className="px-8 pt-5 text-2xl font-bold text-lime-800">Restaurant Name</p>
            <p className="text-base px-8 text-lime-700">Customers will see this name on Cravyn</p>
            <input className="mb-10 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-10/12 mx-8 mt-8 py-2 px-3" type="text" placeholder="Restaurant Name*"></input>
            </div>

            <div className="bg-white rounded-3xl my-8 lg:mr-8">
                <p className="px-8 pt-5 text-2xl font-bold text-lime-800">Contact Details</p>
                <p className="text-base px-8 text-lime-700">Cravyn will use these details for communication to restaurant</p>
                <div className="flex justify-start items-center">
                <input className="mb-5 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-7/12 mx-8 mt-8 py-2 px-3" type="text" placeholder="Email address*"></input>
                <input type="checkbox" className="accent-pink-500 mr-2 w-5 h-5"></input>
                <p>Same as owner email</p>
                </div>
                <div className="flex justify-start items-center">
                <input className="placeholder-gray-600 bg-grey-light-2 mb-10 border-2 rounded-xl w-7/12 mx-8 py-2 px-3" type="number" placeholder="Phone Number*"></input>
                <input type="checkbox" className="accent-pink-500 mr-2 w-5 h-5 -translate-y-5"></input>
                <p className="-translate-y-5">Same as owner phone number</p>
                </div>
            </div>

            <div className="bg-white rounded-3xl my-8 lg:mr-8">
                <p className="px-8 pt-5 text-2xl font-bold text-lime-800">Add your restaurant's location for order pick-up</p>
                <p className="px-8 pt-5 text-xl font-bold text-lime-800">Restaurant address details</p>
                <p className="text-base px-8 text-lime-700">Address details are basis the restaurant location mentioned above</p>
                <div className="flex">
                    <input className="mb-5 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-6/12 mx-8 mt-8 py-2 px-3" type="text" placeholder="Street(Optional)"></input>
                    <input className="mb-5 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-6/12 mx-8 mt-8 py-2 px-3" type="text" placeholder="Floor/Tower(Optional)"></input>
                </div>
                <div className="flex">
                    <input className="mb-5 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-6/12 mx-8 mt-4 py-2 px-3" type="text" placeholder="Area/Sector/Locality"></input>
                    <input className="mb-5 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-6/12 mx-8 mt-4 py-2 px-3" type="text" placeholder="City"></input>
                </div>
                <input className="mb-10 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-10/12 mx-8 mt-4 py-2 px-3" type="text" placeholder="Add any nearby landmark(optional)"></input>
            </div>

            <div className="bg-white rounded-3xl my-16 lg:mr-8">
                <p className="px-8 pt-5 text-2xl font-bold text-lime-800">Upload documents</p>
                <p className="text-base text-lime-800 px-8">Cravyn will verify this documents before registering your restaurant with us</p>
                <input className="mb-8 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-10/12 mx-8 mt-8 py-2 px-3" type="text" placeholder="Registration Number"></input>
                <p className="px-8 font-bold text-lime-800">FSSAI License Copy:</p>
                <FileInput classes={" w-10/12 mb-8 ml-8 text-gray-600 border-2 border-grey-light-3"}/>
                <p className="px-8 font-bold text-lime-800">GSTIn Copy:</p>
                <FileInput classes={" mb-5 bg-grey-light-2 w-10/12 ml-8 text-gray-600 border-2 border-grey-light-3"}/>
                <input className="mb-10 placeholder-gray-600 bg-grey-light-2 border-2 rounded-xl w-10/12 mx-8 mt-4 py-2 px-3" type="text" placeholder="GSTIn Number"></input>
            </div>

        </div>
    </div>
    </div>
    <div className="flex lg:bg-black lg:bg-gradient-none bg-gradient-to-b h-auto from-gray-100 from-30% to-white to-50% justify-center items-center lg:justify-end">
        <button className="opacity-100 bg-secondary-green rounded-full w-[20vh] h-[5vh] text-white hover:bg-teal-900 lg:mr-32">Register</button>
    </div>
    <DocumentModalBox
        visible={showDocumentModal}
        func={() => {
            setShowDocumentModal(false);
          }}
    />
    </>
}

export default RegisterRestaurant;