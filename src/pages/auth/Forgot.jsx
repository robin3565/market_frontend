import React from "react";

const Forgot = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center justify-center mb-5">
        <h3 className="font-bold text-3xl">비밀번호 찾기</h3>
      </div>
      <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6">
            <div>
              <div className="mt-1">
                <input
                  placeholder="아이디"
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <input
                  placeholder="이메일 주소"
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
