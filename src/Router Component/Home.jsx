import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Router Component/Home.css';
const Home = () => {
    return ( 
<>
    <h3 className="my-5 Comming-Classroom-Title"><ins>Book for Comming Classroom</ins></h3>
    <div className="row">
        <div className="col-2"></div>
        <div className="col">
        <table class="Comming-Classroom-Table table table-bordered">
            <thead>
                <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Week Days</th>
                        <th scope="col">Table for 2021</th>
                </tr>
            </thead> 
            <tbody>
                <tr>
                    
                        <th scope="row"><NavLink to="/Python">Python</NavLink></th>
                        <td>Every Monday</td>
                        <td>4pm</td>
                </tr>
                <tr>
                    
                        <th scope="row"><NavLink to="/Course">Java</NavLink></th>
                        <td>Every Wednesday</td>
                        <td>5pm</td>
                </tr>
                <tr>
                   
                        <th scope="row"><NavLink to="/HTML">HTML</NavLink></th>
                        <td>Every Friday and Saturday</td>
                        <td>9am</td>
                </tr>
            </tbody>
        </table>
        </div>
        <div className="col-2"></div>
    </div>
</>
     );
}
 
export default Home;