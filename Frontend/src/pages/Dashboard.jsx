import axios from "axios";
import React, { useState } from "react";

const DashBoard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageData, setImageData] = useState(null); // State to store image data
  const [p, setP] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.error("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);

      const url = "http://localhost:5000/imgupload";

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setP(p + response.data.count);

      // Set image data
      console.log(response.data)
      setImageData(response.data.image);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-between gap-11 items-center bg-slate-800 p-10 pl-52 pr-82">
      <div className="bg-white h-[calc(100vh-150px)] w-[40%] flex flex-col justify-evenly rounded-md" style={{ scale: "0.8" }}>
        <div className="text-center">
          <label className="mb-2 inline-block text-black text-4xl font-semibold">
            Contribute
          </label>
        </div>
        <div className="p-5">
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                onChange={handleFileChange}
              />
               
            </label>
          </div>
        </div>
        <button style={{ backgroundColor: "black", color: "white", width: "200px", height: '60px' }} onClick={handleUpload}>Upload</button>
      </div>
      <div>
        {/* Display the image */}
        {imageData && (
          <img src={`data:image/jpeg;base64,${imageData}`} alt="Uploaded" style={{ maxWidth: "100%", maxHeight: "300px" }} />
        )}
      </div>
    </div>
  );
};

export default DashBoard;
