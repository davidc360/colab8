import { useState } from "react"
import "./Intake.sass"
import { Button } from "./Common"
function Intake() {
    const [language, setLanguage] = useState("English")
    const flags = {
        English: "🇺🇸",
        Chinese: "🇨🇳",
        Japanese: "🇯🇵"
    }
    function changeLanguage(e) {
        setLanguage(e.target.value)
    }
    return (
        <div className="Intake column">
            <div className="language-picker">
                <div>{flags[language]}</div>
                <select onChange={changeLanguage}>
                    <option value="English">English</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Chinese">Chinese</option>
                </select>
            </div>
            <div className="intake-form">
                <BasicInfo language={language}/>
            </div>
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
    const formPrompts = {
        English: [
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
        ],
        Chinese: [
            "名字",
            "姓氏",
            "出生日期",
            "性别",
            "婚姻状况",
            "地址",
            "城市",
            "州",
            "国家",
            "电子邮件",
            "电话号码"
        ],
        Japanese: [
            "名",
            "姓",
            "生年月日",
            "性別",
            "配偶者",
            "住所",
            "町",
            "県",
            "国",
            "メールアドレス",
            "電話番号"
        ]
    }
    const translatedPrompts = formPrompts[language]
    const inputs = translatedPrompts.map(prompt => <FormInput key={prompt} prompt={prompt} value=""/>)
    return (
        <div className="basicInfo">
            {inputs}
        </div>
    )
}

function FormInput({ prompt, value }) {
    return (
        <div className="formInput">
            <Button className="form-prompt">{prompt}</Button>
            <input type="text" className="form-input" />
        </div>
    )
}

export default Intake