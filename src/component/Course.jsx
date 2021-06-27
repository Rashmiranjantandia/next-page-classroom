import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../firebase';
import Navbar from './../component/Navbar';
import Breadcrumb from './common/Breadcrumbs';
import {getRandom} from './common/ClaimTime'
import './Course.css'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
// firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


function useCourseSchedule(){
  const [courseSchedules, setCourseSchedule] = React.useState([]);
  const [avail, setAvail] = React.useState("");

  React.useEffect(() => {
    const firestoreData = db.collection("java")
      .onSnapshot((snapshot) => {
        const courseSchedule = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourseSchedule(courseSchedule);
      });
      console.log('data :');
      // console.log(courseSchedules[1]["date"]);
      // console.log(courseSchedules.map((subSourseSchedule) => 
      // subSourseSchedule.courses.map((course, index) => course.date)));
  }, [db]);
  
  return courseSchedules
}


const Course = () => {
  let [avail, setAvail] = React.useState("");
  const courseSchedules = useCourseSchedule();
  const [btnClass, setBtnClass] = React.useState((avail === 0) ? "btn btn-success" : "btn btn-danger");

// const changeColor = (avail) => {
//   setBtnClass((avail === 0) ? "btn btn-success" : "btn btn-danger") 
// }
  function handleAvail (){
    avail = getRandom(0,15) < 5 ? getRandom(5,15): 0
    // updateAvail(avail)
    // changeColor(avail)
    return avail
  }

  //  const updateInput = e => {
  //    this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  function updateAvail (avail) {
    // avail.preventDefault();
    // db.settings({
    //   timestampsInSnapshots: true
    // });
    // db.settings('settings');
    // db.collection('any');
    db.collection("java").doc(courseSchedules)({
          availability: avail
    });
    // console.log(userRef)
  };


  const handleBook = (SelectedData) => {
    console.log(SelectedData)
    setBtnClass((avail === 0) ? "btn btn-success" : "btn btn-danger")
    console.log("btn color :");
    console.log(avail);
    // changeColor(avail)
  }



  return (
    <div>
      <Breadcrumb 
            title = {"Home"}
            path = {"/"}
            />
      <Breadcrumb 
            title = {"Java"}
            path = {"/Course"}
            />
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="float-end col mt-2 mb-1 Class-Title">Java Class Schedule</div>
          <div className="col-8"></div>
        </div>
        <div className="row">
          <div className="row">
            <div className="col-1"></div>
              <div className="col">
                <table className="table table-bordered Course-Table">
                    <thead className="table-head">
                      <tr className="row">
                        <th className="col">Date</th>
                        <th className="col">Time</th>
                        <th className="col">Availability</th>
                        <th className="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {courseSchedules.map((course, index) =>
                      <tr className="row ml-0 mr-0" key={index}>
                          <td className="col">{course.date}</td>
                          <td className="col">{course.time}</td>
                          <td className="col"><button className="Available-Seats">{handleAvail()} seats available</button></td>
                          <td className="col"><button className={btnClass} onClick={() => handleBook(course)}
                              type="button">{(avail ===0) ? "Full" : "BookNow"}</button></td>
                      </tr>
                      )}
                    </tbody>

                    {/* <tbody>
                      {courseSchedules.map((subSourseSchedule) => 
                      subSourseSchedule.courses.map((course, index) =>
                      <tr className="row ml-0 mr-0" key={index}>
                          <td className="col">{course.date}</td>
                          <td className="col">{course.time}</td>
                          <td className="col"><button className="Available-Seats">{handleAvail()} seats available</button></td>
                          <td className="col"><button className={btnClass} onClick={() => handleBook(course)}
                              type="button">{(avail ===0) ? "Full" : "BookNow"}</button></td>
                      </tr>
                      ))}
                    </tbody> */}
                </table>
              </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;