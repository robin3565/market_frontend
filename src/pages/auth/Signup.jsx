import React from "react";
import Logo from "../../atoms/Logo";
import useCheckbox from "../../hooks/useCheckbox";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();
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

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center justify-center mb-5">
        {/* <Logo size={"big"} /> */}
        <h3 className="font-bold text-3xl">회원가입</h3>
      </div>
      <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={handleSubmit((data) => {
              try {
                if (data.password !== data.password_confirm) {
                  setError(
                    "password_confirm",
                    { message: "비밀번호가 일치하지 않습니다." },
                    { shouldFocus: true }
                  );
                }
              } catch (e) {
                console.log(e);
              }
            })}
          >
            <div>
              <div className="mt-1">
                <input
                  id="id"
                  name="id"
                  type="id"
                  autoComplete="id"
                  placeholder="아이디"
                  aria-invalid={
                    !isDirty ? undefined : errors.id ? "true" : "false"
                  }
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400"
                  {...register("id", {
                    required: "아이디는 필수 입력입니다.",
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message: "아이디는 영문자와 숫자로만 이루어져야 합니다.",
                    },
                  })}
                />
                {errors.id && <small role="alert">{errors.id.message}</small>}
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
                  aria-invalid={
                    !isDirty ? undefined : errors.password ? "true" : "false"
                  }
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1
                     ring-inset ring-gray-300 placeholder:text-gray-400"
                  {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message:
                        "비밀번호는 영문자와 숫자로만 이루어져야 합니다.",
                    },
                    minLength: {
                      value: 8,
                      message: "비밀번호는 8자리 이상 입력해주세요.",
                    },
                  })}
                />
                {errors.password && (
                  <small role="alert">{errors.password.message}</small>
                )}
              </div>
            </div>
            <div>
              <div className="mt-1">
                <input
                  id="password_confirm"
                  name="password_confirm"
                  type="password"
                  autoComplete="current-password-confirm"
                  placeholder="비밀번호 확인 (8자 이상)"
                  required
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1
                     ring-inset ring-gray-300 placeholder:text-gray-400"
                  {...register("password_confirm")}
                />
              </div>
              {errors.password_confirm && (
                <small role="alert">{errors.password_confirm.message}</small>
              )}
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
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1
                     ring-inset ring-gray-300 placeholder:text-gray-400"
                  {...register("nickname")}
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="current-email"
                  placeholder="이메일"
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1
                     ring-inset ring-gray-300 placeholder:text-gray-400"
                  {...register("email", {
                    required: "이메일은 필수 입력입니다.",
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message:
                      "유효하지 않은 이메일입니다.",
                    },
                    minLength: {
                      value: 1,
                      message: "이메일을 입력해주세요.",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <small role="alert">{errors.email.message}</small>
              )}
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
                <label htmlFor="check_all" className="ml-1.5">
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
                <label htmlFor="terms" className="ml-1.5">
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
                <label htmlFor="privacy" className="ml-1.5">
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
                <label htmlFor="subscribe" className="ml-1.5">
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
