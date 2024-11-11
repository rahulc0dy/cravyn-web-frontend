"use client";
import { useState } from 'react';
import Image from 'next/image';

const PartnerRequests = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const pendingRequests = [
    { name: 'Munching Meals', city: 'Kolkata', owner: 'Neerab Modi' },
    { name: 'Tasty Treats', city: 'Mumbai', owner: 'Anjali Kumar' },
    { name: 'Food Fiesta', city: 'Delhi', owner: 'Rajesh Singh' },
     { name: 'Munching Meals', city: 'Kolkata', owner: 'Neerab Modi' },
    { name: 'Tasty Treats', city: 'Mumbai', owner: 'Anjali Kumar' },
    { name: 'Food Fiesta', city: 'Delhi', owner: 'Rajesh Singh' },
     { name: 'Munching Meals', city: 'Kolkata', owner: 'Neerab Modi' },
    { name: 'Tasty Treats', city: 'Mumbai', owner: 'Anjali Kumar' },
    { name: 'Food Fiesta', city: 'Delhi', owner: 'Rajesh Singh' },
    
  ];

  const completedRequests = [
    { name: 'Munching Meals', city: 'Kolkata', owner: 'Neerab Modi', status: 'Accepted' },
    { name: 'Tasty Treats', city: 'Mumbai', owner: 'Anjali Kumar', status: 'Accepted' },
    { name: 'Food Fiesta', city: 'Delhi', owner: 'Rajesh Singh', status: 'Accepted' },
    { name: 'Quick Bites', city: 'Chennai', owner: 'Sunita Patil', status: 'Accepted' },
  ];

  const requestsToShow = activeTab === 'pending' ? pendingRequests : completedRequests;

  return (
    <div className="p-6 bg-blue-50 min-h-screen flex justify-center items-center">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg">
        {/* Tabs */}
        <div className="flex justify-around border-b border-gray-200">
          <button
            onClick={() => setActiveTab('pending')}
            className={`flex-1 py-3 ${activeTab === 'pending' ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500'}`}
          >
            Pending Requests
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-3 ${activeTab === 'completed' ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500'}`}
          >
            Completed Requests
          </button>
        </div>

        {/* Requests List with scrollable container */}
        <div className="p-4 space-y-4 max-h-[80svh] overflow-y-scroll">
          {requestsToShow.length > 0 ? (
            requestsToShow.map((request, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Image src='/assets/images/management/spoon.svg' width={35} height={30}></Image>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-medium">{request.name}</p>
                    <p className="text-sm text-blue-dark-2">City: {request.city}</p>
                    <p className="text-sm text-blue-dark-2">Owner: {request.owner}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {activeTab === 'pending' && (
                    <div className="flex items-center space-x-1">
                      {/* Pending Tag */}
                      <svg
                        className="w-5 h-5 text-orange-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      <span className="text-sm font-semibold text-orange-500">Pending</span>
                    </div>
                  )}
                  {activeTab === 'completed' && (
                    <>
                      {/* Status Icon and Label */}
                      {request.status === 'Accepted' ? (
                        <div className="flex items-center space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#50C878" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="text-sm font-semibold text-secondary-green">Answered</span>
                          <span className="text-sm font-semibold text-green-500">Accepted</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-5 h-5 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M15.41 7.41L8 14.83l-2.41-2.42a1 1 0 0 1 1.41-1.41l1.42 1.42 7.42-7.42a1 1 0 0 1 1.41 1.41z" />
                          </svg>
                          <span className="text-sm font-semibold text-red-500">Rejected</span>
                        </div>
                      )}
                    </>
                  )}
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.29 16.29L13.59 12 9.29 7.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l5 5c.39.39.39 1.02 0 1.41l-5 5c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41z" />
                  </svg>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No requests found.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default PartnerRequests;
