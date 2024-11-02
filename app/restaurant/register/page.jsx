"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import FileInput from "@components/restaurant/FileInput";
import DocumentModalBox from "@components/restaurant/DocumentsRequiredModal";

const RegisterRestaurant = () => {
  const [showDocumentModal, setShowDocumentModal] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
          // You can also set these values in your address fields or process as needed
        },
        (error) => {
          alert("Unable to retrieve location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <div className="bg-green-100 pt-10 min-h-[92dvh]">
        <div className=" wrapper grid grid-cols-1 lg:gap-y-0 lg:grid-cols-[1.7fr_3fr] mx-auto gap-x-10">
          <div className="lg:sticky lg:top-10 bottom-0 bg-emerald-800 px-10 py-5 lg:py-0 rounded-xl lg:max-h-[80svh] flex flex-col justify-center items-center">
            <div>
              <Image
                alt="0%"
                className="mx-auto pb-6"
                src="/assets/images/restaurant/commision0.png"
                width={200}
                height={100}
              />
              <p className="text-center text-white text-2xl my-auto font-bold px-2">
                Register with us and get 0% commission for the 1st month for new
                restaurants in selected cities
              </p>
              <div
                className="flex bg-white mt-10 rounded-full gap-3 w-full justify-center p-3 cursor-pointer"
                onClick={() => {
                  setShowDocumentModal(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="green"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                    clipRule="evenodd"
                  />
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>
                <p className="px-1 text-md font-semibold">
                  Documents for registration
                </p>
              </div>

              <div className="flex bg-white mt-10 rounded-full w-full justify-center gap-3 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="green"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="px-1 text-md font-semibold">
                  Need help? Contact Us
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto lg:mx-0 lg:overflow-y-scroll lg:max-h-[85svh]">
            <p className="text-3xl font-extrabold mt-10 text-green-700">
              Register your restaurant
            </p>

            <div className="bg-white rounded-lg my-8 lg:mr-8 py-4">
              <p className="px-8 pt-5 text-xl font-bold text-danger-green">
                Restaurant Name
              </p>
              <p className="text-base px-8 text-grey-dark-3">
                Customers will see this name on Cravyn
              </p>
              <input
                className="mb-10 placeholder-gray-600 bg-gray-50 border-2 rounded-lg w-10/12 mx-8 mt-8 py-2 px-3"
                type="text"
                placeholder="Restaurant Name*"
              />
            </div>

            <div className="bg-white rounded-lg my-8 lg:mr-8">
              <p className="px-8 pt-5 text-2xl font-bold text-danger-green">
                Contact Details
              </p>
              <p className="text-base px-8 text-grey-dark-3">
                Cravyn will use these details for communication to restaurant
              </p>
              <div className="flex justify-start items-center">
                <input
                  className="mb-5 placeholder-gray-600 bg-gray-50 border-2 rounded-lg w-7/12 mx-8 mt-8 py-2 px-3"
                  type="text"
                  placeholder="Email address*"
                />
                <input
                  type="checkbox"
                  className="accent-primary-green mr-2 w-5 h-5"
                />
                <p>Same as owner email</p>
              </div>
              <div className="flex justify-start items-center">
                <input
                  className="placeholder-gray-600 bg-gray-50 mb-10 border-2 rounded-lg w-7/12 mx-8 py-2 px-3"
                  type="number"
                  placeholder="Phone Number*"
                />
                <input
                  type="checkbox"
                  className="accent-primary-green mr-2 w-5 h-5 -translate-y-5"
                />
                <p className="-translate-y-5">Same as owner phone number</p>
              </div>
            </div>

            <div className="bg-white rounded-lg my-8 lg:mr-8">
              <p className="px-8 pt-5 text-2xl font-bold text-danger-green">
                Add your restaurant's location for order pick-up
              </p>
              <p className="px-8 pt-5 text-xl font-bold text-danger-green">
                Restaurant address details
              </p>
              <p className="text-base px-8 text-grey-dark-3">
                Address details are basis the restaurant location mentioned
                above
              </p>
              <div className="flex">
                <input
                  className="mb-5 placeholder-gray-600 bg-gray-50 border-2 rounded-lg w-5/12 mx-8 mt-8 py-2 px-3"
                  type="text"
                  placeholder="Street(Optional)"
                />
                <input
                  className="mb-5 placeholder-gray-600 bg-gray-50 border-2 rounded-lg w-5/12 mx-8 mt-8 py-2 px-3"
                  type="text"
                  placeholder="Floor/Tower(Optional)"
                />
              </div>
              <div className="flex">
                <input
                  className="mb-5 placeholder-gray-600 bg-gray-50 border-2 rounded-lg w-5/12 mx-8 mt-4 py-2 px-3"
                  type="text"
                  placeholder="Area/Sector/Locality"
                />
                <input
                  className="mb-5 placeholder-gray-600 bg-gray-50 border-2 rounded-lg w-5/12 mx-8 mt-4 py-2 px-3"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="flex flex-col lg:flex-row">
                <input
                  className="mb-5 placeholder-gray-600 bg-gray-50 border-2 rounded-lg lg:w-7/12 mx-8 mt-4 py-2 px-3"
                  type="text"
                  placeholder="Landmark(optional)"
                />
                <button
                  onClick={getLocation}
                  className="mb-5 text-emerald-600 rounded-lg lg:w-3/12 mx-8 mt-4 py-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 28 32"
                    fill="#059669 "
                    xmlns="http://www.w3.org/2000/svg"
                    className=" inline-block align-middle"
                  >
                    <path
                      d="M26 13.3333C26 22.6666 14 30.6666 14 30.6666C14 30.6666 2 22.6666 2 13.3333C2 10.1507 3.26428 7.09841 5.51472 4.84797C7.76516 2.59753 10.8174 1.33325 14 1.33325C17.1826 1.33325 20.2348 2.59753 22.4853 4.84797C24.7357 7.09841 26 10.1507 26 13.3333Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 17.3333C16.2091 17.3333 18 15.5424 18 13.3333C18 11.1241 16.2091 9.33325 14 9.33325C11.7909 9.33325 10 11.1241 10 13.3333C10 15.5424 11.7909 17.3333 14 17.3333Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                  Fill Current Location
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg my-16 lg:mr-8">
              <p className="px-8 pt-5 text-2xl font-bold text-danger-green">
                Upload documents
              </p>
              <p className="text-base text-danger-green px-8">
                Cravyn will verify this documents before registering your
                restaurant with us
              </p>
              <input
                className="mb-8 placeholder-gray-600 bg-gray-50 border-2 rounded-lg w-10/12 mx-8 mt-8 py-2 px-3"
                type="text"
                placeholder="Registration Number"
              />
              <p className="px-8 font-bold text-danger-green">
                FSSAI License Copy:
              </p>
              <FileInput
                classes={
                  " w-10/12 mb-8 ml-8 text-gray-600 border-2 border-grey-light-3"
                }
              />
              <p className="px-8 font-bold text-danger-green">GSTIn Copy:</p>
              <FileInput
                classes={
                  " mb-5 bg-gray-50 w-10/12 ml-8 text-gray-600 border-2 border-grey-light-3"
                }
              />
              <input
                className="mb-10 placeholder-gray-600 bg-gray-50 border-2 rounded-lg w-10/12 mx-8 mt-4 py-2 px-3"
                type="text"
                placeholder="GSTIn Number"
              />
            </div>

            <div className="bg-white rounded-lg my-16 lg:mr-8">
              <p className="px-8 pt-5 text-2xl font-bold text-danger-green">
                Set Password
              </p>
              <p className="text-base text-danger-green px-8">
                This password will be used to login to your restaurant
                dashboard.
              </p>
              <input
                className="mb-8 placeholder-gray-600 bg-gray-50 border-2 rounded-lg w-10/12 mx-8 mt-8 py-2 px-3"
                type="password"
                placeholder="Password"
                minLength={6}
                maxLength={20}
              />
              <input
                className="mb-8 placeholder-gray-600 bg-gray-50 border-2 rounded-lg w-10/12 mx-8 py-2 px-3"
                type="password"
                placeholder="Confirm password"
                minLength={6}
                maxLength={20}
              />
            </div>

            <button className="opacity-100 bg-primary-green rounded-full  text-white hover:bg-teal-900 py-2 px-12 font-bold text-xl mb-16 lg:float-right lg:mr-12">
              Register
            </button>
          </div>
        </div>
      </div>
      <DocumentModalBox
        visible={showDocumentModal}
        func={() => {
          setShowDocumentModal(false);
        }}
      />
    </>
  );
};

export default RegisterRestaurant;
