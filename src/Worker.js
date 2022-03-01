import { Button } from "./Common"
import './Worker.sass'

function Worker() {
    return (
        <div className="Doctor column">
            <div className="worker-heading">Nurse/Doctor</div>
            <div className="doctor-list"></div>
            <div className="worker-buttons">
                <Button text="Last Name" />           
                <Button className="worker-search">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
                </Button>
                <Button text="First Name" />           
            </div>
        </div>
    )
}

export default Worker