import React, { useState } from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { verifyRestaurant } from "@services/managementTeamServices";
import Popup from "@components/PopUpModal";

const ApprovalModal = ({ visible, reqData = {}, closeFunc }) => {
  const [verification, setVerification] = useState("");

  const { mutate, data, isSuccess, isError, isPending, error } = useMutation({
    mutationFn: ({ restaurantId, approval }) =>
      verifyRestaurant(restaurantId, approval),
    mutationKey: ["partner approval", reqData],
    onSuccess: () => {
      setTimeout(() => {
        closeFunc();
      }, 3000);
    },
    onError: () => {},
  });

  const handleApproval = (e, approval) => {
    e.preventDefault();
    setVerification(approval);

    mutate({ restaurantId: reqData.restaurant_id, approval });
  };

  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form className="bg-accent-blue md:px-5 py-6 m-4 rounded-3xl shadow-lg relative">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-4 md:py-4 border-b border-gray-200">
          {reqData.verify_status === "pending" && (
            <h2 className="text-2xl md:text-3xl font-semibold">
              Waiting for approval
            </h2>
          )}
          <button
            onClick={closeFunc}
            className="text-gray-500 text-5xl md:-translate-y-8 font-extrabold hover:text-red-500 absolute top-10 right-10"
          >
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-8 py-4 bg-white rounded-lg border-2 border-grey-medium mx-4">
          <p className="text-blue-800 font-extrabold text-2xl">
            {reqData.restaurant_name}
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 md:mb-2">
              <p className="text-gray-600">reqdata.email</p>
              <p className="text-black border-b-2 border-grey-light-3 text-wrap">
                {reqData.email}
              </p>
            </div>
            <div className="md:col-span-2 md:mb-2">
              <p className="text-gray-600">Phone Number</p>
              <p className="text-black border-b-2 border-grey-light-3">
                {reqData.phone_number}
              </p>
            </div>

            {/* Address */}
            <div className="md:col-span-2 md:mb-2">
              <p className="text-gray-600">Address</p>
              <p className="text-wrap">
                {reqData.street}, {reqData.city},
              </p>
              <p className="border-b-2 border-grey-light-3 ">
                {reqData.landmark} {reqData.pin_code}
              </p>
            </div>

            {/* Registration and GSTIN */}
            <div className="md:mb-2">
              <p className="text-gray-600">Registration No.</p>
              <p className="border-b-2 border-grey-light-3">
                {reqData.registration_no}
              </p>
            </div>
            <div>
              <p className="text-gray-600">GSTIN No.</p>
              <p className="border-b-2 border-grey-light-3">
                {reqData.gstin_no}
              </p>
            </div>

            {/* Owner */}
            <div className="md:col-span-2 md:mb-4">
              <p className="text-gray-600">Owner</p>
              <p className="text-blue-medium border-b-2 border-grey-light-3">
                {reqData.restaurant_owner_name}
              </p>
            </div>

            {/* Links */}
            <div>
              <Link
                href={reqData.license_url}
                target="blank"
                className="text-primary-blue underline cursor-pointer flex items-center"
              >
                <span className="material-icons text-primary-blue mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="blue"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </span>
                View Registration
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-primary-blue flex items-center underline cursor-pointer"
              >
                <span className="material-icons text-primary-blue mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="blue"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </span>
                View GSTIN
              </Link>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        {reqData.verify_status === "pending" &&
          (isSuccess ? (
            <p
              className={`font-bold text-lg py-4 text-center ${
                verification === "verified"
                  ? "text-emerald-500"
                  : "text-red-500"
              }`}
            >
              {"Partner Request " + verification}
            </p>
          ) : (
            <div className="flex justify-between gap-3 items-center p-4 border-t border-gray-200">
              <button
                onClick={(e) => handleApproval(e, "verified")}
                className="w-full justify-center flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                <span className="material-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                {isPending ? "Pending" : "Accept"}
              </button>
              <button
                onClick={(e) => handleApproval(e, "rejected")}
                className="w-full flex justify-center items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                <span className="material-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                {isPending ? "Pending" : "Reject"}
              </button>
            </div>
          ))}
      </form>
    </div>
  );
};

export default ApprovalModal;
