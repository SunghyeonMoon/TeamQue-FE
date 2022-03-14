import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Kakao from './shared/social/kakao';

const App = () => {
	return (
		<>
			<Header/>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path="/auth/kakao/callback" element={<Kakao/>}></Route>
			</Routes>
		</>
	);
};

export default App;
