import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"

export default function Navigation() {
    return(
        <Fragment>
            <div>
                <Link to="/" className="logo-container">
                    <div>Logo</div> 
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