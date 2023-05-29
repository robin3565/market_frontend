import React, { useState } from "react";
import useInputs from "../../hooks/useInputs";
import { sendEmail } from "../../utils/requestList";

const Forgot = () => {
  const [{ id, email }, handleInputChange] = useInputs({
    id: "",
    email: "",
  });
  const [authNumber, setAuthNumber] = useState("");
  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  const handleFindPassword = async (e) => {
    e.preventDefault();
    
    const isValidEmail = validateEmail(email);
    console.log(isValidEmail)
    const email_ = email.trim();
    // const res = await sendEmail(email_)
  };

  return (
    <div className="md:w-1/3 lg:w-1/4 w-full flex flex-col md:py-24 py-8 h-screen">
      <div className="flex items-center justify-center mb-5">
        <h3 className="font-bold text-3xl">비밀번호 찾기</h3>
      </div>
      <div
        className="w-full bg-white rounded-lg shadow-lg 
      dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 
      dark:border-gray-700"
      >
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex justify-center items-center flex-col">
            <p>비밀번호를 재설정할 수 있는</p>
            <p>인증번호를 이메일로 보내드려요.</p>
          </div>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={(e) => handleFindPassword(e)}
          >
            {/* <div>
              <div className="mt-1">
                <input
                  placeholder="아이디"
                  name="id"
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400"
                  value={id}
                  onChange={handleInputChange}
                />
              </div>
            </div> */}
            <div>
              <div className="mt-1">
                <input
                  placeholder="이메일 (가입한 이메일 주소를 입력해주세요.)"
                  name="email"
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400"
                  value={email}
                  onChange={handleInputChange}
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
              인증번호 발송
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
