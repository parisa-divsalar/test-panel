import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface theme {
  dark: boolean;
}

interface InitialState {
  dark: boolean;
}

const initialState: InitialState = {
  dark: false
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    isDarkMode: (state, action: PayloadAction<{ data: theme; dark: boolean }>) => {
      state.dark = action.payload.dark;
    },
  },
});

export const { isDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
