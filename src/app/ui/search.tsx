// search.tsx

import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Search() {
  return (
    <div className="flex items-center ml-4 transform -translate-y-2">
      <form className="max-w-md mx-auto  ">
        <div className="w-110 h-15 relative transform -translate-y-0.5">
          {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div> */}
          <input
            type="search"
            id="default-search"
            className="h-full block w-full p-4 text-lg  border-gray-600 rounded-sm bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What are you looking for?"
            required
          />
          <button
            className="absolute right-0 top-0 rounded bg-slate-800  border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none h-full size-1/7 disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              // className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
