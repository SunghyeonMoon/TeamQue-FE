import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {test,refreshtest} from '../redux/modules/user'

interface Props {}

const Header: React.FC<Props> = () => {

	const dispatch = useDispatch();
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
	const onclick = () => {
		console.log("test click!!")
		dispatch(test());
	};
	const refreshTest = () => {
		console.log("refreshTest test click!!")
		dispatch(refreshtest());
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
			<button onClick={onclick}>test</button>
			<button onClick={refreshTest}>refresh test</button>
		</>
	);
};
export default Header;

const Container = styled.div``;
