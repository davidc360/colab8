import { Button } from './Common'
import './Triage.sass'

function Triage() {
    const question = 'Are you in pain?'
    const responses = ["no", "yes"]

    return (
        <div>
            <Question question={question} responses={responses}/>
        </ div>
    )
}

function Question({ question, responses }) {
    const resButtons = responses.map((res, i) => {
        return <Button key={res} text={res} className={
            ` ${i === 1 ? "green" : i === 0 ? "red" : "regular"}
            choice
            `
        } />
    })

    return (
        <div>
            <Button className="question">🇺🇸 {question}</Button>
            <div>
                {resButtons}
            </div>
        </div>
    )
}

export default Triage