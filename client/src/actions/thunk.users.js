import axios from 'axios'
import {saveAuthTokens} from "../util/SessionHeaderUtil";

export function setSignedIn(signedIn) {
  return {type: 'SIGN_IN', signedIn}
}

export function signIn(signInCredentials) {
  return function (dispatch) {
    // const payload = {   email,   password }
    return axios
      .post('/auth/sign_in', signInCredentials)
      .then((response) => {
        dispatch(setSignedIn(response.data))
        saveAuthTokens(response.headers)
      })
  }
}

export function signUp(signUpCredentials) {
  return function (dispatch) {
    // const payload = {   email,   password,   password_confirmation }
    return axios
      .post('/auth', signUpCredentials)
      .then((response) => {
        dispatch(setSignedIn(response.data))
        saveAuthTokens(response.headers)
      })
  }
}

export function sendUsersToState(usersFromDatabase) {
  return {type: 'GET_USERS', usersFromDatabase}
}

export function getUserRoute() {
  return function (dispatch) {
    return axios
      .get('/api/users')
      .then((response) => {
        dispatch(sendUsersToState(response.data))
      })
  }
}

export function sendNewUserToState(newUserData) {
  return {type: 'CREATE_USER', newUserData}
}

export function sendNewUserToDatabase(newUserInfo) {
  return function (dispatch) {
    return axios
      .post('/api/users', newUserInfo)
      .then((response) => {
        dispatch(sendNewUserToState(response.data))
      })
  }
}

export function editedUserToState(editedUserData) {
  return {type: 'EDIT_USER', editedUserData}
}

export function editUserInDatabase(editedUserInfo) {
  return function (dispatch) {
    return axios
      .patch(`/api/users/${editedUserInfo.id}`, editedUserInfo)
      .then((response) => {
        dispatch(editedUserToState(editedUserInfo))
      })
  }
}

export function deleteUserFromState(userToDeleteId) {
  return {type: 'DELETE_USER', userToDeleteId}
}

export function deleteUserFromDatabase(userToDeleteFromDatabase) {
  return function (dispatch) {
    return axios
      .delete(`/api/users/${userToDeleteFromDatabase._id}`)
      .then((response) => {
        dispatch(deleteUserFromState(userToDeleteFromDatabase._id))
      })
  }
}