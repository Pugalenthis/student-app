import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { StudentList } from "./StudentList";
import { useHistory, useParams } from "react-router-dom";

export function EditStudent({ Istudent, SetIstudent }) {

  const { id } = useParams();
  console.log(id);

  const EditIstudent = Istudent[id];
  console.log(EditIstudent);

  const [Rollnumber, SetRollnumber] = useState(EditIstudent.RollNumber);
  const [Name, SetName] = useState(EditIstudent.Name);
  const [RegisterNumber, SetRegisterNumber] = useState(EditIstudent.RegisterNumber);
  const [Emailid, SetEmailid] = useState(EditIstudent.Emailid);

  const history = useHistory();

  return (
    <div>
      <div className="container-fluid" id="getstudent-container-fluid">
        <div className="container" id="getstudent-container">
          <div className="row">
            <div className="col-12">
              <div className="input-group">
                <TextField value={Rollnumber}
                  onChange={(value) => SetRollnumber(value.target.value)}
                  id="outlined-basic"
                  className="input-box"
                  label="Enter Roll Number  "
                  variant="outlined"
                />
                <TextField value={Name}  
                  onChange={(value) => SetName(value.target.value)}
                  id="outlined-basic"
                  className="input-box"
                  label="Enter Student Name  "
                  variant="outlined"
                /> 
                <TextField value={RegisterNumber}
                  onChange={(value) => SetRegisterNumber(value.target.value)}
                  id="outlined-basic"
                  className="input-box"
                  label="Enter Student Register Number"
                  variant="outlined"
                />
                <TextField value={Emailid}
                  onChange={(value) => SetEmailid(value.target.value)}
                  id="outlined-basic"
                  className="input-box"
                  label="Enter Student Email-id"
                  variant="outlined"
                />

                <Button
                  className="create-student-button"
                  variant="contained"
                  onClick={() => {
                    const updatedmovie = {
                      RollNumber: Rollnumber,
                      Name: Name,
                      RegisterNumber: RegisterNumber,
                      Emailid: Emailid,
                    };
                    const CopyIstudent = [...Istudent];
                    CopyIstudent[id]=updatedmovie;
                    SetIstudent(CopyIstudent);
                    console.log(Istudent);
                    console.log(CopyIstudent);
                    history.push("/student-list");
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
