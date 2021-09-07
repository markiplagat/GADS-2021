import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import { loadCourses } from "../actions/courseActions";

const Courses = () => {
    const [courses, setCourses] = useState(courseStore.getCourses());

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourses().length === 0) loadCourses();
        // To clean it up
        return () => courseStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setCourses(courseStore.getCourses());
    }

    return(
        <div>
            <Link className="btn btn-primary" to="/course">
                Add Course
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author Id</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>
                                <Link to={`/course/${  course.slug}`}>{course.title}</Link>
                            </td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Courses;
