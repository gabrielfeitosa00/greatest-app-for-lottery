export const Types = {
  AUTH_START: "AUTH_START",
  AUTH_LOGOUT: "AUTH_LOGOUT",
  AUTH_LOGOUT_SUCCESS: "AUTH_LOGOUT_SUCCESS",

  AUTH_SINGIN: "AUTH_SINGIN",
  AUTH_SINGIN_SUCCESS: " AUTH_SINGIN_SUCCESS",

  AUTH_SINGUP_SUCCESS: "AUTH_SINGUP_SUCCESS",
  AUTH_SINGUP: "AUTH_SINGUP",

  AUTH_FORGOT_PASSWORD: "AUTH_FORGOT_PASSWORD",
  AUTH_FORGOT_PASSWORD_SUCCESS: "AUTH_FORGOT_PASSWORD_SUCCESS",

  AUTH_UPDATE_PASSWORD: "AUTH_UPDATE_PASSWORD",

  AUTH_FAILED: "AUTH_FAILED",

  AUTH_CHECK_STATE: "AUTH_CHECK_STATE",
};

const initialState = {
  username: "",
  password: "",
  email: "",
  token: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.AUTH_START:
      return { ...state, error: null, loading: true };
    case Types.AUTH_SINGUP_SUCCESS:
      return {
        ...state,
        username: action.name,
        email: action.email,
        password: action.password,
        error: null,
        loading: false,
      };
    case Types.AUTH_SINGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        error: null,
        loading: false,
      };
    case Types.AUTH_LOGOUT_SUCCESS:
      return { ...state, username: "", password: "", email: "", token: null };
    case Types.AUTH_FORGOT_PASSWORD_SUCCESS:
      return { ...state, error: null, loading: false };
    case Types.AUTH_FAILED:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export const Creators = {
  AuthStart: () => {
    return { type: Types.AUTH_START };
  },
  SignUpSuccess: (name, email, password) => {
    return {
      type: Types.AUTH_SINGUP_SUCCESS,
      name,
      email,
      password,
    };
  },

  SignUpAsync: (username, email, password, password_confirmation) => {
    return {
      type: Types.AUTH_SINGUP,
      username,
      email,
      password,
      password_confirmation,
    };
  },

  SignInSuccess: (token) => {
    return {
      type: Types.AUTH_SINGIN_SUCCESS,
      token,
    };
  },

  SignInAsync: (email, password) => {
    return {
      type: Types.AUTH_SINGIN,
      email,
      password,
    };
  },

  LogoutSuccess: () => {
    return { type: Types.AUTH_LOGOUT_SUCCESS };
  },

  LogoutAsync: () => {
    return { type: Types.AUTH_LOGOUT };
  },
  ForgotPasswordAsync: (email) => {
    return { type: Types.AUTH_FORGOT_PASSWORD, email };
  },
  ForgotPasswordSuccess:()=>{
    return{
      type: Types.AUTH_FORGOT_PASSWORD_SUCCESS
    }
  },
  ResetPasswordAsync: (password, passwordConfirm, token) => {
    return {
      type: Types.AUTH_UPDATE_PASSWORD,
      password,
      passwordConfirm,
      token,
    };
  },
  CheckAuthState: () => {
    return { type: Types.AUTH_CHECK_STATE };
  },
  AuthFail: (error) => {
    return { type: Types.AUTH_FAILED, error };
  },
};
export default reducer;
