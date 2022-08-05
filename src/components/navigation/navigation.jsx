import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import Icon  from "../../assets/logo.jsx"
import './navigation.scss'

export default function Navigation() {
    return(
        <Fragment>
            <div>
                <Link to="/" className="logo-container">
                    <Icon/>
                </Link>
                <div className="links-container">
                    <Link to="/shop">Shop</Link>
                    <Link to="/">Home</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}