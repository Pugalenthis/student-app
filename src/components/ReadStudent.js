import { useParams } from "react-router-dom";
import "../Styles/ReadStudent.css"

export function ReadStudent({Istudent,SetIstudent}) {
  const{id}=useParams();
  const ReadIstudent =Istudent[id]
  console.log(Istudent,id)
  console.log(ReadIstudent)
  return (
    <div>
      <div className="container" id="readstudent-container">
        <div className="row" id="readstudent-row" >
          <div className="col-4 readstudent-column" >
                <img alt="person-avatar" className="person-logo" src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png"></img>
              </div>
              <div className="col-8 readstudent-column" >
                <h3>Personal Details</h3>
                   <ul>
                     <li className="personal-info" ><b>Name</b> : {ReadIstudent.Name}</li>
                     <li className="personal-info"><b>Email</b> : {ReadIstudent.Emailid}</li>
                     <li className="personal-info"><b>Register Number </b> : {ReadIstudent.RegisterNumber}</li>
                     <li className="personal-info"><b>Batch</b> : 2016-2020</li>
                     <li className="personal-info"><b>Address</b> : 123,Guragon,Haryana,India.</li>
                     <li className="personal-info"><b>Contact</b> Number: 8767654567</li>
                   </ul>
              </div>
            </div>
          </div>
        </div>
  );
}
