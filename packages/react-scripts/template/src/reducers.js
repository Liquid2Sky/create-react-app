import { combineReducers } from 'redux'
import { ADD_FOO } from './actions'

function foos (state = [], action) {
  switch (action.type) {
    case ADD_FOO:
      return [
        ...state,
        {
          text: action.string
        }
      ]
    default:
      return state
  }
}

const fooApp = combineReducers({
  foos
})

export default fooApp
