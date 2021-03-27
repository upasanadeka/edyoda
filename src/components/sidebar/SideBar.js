import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./SideBar.css";
import { ReactComponent as Group775 } from "../assets/Group 775.svg";
import { ReactComponent as Group776 } from "../assets/Group 776.svg";
import { ReactComponent as Group769 } from "../assets/Group 769.svg";
import { ReactComponent as InstructorsSelected } from "../assets/Group 777.svg";
import { ReactComponent as Group535 } from "../assets/Group 535.svg";
import { ReactComponent as ModulesSelected } from "../assets/Group 771.svg";
import Home from "../../containers/Home";
import Modules from "../../containers/Modules";
import Instructors from "../../containers/Instructors";

export default function SideBar() {
  const [selected, setSelected] = React.useState("home");

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div className="sidebar">
          <Link to="/home">
            <div
              style={{
                height: "77px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setSelected("home")}
              name="home"
            >
              {selected === "home" ? (
                <Group535 alt="home" />
              ) : (
                <Group775 alt="home" />
              )}
            </div>{" "}
          </Link>
          <Link to="/modules">
            <div
              style={{
                margin: "30px 0px",
                height: "77px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setSelected("modules")}
              name="modules"
            >
              {selected === "modules" ? (
                <ModulesSelected
                  alt="modules"
                  style={{
                    backgroundColor: "#E0E6F2",
                    width: "120px",
                    padding: "10px",
                  }}
                />
              ) : (
                <Group776 alt="modules" />
              )}
            </div>{" "}
          </Link>
          <Link to="/instructors">
            <div
              style={{
                margin: "30px 0px",
                height: "77px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setSelected("instructors")}
              name="instructors"
            >
              {selected === "instructors" ? (
                <InstructorsSelected
                  alt="instructors"
                  style={{
                    backgroundColor: "#E0E6F2",
                    width: "120px",
                    padding: "10px",
                  }}
                />
              ) : (
                <Group769 alt="instructors" />
              )}
            </div>
          </Link>
        </div>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/modules" component={Modules} />
          <Route path="/instructors" component={Instructors} />
        </Switch>
      </div>
    </Router>
  );
}
