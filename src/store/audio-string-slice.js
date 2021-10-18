import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: "________"
}
const audioStringSlice = createSlice({
    name: "audio",
    initialState,
    reducers: {
        setAudioString: (state,action) =>{
            state.value = action.payload
        }
    }
})

export const {setAudioString} = audioStringSlice.actions;
export default audioStringSlice.reducer;