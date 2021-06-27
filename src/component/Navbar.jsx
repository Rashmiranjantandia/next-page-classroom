import React from 'react';
import './Navbar.css'
import Timer from "./Timer";
import Cart from "./Cart";
// import BreadcrumbHome from './common/Breadcrumbs';
const NavBar = () => {
    return ( 
        <div className="container-fluid">
            {/* <BreadcrumbHome 
            title = {"Home"}
            path = {"/"}
            /> */}
            <div className="row mt-4">
                <div className="col-6"><Timer/></div>
                <div className="col-2"></div>
                <div className="col-4"><Cart/></div>
            </div>
        </div>
     );
}
 
export default NavBar;