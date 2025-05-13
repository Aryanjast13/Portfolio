import { createSlice } from "@reduxjs/toolkit";



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
})




export 


export default authSlice;