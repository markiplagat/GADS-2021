import './App.css';
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";

function App() {
    function getPage() {
        const route = window.location.pathname;
        if (route === "/courses") return <Courses />

    }
    return (
        <div className="App">
            <HomePage />
            {getPage()}
        </div>
    );
}

export default App;
