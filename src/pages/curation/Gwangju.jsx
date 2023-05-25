import React, { useRef } from "react";
import { gwangju_store } from "../../json/gwangju_store";
import { HOME_PATH } from "../../config/config_home";

const Gwangju = () => {
  const introRef = useRef(null);
  const storesRef = useRef(null);

  // 특정 ID가 있는 위치로 스크롤 이동 함수
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div
        id="main"
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage: "url('/img/market/양동시장.jpg')",
          height: "100vh",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-5 title_a">
                광주 양동시장
              </h1>
              <p className="text-2xl">100년 역사, 이야기 가득한 먹거리 시장</p>
            </div>
          </div>
        </div>
      </div>

      {/* 시장 소개 */}
      <div ref={introRef} className="py-20 md:py-20 mx-4 sm:mx-24">
        <div className="md:mx-80 m-0 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex md:flex-col flex-row mb-3">
            <p className="text-4xl font-bold mb-2 md:mr-0 mr-4 title_a">
              양동시장
            </p>
            <p>
              100년 역사,
              <br />
              이야기 가득한 먹거리 시장
            </p>
          </div>
          <div className="md:w-3/4 w-full leading-7 tracking-wide md:ml-4">
            <p className="mb-6">
              광주 양동시장은 광주와 전라남도에서 가장 큰 규모를 자랑하는
              전통시장으로 알려져 있다. 100년의 역사를 자랑하며, 광주의 명물이자
              호남 지역에서 가장 큰 재래시장이다.
            </p>
            <p className="mb-6">
              양동시장은 1910년부터 광주교 아래의 백사장에서 매달 2일과 7일에
              오일장이 열린 것으로 시작했다. 1940년에는 일본인들의 신사 주변
              정리 사업으로 인해 현재의 위치로 시장이 이전되었다. 이후 1946년
              동명 변경 과정에서 '어질 양(良), 골 동(洞), 어질게 살라는 뜻'에
              양동이라는 이름이 사용되기 시작했다.
            </p>
            <p className="mb-6">
              양동시장은 전국에서 소비되는 홍어의 90%가 거래되는 곳으로
              유명하며, 전국 우수시장으로 선정되어 있다. 약 300여 곳의 점포가
              4개 동으로 구성되어 있으며, 농산물, 수산물, 공산품 등 다양한
              품목을 취급한다.
            </p>
            <p className="mb-6">
              양동시장은 2000년대 현대화 과정을 통해 지붕 있는 깨끗한 시장으로
              탈바꿈했다. 또한 가격 정찰제를 통해 편리함도 더했다. 최근에는
              양동시장의 명물인 옛날 통닭과 맥주를 즐길 수 있는 ‘양동 통맥
              축제’를 열며 여전히 광주 시민들과 공존하는 모습을 보인다.
            </p>
            <p>
              양동시장은 전통적인 재래시장의 매력과 현대적인 시설과 경영
              시스템의 조화를 갖춘 멋진 시장으로, 광주 시민들과 방문객들에게
              사랑 받고 있다. 오늘도 양동시장은 활기를 띄며 사람 사는 이야기를
              쌓아 간다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gwangju;
