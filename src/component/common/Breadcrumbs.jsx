import React from 'react';
import { NavLink } from 'react-router-dom';
const Breadcrumbs = (props) => {
    return ( 
        <div>
            <div className="d-flex flex-row bd-highlight">
                <NavLink to={props.path}><button className="btn btn-outline-secondary mt-1">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i><span className="back-to-home">{props.title}</span>
                    </button>
                </NavLink>
            </div>
        </div>
     );
}
 
export default Breadcrumbs;