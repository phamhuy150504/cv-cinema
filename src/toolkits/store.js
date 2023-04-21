import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./reducers/movieSlice";
import userSlice from "./reducers/userSlice";



export const store =  configureStore({
    reducer: {
        movieSlice,
        userSlice,
    },
  });
