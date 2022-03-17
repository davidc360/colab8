import { Button } from './Common'
import './Triage.sass'

function Triage() {
    const question = 'Are you in pain?'
    const responses = ["no", "yes"]

    return (
        <div>
            <Question
                question={question}
                responses={<MultiChoice options={responses} />} />
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
        <div className="multi-choice">
            {resButtons}
        </div>
    )
}

function Question({ question, responses }) {
    return (
        <div>
            <Button className="question">🇺🇸 {question}</Button>
            {responses}
        </div>
    )
}

export default Triage