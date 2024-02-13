import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProjects = createAsyncThunk("/api/projects", async () => {
  try {
    const { data } = await axios.get("/api/projects");
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const fetchSingleProject = createAsyncThunk(
  "/api/projects/project",
  async (projectId) => {
    try {
      const { data } = await axios.get(`/api/projects/${projectId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const projectSlice = createSlice({
  name: "projectView",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProjects.fulfilled, (state, action) => {
      console.log("All Project List: ", action.payload);
      return action.payload;
    });
    builder.addCase(fetchSingleProject.fulfilled, (state, action) => {
      console.log("Single Project List: ", action.payload);
      return action.payload;
    });
  },
});

export default projectSlice.reducer;
