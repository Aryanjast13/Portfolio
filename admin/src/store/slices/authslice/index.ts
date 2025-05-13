import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk("auth/login", async (data: { email: string, password: string }) => {
  try {
    const response = await axios.post("");
    
  } catch (error) {
    
  }

})







// Define a type for the slice state
interface authState {
    isAuth: boolean,
    user: object | null,
    isLoading:boolean
  }
  
  // Define the initial state using that type
  const initialState: authState = {
    isAuth: false,
    user:null ,
    isLoading: true,
};
  

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  },
  extraReducers:(builder) => {
    builder.addCase(, reducer)
  },
})



export default authSlice;