import React from "react";
import { NavLink } from 'react-router-dom';
import '../Router Component/NotFound.css';
const NotFound = () => {
  return (
  <div className="Main-Body">
    <div className="container">
      <div className="row text-center">
        <div className=" Main-Container">
          <div className="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main">
            <div className="row">
              <div className="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
                <h1 className="m-0">404</h1>
                <h6>Page not found</h6>
                  <p>We couldn't find what you were looking for.<br/>
                      Check the URL you entered for any mistakes and try again. Alternatively You can mail us for any queries here
                    <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=rashmiranjantandia@gmail.com&tf=1"><button className="btn btn-sm btn-outline-warning ml-1"><span className="text-danger">E-mail</span></button>
                    </a> Or <br/>Go Back to. . <NavLink to="/"><button className="btn btn-sm btn-outline-info"><span className="text-dark">Home</span></button></NavLink>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NotFound;
