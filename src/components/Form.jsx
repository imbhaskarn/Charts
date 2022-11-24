import React from "react";

const Form = ({ handleSubmit, handleChange, values }) => {
  return (
    <div className="relative m-auto  p-5 rounded lg:w-fit md:w-3/4 ">
      <form onSubmit={handleSubmit} className="rounded bg-gray-800 flex justify-center items-center flex-col pb-4">
        <div className="flex flex-wrap  gap-4 p-4  text-sm justify-center items-center">
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="topic" className="w-full text-center">
              Topics:
            </label>
            <input
              type="text" name="topic" id="topic"
              onChange={handleChange} value={values.topic}
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="endyear" className="w-full text-center">
              End Year:
            </label>
            <input
              type="number" min={1976} max={2030} step={1} value={values.endyear} name='end_year' id="endyear"
              onChange={handleChange}
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="sector" className="w-full text-center">
              Sector:
            </label>
            <input
              type="text" name="sector" id="sector" value={values.sector}
              onChange={handleChange}
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="region" className="w-full text-center">
              Region:
            </label>
            <input
              type="text" name="region" id="region" value={values.region}
              onChange={handleChange}
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="pest" className="w-full text-center">
              Pest:
            </label>
            <input
              type="text" id="pest" name="pest" value={values.pest}
              onChange={handleChange}
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="source" className="w-full text-center">
              Source:
            </label>
            <input
              type="text" name="source" id="source" value={values.source}
              onChange={handleChange}
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="country" className="w-full text-center">
              Country:
            </label>
            <input
              type="text" name="country" id="country" value={values.country}
              onChange={handleChange}
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
          <div className="flex justify-center flex-col gap-2 items-start rounded text-white rounded">
            <label htmlFor="country" className="w-full text-center">
              City:
            </label>
            <input
              type="text" name="city" id="city" value={values.city}
              onChange={handleChange}
              className="rounded px-3 bg-gray-700 py-1 text-gray-100 w-28"
            />
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
