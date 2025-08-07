import { useState } from "react";

const Members = ({ keyPersonData, onKeyPersonChange, title }) => {
  return (
    <>
      <div className="md:col-span-2 mt-4">
        <hr className="text-gray-300 mb-4" />
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name <span className="text-[#EF4444]">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="Enter your full name"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
          value={keyPersonData.fullName}
          onChange={onKeyPersonChange}
        />
      </div>

      <div>
        <label htmlFor="studentID" className="block text-sm font-medium text-gray-700 mb-2">
          Student ID <span className="text-[#EF4444]">*</span>
        </label>
        <input
          id="studentID"
          name="studentID"
          type="text"
          required
          placeholder="Enter your student ID"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
          value={keyPersonData.studentID}
          onChange={onKeyPersonChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email<span className="text-[#EF4444]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
          value={keyPersonData.email}
          onChange={onKeyPersonChange}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone<span className="text-[#EF4444]">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Enter your phone number"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
          value={keyPersonData.phone}
          onChange={onKeyPersonChange}
        />
      </div>
      
      <div>
        <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-2">
          Nationality<span className="text-[#EF4444]">*</span>
        </label>
        <select
          id="nationality"
          name="nationality"
          required
          className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-gray-900 focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
          value={keyPersonData.nationality}
          onChange={onKeyPersonChange}
        >
          <option value="">Select your nationality</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Guinea">Guinea</option>
          <option value="Nigeria">Nigeria</option>
          <option value="India">India</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div>
        <label htmlFor="programme" className="block text-sm font-medium text-gray-700 mb-2">
          Programme<span className="text-[#EF4444]">*</span>
        </label>
        <select
          id="programme"
          name="programme"
          required
          className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white rounded-md text-gray-900 focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
          value={keyPersonData.programme}
          onChange={onKeyPersonChange}
        >
          <option value="">Select your programme</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Engineering">Engineering</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Psychology">Psychology</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="intake" className="block text-sm font-medium text-gray-700 mb-2">
          Intake<span className="text-[#EF4444]">*</span>
        </label>
        <input
          id="intake"
          name="intake"
          type="text"
          required
          placeholder="e.g., Jan 2023"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
          value={keyPersonData.intake}
          onChange={onKeyPersonChange}
        />
      </div>

      <div>
        <label htmlFor="currentSemester" className="block text-sm font-medium text-gray-700 mb-2">
          Current Semester<span className="text-[#EF4444]">*</span>
        </label>
        <input
          id="currentSemester"
          name="currentSemester"
          type="text"
          required
          placeholder="e.g., Semester 4"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
          value={keyPersonData.currentSemester}
          onChange={onKeyPersonChange}
        />
      </div>
      
      <div>
        <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
          School <span className="text-[#EF4444]">*</span>
        </label>
        <input
          id="school"
          name="school"
          type="text"
          placeholder="Enter your school"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
          value={keyPersonData.school}
          onChange={onKeyPersonChange}
        />
      </div>

      <div>
        <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-2">
          Graduation Year <span className="text-[#EF4444]">*</span>
        </label>
        <input
          id="graduationYear"
          name="graduationYear"
          type="number"
          placeholder="e.g., 2026"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] sm:text-sm"
          value={keyPersonData.graduationYear}
          onChange={onKeyPersonChange}
        />
      </div>
    </>
  );
};

export default Members


