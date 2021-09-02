import React, {useState} from 'react';
import TextInput from "./TextInput";
import * as courseApi from "../api/courseApi";
import {toast} from "react-toastify";

const CourseForm = (props) => {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    const handleChange = ({target}) => {
        setCourse({
            ...course,
            [target.name]: target.value
        });
    };
    function handleSubmit(e) {
        e.preventDefault();
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course Saved");
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                id="title"
                type="text"
                label="Title"
                name="title"
                className="form-control"
                onChange={handleChange}
                value={course.title}
            />

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        onChange={handleChange}
                        value={course.authorId || ""}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
            </div>

            <TextInput
                type="text"
                id="category"
                label="Category"
                name="category"
                onChange={handleChange}
                className="form-control"
                value={course.category}
            />
            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default CourseForm;
