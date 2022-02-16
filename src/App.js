import "./App.css";
import { Link, Route, Switch, useParams } from "react-router-dom";
import { Home } from "./components/Home";
import "./Styles/GetStudent.css"
import "./Styles/Home.css"
import { GetStudent } from "./components/GetStudent";
import { StudentList } from "./components/StudentList";
import { useState } from "react";
import { InitialStudent } from "./components/InitialStudent";
import { ReadStudent } from "./components/ReadStudent";
import {EditStudent} from "./components/EditStudent"




function App() {
  const[Istudent,SetIstudent]=useState(InitialStudent)

  
  return (
    <div classNameName="App">
      <div classNameName="container" id="home-container">
        <nav className="navbar navbar-expand-lg ">
          <Link className="navbar-brand">REACT-CRUD-APP</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/createstudent" className="nav-link">
                  Create Student
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/student-list" className="nav-link">
                  Student list
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/createstudent">
            <GetStudent Istudent={Istudent} SetIstudent={SetIstudent}/>
          </Route>
          <Route exact path="/student-list">
            <StudentList  Istudent={Istudent} SetIstudent={SetIstudent}/>
          </Route>
          <Route exact path="/student-list/:id">
               <ReadStudent Istudent={Istudent} SetIstudent={SetIstudent}/>
          </Route>
          <Route exact path="/student-list/edit/:id">
               <EditStudent  Istudent={Istudent} SetIstudent={SetIstudent}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
