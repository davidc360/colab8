import {
    useNavigate,
} from "react-router-dom"
import "./Common.sass"

export function Button({ onClick, text, link, className, children }) {
    const navigate = useNavigate()
    const navigateToLink = () => { navigate(link) }
    return (
        <button
            className={"Button " + className}
            onClick={onClick ? onClick : navigateToLink}>
            {text}
            {children}
        </button>
    );
}