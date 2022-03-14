
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apis from '../../shared/apis/api';

const initialState = {
	user_info: {
		username: '',
		userid: '',
	},
	is_login: false,
};

export const signUp = createAsyncThunk(
	'user/signup',
	async (form: {}, thunkAPI) => {
		try {
			await apis.signUp(form).then((response) => {
				alert('회원가입에 성공했습니다. 로그인 페이지로 이동합니다.');
				return response.data;
			});
		} catch (err:any) {
			console.log(err.message, 'error');
			alert(err);
			return thunkAPI.rejectWithValue(err.response.message);
		}
	}
);

export const signIn = createAsyncThunk(
	'user/signin',
	async (form: any, thunkAPI) => {
		try {
			const response = await apis.signIn(form).then((res) => {
				if (res.status === 200) {
					alert('로그인에 성공했습니다. 메인 페이지로 이동합니다.');
				}
				return res;
			});
			return response.data;
		} catch (err:any) {
			alert(err);
			return thunkAPI.rejectWithValue(err.response.message);
		}
	}
);

export const signOut = createAsyncThunk(
	'user/logoutAxios',
	async (_, thunkAPI) => {
		try {
			user.actions.deleteUserFromSession();
			await apis.signOut().then((res) => {
				alert('로그아웃에 성공하셨습니다');
			});
			return true;
		} catch (err:any) {
			alert(err.response.data.msg + '로그아웃 실패');
			return false;
		}
	}
);

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserToSession: (state, action) => {
			sessionStorage.setItem('token', action.payload.token);
			sessionStorage.setItem('username', action.payload.username);
			sessionStorage.setItem('userId', action.payload.userId);
		},
		getUser: (state, action) => {
			const tempName = sessionStorage.getItem('username');
			const tempId = sessionStorage.getItem('userId');

			state.user_info.username = tempName ? tempName : '';
			state.user_info.userid = tempId ? tempId : '';
			state.is_login = true;
		},
		deleteUserFromSession: () => {
			sessionStorage.removeItem('token');
			sessionStorage.removeItem('username');
			sessionStorage.removeItem('userId');
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signUp.fulfilled, (state, action) => {
			state = state;
		});
		builder.addCase(signIn.fulfilled, (state, action) => {
			state.user_info = {
        username: action.payload.userData.username,
        userid: action.payload.userData.userId,
      };
			console.log(action,"action")
			state.is_login = true;
		});
		builder.addCase(signOut.fulfilled, (state, action) => {
			if (action.payload) {
				state.user_info = initialState.user_info;
				state.is_login = false;
			}
			alert('로그아웃 완료');
		});
	},
});

export const { setUserToSession, getUser, deleteUserFromSession } =
	user.actions;
export default user.reducer;
