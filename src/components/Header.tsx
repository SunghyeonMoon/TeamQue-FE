import { useState } from 'react';
import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';

interface Props {}

const Header: React.FC<Props> = () => {
  // 모달창 상태 관리
	const [isSignInOpen, setisSignInOpen] = useState(false);
	const [isSignUpOpen, setisSignUpOpen] = useState(false);
	const openSignIn = () => {
		setisSignInOpen(true);
	};
	const closeSignIn = () => {
		setisSignInOpen(false);
	};
	const openSignUp = () => {
		setisSignUpOpen(true);
	};
	const closeSignUp = () => {
		setisSignUpOpen(false);
	};
	return (
		<>
			<SignIn
				isOpen={isSignInOpen}
				close={closeSignIn}
				openSignUp={openSignUp}
			/>
			<SignUp 
				isOpen={isSignUpOpen} 
				close={closeSignUp} 
			/>
			<Container>
				<h2>Header</h2>
				<button onClick={openSignIn}>Sign In</button>
				<button onClick={openSignUp}>Sign Up</button>
			</Container>
		</>
	);
};
export default Header;

const Container = styled.div``;
