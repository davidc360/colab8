import Button from "Common"

function Doctor() {
    return (
        <div className="Doctor">
            <div>Nurse/Doctor</div>
            <div className="doctor-list"></div>
            <Button text="Last Name" />           
            <Button text="First Name" />           
        </div>
    )
}

export default Doctor