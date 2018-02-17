import {combineReducers} from 'redux'
import users from './userReducer.js'
import posts from './postReducer.js'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router

// Combine all reducers
const rootReducer = combineReducers({users, posts, router})

export default rootReducer