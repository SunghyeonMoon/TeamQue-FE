import axios from 'axios';

const instance = axios.create({
	//baseURL: 'http://52.78.200.34/api/',
	baseURL: 'http://localhost:3000',
	timeout: 1000,	
});

instance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');
  config.headers["Content-Type"] = "application/json; charset=utf-8";	
  config.headers["X-AUTH-TOKEN"] = token != null ? token: "";	
  console.log(config,"config")
  return config;
});

export const apis = {
  //---- 유저  ----//
  kakao: (authorization_code) => instance.get(`/api/auth/kakao/callback?code=${authorization_code}`), //카카오로그인
  signUp: (userInfo) => instance.post("/api/signup", userInfo), //회원가입
  signIn: (userInfo) => instance.post("/api/signin", userInfo), //로그인
  signOut: (userInfo) => instance.post("/api/signout", userInfo), //로그인
};
export default apis;

