import axios from 'axios';
import { api } from '../social/oAuth';

const instance = axios.create({
	baseURL: 'http://13.124.123.143:3000',
	//baseURL: 'http://localhost:3000',
	//timeout: 1000,
});

instance.interceptors.request.use(
	(config) => {
		const accesssToken = sessionStorage.getItem('accessToken');
		const refreshToken = sessionStorage.getItem('refreshToken');
		//config.headers.Accept = "application/json";
		config.headers['Content-Type'] = 'application/json;charset=utf-8';
		config.headers['Authorization'] =
			accesssToken != null ? 'Bearer ' + accesssToken : ' ';
		//refreshToken != null ? 'Bearer ' + refreshToken : ' ';
		console.log(config, 'instance.interceptors.request config');
		return config;
	},
	(error) => {
		console.log(error, 'request error');
	}
);

instance.interceptors.response.use(
	(response) => {
		console.log(response, 'interceptors.response');
		return response;
	},
	async (error) => {
		console.log(error, 'interceptors.response error');
		const {
			config,
			response: { status },
		} = error;
		if (status === 401) {
			console.log(error, '401 error');
			if (error.response.data.message === 'TokenExpiredError') {
				const originalRequest = config;
				const refreshToken = sessionStorage.getItem('refreshToken');
				//token refresh 요청
				const { data } = await apis.refresh(refreshToken);
				//new token
				const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
					data;
				sessionStorage.setItem('accessToken', newAccessToken);
				sessionStorage.setItem('refreshToken', newRefreshToken);

				axios.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

				return axios(originalRequest);
			}
		}
		return Promise.reject(error);
	}
);

export const apis = {
	//---- 유저  ----//
	kakao: (authorization_code) =>
		instance.get(`/api/auth/kakao/callback?code=${authorization_code}`), //카카오로그인
	signUp: (userInfo) => instance.post('/auth/signup', userInfo), //회원가입
	signIn: (userInfo) => instance.post('/auth/signin', userInfo), //로그인
	signOut: (userInfo) => instance.post('/auth/signout', userInfo), //로그아웃
	//---- 유저 정보 등록 ----//
	setNick: (nickname) => instance.put('/auth/nickname', { nickname: nickname }), //초기 닉네임 등록
	test: () => instance.get('/auth/test'),
	//---- refresh  ----//
	refresh: (refreshToken) => instance.post('/auth/refresh', refreshToken),
};
export default apis;
