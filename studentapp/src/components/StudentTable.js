import '../assests/css/compo.css';

export default function StudentTable(props){
    return(

        <div className=".outerDiv">
            <div className=".leftDiv">
                <table>
                    <thead>
                        <tr>
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>Course</td>
                            <td>Country</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
        
    
}