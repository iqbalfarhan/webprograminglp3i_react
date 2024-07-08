import { Outlet, NavLink } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <nav>
                <div className="navbar">
                    <h2>Website</h2>
                    <div>
                        <NavLink to={"/"}>Profile</NavLink>
                        <NavLink to={"/project"}>Project</NavLink>
                        <NavLink to={"/pendidikan"}>Pendidikan</NavLink>
                    </div>
                </div>
            </nav>

            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;
