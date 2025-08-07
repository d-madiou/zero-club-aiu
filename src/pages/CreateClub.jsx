import { useState } from "react";
import KeyPersonForm from "../components/members/KeyPerson";
import KeyPersonForm1 from "../components/members/DeputyKeyPerson";
import Members from "../components/members/Members";

function CreateClub() {
  const [formData, setFormData] = useState({
    clubID: "",
    clubName: "",
    dateOfRegistration: "",
    cluster: "",
    advisor: "",
    keyPerson: {
      fullName: "",
      studentID: "",
      email: "",
      phone: "",
      nationality: "",
      programme: "",
      intake: "",
      currentSemester: "",
      school: "",
      graduationYear: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleKeyPersonChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      keyPerson: {
        ...prev.keyPerson,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-[Roboto]">
      <div className="max-w-2xl w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Add Your Club
            <span className="block w-26 h-1 bg-[#F0AD4E] mt-2"></span>
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="clubID" className="block text-sm font-medium text-gray-700 mb-2">
                Club ID <span className="text-[#EF4444]">*</span>
              </label>
              <input
                id="clubID"
                name="clubID"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                placeholder="Enter your Club ID"
                value={formData.clubID}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="clubName" className="block text-sm font-medium text-gray-700 mb-2">
                Club Name <span className="text-[#EF4444]">*</span>
              </label>
              <input
                id="clubName"
                name="clubName"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                placeholder="Enter your club name"
                value={formData.clubName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="dateOfRegistration" className="block text-sm font-medium text-gray-700 mb-2">
                Date of Registration
              </label>
              <input
                id="dateOfRegistration"
                name="dateOfRegistration"
                type="date"
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                value={formData.dateOfRegistration}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="cluster" className="block text-sm font-medium text-gray-700 mb-2">
                Cluster <span className="text-[#EF4444]">*</span>
              </label>
              <input
                id="cluster"
                name="cluster"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                placeholder="Enter your cluster"
                value={formData.cluster}
                onChange={handleInputChange}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="advisor" className="block text-sm font-medium text-gray-700 mb-2">
                Advisor <span className="text-[#EF4444]">*</span>
              </label>
              <input
                id="advisor"
                name="advisor"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#4AAEA3] focus:border-[#4AAEA3] focus:z-10 sm:text-sm"
                placeholder="Enter your advisor's name"
                value={formData.advisor}
                onChange={handleInputChange}
              />
            </div>

            <KeyPersonForm
              keyPersonData={formData.keyPerson}
              onKeyPersonChange={handleKeyPersonChange}
            />
            <KeyPersonForm1
              keyPersonData={formData.keyPerson}
              onKeyPersonChange={handleKeyPersonChange}
            />
            <Members
              keyPersonData={formData.keyPerson}
              onKeyPersonChange={handleKeyPersonChange}
              title="Member 1"
            />
            <Members
              keyPersonData={formData.keyPerson}
              onKeyPersonChange={handleKeyPersonChange}
              title="Member 2"
            />
            <Members
              keyPersonData={formData.keyPerson}
              onKeyPersonChange={handleKeyPersonChange}
              title="Member 3"
            />

          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#4A8F8F] hover:bg-[#3d9a91] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4AAEA3] transition-colors"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateClub;