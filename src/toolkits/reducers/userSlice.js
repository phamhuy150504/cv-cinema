import { createSlice } from '@reduxjs/toolkit'
import { localService } from '../../services/localService';

const initialState = {
    account: localService.get(),
    refBooking: null
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    getUserLogin: ((state = initialState, { payload }) => {
        state.account = payload
    }),
    testRef: ((state = initialState, { payload }) => {
      state.refBooking = payload
    })
  }
});

export const { getUserLogin,testRef } = userSlice.actions

export default userSlice.reducer