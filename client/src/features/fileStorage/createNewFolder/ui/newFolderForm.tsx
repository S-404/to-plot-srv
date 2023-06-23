import React, {FC} from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import {FormControl, InputLabel} from "@mui/material";
import Input from "@mui/material/Input";

interface NewFolderFormProps {
    isLoading?: boolean;
}

const NewFolderForm: FC<NewFolderFormProps> = ({isLoading}) => {
    return (
        <FormControl sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <InputLabel htmlFor={"input_newFolderName"}>New folder Name</InputLabel>
            <Input autoFocus id={"input_newFolderName"} name={"name"}/>
            <LoadingButton
                loading={isLoading}
                type={"submit"}
                variant="contained"
            >
                Apply
            </LoadingButton>
        </FormControl>
    );
};

export default NewFolderForm;