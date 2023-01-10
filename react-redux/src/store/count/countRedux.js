import {createSlice} from '@reduxjs/toolkit'

export const countRedux = createSlice({
  name: 'countRedux',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {state.value = state.value = state.value + 1},
    decrement: state => {state.value = state.value = state.value - 1},
    setCountByValue: (state, action) => {state.value = state.value + action.payload}
  },
})

export const {increment, decrement, setCountByValue} = countRedux.actions
export default countRedux.reducer