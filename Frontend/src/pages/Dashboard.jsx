import axios from "axios";
import React, { useState } from "react";

const DashBoard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const[p,setp]=useState(0)
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    handleUpload();
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

      console.log("this is data");
      setp(p+response.data.count)
      console.log(response.data.count);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex justify-between gap-11 items-center bg-slate-800 p-10 pl-52 pr-82">
      <div className="bg-white h-[calc(100vh-150px)] w-[40%] flex flex-col justify-evenly rounded-md" style={{scale:"0.8"}}>
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

          {/* 
        <input
        className="relative m-0 block w-full min-w-0 flex-auto rounded-md border border-solid border-cyan-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="file"
        id="formFile"
        onChange={handleFileChange}
      /> */}
        </div>
        {/* <div className="flex flex-col bg-[#242424] h-4/5 items-center gap-5 rounded-md opacity-50">
            
            
        </div> */}
        {/* <button ></button> */}
      </div>
      {/* <div className=" w-[40%] bg-slate-400 h-[calc(100vh-150px)] flex flex-col justify-around items-center rounded-md">
        <div className="flex flex-col gap-5 w-full bg-cyan-400 p-5">
          <p className=" text-3xl font-medium">Name : Raghav Shetty</p>
          <p className=" text-3xl font-medium">Area : Dharavi</p>
          <p className=" text-3xl font-medium">Contact : 9093083843</p>
        </div>
        <div className=" bg-cyan-400 flex flex-col gap-4 p-5 w-full">
          <h2 className="text-3xl font-semibold">Dry: 34</h2>
          <h2 className="text-3xl font-semibold">Wet: 65</h2>
          <h2 className=" text-3xl font-semibold">Total Contribution: 78</h2>
        </div>
      </div> */}
      <div class="bg-white overflow-hidden shadow rounded-lg border" style={{scale:"1.3",marginRight:"300px"}} >
        <div class="px-4 py-5 sm:px-6">
          <h3 class=" text-4xl leading-6 font-medium text-gray-900">
            Sallu Bhai
          </h3>

        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Salman khan
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Score</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {p}
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Phone number</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                987654321
              </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Bandra
                <p></p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
