import { RECEIVE_MARITAL_FORM } from './../../actions/setting_actions';
import { RECEIVE_CURRENT_USER } from './../../actions/session_actions';
import { merge } from 'lodash';

const settingReducer = (state = {
    maritalFilters: {
        heightRange: ["40", "95"],
        ageRange: ["18", "80"],
        myheight: 60,
        myDOB: "2000-01-01",
        always_prays: false,
        sometimes_prays: false,
        never_prays: false,
        myPrayer: "always_prays",
        myFoodRestrictions: "Everything",
        no_dietary_restriction: false,
        eat_halal: false,
        dhabihah: false,
        other_dietary_restrictions: false,
        mysmokes: "Nothing", no_smoking: false,
        only_hookah: false,
        smokes_anything: false,
        relationshipStatus: "Never Married",
        never_married: false,
        divorced: false,
        seperated: false,
        widowed: false
    },
    maritalInterests: {
        extremeSportsRange: [1, 5], 
        extremeSportsWeight: 0,
        extremeSports: 1,
        soccerRange: [1, 5], 
        soccerWeight: 0,
        soccer: 1,
        basketballRange: [1, 5], 
        basketballWeight: 0,
        basketball: 1,
        footballRange: [1, 5], 
        footballWeight: 0,
        football: 1,
        cricketRange: [1, 5], 
        cricketWeight: 0,
        cricket: 1,
        tennisRange: [1, 5], 
        tennisWeight: 0,
        tennis: 1,
        swimmingRange: [1, 5], 
        swimmingWeight: 0,
        swimming: 1,
        boardgamesRange: [1, 5], 
        boardgamesWeight: 0,
        boardgames: 1,
        fightingRange: [1, 5], 
        fightingWeight: 0,
        fighting: 1,
        yogaRange: [1, 5], 
        yogaWeight: 0,
        yoga: 1,
        showsRange: [1, 5], 
        showsWeight: 0,
        shows: 1,
        moviesRange: [1, 5], 
        moviesWeight: 0,
        movies: 1,
        eatingOutRange: [1, 5], 
        eatingOutWeight: 0,
        eatingOut: 1,
        innovationRange: [1, 5], 
        innovationWeight: 0,
        innovation: 1,
        artsCraftsRange: [1, 5], 
        artsCraftsWeight: 0,
        artsCrafts: 1,
        workRange: [1, 5], 
        workWeight: 0,
        work: 1,
        islamicStudiesRange: [1, 5], 
        islamicStudiesWeight: 0,
        islamicStudies: 1,
        educationRange: [1, 5], 
        educationWeight: 0,
        education: 1,
        politicsRange: [1, 5], 
        politicsWeight: 0,
        politics: 1,
        travelRange: [1, 5], 
        travelWeight: 0,
        travel: 0,
        cookingRange: [1, 5], 
        cookingWeight: 0,
        cooking: 0,
        hikingRange: [1, 5], 
        hikingWeight: 0,
        hiking: 0,
        workOutRange: [1, 5], 
        workOutWeight: 0,
        workOut: 0
    }
}, action) => {
    Object.freeze(state);
    let defaultState = state;
    switch(action.type){
        case RECEIVE_MARITAL_FORM:
            merge(defaultState.maritalFilters, action.maritalFilters);
            merge(defaultState.maritalInterests, action.maritalInterests);
            return defaultState;
        case RECEIVE_CURRENT_USER:
            return merge({}, state, action.maritalForms);
        case RECEIVE_MARITAL_FORM:
            return merge({}, state, action.maritalForms);
        default:
            return state;
    }
};

export default settingReducer;