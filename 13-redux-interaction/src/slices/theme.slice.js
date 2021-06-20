import { createSlice } from '@reduxjs/toolkit'


const themeSlice =createSlice({
    name: "themeSlice",
    initialState:{ 
        label:  "Lorenzo",
        title: "Corso React",
    },
    reducers:{
        setLabel:(state, actionPayload) => {
            state.label = actionPayload.payload.label
        },
        setTitle:(state, actionPayload) => {
            state.title = actionPayload.payload.title
        }
    }
})

export const { setLabel, setTitle } = themeSlice.actions

export default themeSlice.reducer