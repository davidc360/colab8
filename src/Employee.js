import { Button } from "./Common"
import "./Employee.sass"

function Employee({ id }) {
    // get employee info from database
    const name = "Bruno Rodriguez"
    const img = require("./img/bruno.png")
    const role = "Nurse"
    return (
        <div className="Employee column">
            <img src={img} alt={name} className="employee-pic"/>
            <div>
                <div className="employee-name">🔊 {name}</div>
                <div>{role}</div>
            </div>
            <div className="employee-buttons">
                <Button text="New Patient Intake" />
                <Button text="Search Patient Intake" />
            </div>
        </div>
    )
}

export default Employee