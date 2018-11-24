import axios from "axios";
import setAuthToken from '../utils/setAuthToken';
import {  GET_ERRORS, SET_CURRENT_USER } from './types';
import jwt_decode from 'jwt-decode';

//Register user
// export const registeruser = (userData, history) => dispatch => {
// axios
//   .post('/api/users/register', userData)
//   .then(res => history.push('/app'))
//   .catch(err =>
//     dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data
//     })
//   );
// };

// Login - Get User Token
export const loginUser = (userData) => dispatch => {
  axios
    .post("http://localhost:5000/api/auth/login", userData)
    .then(res => {
      // Save to local storage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user userData
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
  };

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
