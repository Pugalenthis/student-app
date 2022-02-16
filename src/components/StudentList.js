import "../Styles/StudentList.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";



export function StudentList({ Istudent,SetIstudent }) {
  console.log(Istudent)
  return (
    <div>
      <div className="container-fluid" id="getstudent-container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table class="table" id="studentlist-table">
                <thead>
                  <tr>
                    <th >Roll Number</th>
                    <th >Name</th>
                    <th >Register Number</th>
                    <th >E-mail</th>
                    <th className="button-column">More Info</th>
                    <th >Edit</th>
                    <th >Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {Istudent.map((ele,index)=>{
                  return <CreateStudent RollNumber={ele.RollNumber} Name={ele.Name} RegisterNumber={ele.RegisterNumber} Emailid={ele.Emailid} id={index} Istudent={Istudent} SetIstudent={SetIstudent}/>
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreateStudent({RollNumber,Name,RegisterNumber,Emailid,id,Istudent,SetIstudent}) {
  console.log(RollNumber,Name,RegisterNumber,Emailid,id)
  
  const history=useHistory();
  return ( 
        <tr>
          <td>{RollNumber}</td>
          <td>{Name}</td>
          <td>{RegisterNumber}</td>
          <td>{Emailid}</td>
          <td  className="button-column" id="info-button" ><InfoIcon onClick={()=>{
                history.push(`/student-list/${id}`)
          }} ></InfoIcon></td>
          <td ><EditIcon onClick={()=>{
             history.push(`/student-list/edit/${id}`)
          }} color="success" ></EditIcon></td>
          <td ><DeleteIcon onClick={()=>{
              const CopyIstudent=[...Istudent]
              CopyIstudent.splice(id,1)
              SetIstudent(CopyIstudent);
          }} color="error"></DeleteIcon></td>
        </tr>
  );
}
