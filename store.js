import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import appReducer from './reducers/appReducer'

const reducers = combineReducers({
    app: appReducer,
    form: formReducer
})

const store = createStore(reducers)

export default store