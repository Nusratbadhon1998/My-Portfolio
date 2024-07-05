import React from "react";
import { FaGraduationCap } from "react-icons/fa6";


function Education() {
  return (
   <div>
    <h1 className="text-6xl text-center text-purple-400 font-bold">Education</h1>
     <ol className="relative border-s border-gray-200 dark:border-gray-700  p-12 text-stone-200 max-w-3xl mx-auto">                  
      <li className="mb-10 ms-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900">
        <FaGraduationCap />

        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold">Bachelor in Computer Science and Engineering <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
        <time className="block mb-2 text-sm font-normal leading-none">Daffodil International University (2019-2023)</time>
        <p className="font-semibold">CGPA: 3.86</p>
        <ul className="mb-4 text-base font-normal list-disc list-inside">
          <li>Participated in different cultural activities</li>
          <li>Member of CPC DIU</li>
          <li>Achieved scholarship based on results</li>
        </ul>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900">
        <FaGraduationCap />

        </span>
        <h3 className="mb-1 text-lg font-semibold">Higher Secondary School Certificate</h3>
        <time className="block mb-2 text-sm font-normal leading-none">Dhaka City College (2015-2017)</time>
        <p className="font-semibold">GPA: 5.00</p>
        <p className="text-base font-normal">Achieved General Grade Scholarship</p>
      </li>
      <li className="ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-700 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900">
        <FaGraduationCap />

        </span>
        <h3 className="mb-1 text-lg font-semibold">Senior Secondary School Certificate</h3>
        <time className="block mb-2 text-sm font-normal leading-none">Mohammadpur Preparatory School and College (2010-2015)</time>
        <p className="font-semibold">GPA:500</p>
      </li>
    </ol>
   </div>
  );
}

export default Education;
