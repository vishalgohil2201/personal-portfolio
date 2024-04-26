import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modeValue: '',
}

export const modeSlice = createSlice({
    name: 'openSidebar',
    initialState,
    reducers: {
        changeMode: (state, action) => {
            // console.log(action.payload);
            state.modeValue = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeMode } = modeSlice.actions

export default modeSlice.reducer