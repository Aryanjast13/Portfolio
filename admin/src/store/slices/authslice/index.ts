import apiInstance from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkAuth = createAsyncThunk("auth/check-auth", async () => {
  try {
    const response = await apiInstance.get("/auth/get-session");
    return response.data;
  } catch (error) {
    throw new Error("some error occurs");
  }
});

export const login = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }) => {
    try {
      const response = await apiInstance.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await apiInstance.post("/auth/logout");
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

// Define a type for the slice state
interface authState {
  isAuth: boolean;
  user: object | null;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: authState = {
  isAuth: false,
  user: null,
  isLoading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.isAuth = action.payload.success;
      (state.user = action.payload.user), (state.isLoading = false);
    });
    builder.addCase(checkAuth.pending, (state) => {
      state.isLoading = true;
      state.user = null;
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.isAuth = false;
      state.isLoading = false;
      state.user = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload.success ? action.payload.user : null;
      state.isLoading = false;
    });

    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.user = null;
    });

    builder.addCase(login.rejected, (state) => {
      state.isAuth = false;
      state.isLoading = false;
      state.user = null;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.user = null;
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
