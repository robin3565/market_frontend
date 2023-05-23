import React, { useEffect, useState } from "react";
import Logo from "../atoms/Logo";
import axios from "axios";

const Login = () => {
  const [viewStep, setViewStep] = useState({ first: true, second: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // 카카오 SDK 초기화
    window.Kakao.init("e8d84f0e5816b2d9fbc108e4c4caf46a");
  }, []);

  const handleKakaoLogin = () => {
    // 카카오 로그인 처리
    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj); // 로그인 성공 후 처리할 내용
      },
      fail: function (error) {
        console.error(error); // 로그인 실패 시 처리할 내용
      },
    });
  };

  // useEffect(() => {
  //   // 카카오 SDK 스크립트 로드
  //   const script = document.createElement("script");
  //   script.src = "https://developers.kakao.com/sdk/js/kakao.js";
  //   script.async = true;
  //   document.head.appendChild(script);

  //   // SDK 로드 완료 시 호출되는 콜백 함수
  //   script.onload = () => {
  //     // 카카오 초기화
  //     window.Kakao.init("e8d84f0e5816b2d9fbc108e4c4caf46a");

  //     // 카카오 로그인 버튼 생성
  //     window.Kakao.Auth.createLoginButton({
  //       container: "#kakao-login-btn",
  //       success: (authObj) => {
  //         // 로그인 성공 시 처리할 로직
  //         console.log("로그인 성공:", authObj);
  //         // 여기서 서버로 사용자 정보를 전달하거나 필요한 작업을 수행할 수 있습니다.
  //       },
  //       fail: (err) => {
  //         // 로그인 실패 시 처리할 로직
  //         console.error("로그인 실패:", err);
  //       },
  //     });
  //   };

  //   // 컴포넌트 언마운트 시 카카오 SDK 스크립트 제거
  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <div className="md:w-1/4 w-full flex-col justify-center items-center">
        <div className="flex items-center justify-center">{/* <Logo/> */}</div>

        <div className="flex items-center justify-center w-full mb-5 h-12 rounded-lg">
          <button onClick={handleKakaoLogin}>카카오 로그인</button>
        </div>

        <div className="h-0.5">
          <div className="bg-prigray-300 h-full"></div>
        </div>

        <div className="mt-6">
          <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
            <div>
              <div className="mt-2">
                <input
                  id="id"
                  name="id"
                  type="id"
                  autoComplete="id"
                  placeholder="아이디"
                  required
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="비밀번호"
                  required
                  className="block w-full border-0 py-3 pl-4 text-gray-900 shadow-sm ring-1
                     ring-inset ring-gray-300 placeholder:text-gray-400"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="">
                  <a href="/forgot" className="font-semibold underline">
                    비밀번호를 잊으셨나요?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-500 px-3 py-3
                   font-semibold leading-6 text-white shadow-sm hover:bg-primary-400
                    focus-visible:outline focus-visible:outline-2
                     focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                로그인
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-center">
            <a className="font-semibold underline flex items-center justify-center">
              회원가입하기
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
