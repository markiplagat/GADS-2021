import {Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";
import NavBar from "./components/NavBar";
import CourseForm from "./components/CourseForm";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="container">
            <ToastContainer autoClose={4000} hideProgressBar />
            <NavBar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" component={Courses} />
                <Route path="/course" component={CourseForm} />
            </Switch>
        </div>
    );
}

export default App;
