import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import StorageKeys from "../../constant/storage-keys";

export const register = createAsyncThunk(
  "user/register",
  async (payload: any) => {
    const response: any = await userApi.register(payload);
    localStorage.setItem(StorageKeys.TOKEN, response?.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(response?.user));

    return response?.user;
  }
);

export const login = createAsyncThunk("user/login", async (payload: any) => {
  const response: any = await userApi.login(payload);
  localStorage.setItem(StorageKeys.TOKEN, response?.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(response?.user));

  return response?.user;
});

const initialState = {
  current: JSON.parse(localStorage.getItem(StorageKeys.USER) || "{}"),
};

const userSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { logOut } = userSlice.actions;
export const authLoginReducer = userSlice.reducer;
