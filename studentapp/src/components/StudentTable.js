import '../assests/css/compo.css';
import Profile from './Profile';
import {useState} from 'react';

export default function StudentTable(props){

    const {stu,setstu}=useState(props.students[0]);

    return(

        <div className="outerDiv">
            <div className="leftDiv">
                <table border="1">
                    <thead>
                        <tr>
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>Course</td>
                            <td>Country</td>
                            <td>Profile</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            props.students.map(student=>
                                <tr>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.course}</td>
                                    <td>{student.address.country}</td>
                                    <td><button onClick={()=>{setstu(student)}}>View</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className="rightDiv">
              <Profile student={stu}/>
            </div>
        </div>
    );
        
    
}