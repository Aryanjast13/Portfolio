import apiInstance from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface projectState {
  tools: [];
  formData: {
    id: string;
    name: string;
    image_url: string;
  };
}

// Define the initial state using that type
const initialState: projectState = {
  tools: [],
  formData: {
    id: "",
    name: "",
    image_url: "",
  },
};

export const addTool = createAsyncThunk("addTool", async (data: any) => {
  try {
    const response = await apiInstance.post("/tool", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw new Error("some error occurs");
  }
});

export const getTool = createAsyncThunk("getTool", async () => {
  try {
    const response = await apiInstance.get("/tool");
    return response.data;
  } catch (error) {
    throw new Error("some error occurs");   
  }
});

export const editTool = createAsyncThunk(
  "editTool",
  async (data: any) => {
    const id = data.get("id");

    try {
      const response = await apiInstance.put("/tool/" + id, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      throw new Error("some error occurs");
    }
  }
);

export const deleteTool = createAsyncThunk(
  "deletetool",
  async (id: string) => {
    try {
      const response = await apiInstance.delete("/tool/" + id);
      return response.data;
    } catch (error) {
      throw new Error("some error occurs");
    }
  }
);

export const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    setState: (state, action) => {
      state.formData = action.payload;
    },
    removeState: (state) => {
      state.formData.name = "";
      state.formData.image_url = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTool.fulfilled, (state, action) => {
      state.tools = action.payload.data;
    });
  },
});

export const { setState, removeState } = toolSlice.actions;

export default toolSlice.reducer;
