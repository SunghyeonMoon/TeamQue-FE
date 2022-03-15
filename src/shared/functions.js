// 회원가입 페이지 입력 체크
// 주석처리한 부분 : 백엔드 구현 요구사항
export const checkEmail = (email) => {
	if (email === '') {
		return { res: false, msg: '이메일을 입력해주세요' };
	} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return { res: false, msg: '올바른 이메일을 입력해주세요' };
	}
	return { res: true };
};

export const checkNickname = (nickname) => {
	if (nickname === '') {
		return { res: false, msg: '닉네임을 입력해주세요' };
	} else if (!nickname.length >= 3 || !/^[a-z,A-Z,0-9]{3,}$/.test(nickname)) {
		return { res: false, msg: '올바른 닉네임을 입력해주세요' };
	}
	return { res: true };
};

export const checkPW = (password, confirmpassword) => {
	if (password === '') {
		return { res: false, msg: '비밀번호를 입력해주세요' };
	} else if (confirmpassword === '') {
		return { res: false, msg: '비밀번호를 입력해주세요' };
	} else if (!password === confirmpassword) {
		return {
			res: false,
			msg: '비밀번호를 올바르게 입력했는지 확인해주세요',
		};
	}
	return {
		res: true,
	};
};
