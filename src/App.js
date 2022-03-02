import './App.sass'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Home from './Home'
import Worker from './Worker'
import Employee from './Employee'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/worker" element={<Worker />} />
                    <Route path="/employee" element={<Employee />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
