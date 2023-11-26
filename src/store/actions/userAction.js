import axios from "axios";

const setUsers = (data) => ({
  type: "SET_USERS",
  payload: data,
});

const setUserDetail = (data) => ({
  type: "SET_USER",
  payload: data,
});

const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
};

export const getUsers = (params) => (dispatch) => {
  axios({
    headers,
    params,
    method: "get",
    url: "http://localhost:8000/api/users",
    responseType: "json",
  }).then(function (response) {
    dispatch(setUsers(response.data.data));
  });
};

export const getUser = (slug) => (dispatch) => {
  axios({
    method: "get",
    url: `https://www.techinasia.com/wp-json/techinasia/2.0/users/${slug}`,
    responseType: "json",
  }).then(function (response) {
    dispatch(setUserDetail(response.data.users[0]));
  });
};

export const doLogin = (data) => (dispatch) => {
  axios({
    data,
    method: "post",
    url: "http://localhost:8000/api/login",
    responseType: "json",
  }).then(function (response) {
    localStorage.setItem("token", response.data.token);
    window.location.replace("/");
  });
};

export const doSignUp = (data) => (dispatch) => {
  axios({
    data,
    method: "post",
    url: "http://localhost:8000/api/register",
    responseType: "json",
  }).then(function (response) {
    window.location.replace("/authentication/sign-in");
  });
};
