import React, { useRef } from "react";
import { gwangju_store } from "../../json/gwangju_store";
import { HOME_PATH } from "../../config/config_home";

const Malbau = () => {
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
          backgroundImage: "url('/img//main_banner_01.jpg')",
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
                광주 말바우시장
              </h1>
              <p className="text-2xl">전통 5일장의 재미와 옛 모습이 남아있는 시장</p>
            </div>
          </div>
        </div>
      </div>

      {/* 시장 소개 */}
      <div ref={introRef} className="py-20 md:py-20 mx-4 sm:mx-24">
        <div className="md:mx-80 m-0 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex md:flex-col flex-row mb-3">
            <p className="text-4xl font-bold mb-2 md:mr-0 mr-4 title_a">
              말바우시장
            </p>
            <p>
            전통 5일장의 재미와
              <br />
              옛 모습이 남아있는 시장
            </p>
          </div>
          <div className="md:w-3/4 w-full leading-7 tracking-wide md:ml-4">
            <p className="mb-6">
            광주 말바우시장은 광주에서 5일장의 명맥을 이어가고 있는 대표적인 전통시장이다.  2, 4, 7, 9일, 한 달에 12번 장이 서는데, 장이 열리는 날엔 수많은 사람들이 시장으로 몰린다. 매일 열리는 상설장과 달리 오일장만의 고유한 매력을 말바우시장은 여전히 간직하고 있다.
            </p>
            <p className="mb-6">
            말바우시장이라는 정겨운 이름은 옛 장터에 있던 바위에서 유래한다. 김덕령 장군의 천리마가 바위에 발굽을 힘차게 내디뎠는데, 발굽 모양으로 발자국이 찍혀서 그 바위를 말바우라고 불렀다. 또 하나는 옛 장터에 말처럼 큰 바위가 있었는데, 아이들이 바위에 걸터앉아 말 타는 시늉을 하며 놀았다고 해서 말바우로 불렸다는 이야기다. 안타깝게도 두 개의 바위는 지금 남아있지 않다.
            </p>
            <p className="mb-6">
            오일장은 대개 5일마다 열리기 때문에 5일장이라고 하는데, 예부터 지역 주민들과 농민들이 모여 물건을 사고파는 장터기 때문에, 신선한 농산물은 물론 다른 시장에서는 보기 힘든 지역 특산품을 저렴한 가격에 구입할 수 있다. 뿐만 아니라, 지역 주민들이 오일장에 모여 교류하는 역할도 하여 다양한 볼거리와 시장 특유의 먹거리도 즐길 수 있다.
            </p>
            <p>
            2000년 대에 이후에 정식으로 허가를 받은 시장이 된 말바우 시장은 현대화 과정을 거쳐 지붕도 생긴 어엿한 현대적 전통 시장의 모습이다. 하지만 여전히 말바우 시장의 골목길엔 정겨운 옛 시장의 모습이 남아 있는데, 바로 골목길에 나란히 앉아 직접 키운 농산물을 파는 할머니들의 노점이다. 작은 노점에서 엿볼 수 있는 한국인의 정과 후한 인심을 보는 것도 시장의 재미 요소 중 하나다.
            </p>
          </div>
        </div>
        <div className="md:w-3/4 w-18/20 mx-auto flex flex-col md:flex-row justify-between mt-16 h-full">
          <div
            style={{ height: "240px" }}
            className="relative md:mx-4 rounded-lg"
          >
            <img
              className="rounded-lg"
              src={`${HOME_PATH}/img/market/old_양동시장_1.jpg`}
              style={{ objectFit: "contain", height: "100%" }}
              alt="Image 1"
            />
            <div className="rounded-lg absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-xl font-bold">Data 1</p>
            </div>
          </div>
          <div
            style={{ height: "240px" }}
            className="relative md:mx-4 rounded-lg"
          >
            <img
              className="rounded-lg"
              src={`${HOME_PATH}/img/market/old_양동시장_2.jpg`}
              style={{ objectFit: "contain", height: "100%" }}
              alt="Image 2"
            />
            <div className="rounded-lg absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-xl font-bold">Data 2</p>
            </div>
          </div>
          <div
            style={{ height: "240px" }}
            className="relative md:mx-4 rounded-lg"
          >
            <img
              className="rounded-lg"
              src={`${HOME_PATH}/img/market/old_양동시장_3.jpg`}
              style={{ objectFit: "contain", height: "100%" }}
              alt="Image 3"
            />
            <div className="rounded-lg absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-xl font-bold">Data 3</p>
            </div>
          </div>
        </div>
      </div>
      {/* 시장 정보 */}
      <div ref={storesRef} className="bg-gray-100">
        {/* <div className="flex justify-center">
          <p className="text-3xl title_a my-16 font-bold">대표 먹거리</p>
        </div> */}
        <div className="md:py-20">
          <div className="mx-4 md:mx-48">
            {/*  01  */}
            <div className="flex flex-col-reverse md:flex-row justify-between mb-10">
              <div className="w-full md:w-1/3">
                <p className="text-prigray-400">#양동시장 #통닭 #노포맛집</p>
                <p className="text-2xl font-semibold my-2">
                  추억을 간직한 맛, 양동 통닭집
                </p>
                <p className="leading-6 mt-5">
                  양동시장에는 옛날부터 생닭과 오리를 파는 가게들이 모여 길을
                  이루었는데, 이 길은 닭전머리길이라고 불렸다. 신선한 생닭을
                  가져다가 바로 튀겨 만든 옛날 통닭은 바삭한 식감과 고소한 맛,
                  그리고 닭똥집도 같이 튀겨주는 푸짐한 양 덕에 많은 시민들의
                  사랑을 받아왔다. 이젠 사라지고 있는 ‘옛날통닭’을 만나볼 수
                  있는 하나의 브랜드로 자리 잡으면서 누군가에게는 옛 향수를
                  불러일으키고, 누군가에게는 새로운 경험을 선사하기도 하며
                  시장의 문턱을 지키고 있다.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center">
                {gwangju_store?.slice(0, 2)?.map((store, idx) => {
                  const name = store["점포명"];
                  const location = store["소재지도로명주소"];
                  return (
                    <div
                      className="border border-gray-200 w-full md:w-80 h-80 mx-2 md:mx-5 my-5 md:my-0 rounded-lg relative bg-no-repeat bg-cover"
                      key={idx}
                      style={{
                        backgroundImage: `url(${store.img_url})`,
                      }}
                    >
                      <div
                        className="rounded-lg absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <div className="p-4 text-white">
                          <p className="font-semibold text-2xl mb-2">{name}</p>
                          <p>{location}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/*  02  */}
            <div className="flex flex-col-reverse md:flex-row justify-between mb-10">
              <div className="w-full md:w-1/3">
                <p className="text-prigray-400">#양동시장 #빵집 #소금빵</p>
                <p className="text-2xl font-semibold my-2">
                  소금빵 맛집, 양동시장 소금빵집
                </p>
                <p className="leading-6 mt-5">
                  양동시장에서 오래 전해져 내려오는 소금빵과 도너츠의 향기와
                  맛을 그대로 담았다. 소금빵은 기름기가 없고 소금으로 어우러진
                  부드러운 맛이 일품이다. 찹쌀 도너츠는 도너츠보단 도나쓰라는
                  발음이 더 어울리는, 맛이 보장되는 옛날 시장 도너츠다. 소금빵,
                  도너츠 모두 모양은 투박할지라도 그간의 전통을 지키며, 진리를
                  꿰뚫어 낸 맛을 선보인다.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center">
                {gwangju_store?.slice(2, 4)?.map((store, idx) => {
                  const name = store["점포명"];
                  const location = store["소재지도로명주소"];
                  return (
                    <div
                      className="border border-gray-200 w-full md:w-80 h-80 mx-2 md:mx-5 my-5 md:my-0 rounded-lg relative bg-no-repeat bg-cover"
                      key={idx}
                      style={{
                        backgroundImage: `url(${store.img_url})`,
                      }}
                    >
                      <div
                        className="rounded-lg absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <div className="p-4 text-white">
                          <p className="font-semibold text-2xl mb-2">{name}</p>
                          <p>{location}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/*  03  */}
            <div className="flex flex-col-reverse md:flex-row justify-between mb-10">
              <div className="w-full md:w-1/3">
                <p className="text-prigray-400">#양동시장 #가성비 #분식</p>
                <p className="text-2xl font-semibold my-2">
                  시장 인심이 가득한 노포 맛집
                </p>
                <p className="leading-6 mt-5">
                  오래된 노포 맛집은 전통적인 맛과 정서를 그대로 전해주는
                  곳으로, 그 독특한 매력으로 많은 사람들에게 사랑 받고 있다.
                  깊은 맛은 물론 오랜 세월 동안 전해져온 비법 레시피와 정성이
                  담겨있어, 한 그릇 음식만으로도 몸과 마음이 따뜻해지는 기분을
                  느낄 수 있다.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center">
                {gwangju_store?.slice(4, 6)?.map((store, idx) => {
                  const name = store["점포명"];
                  const location = store["소재지도로명주소"];
                  return (
                    <div
                      className="border border-gray-200 w-full md:w-80 h-80 mx-2 md:mx-5 my-5 md:my-0 rounded-lg relative bg-no-repeat bg-cover"
                      key={idx}
                      style={{
                        backgroundImage: `url(${store.img_url})`,
                      }}
                    >
                      <div
                        className="rounded-lg absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <div className="p-4 text-white">
                          <p className="font-semibold text-2xl mb-2">{name}</p>
                          <p>{location}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 스크롤 이동 버튼 */}
      <div className="fixed bottom-0 right-0 m-4">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded mr-2 shadow-md"
          onClick={() => scrollToSection(introRef)}
        >
          시장 소개
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded shadow-md"
          onClick={() => scrollToSection(storesRef)}
        >
          시장 정보
        </button>
      </div>
    </div>
  );
};

export default Malbau;
