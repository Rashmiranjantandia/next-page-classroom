import React from 'react';
import Navbar from './../component/Navbar';
import Breadcrumb from '.././component/common/Breadcrumbs';
const Python = () => {
    return ( 
        <>
      <Breadcrumb 
            title = {"Home"}
            path = {"/"}
            />
      <Breadcrumb 
            title = {"Python"}
            path = {"/Python"}
            />
      <Navbar/>
        <h1  className="mt-5">Python Page</h1>
         <div>Here is a Python Demo page</div>
         <div>Just need to fetch the data from firebase</div>
        </>
     );
}
 
export default Python;