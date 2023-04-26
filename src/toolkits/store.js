import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./reducers/movieSlice";
import userSlice from "./reducers/userSlice";
import bookingSlice from "./reducers/bookingSlice";
import SpinnerSlice from "./reducers/SpinnerSlice";



export const store =  configureStore({
    reducer: {
        movieSlice,
        userSlice,
        bookingSlice,
        SpinnerSlice
    },
  });
