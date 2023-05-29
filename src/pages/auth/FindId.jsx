import React from "react";

const FindId = () => {
  return (
    <div className="md:w-1/3 lg:w-1/4 w-full flex flex-col md:py-24 py-8 h-screen">
      <div className="flex items-center justify-center mb-5">
        <h3 className="font-bold text-3xl">아이디 찾기</h3>
      </div>
      <div
        className="w-full bg-white rounded-lg shadow-lg 
      dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 
      dark:border-gray-700"
      >
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6">
            <div>
              <div className="mt-1">
                <input
                  placeholder="이메일 주소"
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              // disabled={!isValidationTrue}
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-3
                   font-semibold leading-6 text-white shadow-sm hover:bg-blue-500
                    focus-visible:outline focus-visible:outline-2
                     focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-prigray-400"
            >
              아이디 찾기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FindId;
