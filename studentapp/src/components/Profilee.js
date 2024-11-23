export default function Profile(props){
    return(
  
      <>
       <table>
          <tr>
              <td rowspan={7}>
                <img className="profile" src={require('../assests/img/'+props.stu.profilePic)} alt="profile"></img>
              </td>
              <td>
                  ID {props.stu.studentId}
              </td>
          </tr>
          <tr>
            <td>Fullname:{props.stu.firstName+" "+props.stu.lastname}</td>
          </tr>
          <tr>
            <td>Age:{props.stu.age}</td>
          </tr>
          <tr>
            <td>Course:{props.stu.course}</td>
          </tr>
          <tr>
            <td>address:{props.stu.city+" "+props.stu.address.country}</td>
          </tr>
          <tr>
            <td>Skill:{props.stu.skills.map(skill=>skill+=" ,")}</td>
          </tr>
       </table>
      </>
    )
  }