import { combineReducers } from 'redux';
import writerReducer from './writerReducer';
import calendarReducer from './calendarReducer';

const rootReducer = combineReducers({
  writer: writerReducer,
  calendar: calendarReducer
})

export default rootReducer;