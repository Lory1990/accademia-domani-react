import { createSlice } from '@reduxjs/toolkit'


const themeSlice =createSlice({
    name: "themeSlice",
    initialState:{ 
        label:  "Lorenzo",
        title: "Corso React",
    },
    reducers:{
        setLabel:(state, actionPayload) => {
            state.label = actionPayload.payload
        }
    }
})

export const { setLabel } = themeSlice.actions

export default themeSlice.reducer