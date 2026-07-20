import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state, action) => {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // incrementByAmount: (state, action: PayloadAction<{ value: number }>) => {
    //   state.value = action.payload.value;
    // },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, incrementByAmount, decrement } = counterSlice.actions;

export default counterSlice.reducer;
