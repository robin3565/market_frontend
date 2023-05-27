import axios from "axios";
import { comment } from "../json/comment";
import { BACK_PATH } from "../config/config_home"

// naver 블로그 API
export async function naverSearchData(query) {
  try {
    const response = await axios.get("http://localhost:3005/search/blog", {
      params: {
        query: query,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 댓글 데이터 필터
export async function getCommentData(query) {
  const data = comment.filter((item) => item["시장정보"] === query);
  return data;
}

// 시장 데이터 가져오기 - 필터링
export const getMarketData = async (word="") => {
  try {
    const res = await axios.get(`${BACK_PATH}/search?word=${word}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 시장 데이터 가져오기
export const getAllMarketData = async () => {
  try {
    const res = await axios.get(`${BACK_PATH}/marketList`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 지리정보 데이터 가져오기
export const getAllGeoCodeData = async () => {
  try {
    const res = await axios.get(`${BACK_PATH}/marketList`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};