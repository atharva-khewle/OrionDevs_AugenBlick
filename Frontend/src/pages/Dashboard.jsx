import React from "react";

const DashBoard = () => {
  return (
    <div className="flex justify-around items-center bg-slate-800 p-10">
        <div className="bg-slate-400 h-[calc(100vh-150px)] w-[40%] flex flex-col justify-evenly rounded-3xl">
            <div className="text-center">
        <label
          
          className="mb-2 inline-block text-white text-4xl font-semibold"
        >Upload</label>
        </div>
        <div className="p-5">
        <input
          className=" relative m-0 block w-full min-w-0 flex-auto rounded-md border border-solid border-cyan-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          type="file"
          id="formFile"
        />
        </div>
        <div className="flex flex-col bg-[#242424] h-4/5 items-center gap-5 rounded-md opacity-50">
            
            
        </div>
        <button ></button>
      </div>
      <div className=" w-[40%] bg-slate-400 h-[calc(100vh-150px)] flex flex-col justify-around items-center rounded-md">
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
      </div>
    </div>
  );
};

export default DashBoard;
