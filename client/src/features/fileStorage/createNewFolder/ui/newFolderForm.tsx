import React from "react";
import {Button, FormControl, InputLabel} from "@mui/material";
import Input from "@mui/material/Input";

const NewFolderForm = () => {
    return (
        <FormControl sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <InputLabel htmlFor={"input_newFolderName"}>New folder Name</InputLabel>
            <Input autoFocus id={"input_newFolderName"} name={"name"}/>
            <Button type={"submit"} variant="contained">Apply</Button>
        </FormControl>
    );
};

export default NewFolderForm;