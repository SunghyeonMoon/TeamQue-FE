import axios from 'axios';

const url = 'http://13.124.123.143:3000';

//api instance 생성
export const api = axios.create({
	baseURL: url,
});

//kakao social login 인가코드 받기
const KAKAO_ID = process.env.REACT_APP_REST_KAKAO_ID;
const KAKAO_REDIRECT_URI = process.env.REACT_APP_REST_KAKAO_REDIRECT_URI;

export const KAKAO_API_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
