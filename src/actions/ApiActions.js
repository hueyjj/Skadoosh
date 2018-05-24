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

export const fetchCourse = ({ course }, callback) => (dispatch, getState) => {
  dispatch(fetchingCourse);

  let url = process.env.REACT_APP_API_URL + "api/course";

  let form = new FormData();
  fetch(url, {
    method: "GET",
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
      } else {
        error = Error("Failed to retrieve course - " + response.status + " status code. Server message: " + response.body.message);
        dispatch(fetchingCourseFail);
      }

      callback(error);
    })
    .catch((error) => {
      dispatch(fetchingCourseFail);
      console.log(error);
    })
};