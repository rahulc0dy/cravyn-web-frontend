"use client";

import React, { useState, useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Image from 'next/image';

export default function Dashboard() {
  const [isClient, setIsClient] = useState(false);
  const dashboardRef = useRef();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const doughnutOptions = {
    labels: ['Vegetarian', 'Non Vegetarian', 'Beverages'],
    colors: ['#7C3AED', '#6366F1', '#A78BFA'],
    legend: { position: 'left',fontSize:'16px',
      markers: {
      shape: 'square',
    }},
    title:{text:'Orders',align:'left'},
    dataLabels: {enabled:false},
    plotOptions: {pie:{donut:{size:'45%'}}}
  };
  const doughnutSeries = [26, 18, 19];

  const lineOptions1 = {
    chart: { toolbar: { show: false } },
    stroke: { curve: 'smooth' },
    colors: ['#7C3AED'],
    xaxis: { categories: ['01', '02', '03', '04', '05', '06', '07'] },
    title:{text:'Performance',align:'left'}
  };
  const lineSeries1 = [{ name: 'Daily Sales', data: [620, 500, 600, 430, 480, 580,470] }];

  const lineOptions2 = {
    chart: { toolbar: { show: false } },
    stroke: { curve: 'smooth' },
    colors: ['#7C3AED'],
    xaxis: { categories: ['01', '02', '03', '04', '05', '06', '07'] },
    dataLabels: {enabled:false},
    fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
  };
  const lineSeries2 = [{ name: 'Daily Sales', data: [620, 500, 600, 430, 480, 580,470] }];

  const mixedOptions = {
    chart: { toolbar: { show: false } },
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'] },
    stroke: { width: [0, 2] },
    colors: ['#7C3AED', '#6366F1'],
  };
  const mixedSeries = [
    { name: 'Active Customers', type: 'column', data: [4400, 5000, 6500, 7000, 6300, 3700,4700] },
    { name: 'Conversion Rate', type: 'line', data: [14, 16, 18, 20, 22, 24] },
  ];

const downloadPDF = () => {
  const input = dashboardRef.current;

  const originalOverflow = input.style.overflow;
  input.style.overflow = 'visible';
  const contentHeight = input.scrollHeight;
  input.style.height = `${contentHeight}px`;

  html2canvas(input, {
    scale: 2,
    scrollX: 0,
    scrollY: 0,
    windowWidth: input.scrollWidth,
    windowHeight: contentHeight,
    useCORS: true,
  }).then((canvas) => {
    input.style.overflow = originalOverflow;
    input.style.height = 'auto';

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('landscape', 'mm', 'a5');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Set image to fill the full PDF page
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    
    pdf.save('dashboard-report.pdf');
  });
};


  return (
    <div className="bg-purple-light-1 py-16" ref={dashboardRef}>
      <div className="wrapper rounded-2xl bg-white mx-auto transform">
        <div className='grid grid-cols-1 text-center gap-y-12 lg:grid-cols-[auto_1fr_auto] px-10 pb-5 pt-10 border-b-2'>
          <div className="text-6xl font-extrabold text-purple-dark-2 tracking-widest">CRAVYN</div>
          <div>
            <div className='flex justify-between lg:px-20'>
              <div>
                <div className='flex gap-2'>
                  <Image src="/assets/icons/image1.svg" width={20} height={20}></Image>
                  <p className='text-grey-medium font-semibold'>Customers</p>
                </div>
                <p className='text-purple-light-2 text-xl md:text-3xl font-semibold pl-6 tracking-widest'>1,26,496</p>
              </div>

              <div>
                <div className='flex gap-2'>
                  <Image src="/assets/icons/image2.svg" width={20} height={20}></Image>
                  <p className='text-grey-medium font-semibold'>Restaurants</p>
                </div>
                <p className='text-purple-light-2 text-xl md:text-3xl font-extrabold pl-6 tracking-widest'>1,956</p>
              </div>

              <div>
                <div className='flex gap-2'>
                  <Image src="/assets/icons/image3.svg" width={20} height={20}></Image>
                  <p className='text-grey-medium font-semibold'>Deliveries</p>
                </div>
                <p className='text-purple-light-2 text-xl md:text-3xl font-extrabold pl-6 tracking-widest'>12,649</p>
                </div>

            </div>
          </div>
          <div>
            <button
              onClick={downloadPDF}
              className="px-5 py-4 bg-purple-500 text-white rounded-md hover:bg-purple-medium"
            >
              <div className='flex gap-2'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                </svg>
                <p className='font-bold text-lg'>Download Reports</p>
              </div>
            </button>
          </div>
        </div>
        
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.5fr] lg:grid-rows-[1fr_1.2]">
  <div className="relative row-span-2">
    <p className='text-3xl font-bold text-center mt-10'>Annual Increments</p>
    <div className='flex justify-center'>
      <div className="bg-purple-600 w-32 z-30 absolute bottom-10 left-1/2 transform -translate-x-1/2 aspect-square rounded-full"></div>
      <div className="bg-purple-500 w-48 z-20 absolute bottom-10 left-1/2 transform -translate-x-1/2 aspect-square rounded-full"></div>
      <div className="bg-purple-400 w-64 z-10 absolute bottom-10 left-1/2 transform -translate-x-1/2 aspect-square rounded-full"></div>
      <div className="bg-purple-300 w-80 z-0 absolute bottom-10 left-1/2 transform -translate-x-1/2 aspect-square rounded-full"></div>
    </div>
  </div>
  <div className='border-b-2 border-r-2'>
    <Chart className='mt-4' options={doughnutOptions} series={doughnutSeries} type="donut" width="375px" />
  </div>
  <div className='border-b-2'>
    <div className='text-xl font-extrabold text-center'>$120,544</div>
    <div className='grid grid-cols-[1fr_3.5fr] gap-x-6 m-3'>
    <div className='grid grid-rows-4'>
      <button className='text-md font-semibold'>Monthly</button>
      <button className='text-md font-semibold'>Yearly</button>
      <button className='text-md font-semibold'>Weekly</button>
      <button className='text-md font-semibold bg-purple-light-1 rounded-md'>Daily</button>
    </div>
    <div>
        <Chart className='' options={lineOptions2} series={lineSeries2} type="area" width="375px" />
    </div>
    </div>
  </div>
  <div className='mt-6'>
    <Chart options={lineOptions1} series={lineSeries1} type="line" width="400px" />
  </div>
  <div>
    <p className='text-xl font-extrabold pl-6 pt-4'>$965,000</p>
    <p className='text-sm text-grey-medium pl-6'>Income of Feb 2024</p>
    <Chart options={mixedOptions} series={mixedSeries} type="line" width="425px"/>
  </div>
</div>
<div className='px-16 py-8 border-t-2'>
  <div className='text-4xl font-extrabold'>Customer Metrics</div>
  <div className='grid grid-cols-[auto_1fr_auto] pt-4'>
    <div className='grid grid-rows-3 text-xl'>

      <button className='text-md font-semibold px-2'>
        <div className='flex gap-3'>
        <p>Acquisition</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
        <p>14.1%</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </div>
      </button>

      <button className='text-md font-semibold bg-purple-light-1 px-2'>
        <div className='flex gap-4'>
        <p>Retention</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
        </svg>
        <p>18.3%</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </div>
      </button>

      <button className='text-md font-semibold px-2'>
        <div className='flex gap-3'>
        <p>Churn Rate</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
        </svg>
        <p>16.1%</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </div>
      </button>
    </div>
    <div className='flex justify-center items-center'>
      <Chart options={mixedOptions} series={mixedSeries} type="line" width="270%" height="200%"/>
    </div>
    <div className='my-auto'>
      <p className='text-xl font-bold'>Active Customers</p>
      <p className='text-3xl text-purple-medium font-bold tracking-widest'>14,264</p>
      <p className='text-xl font-bold mt-4'>Ongoing Orders</p>
      <p className='text-3xl text-purple-medium font-bold tracking-widest'>1,784</p>
    </div>
  </div>
</div>
    </div>
    </div>
  );
}
