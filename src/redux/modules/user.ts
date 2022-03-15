
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apis from '../../shared/apis/api';

const initialState = {
	user_info: {
		nickname: '',		
	},
	is_login: false,
};

export const signUp = createAsyncThunk(
	'user/signup',
	async (userInfo: {}, thunkAPI) => {
		try {
			await apis.signUp(userInfo).then((response) => {
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
				console.log(res,"res.data");			
				thunkAPI.dispatch(user.actions.setUserToSession(res))				
				return res.data;
			});			
			console.log(response,"response.data")
			return response;
		} catch (err:any) {
			alert(err + " signin err");
			console.log(err , " signin err");
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

export const nicknameSet = createAsyncThunk(
	'user/nickname',
	async (nickname: string, thunkAPI) => {
		try{
			console.log(nickname,"nickname");
			await apis
			.setNick(nickname)
			.then(()=> {					
					alert('닉네임 설정에 성공했습니다. 메인 페이지로 이동합니다.');
				}
			)
		} catch (error:any){
			if (error.response){
				console.log(error.response,"error.response")
				}else if(error.request){				
				console.log(error.request,"error.request")				
				}else if(error.message){				
				console.log(error.message,"error.message")	
				}
			alert(error);
			console.log(error,"nicknameSet error");
			return thunkAPI.rejectWithValue(error.response.message);
		}
	}
)

export const test = createAsyncThunk(
	'user/test',
	async (_,thunkAPI) => {
		try{
			await apis.test().then(()=>{
				console.log("test")
			})
		} catch(error:any){
			console.log(error,"test error");
		}
	}
);

export const refreshtest = createAsyncThunk(
	'user/refreshtest',
	async (_,thunkAPI) => {
		try{
			await apis
				.refresh()
				.then((res)=>{
					console.log(res,"refreshtest");					
					}
				)
		} catch(error:any){
			console.log(error,"test error");
		}
	}
);

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserToSession: (state, action) => {
			console.log(action.payload,"setUserToSession action.payload.data");
			console.log(action.payload.data.nickname,"setUserToSession action.payload.data.nickname");
			sessionStorage.setItem('nickname', action.payload.data.nickname);
			sessionStorage.setItem('accessToken', action.payload.data.accessToken);
			sessionStorage.setItem('refreshToken', action.payload.data.refreshToken);
		},
		getUser: (state, action) => {
			const tempName = sessionStorage.getItem('nickname');

			state.user_info.nickname = tempName ? tempName : '';		
			state.is_login = true;
		},
		deleteUserFromSession: () => {
			sessionStorage.removeItem('accessToken');
			sessionStorage.removeItem('refreshToken');
			sessionStorage.removeItem('nickname');
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signUp.fulfilled, (state, action) => {
			state = state;
		});
		builder.addCase(signIn.fulfilled, (state, action) => {
			console.log(action.payload,"signIn.fulfilled action.payload.data");
			state.user_info = {
        nickname: action.payload.data.nickname,
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

export const { setUserToSession, getUser, deleteUserFromSession } = user.actions;

export default user.reducer;
