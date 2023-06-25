import React, {FC} from "react";
import FileStorageContentTable from "@widgets/FileStorageTable/fileStorageContentTable";

const FilesPage: FC = () => {
    return (
        <div>
            files page
            <FileStorageContentTable/>
        </div>
    );
};

export default FilesPage;