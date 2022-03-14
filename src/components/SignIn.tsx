import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { KAKAO_API_URL} from "../shared/social/oAuth";
import Modal from './Modal';

interface Props {
	isOpen: boolean;
	close: () => void;
	openSignUp: () => void;
}

const SignIn: React.FC<Props> = ({ isOpen, close, openSignUp }) => {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('로그인 정보 확인', inputs);
	};
	const onKakaoClick = () => {
		console.log('카카오 로그인');    
    window.location.href = KAKAO_API_URL
  }
	
	if (!isOpen) {
		return null;
	}
	return (
		<Modal close={close}>
			<Form onSubmit={onSubmit}>
				<h2>Sign In</h2>
				<label>
					Email:
					<input
						type='email'
						placeholder='Email'
						name='email'
						onChange={onChange}
					/>
				</label>
				<label>
					Password:
					<input
						type='password'
						name='password'
						onChange={onChange}
						placeholder='Password'
					/>
				</label>
				<button>Sign In</button>
				<p>or</p>
				<button>Sign in with Google</button>				
				<button onClick={onKakaoClick}>Login with Kakao</button>				
				<p>
					Don't have an account? <button onClick={openSignUp}>Sign up</button>
				</p>
			</Form>
		</Modal>
	);
};

export default SignIn;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
