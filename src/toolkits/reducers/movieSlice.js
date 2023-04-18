import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  src: ''
}

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    getSrc: (state = initialState, action) => {
       state.src = action.payload
    } 
  }
});

export const { getSrc } = movieSlice.actions

export default movieSlice.reducer