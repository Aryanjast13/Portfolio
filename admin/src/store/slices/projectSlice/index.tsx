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
    const response = await apiInstance.get("/project");
    return response.data;
  } catch (error) {
    throw new Error("some error occurs");
  }
});

export const editProject = createAsyncThunk("editProject", async (data: any) => {
  const { id } = data;
  try {
    const response = await apiInstance.put("/project/"+id);
    return response.data;
  } catch (error) {
    throw new Error("some error occurs");
  }
});

export const deleteProject = createAsyncThunk("deleteProject", async (id:string) => {
  try {
    const response = await apiInstance.delete("/project/"+id);
    return response.data;
  } catch (error) {
    throw new Error("some error occurs");
  }
});



// Define a type for the slice state
interface projectState {
  projects: [],
  title: string,
  description: string,
  image_url:string,
}

// Define the initial state using that type
const initialState: projectState = {
  projects: [],
  title: "",
  description: "",
  image_url:"",
};


export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setState: (state, action) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.image_url = action.payload.image_url;
    },
    removeState: (state) => {
      state.title = "";
      state.description = "";
      state.image_url = "";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProject.fulfilled, (state, action) => {
      state.projects=action.payload.data
    })
  }
  
});


export const {setState,removeState } = projectSlice.actions;

export default projectSlice.reducer;
