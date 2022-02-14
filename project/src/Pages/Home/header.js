import "../css/header.css";

function Header() {
    return (
        <nav className={"navbar-box2 navbar navbar-expand-lg navbar-light"}>
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
                        <li className={"nav-item"}/>
                        <li className={"colr nav-item dropdown"}/>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
