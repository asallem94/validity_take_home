import { combineReducers } from 'redux';
import filterReducer from './filter_reducer';
import settingReducer from './setting_reducer';

const uiReducer = combineReducers( {
  filters: filterReducer,
  maritalForm: settingReducer
});

export default uiReducer;
