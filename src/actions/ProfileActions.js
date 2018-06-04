import {
  SET_PROFILE,
  FETCHING_PROFILE,
  FETCHING_PROFILE_SUCCESS,
  FETCHING_PROFILE_FAIL,
} from "../constants/ProfileActions";

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile,
});

export const fetchingProfile = ({
  type: FETCHING_PROFILE,
});

export const fetchingProfileSuccess = ({
  type: FETCHING_PROFILE_SUCCESS,
});

export const fetchingProfileFail = ({
  type: FETCHING_PROFILE_FAIL,
});

export const fetchProfile = (callback) => (dispatch, getState) => {
  dispatch(fetchingProfile);

  let url = process.env.REACT_APP_API_URL + "api/profile";

  fetch(url, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
    },
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

        dispatch(setProfile({
          username: response.body.username,
        }));
        dispatch(fetchingProfileSuccess);
      } else {
        error = Error("Failed to retrieve profile data: " + response.status + " status code. Server message: " + response.body.message);
        dispatch(fetchingProfileFail);
      }

      callback(error);
    })
    .catch((error) => {
      dispatch(fetchingProfileFail);
      console.log(error)
    });
};