import React from "react";
import { Link } from "react-router-dom";

const Mypage = () => {
  return (
    <section className="w-full h-full mx-auto dark:bg-gray-900 flex flex-col md:p-0 px-6 items-center mt-10">
      <div className="max-w-screen-xl  p-5 w-full flex-col h-screen md:py-24 py-8">
        <div className="w-full">
          <div className="mb-5 text-4xl">
            <p className="mb-2">안녕하세요, 반갑습니다!</p>
            <p className="font-semibold">knews2 님과 함께한 지 7일 째 🥨 </p>
          </div>
          <p className="font-semibold">knews2@naver.com</p>
        </div>

        <div className="mt-10">
          <Link to="/mypage/profile" className="underline">
            프로필 설정하기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mypage;
