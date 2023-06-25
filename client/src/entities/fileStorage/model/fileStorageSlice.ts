import {IFolder} from "@entities/fileStorage";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface FileStorageState {
    currentFolder: IFolder | null;
}

const initialState: FileStorageState = {
    currentFolder: null,
};

const fileStorageSlice = createSlice({
    name: "fileStorage",
    initialState,
    reducers: {
        setCurrentFolder: (state, action: PayloadAction<IFolder>) => {
            state.currentFolder = action.payload;
        }
    },
});

export default fileStorageSlice.reducer;
export const {setCurrentFolder} = fileStorageSlice.actions;