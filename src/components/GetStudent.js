import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { StudentList } from "./StudentList";
import { useHistory } from "react-router-dom";

export function GetStudent({Istudent, SetIstudent}) {
  const [Rollnumber, SetRollnumber] = useState("");
  const [Name, SetName] = useState("");
  const [RegisterNumber, SetRegisterNumber] = useState("");
  const [Emailid, SetEmailid] = useState("");
 
  const history =useHistory();
  return (
    <div>
      <div className="container-fluid" id="getstudent-container-fluid">
        <div className="container" id="getstudent-container">
          <div className="row">
            <div className="col-12">
              <div className="input-group">
                <TextField
                  onChange={(value) => SetRollnumber(+(value.target.value))}
                  id="outlined-basic"
                  className="input-box"
                  label="Enter Roll Number  "
                  variant="outlined"
                />
                <TextField
                  onChange={(value) => SetName(value.target.value)}
                  id="outlined-basic"
                  className="input-box"
                  label="Enter Student Name  "
                  variant="outlined"
                />
                <TextField
                  onChange={(value) => SetRegisterNumber(value.target.value)}
                  id="outlined-basic"
                  className="input-box"
                  label="Enter Student Register Number  "
                  variant="outlined"
                />
                <TextField
                  onChange={(value) => SetEmailid(value.target.value)}
                  id="outlined-basic"
                  className="input-box"
                  label="Enter Student Email-id  "
                  variant="outlined"
                />

                <Button
                  className="create-student-button"
                  variant="contained"
                  onClick={() => {
                    const newstudent = {
                      RollNumber: Rollnumber,
                      Name: Name,
                      RegisterNumber: RegisterNumber,
                      Emailid: Emailid,
                    };
                    const CopyIstudent = [...Istudent,newstudent];
                    SetIstudent(CopyIstudent)
                    console.log(Istudent);
                    console.log(CopyIstudent);
                    history.push("/student-list")
                  }}>Create Student</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
