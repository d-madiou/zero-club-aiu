import { useState } from "react";
import { useParams } from "react-router-dom";


function FileUploader() {
  const { action } = useParams();
  const note = action === 'checkin' 
    ? "You must take a picture of the room after entering and upload it to the site." 
    : "You must take a picture of the room before leaving and upload it to the site.";

  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      console.log(`${action} submitted with file:`, selectedFile.name);
    } else {
      console.log("Please select a file to upload.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-[Roboto]">
      <div className="max-w-xl w-full space-y-8 p-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Note
            <span className="block w-16 h-1 bg-[#F0AD4E] mt-2"></span>
          </h2>
          <p className="text-gray-600 text-base">{note}</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div
            className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-10 cursor-pointer transition-colors ${
              dragActive ? 'border-teal-500 bg-teal-50' : 'border-gray-300 bg-[#E6E6E6]'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28m0 0l4 4m-4-4l-4 4m0-12V8a4 4 0 00-4-4H8a4 4 0 00-4 4v24a4 4 0 004 4h12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-medium">Choose a file or drag & drop it here.</span>
              </p>
              <p className="text-xs text-gray-500">
                JPEG, PNG, PDF, and formats, up to 50 MB.
              </p>
            </div>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4AAEA3] cursor-pointer"
            >
              Browse File
            </label>
            {selectedFile && (
              <p className="mt-2 text-sm text-gray-700">Selected file: {selectedFile.name}</p>
            )}
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#4A8F8F] hover:bg-[#3d9a91] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4AAEA3] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FileUploader