import {
    useNavigate,
} from "react-router-dom"

export function Button({ onClick, text, link }) {
    const navigate = useNavigate()
    return (
        <button className="Button" onClick={() => { navigate(link) }}>
            {text}
        </button>
    );
}