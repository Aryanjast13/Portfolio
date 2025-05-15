import apiInstance from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addProject = createAsyncThunk("addProject", async (data:any) => {
  try {
    const response = await apiInstance.post(
      "/project",
       data ,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("some error occurs");
  }
});

export const getProject = createAsyncThunk("getProject", async () => {
  try {
    const response = await apiInstance.get("/projects");
    return response.data;
  } catch (error) {
    throw new Error("some error occurs");
  }
});

export const editProject = createAsyncThunk("editProject", async () => {
  try {
    const response = await apiInstance.put("/projects");
    return response.data;
  } catch (error) {
    throw new Error("some error occurs");
  }
});

export const deleteProject = createAsyncThunk("deleteProject", async () => {
  try {
    const response = await apiInstance.delete("/projects");
    return response.data;
  } catch (error) {
    throw new Error("some error occurs");
  }
});



// Define a type for the slice state
interface projectState {
  title: string;
  description: string;
}

// Define the initial state using that type
const initialState: projectState = {
    title: "",
    description: "",
};


export const projectSlice = createSlice({
  name: "project",
  initialState,
    reducers: {
        setState: (state, action) => {
            state.title = action.payload;
            state.description = action.payload;
        },
        removeState: (state) => {
            state.title = "";
            state.description = "";
        }
  },
  
});

export const {setState,removeState } = projectSlice.actions;

export default projectSlice;
