import { useState } from "react"
import "./Intake.sass"
import { Button } from "./Common"
import { useEffect } from "react"
import Triage from "./Triage"

function Intake() {
    const [page, setPage] = useState(0)
    const [language, setLanguage] = useState("English")
    const flags = {
        English: "🇺🇸",
        Chinese: "🇨🇳",
        Japanese: "🇯🇵"
    }

    function changeLanguage(e) {
        setLanguage(e.target.value)
    }

    function updatePage(e) {
        setPage((page + 1) % 2)
    }

    return (
        <div className="Intake column">
            <div className="language-picker">
                <span>{flags[language]} </span>
                <select onChange={changeLanguage}>
                    <option value="English">English</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Chinese">Chinese</option>
                </select>
            </div>
            <div className="intake-form">
                {
                    page === 0 ?
                        <BasicInfo language={language} />
                        : <Triage />
                }
            </div>
            <Button className={`page ${page ? "prev" : ""}`} link="/triage" onClick={updatePage}>
                >
            </Button>
            <div className="form-buttons">
                <Button className="form-button" link="/">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/home.png"/>
                    HOME
                </Button>
                <Button className="form-button">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
                    SEARCH
                </Button>
            </div>
        </div>
    )
}

function BasicInfo({ language }) {
    // get translations from database
    const formKeys = [
        "first_name",
        "last_name",
        "date_of_birth",
        "sex",
        "marital_status",
        "address",
        "city",
        "state",
        "country",
        "email_address",
        "phoneNumber"
    ]

    const englishPrompts = [
        "First Name",
        "Last Name",
        "Date of Birth",
        "Sex",
        "Marital Status",
        "Address",
        "City",
        "State",
        "Country",
        "E-mail",
        "Phone Number"
    ]

    const [forms, setForms] = useState({})
    useEffect(() => {
        if (language === "English") return
        fetch('https://transmed-golang.herokuapp.com/health/form-field/fields/retrieve/' + language.toLowerCase())
            .then(res => res.json())
            .then(data => {
                setForms(data)
                console.log(data)
            })
     }, [language])
    
    const translatedPrompts = language === "English" ? englishPrompts
    : formKeys.map(key => {
        if (key === "phoneNumber") key = "phone_number"
        return forms[key + "_lang"]
    })

    const inputs = translatedPrompts.map((prompt, i) => <FormInput key={i} prompt={prompt} promptEnglish={ englishPrompts[i] } value=""/>)
    return (
        <div className="basicInfo">
            {inputs}
        </div>
    )
}

function FormInput({ prompt, value, promptEnglish }) {
    const [flipped, setFlipped] = useState(false)
    const toggleFlip = () => {
        setFlipped(!flipped)
    }
    const isEnglish = promptEnglish === prompt
    return (
        <div className="formInput">
            <div className="flip-card">
                <div className={`flip-card-inner ${flipped ? "flipped" : ""}`} onClick={!isEnglish ? toggleFlip : null}>
                    <div className="card">
                        <Button className="form-prompt" onClick={() => { }}>{prompt}</Button>
                    </div>
                    <div className="card card-back">
                        <Button className="form-prompt" onClick={() => { }}>{promptEnglish}</Button>
                    </div>
                </div>
            </div>
            <input type="text" className="form-input" />
        </div>
    )
}

export default Intake