import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from './Modal';
import {signUp} from '../redux/modules/user';
import { checkEmail,checkNickname,checkPW} from '../shared/functions'

interface Props {
	isOpen: boolean;
	close: () => void;
}

const SignUp: React.FC<Props> = ({ isOpen, close }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [form, setForm] = useState({
		userEmail: '',
		nickname: '',
		password: '',
		confirmpw:'',
	});
	const { userEmail, nickname, password, confirmpw} = form;

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};
	
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// 아이디, 비밀번호 형식 체크		
    if (!checkEmail(userEmail).res) {      
      alert(checkEmail(userEmail).msg);
      return;
    }
		if (!checkNickname(nickname).res) {
      alert(checkNickname(nickname).msg);
      return;
    }
		if (!checkPW(password, confirmpw).res) {
      alert(checkPW(password, confirmpw).msg);
      return;
    }
		
		console.log(form,'회원가입 시도');
		
		const userInfo = {userEmail:userEmail,nickname:nickname,password:password};
		dispatch(signUp(userInfo));		
	};
	if (!isOpen) {
		return null;
	}
	return (
		<Modal close={close}>
			<Form onSubmit={onSubmit}>
				<label>
					Email:
					<input 
						type='email'
						name='userEmail' 
						value={userEmail}
						onChange={onChange}
					/>
				</label>
				<label>
					Nickname:
					<input 
						type='text'
						name='nickname' 
						value={nickname}
						onChange={onChange}
					/>
				</label>
				<label>
					Password:
					<input 
						type='password'
						name='password' 
						value={password}
						onChange={onChange}
					/>
				</label>
				<label>
					Confirm Password:
					<input 
						type='password'
						name='confirmpw' 
						value={confirmpw}
						onChange={onChange}
					/>
				</label>
				<button>Sign Up</button>
			</Form>
		</Modal>
	);
};

export default SignUp;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
