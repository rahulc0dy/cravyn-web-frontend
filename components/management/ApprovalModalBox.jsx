import React from "react";
import Link from "next/link";

const ApprovalModal = ({visible,rest_name,owner_name,close_func}) => {
  if(!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-blue-50 md:p-4 m-4 rounded-3xl shadow-lg w-full max-w-lg min-h-[70svh]">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-4 pt-4 md:py-4 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold">Waiting for approval</h2>
          <button onClick={close_func} className="text-gray-500 text-5xl md:-translate-y-8 font-extrabold hover:text-red-500">&times;</button>
        </div>

        {/* Modal Content */}
        <div className="px-8 py-4 bg-white rounded-lg border-2 border-grey-medium mx-4">
          <p className="text-blue-800 font-extrabold text-2xl">{rest_name}</p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email and Phone */}
            <div className="md:col-span-2 md:mb-2">
              <p className="text-gray-600">Email Address</p>
              <p className="text-black border-b-2 border-grey-light-3 text-wrap">banzara@restaurant.com</p>
            </div>
            <div className="md:col-span-2 md:mb-2">
              <p className="text-gray-600">Phone Number</p>
              <p className="text-black border-b-2 border-grey-light-3">9658745123</p>
            </div>

            {/* Address */}
            <div className="md:col-span-2 md:mb-2">
              <p className="text-gray-600">Address</p>
              <p className="text-wrap">177A, Bleeker Street
            Goabagan Road</p>
              <p className="border-b-2 border-grey-light-3 ">Kolkata, 700026</p>
            </div>

            {/* Registration and GSTIN */}
            <div className="md:mb-2">
              <p className="text-gray-600">Registration No.</p>
              <p className="border-b-2 border-grey-light-3">1235468545654897464</p>
            </div>
            <div>
              <p className="text-gray-600">GSTIN No.</p>
              <p className="border-b-2 border-grey-light-3">1235468545654897464</p>
            </div>

            {/* Owner */}
            <div className="md:col-span-2 md:mb-4">
              <p className="text-gray-600">Owner</p>
              <p className="text-blue-medium border-b-2 border-grey-light-3">{owner_name}</p>
            </div>

            {/* Links */}
            <div>
              <Link href="#" className="text-blue-medium underline cursor-pointer flex items-center">
                <span className="material-icons text-blue-600 mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>

                </span>
                View Registration
              </Link>
            </div>
            <div>
              <Link href="#" className="text-blue-medium flex items-center underline cursor-pointer">
                <span className="material-icons text-blue-600 mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                </span>
                View GSTIN
              </Link>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-evenly p-4 border-t border-gray-200">
          <button className="w-5/12 justify-center flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            <span className="material-icons">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
 
            </span> Accept
          </button>
          <button className="w-5/12 flex justify-center items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            <span className="material-icons">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </span> Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalModal;
