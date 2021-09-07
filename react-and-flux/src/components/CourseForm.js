import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import TextInput from "./TextInput";
import * as courseApi from "../api/courseApi";
import * as courseActions from "../actions/courseActions";
import courseStore from "../stores/courseStore";

const CourseForm = (props) => {
    const [errors, setErrors] = useState({});
    const [courses, setCourses] = useState(courseStore.getCourses());
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: "",
    });

    useEffect( () => {
        courseStore.addChangeListener(onChange);
        const {slug} = props.match.params;
        if ( courses.length === 0 ){
            courseActions.loadCourses();
        }
         else if (slug) {
             setCourse(courseStore.getCoursesBySlug())
                setCourse(courseStore.getCoursesBySlug(slug));
        }
        return () => courseStore.removeChangeListener(onChange)
    },[courses.length, props.match.params.slug]);

    function onChange() {
        setCourses(courseStore.getCourses());
    }
    const handleChange = ({target}) => {
        setCourse({
            ...course,
            [target.name]: target.value,
        });
    };

    function formIsValid() {
        const _errors = {};

        if (!course.title) _errors.title = "Title is Required";
        if (!course.authorId) _errors.authorId = "Author Id is Required";
        if (!course.category) _errors.category = "Category is Required";

        setErrors(_errors);
        return Object.keys(_errors).length === 0;

    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!formIsValid()) return;
        courseActions.saveCourse(course).then(() => {
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
                error={errors.title}
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
                    {errors.authorId && (
                        <div className="alert alert-danger">{errors.authorId}</div>
                    )}
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
                error={errors.category}
            />
            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
};

export default CourseForm;
