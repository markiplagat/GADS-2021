import {EventEmitter} from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];
class CourseStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT)
    }

    // Get courses
    getCourses() {
        return _courses;
    }

    getCoursesBySlug(slug) {
        return _courses.find(course => course.slug === slug);
    }
}

// Instance of a store class
const store = new CourseStore();

//Register the dispatcher
Dispatcher.register(action => {
    switch(action.actionType){
        case actionTypes.CREATE_COURSE:
            _courses.push(action.course);
            // Notify every component that depends on change
            store.emitChange();
            break;
        default:
    }
})
export default store;
