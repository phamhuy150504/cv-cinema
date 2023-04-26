import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listBooked: []
}

const bookingSlice = createSlice({
  name: 'bookingSlice',
  initialState,
  reducers: {
    handleBooked: ((state = initialState, { payload }) => {
        let index = state.listBooked.findIndex(chair => chair.maGhe === payload.maGhe)
        if (index !== -1) {
            state.listBooked.splice(index, 1)
        } else if (state.listBooked.length >= 8) {
             alert('you can only book up to 8 tickets')
        } else {
            state.listBooked = [...state.listBooked, payload]
        }
    })
  }
});

export const { handleBooked } = bookingSlice.actions

export default bookingSlice.reducer