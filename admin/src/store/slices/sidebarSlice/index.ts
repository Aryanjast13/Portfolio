import { createSlice } from "@reduxjs/toolkit";


interface SidebarState{
    expanded: boolean;
}

const initialState: SidebarState = {
    expanded: true,
}


const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setExpanded: (state) => {
            state.expanded = !state.expanded;
        },
       
    }
})

export const { setExpanded } = sidebarSlice.actions;

export default sidebarSlice.reducer;