import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./reducers/movieSlice";
import userSlice from "./reducers/userSlice";
import bookingSlice from "./reducers/bookingSlice";



export const store =  configureStore({
    reducer: {
        movieSlice,
        userSlice,
        bookingSlice
    },
  });
