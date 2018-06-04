import { 
  ApiActions,
  AuthActions,
  DiagramActions,
  DrawerActions,
  SettingsActions,
 } from "../actions";
import { 
  ApiTypes,
  AuthTypes,
  CourseTypes,
  DiagramTypes,
  DrawerTypes,
  ReviewTypes,
  SettingsTypes,
 } from "../constants";

describe("actions", () => {
  it("should create an action to set course result", () => {
    const payload = "Some result";
    const expectedAction = {
      type: CourseTypes.SET_COURSE_RESULT,
      payload
    };

    expect(ApiActions.setCourseResult(payload)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetch course status to fetching", () => {
    const expectedAction = {
      type: ApiTypes.FETCHING_COURSE,
    };
    expect(ApiActions.fetchingCourse).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetch course status to success", () => {
    const expectedAction = {
      type: ApiTypes.FETCHING_COURSE_SUCCESS,
    };
    expect(ApiActions.fetchingCourseSuccess).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetch course status to fail", () => {
    const expectedAction = {
      type: ApiTypes.FETCHING_COURSE_FAIL,
    };
    expect(ApiActions.fetchingCourseFail).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set review result", () => {
    const payload = "some result";
    const expectedAction = {
      type: ReviewTypes.SET_REVIEWS_RESULT,
      payload
    };
    expect(ApiActions.setReviewsResult(payload)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching reviews status", () => {
    const expectedAction = {
      type: ApiTypes.FETCHING_REVIEWS,
    };
    expect(ApiActions.fetchingReviews).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching reviews status to success", () => {
    const expectedAction = {
      type: ApiTypes.FETCHING_REVIEWS_SUCCESS,
    };
    expect(ApiActions.fetchingReviewsSuccess).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching reviews status to fail", () => {
    const expectedAction = {
      type: ApiTypes.FETCHING_REVIEWS_FAIL,
    };
    expect(ApiActions.fetchingReviewsFail).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching create reviews status", () => {
    const expectedAction = {
      type: ApiTypes.FETCHING_CREATE_REVIEW,
    };
    expect(ApiActions.fetchingCreateReview).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching create reviews status to success", () => {
    const expectedAction = {
      type: ApiTypes.FETCHING_CREATE_REVIEW_SUCCESS,
    };
    expect(ApiActions.fetchingCreateReviewSuccess).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching create reviews status to fail", () => {
    const expectedAction = {
      type: ApiTypes.FETCHING_CREATE_REVIEW_FAIL,
    };
    expect(ApiActions.fetchingCreateReviewFail).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching logout status", () => {
    const expectedAction = {
      type: AuthTypes.FETCHING_LOGOUT,
    };
    expect(AuthActions.fetchingLogout).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching logout status to success", () => {
    const expectedAction = {
      type: AuthTypes.LOGOUT_SUCCESSFUL,
    };
    expect(AuthActions.logoutSuccessful).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching logout status to fail", () => {
    const expectedAction = {
      type: AuthTypes.LOGOUT_FAIL,
    };
    expect(AuthActions.logoutFail).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching signup status", () => {
    const expectedAction = {
      type: AuthTypes.FETCHING_SIGNUP,
    };
    expect(AuthActions.fetchingSignup).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching signup status to success", () => {
    const expectedAction = {
      type: AuthTypes.SIGNUP_SUCCESSFUL,
    };
    expect(AuthActions.signupSuccessful).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set fetching signup status to fail", () => {
    const expectedAction = {
      type: AuthTypes.SIGNUP_FAIL,
    };
    expect(AuthActions.signupFail).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set cmps course selected in a diagram", () => {
    const payload = "some course";
    const expectedAction = {
      type: DiagramTypes.SET_SELECTED_CMPS_COURSE,
      payload
    };
    expect(DiagramActions.setSelectedCmpsCourse(payload)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set drawer to show", () => {
    const expectedAction = {
      type: DrawerTypes.DRAWER_SHOW,
    };
    expect(DrawerActions.showDrawer()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set drawer to hide", () => {
    const expectedAction = {
      type: DrawerTypes.DRAWER_HIDE,
    };
    expect(DrawerActions.hideDrawer()).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to set theme", () => {
    const payload = "some theme";
    const expectedAction = {
      type: SettingsTypes.SET_THEME,
      payload
    };
    expect(SettingsActions.setTheme(payload)).toEqual(expectedAction);
  });
});