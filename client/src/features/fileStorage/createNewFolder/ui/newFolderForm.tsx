import React, {FC, useRef} from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import {FormControl, InputLabel} from "@mui/material";
import Input from "@mui/material/Input";

interface NewFolderFormProps {
    isLoading?: boolean;
}

const NewFolderForm: FC<NewFolderFormProps> = ({isLoading}) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            buttonRef?.current?.click();
        }
    };

    return (
        <FormControl
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
            <InputLabel htmlFor={"input_newFolderName"}>New folder Name</InputLabel>
            <Input
                onKeyDown={onKeyDownHandler}
                id={"input_newFolderName"}
                name={"name"}
            />
            <LoadingButton
                ref={buttonRef}
                loading={isLoading}
                type={"submit"}
                variant="contained"
            >
                {"Apply"}
            </LoadingButton>
        </FormControl>
    );
};

export default NewFolderForm;