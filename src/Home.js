import { Button } from './Common';

function Home() {
    return (
        <div className="Home">
            <Button text="Nurse/Doctor" />
            <Button text="New Patient" />
            <Button text="Treatment Options" />
            <Button text="Saved Forms" />
        </div>
    )
}

export default Home