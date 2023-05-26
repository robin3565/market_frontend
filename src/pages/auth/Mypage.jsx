import React from "react";
import { Link } from "react-router-dom";

const Mypage = () => {
  return (
    <div>
      <div>
        <p>안녕하세요! 유선님</p>
        <p>knews2@naver.com</p>
      </div>

      <div>
        <Link to="/mypage/profile" className="underline">
          프로필 설정하기
        </Link>
      </div>
    </div>
  );
};

export default Mypage;
