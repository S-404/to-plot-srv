import React, {FC} from "react";
import {Link} from "react-router-dom";

const HomePage: FC = () => {
    return (
        <div>

            <div><Link to={"/user"}>User</Link></div>
            <div><Link to={"/login"}>login</Link></div>
            <div><Link to={"/registration"}>registration</Link></div>
            homePage
        </div>
    );
};

export default HomePage;