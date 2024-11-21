import '../assests/css/compo.css';

export default function StudentTable(props){
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
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
        
    
}