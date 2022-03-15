import React from 'react';
import { useDispatch } from 'react-redux';
//import { actionCreators as userActions } from '../../redux/modules/user';
import Spinner from '../../components/Spinner';
import FirstJoin from './firstJoin';
import { api } from './oAuth';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
//import { setCookie } from '../../shared/token';

const Kakao = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [first, setFirst] = React.useState(false); //가입 시첨 체크
	let authorization_code = new URL(window.location.href).searchParams.get(
		'code'
	); //window.location.href에서의 ?code= value를 들고온다
	//발급받은 임시 비밀번호

	React.useEffect(() => {
		//kakao 인가코드 백으로 넘기기
		console.log('kakaologin start');
		dispatch(kakaoLogin(authorization_code));
	}, []);

	//kakao social 로그인
	const kakaoLogin = (authorization_code) => {
		return async function () {
			//console.log(authorization_code, 'kakaologin start authorization_code');
			await api
				.get(`/auth/kakao/callback?code=${authorization_code}`) //create한 axios instance의 get request
				.then((response) => {
					console.log(response);
					const accessToken = response.data.accessToken;
					const refreshToken = response.data.refreshToken;
					const nickname = response.data.nickname;

					console.log(accessToken, 'accessToken');
					console.log(refreshToken, 'refreshToken');
					console.log(nickname, 'nickname');

					//setCookie('login', token);

					sessionStorage.setItem('nickname', `${nickname}`);
					sessionStorage.setItem('accessToken', `${accessToken}`);
					sessionStorage.setItem('refreshToken', `${refreshToken}`);
				})
				.then(() => {
					// const defaultNick = sessionStorage.getItem('nick');
					//const distriNick = defaultNick.indexOf('164', 0);
					// const distriNick = defaultNick ? -1 : 1;
					if (sessionStorage.getItem('nickname') === undefined) {
						setFirst(false);
						console.log(first, 'is first??== false');
						navigate('/');
					} else {
						setFirst(true);
						console.log(first, 'is first?? == true');
					}
				})
				.catch((err) => {
					console.log('카카오 로그인실패', err);
				});
		};
	};

	//return <Spinner />;
	return <>{first ? <FirstJoin /> : <Spinner />}</>;
	//first(distrNick)가 있으면 정상적인 회원가입 창, false면 Spinner 보여주기
	//return <>""</>;
};
export default Kakao;
