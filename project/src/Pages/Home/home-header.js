import "../css/home-header.css";
import {Link} from "react-router-dom";

function HomeHeader() {
    return (
        <nav className={"navbar-box navbar navbar-expand-lg navbar-light"}>
            <div className={"container-fluid"}>
                <a className={"navbar-brand"} href="#">
                    <i className="icon far fa-snowflake fa-spin"/>
                </a>
                <a className={"logo"}>Weather_Drills...</a>
                <div
                    href={"#s"}
                    className={"admin collapse navbar-collapse ms-auto mb-2"}
                    id="navbarTogglerDemo02"
                >
                    <ul className={"navbar-nav me-auto mb-2 mb-lg-0 col-12"}>
                        <li className={"nav-item"}>
                            <a className={"nav-link"}>
                                <span className={"logo"}/>
                            </a>
                        </li>
                        <li className={"nav-item"}>
                            <a className={"nav-link"}>
                                <span className={"logo"}/>
                            </a>
                        </li>
                        <li className={"nav-item"}></li>
                        <li className={"colr nav-item dropdown"}>
                            <a
                                className="logo2 btn btn-outline-light"
                                href="#"
                                id="dropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fad fa-user-shield"/>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <Link className={"ilink"} to={"/login"}>
                                    <li className="ilink btn btn-light dropdown-item nav-item">
                                        <i className="fas fa-user"/> Login
                                    </li>
                                </Link>
                                <Link className={"ilink"} to={"/register"}>
                                    <li className="ilink btn btn-light dropdown-item nav-item">
                                        <i className="fad fa-user-plus"/> Sign Up
                                    </li>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HomeHeader;
