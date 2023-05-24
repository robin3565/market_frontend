import React from "react";
import Logo from "../atoms/Logo";
import useInputs from "../hooks/useInputs";
import useCheckbox from "../hooks/useCheckbox";

const Signup = () => {
  const [inputs, handleInputChange] = useInputs({
    id: "",
    password: "",
    password_confirm: "",
    nickname: "",
  });
  const [
    { check_all, terms, privacy, subscribe },
    handleCheckboxChange,
    handleCheckAllChange,
  ] = useCheckbox({
    check_all: false,
    terms: false,
    privacy: false,
    subscribe: false,
  });

  const isValidationTrue = check_all || (terms && privacy);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center justify-center mb-5">
        <Logo size={"big"} />
      </div>
      <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="mt-1">
                <input
                  id="id"
                  name="id"
                  type="id"
                  value={inputs.id}
                  autoComplete="id"
                  placeholder="아이디"
                  required
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="비밀번호 (8자 이상)"
                  required
                  value={inputs.password}
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1
                     ring-inset ring-gray-300 placeholder:text-gray-400"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <input
                  id="password_confirm"
                  name="password_confirm"
                  type="password_confirm"
                  autoComplete="current-password-confirm"
                  placeholder="비밀번호 확인 (8자 이상)"
                  required
                  value={inputs.password_confirm}
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1
                     ring-inset ring-gray-300 placeholder:text-gray-400"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <input
                  id="nickname"
                  name="nickname"
                  type="nickname"
                  autoComplete="current-nickname"
                  placeholder="닉네임"
                  required
                  value={inputs.password}
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1
                     ring-inset ring-gray-300 placeholder:text-gray-400"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* 동의 여부 */}
            <div>
              <div className="py-0.5">
                <input
                  type="checkbox"
                  id="check_all"
                  name="check_all"
                  checked={check_all}
                  className="accent-blue-600"
                  onChange={handleCheckAllChange}
                />
                <label for="check_all" className="ml-1.5">
                  모두 동의합니다
                </label>
              </div>
              <div className="py-0.5">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={terms}
                  className="accent-blue-600"
                  onChange={handleCheckboxChange}
                />
                <label for="terms" className="ml-1.5">
                  이용약관 동의 (필수)
                </label>
              </div>
              <div className="py-0.5">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={privacy}
                  className="accent-blue-600"
                  onChange={handleCheckboxChange}
                />
                <label for="privacy" className="ml-1.5">
                  개인정보 수집/이용 동의 (필수)
                </label>
              </div>
              <div className="py-0.5">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  checked={subscribe}
                  className="accent-blue-600"
                  onChange={handleCheckboxChange}
                />
                <label for="subscribe" className="ml-1.5">
                  뉴스레터 및 마케팅 정보 수신 동의 (선택)
                </label>
              </div>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                disabled={!isValidationTrue}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-3
                   font-semibold leading-6 text-white shadow-sm hover:bg-blue-500
                    focus-visible:outline focus-visible:outline-2
                     focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-prigray-400"
              >
                가입하기
              </button>
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              이미 계정이 있으신가요?
              <a
                href="/login"
                className="ml-1 font-medium text-primary-500 hover:underline dark:text-primary-500"
              >
                로그인
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
