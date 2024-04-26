import { configureStore } from '@reduxjs/toolkit'
// import sideBarSlice from '../slices/sideBarSlice'
import modeSlice from '../slices/modeSlice'

export const store = configureStore({
    reducer: {
        mode: modeSlice
    },
})