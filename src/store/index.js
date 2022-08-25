import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  currentTrack: null,
  exercise: "",
  order: "",
};

//createSlice
const slice = createSlice({
  name: "page-data",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    setExercise: (state, action) => {
      state.exercise = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

//create store
const store = configureStore({
  reducer: slice.reducer,
});

export const { actions, reducer } = slice;
export default store;
