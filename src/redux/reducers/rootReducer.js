import { combineReducers } from 'redux';
import writerReducer from './writerReducer';

const rootReducer = combineReducers({
  writer: writerReducer
})

export default rootReducer;