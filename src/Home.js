import { Button } from './Common';

function Home() {
    return (
        <div className="Home column">
            <Button text="Nurse/Doctor" link="/worker"/>
            <Button text="New Patient" link="/intake"/>
            <Button text="Treatment Options" />
            <Button text="Saved Forms" />
        </div>
    )
}

export default Home