import {createSlice} from "@reduxjs/toolkit";

export interface StepState {
    index: number
}

const initialState: StepState = {
    index: 0
}

export const stepperSlice = createSlice({
    name: 'stepper state',
    initialState,
    reducers: {
        increment: (state) => { state.index += 1; }
    }
});

export const { increment } = stepperSlice.actions;
export default stepperSlice.reducer;