/** @module */

import {
  FETCHING_COURSE,
  FETCHING_COURSE_SUCCESS,
  FETCHING_COURSE_FAIL,
} from "../constants/ApiActions";
import {
  SET_COURSE_RESULT,
} from "../constants/CourseActions";

import {
  FETCHING_REVIEWS,
  FETCHING_REVIEWS_SUCCESS,
  FETCHING_REVIEWS_FAIL,
} from "../constants/ApiActions";
import {
  SET_REVIEWS_RESULT,
} from "../constants/ReviewActions";

import {
  FETCHING_CREATE_REVIEW,
  FETCHING_CREATE_REVIEW_SUCCESS,
  FETCHING_CREATE_REVIEW_FAIL,
} from "../constants/ApiActions";

export const setCourseResult = (result) => ({
  type: SET_COURSE_RESULT,
  payload: result,
});

export const fetchingCourse = ({
  type: FETCHING_COURSE,
});

export const fetchingCourseSuccess = ({
  type: FETCHING_COURSE_SUCCESS,
});

export const fetchingCourseFail = ({
  type: FETCHING_COURSE_FAIL,
});

/**
 * This callback receives an error or null after fetching courses 
 * @callback fetchCourseCallback
 * @param {Error} error Holds server response status and message
 */
/**
 * Sends a POST request to server and receives an array of objects, where each object is a course.
 * @function
 * @param {object} course Course to search for
 * @param {string} course.term Course term
 * @param {string} course.status Course status
 * @param {string} course.subject Course subject
 * @param {string} course.courseNumber Course number
 * @param {string} course.courseTitleKeyword Keywords to search for
 * @param {string} course.instructorLastName Instructor's last name
 * @param {string} course.generalEducation Type of general education
 * @param {string} course.courseUnits Course units
 * @param {string} course.meetingDays Course meeting days
 * @param {string} course.courseCareer Course career option
 * @param {fetchCourseCallback} callback - A post callback after attempting to fetch courses
 */
export const fetchCourse = ({
  term,
  status,
  subject,
  courseNumber,
  courseTitleKeyword,
  instructorLastName,
  generalEducation,
  courseUnits,
  meetingDays,
  meetingTimes,
  courseCareer,
}, callback) => (dispatch, getState) => {
  dispatch(fetchingCourse);

  let url = process.env.REACT_APP_API_URL + "api/course";

  let form = new FormData();
  form.append("term", term);
  form.append("status", status);
  form.append("subject", subject);
  form.append("course_num", Number(courseNumber));
  form.append("course_title_key_word", courseTitleKeyword);
  form.append("instructor_last_name", instructorLastName);
  form.append("general_education", generalEducation);
  form.append("course_units", courseUnits);
  form.append("meeting_days", meetingDays);
  form.append("course_career", courseCareer);

  fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
    },
    body: form,
  })
    .then(res => {
      return res.json()
        .then((data) => ({
          status: res.status,
          body: data,
        }))
    })
    .then((response) => {
      let error;
      if (response.status === 200) {
        error = null;
        dispatch(fetchingCourseSuccess);

        let courseResults = []
        let courses = response.body.courses;
        for (let course of courses) {
          let courseResult = {
            availableSeats: course.available_seats,
            career: course.career,
            classNotes: course.class_notes,
            classNum: course.class_num,
            credits: course.credits,
            daysAndTimes: course.days_and_times,
            description: course.description,
            enrolled: course.enrolled,
            enrollmentCapacity: course.enrollment_capacity,
            generalEducation: course.general_education,
            grading: course.grading,
            instructor: course.instructor,
            meetingDates: course.meeting_dates,
            room: course.room,
            sectionAndLabs: course.section_and_labs,
            status: course.status,
            title: course.title,
            type: course.type,
            waitlistCapacity: course.waitlist_capacity,
            waitlistTotal: course.waitlist_total,
          };
          courseResults.push(courseResult)
        }

        dispatch(setCourseResult(courseResults));
      } else {
        error = Error("Failed to retrieve course - "
          + response.status + " status code. Server message: "
          + response.body.message + " Error: " + response.body.error);
        dispatch(fetchingCourseFail);
      }

      callback(error);
    })
    .catch((error) => {
      dispatch(fetchingCourseFail);
      console.log(error);
    })
};

