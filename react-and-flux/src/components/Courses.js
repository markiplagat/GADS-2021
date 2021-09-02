import React, {useEffect, useState} from 'react';
import { getCourses } from "../api/courseApi";
import { Link } from "react-router-dom";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses));
    }, []);

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
            {courses.map(course => {
                return (
                    <tr key={course.id}>
                        <td>
                            <Link to={"/course/" + course.slug}>{course.title}</Link>
                        </td>
                        <td>{course.authorId}</td>
                        <td>{course.category}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
}

export default Courses;
