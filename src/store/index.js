import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import commentReducer from './reducers/commentReducer'

const store = createStore(combineReducers({
  userReducer,
  commentReducer,
}), applyMiddleware(thunk))

export default store