import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const JobCard = ({ company }) => {
  // Fallback values in case company prop is missing
  const logo = company?.logo || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrP8MGuGg06Y0rSiAOKcLxr-v16ryIp3WqSw&s';
  const name = company?.name || 'Connect Shiksha';
  const location = company?.location || 'Balaghat Madhaya Pradesh India';
  return (
    <div className="max-w-sm rounded-lg bg-gray-800 shadow-lg w-[20rem] mt-5 ml-4 p-4">
      {/* Company Logo */}
      <div className="w-full h-48 mb-4">
        <img
          src={logo}
          alt={`${name} Logo`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Company Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-gray-400 flex items-center justify-center space-x-1">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </p>
      </div>

      {/* Job Posting Button */}
      <div className="mt-4">
        <button className="bg-green-600 text-white px-6 py-2 rounded-md w-full hover:bg-green-700">
          Post a Job
        </button>
      </div>
    </div>
  );
};

export default JobCard;
