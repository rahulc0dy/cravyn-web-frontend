"use client";

import Image from "next/image";
import FileInput from "@components/restaurant/FileInput";
import { addDeliveryPartner } from "@services/managementTeamServices";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Popup from "@components/PopUpModal";
import LoadingSpinner from "@components/LoadingSpinner";

const RegisterRestaurant = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleType, setVehicleType] = useState("Bike");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [serviceArea, setServiceArea] = useState("");

  const { mutate, isPending, isError, error, isSuccess, data } = useMutation({
    mutationFn: (deliveryPartnerObject) =>
      addDeliveryPartner(deliveryPartnerObject),
    onSuccess: async (data) => {
      console.log("Registration successful:", data);
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });

  const handleAddDeliveryPartner = (e) => {
    e.preventDefault();
    const deliveryPartner = {
      name,
      phoneNumber,
      email,
      vehicleType,
      password,
      confirmPassword,
    };
    mutate(deliveryPartner);
  };

  return (
    <div className="border-2 border-blue-200 border-blue-medium rounded-3xl m-4">
      <div className="grid grid-cols-1 w-9/12 mx-auto py-6">
        <div className="flex p-4 rounded-3xl">
          <p className=" text-right text-2xl my-auto font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-tertiary-blue px-2">
            Fill out the details to onboard a new delivery partner to help serve
            your customers efficiently.
          </p>
          <Image
            className="mx-auto pl-8 object-contain"
            src="/assets/images/management/food-delivery-bike.png"
            width={100}
            height={100}
            alt="delivery illustration"
          />
        </div>

        <form
          className="mx-auto lg:mx-0"
          action="submit"
          onSubmit={handleAddDeliveryPartner}
        >
          <div className="bg-blue-100 rounded-3xl my-8">
            <p className="px-8 pt-5 text-2xl font-bold text-sky-900">
              Delivery Partner Name
            </p>
            <p className="text-base px-8 text-sky-800">
              Customers will see this name on their order status page
            </p>
            <input
              className="mb-10 placeholder-gray-400 focus:outline-sky-600 bg-gray-50 border-2 border-blue-200 rounded-xl w-10/12 mx-8 mt-8 py-2 px-3"
              type="text"
              placeholder="Delivery Partner Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="bg-blue-100 rounded-3xl my-8">
            <p className="px-8 pt-5 text-2xl font-bold text-sky-900">
              Contact Details
            </p>
            <p className="text-base px-8 text-sky-800">
              Cravyn will use these details for communication to delivery
              partner
            </p>

            <input
              className="mb-5 placeholder-gray-400 focus:outline-sky-600 bg-gray-50 border-2 border-blue-200 rounded-xl w-10/12 mx-8 mt-8 py-2 px-3"
              type="text"
              placeholder="Email address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="current-email"
              required
            />

            <input
              className="placeholder-gray-400 focus:outline-sky-600 bg-gray-50 mb-10 border-2 border-blue-200 rounded-xl w-10/12 mx-8 py-2 px-3"
              type="number"
              placeholder="Phone Number*"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="bg-blue-100 rounded-3xl my-8">
            <p className="px-8 pt-5 text-2xl font-bold text-sky-900">
              Service Details
            </p>
            <p className="text-base px-8 text-sky-800">
              Cravyn will use these details for assigning delivery partners to
              orders
            </p>

            <input
              className="mb-5 placeholder-gray-400 focus:outline-sky-600 bg-gray-50 border-2 border-blue-200 rounded-xl w-10/12 mx-8 mt-8 py-2 px-3"
              type="text"
              placeholder="Service Area*"
              value={serviceArea}
              onChange={(e) => setServiceArea(e.target.value)}
            />

            <div className="px-8 flex items-center justify-start">
              <label
                className="-translate-y-5 font-semibold text-sky-800 text-lg"
                htmlFor="vehicle"
              >
                Vehicle Type:
              </label>
              <select
                name="vehicle"
                className="placeholder-gray-400 focus:outline-sky-600 bg-gray-50 mb-10 border-2 border-blue-200 rounded-xl w-6/12 mx-8 py-2 px-3"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="Bike">Bike</option>
                <option value="Cycle">Cycle</option>
              </select>
            </div>
          </div>

          <div className="bg-blue-100 rounded-3xl my-8">
            <p className="px-8 pt-5 text-2xl font-bold text-sky-900">
              Set Password
            </p>
            <p className="text-base px-8 text-sky-800">
              Delivery Partners will use this password for first access to their
              account
            </p>
            <input
              className=" placeholder-gray-400 focus:outline-sky-600 bg-gray-50 border-2 border-blue-200 rounded-xl w-10/12 mx-8 mt-8 py-2 px-3"
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <input
              className="mb-10 placeholder-gray-400 focus:outline-sky-600 bg-gray-50 border-2 border-blue-200 rounded-xl w-10/12 mx-8 mt-8 py-2 px-3"
              type="password"
              placeholder="Confirm Password*"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            {confirmPassword !== password && (
              <p className="block text-center font-medium text-red-500 min-h-4 py-2">
                Passwords do not match
              </p>
            )}
          </div>

          <div className="text-center">
            <input
              disabled={password !== confirmPassword}
              type="submit"
              value={isPending ? "Pending..." : "Register"}
              className="text-tertiary-blue rounded-full w-40 h-10 font-bold cursor-pointer transition-all duration-300 bg-primary enabled:hover:bg-tertiary-blue enabled:hover:text-white enabled:hover:scale-105 active:scale-90 enabled:hover:shadow-blue-300 enabled:hover:shadow-xl border-tertiary-blue border-2 disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed"
            />
          </div>
        </form>
        <div className="py-3 font-bold text-red-500 text-xl">
          {isError && error.message}
        </div>
      </div>
      {isSuccess && (
        <Popup
          message="Successfully registerd delivery partner."
          duration={2000}
          type="success"
        />
      )}
    </div>
  );
};

export default RegisterRestaurant;
