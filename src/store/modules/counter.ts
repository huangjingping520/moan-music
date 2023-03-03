import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'Hello Redux'
  },
  reducers: {
    changeMessage(state,{ payload }) {
      state.message = payload 
    }
  }
})

export const { changeMessage } = counterSlice.actions

export default counterSlice.reducer
 