import {
    useNavigate,
} from "react-router-dom"

export function Button({ onClick, text, link, className, children }) {
    const navigate = useNavigate()
    return (
        <button
            className={"Button " + className}
            onClick={() => { navigate(link) }}>
            {text}
            {children}
        </button>
    );
}