export const setReviewsResult = (result) => ({
  type: SET_REVIEWS_RESULT,
  payload: result,
});

export const fetchingReviews = ({
  type: FETCHING_REVIEWS,
});

export const fetchingReviewsSuccess = ({
  type: FETCHING_REVIEWS_SUCCESS,
});

export const fetchingReviewsFail = ({
  type: FETCHING_REVIEWS_FAIL,
});

/**
 * This callback receives an error or null after fetching reviews 
 * @callback fetchReviewsCallback
 * @param {Error} error Holds server response status and message
 */
/**
 * Sends a POST request to server and receives an array of objects, where each object is a review.
 * @function
 * @param {string} searchTerm Search term to find reviews
 * @param {fetchReviewsCallback} callback - A post callback after attempting to fetch reviews
 */
export const fetchReviews = (searchTerm, callback) => (dispatch, getState) => {
  dispatch(fetchingReviews);

  let url = process.env.REACT_APP_API_URL + "api/find_review";

  let form = new FormData();
  form.append("search_term", searchTerm);

  fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
    },
    body: form,
  })
    .then(res => {
      return res.json()
        .then((data) => ({
          status: res.status,
          body: data,
        }))
    })
    .then((response) => {
      let error;
      if (response.status === 200) {
        error = null;
        dispatch(fetchingReviewsSuccess);

        let reviews = response.body.reviews;

        let reviewsResult = [];
        let parseResult = JSON.parse(reviews);
        for (let result of parseResult) {
          reviewsResult.push({
            courseTitle: result.fields.course_title,
            created: result.fields.created,
            modified: result.fields.modified,
            author: result.fields.author,
            comment: result.fields.comment,
          });
        }

        dispatch(setReviewsResult(reviewsResult));
      } else {
        error = Error("Failed to retrieve reviews - "
          + response.status + " status code. Server message: "
          + response.body.message + " Error: " + response.body.error);
        dispatch(fetchingReviewsFail);
      }

      callback(error);
    })
    .catch((error) => {
      dispatch(fetchingReviewsFail);
      console.log(error);
    })
};

export const fetchingCreateReview = ({
  type: FETCHING_CREATE_REVIEW,
});

export const fetchingCreateReviewSuccess = ({
  type: FETCHING_CREATE_REVIEW_SUCCESS,
});

export const fetchingCreateReviewFail = ({
  type: FETCHING_CREATE_REVIEW_FAIL,
});

/**
 * This callback receives an error or null after creating reviews
 * @callback fetchCreateReviewCallback
 * @param {Error} error Holds server response status and message
 */
/**
 * Creates a review by sending in a form object to the server
 * @function
 * @param {object} review Review to create
 * @param {string} review.subject Course subject
 * @param {string} review.term Course term
 * @param {string} review.courseTitle Course title
 * @param {string} review.rating User rating
 * @param {string} review.comment User comment
 * @param {fetchCreateReviewCallback} callback - A post callback after attempting to create a review
 */
export const fetchCreateReview = ({
  subject,
  term,
  courseTitle,
  rating,
  comment,
}, callback) => (dispatch, getState) => {
  dispatch(fetchingCreateReview);

  let url = process.env.REACT_APP_API_URL + "api/create_review";

  let form = new FormData();
  form.append("subject", subject);
  form.append("term", term);
  form.append("course_title", courseTitle);
  form.append("rating", rating);
  form.append("comment", comment);

  fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
    },
    body: form,
  })
    .then(res => {
      return res.json()
        .then((data) => ({
          status: res.status,
          body: data,
        }))
    })
    .then((response) => {
      let error;
      if (response.status === 200) {
        error = null;
        dispatch(fetchingCreateReviewSuccess);
      } else {
        error = Error("Failed to create a new review - "
          + response.status + " status code. Server message: "
          + response.body.message + " Error: " + response.body.error);
        dispatch(fetchingCreateReviewFail);
      }

      callback(error);
    })
    .catch((error) => {
      dispatch(fetchingCreateReviewFail);
      console.log(error);
    })
}