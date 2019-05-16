import { RECEIVE_FILTERS } from './../../actions/filter_actions';
import { merge } from 'lodash';
import Moment from 'moment';

const d = new Date();
let lastDate = new Date(d);
lastDate.setMonth(lastDate.getMonth()+1);
lastDate.setDate(0);

const filterReducer = (state = {
    searchType: "groups",
    query: "",
    north: null,
    south: null,
    east: null,
    west: null,
    filterStartDate: Moment(d).format('L'),
    filterEndDate: Moment(lastDate).format('L'),
    admissions: false,
    athletic: false,
    business: false,
    community: false,
    educational: false,
    food: false,
    marital: false,
    travel: false
  }, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FILTERS:
      return merge({}, state, action.filters);
    default:
      return state;
  }
};

export default filterReducer;
