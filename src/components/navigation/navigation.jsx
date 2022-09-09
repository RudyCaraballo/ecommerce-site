import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import Icon  from "../../assets/logo.jsx"
import './navigation.scss'

export default function Navigation() {
    return(
        <Fragment>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <Icon/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">Shop</Link>
                    <Link className="nav-link"  to="/auth">Sign In</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}