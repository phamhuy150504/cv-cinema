import { createSlice } from '@reduxjs/toolkit'
import { localService } from '../../services/localService';

const initialState = {
    account: localService.get()
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    getUserLogin: ((state = initialState, { payload }) => {
        state.account = payload
    })
  }
});

export const { getUserLogin } = userSlice.actions

export default userSlice.reducer