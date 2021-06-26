import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import Timer from "./Timer";
// import Python from "./../Router Component/Python";
import Cart from "./Cart";
const Main = () => {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <NavLink to="/"><button className="float-start btn btn-outline-secondary mt-1">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i><span className="back-to-home">Home</span>
                    </button>
                    <img src="NextPageClassroomLogo.svg" width= "200px" className="float-end mt-2" alt="unavailabe" />
                    {/* <div className="Classroom-Title float-end pr-5"><span>NEXT PAGE</span><br/><span>CLASSROOM</span></div> */}
                </NavLink>
            </div>
            <div className="row mt-4">
                <div className="col-6"><Timer/></div>
                <div className="col-2"></div>
                <div className="col-4"><Cart/></div>
            </div>
        </div>
     );
}
 
export default Main;