import React, {useEffect, useState} from 'react';
import { getCourses } from "../api/courseApi";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses));
    }, []);

    return(
        <div>
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
                        <td>{course.title}</td>
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
