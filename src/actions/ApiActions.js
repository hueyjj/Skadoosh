import {
  FETCHING_COURSE,
  FETCHING_COURSE_SUCCESS,
  FETCHING_COURSE_FAIL,
} from "../constants/ApiActions";

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
        console.log(response.body.course);
        dispatch(fetchingCourseSuccess);
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