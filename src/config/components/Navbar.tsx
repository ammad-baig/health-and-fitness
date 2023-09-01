import { Link } from "react-router-dom"
import Logo from "../images/logo.png.webp"
import CustomButton from "./Button"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black border-bottom border-body p-3 sticky-top" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="FITNESS" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="services">SERVICES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="schedule">SCHEDULE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="gallery">GALLERY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="blog">BLOG</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">CONTACT</Link>
                            </li>

                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">
                            <CustomButton btnClasses={"btn btn-outline-success p-3 ms-4"} btnText={"BECOME A MEMBER"} btnType={"submit"} btnVariant={"contained"} btnColor={"error"} btnSx={{ backgroundColor: "#ff1313" }} />
                        </form>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar