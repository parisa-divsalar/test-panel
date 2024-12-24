import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LoginData {
  token: string;
  uuid: string;
}

interface InitialState {
  type: string;
}

const initialState: InitialState = {
  type: ""
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isLogin: (state, action: PayloadAction<{ data: LoginData; type: string }>) => {
      state.type = action.payload.type;
    },
  },
});

export const { isLogin } = loginSlice.actions;
export default loginSlice.reducer;
