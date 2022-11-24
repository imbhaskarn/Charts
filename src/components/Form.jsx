import React from "react";

const Form = ({ handleSubmit }) => {
  return (
    <div className="relative m-auto  p-5 rounded lg:w-fit md:w-3/4 ">
      <form className="rounded bg-gray-800 flex justify-center items-center flex-col pb-4">
        <div className="flex flex-wrap  gap-4 p-4  text-sm justify-center items-center">
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="" className="w-full text-center">
              Topic:
            </label>
            <input
              type="text"
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="" className="w-full text-center">
              Topic:
            </label>
            <input
              type="text"
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="" className="w-full text-center">
              Topic:
            </label>
            <input
              type="text"
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="" className="w-full text-center">
              Topic:
            </label>
            <input
              type="text"
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="" className="w-full text-center">
              Topic:
            </label>
            <input
              type="text"
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="" className="w-full text-center">
              Topic:
            </label>
            <input
              type="text"
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="" className="w-full text-center">
              Topic:
            </label>
            <input
              type="text"
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
