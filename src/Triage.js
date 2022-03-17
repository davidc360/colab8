import { Button } from './Common'
import './Triage.sass'

function Triage() {
    return (
        <div className="triage">
            <Question
                question='Are you in pain?'
                responses={<MultiChoice options={["no", "yes"]} />}
            />

            <Question
                question="What level is your pain on a level of 0-10?"
                responses={<Slider />}
            />

            <Question
                question="Are you having difficulty breathing/swallowing?"
                responses={<MultiChoice options={["no", "yes"]} />}
            />
        </ div>
    )
}

function MultiChoice({ options }) {
    const resButtons = options.map((res, i) => {
        return <Button key={res} text={res} className={
            ` ${i === 1 ? "green" : i === 0 ? "red" : "regular"}
            choice
            `
        } />
    })

    return (
        <div className="multiChoice">
            {resButtons}
        </div>
    )
}

function Slider() {
    return (
        <div className="slider">
            <input type="range" min="1" max="100" defaultValue="50" class="slider" />
        </div>
    )
}

function Question({ question, responses }) {
    return (
        <div className="questionCtn">
            <Button className="question">🇺🇸 {question}</Button>
            {responses}
        </div>
    )
}

export default Triage