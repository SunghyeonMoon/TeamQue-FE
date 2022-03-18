import React from 'react';
import { useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner';
import FirstJoin from './firstJoin';
import { api } from './oAuth';
import { useNavigate } from 'react-router-dom';

const Kakao = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [first, setFirst] = React.useState(false); //가입 시첨 체크
	let authorization_code = new URL(window.location.href).searchParams.get(
		'code'
	);

	React.useEffect(() => {
		//kakao 인가코드 백으로 넘기기
		console.log('kakaologin start');
		dispatch(kakaoLogin(authorization_code));
	}, []);

	//kakao social 로그인
	const kakaoLogin = (authorization_code) => {
		return async function () {
			await api
				.get(`/auth/kakao/callback?code=${authorization_code}`)
				.then((response) => {
					const nickname = response.data.nickname;
					const accessToken = response.data.accessToken;
					const refreshToken = response.data.refreshToken;

					sessionStorage.setItem('nickname', `${nickname}`);
					sessionStorage.setItem('accessToken', `${accessToken}`);
					sessionStorage.setItem('refreshToken', `${refreshToken}`);
				})
				.then(() => {
					if (sessionStorage.getItem('nickname') === undefined) {
						setFirst(false);
						navigate('/');
					} else {
						setFirst(true);
					}
				})
				.catch((err) => {
					console.log('카카오 로그인실패', err);
				});
		};
	};

	return <>{first ? <FirstJoin /> : <Spinner />}</>;
};
export default Kakao;
