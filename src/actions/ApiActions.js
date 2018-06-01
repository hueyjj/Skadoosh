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