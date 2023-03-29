import React, {FC} from 'react';
import {Link} from "react-router-dom";

const UserPage: FC = () => {
    return (
        <div>
            userPage
            <Link to={'/'}>home</Link>
        </div>
    );
};

export default UserPage;